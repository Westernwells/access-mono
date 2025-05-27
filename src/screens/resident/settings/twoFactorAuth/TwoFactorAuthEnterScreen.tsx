import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import {Input, InputField} from '@/components/ui/input';
import {Text} from '@/components/ui/text';
import {Card} from '@/components/ui/card';
import {VStack} from '@/components/ui/vstack';
import {Button, ButtonText} from '@/components/ui/button';
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
} from '@/components/ui/form-control';
import {useTranslation} from 'react-i18next';
import {RouteProp, useRoute, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@/navigation/Navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useForm, Controller} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import QRCode from 'react-native-qrcode-svg';

type TwoFactorAuthEnterScreenRouteProp = RouteProp<
  RootStackParamList,
  'ResTwoFactorAuthEnter'
>;
type TwoFactorAuthEnterScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

type FormData = {
  contact?: string;
};

const TwoFactorAuthEnterScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation<TwoFactorAuthEnterScreenNavigationProp>();
  const route = useRoute<TwoFactorAuthEnterScreenRouteProp>();
  const {method} = route.params;

  const title = {
    email: t('enterEmail'),
    sms: t('enterPhoneNumber'),
    authenticatorApp: t('setupAuthenticatorApp'),
  }[method];

  const subtitle = {
    email: t('email2faSubtitle'),
    sms: t('sms2faSubtitle'),
    authenticatorApp: t('authenticatorApp2faSubtitle'),
  }[method];

  const inputPlaceholder = {
    email: t('enterEmail'),
    sms: t('enterPhoneNumber'),
    authenticatorApp: '',
  }[method];

  const buttonText = {
    email: t('sendVerificationCode'),
    sms: t('sendVerificationCode'),
    authenticatorApp: 'next',
  }[method];

  const schema = z.object({
    contact:
      method === 'email'
        ? z.string().email(t('invalidEmail'))
        : method === 'sms'
        ? z
            .string()
            .transform(val => val.replace(/\D/g, '')) // remove non-digits first
            .refine(val => /^\+?[1-9]\d{7,14}$/.test(val), {
              message: t('invalidPhone'),
            })
        : z.string().optional(),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      contact: '',
    },
  });

  const onSubmit = (data: FormData) => {
    let sanitizedContact = data.contact;
    if (method === 'sms' && data.contact) {
      sanitizedContact = data.contact.replace(/\D/g, ''); // keep digits only
    }

    const phoneNumber = method === 'sms' ? sanitizedContact : undefined;
    const email = method === 'email' ? data.contact : undefined;
    const authenticatorApp = method === 'authenticatorApp' ? true : undefined;

    navigation.navigate('ResTwoFactorAuthVerification', {
      phoneNumber,
      email,
      authenticatorApp,
    });
  };

  function handleInputChange(
    text: string,
    onChange: (val: string) => void,
    method: string,
  ) {
    if (method !== 'sms') {
      onChange(text);
      return;
    }

    const digitsOnly = text.replace(/\D/g, '').slice(0, 10);

    let formatted = digitsOnly;
    if (digitsOnly.length > 3 && digitsOnly.length <= 6) {
      formatted = `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3)}`;
    } else if (digitsOnly.length > 6) {
      formatted = `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(
        3,
        6,
      )}-${digitsOnly.slice(6)}`;
    }

    onChange(formatted);
  }

  return (
    <PageLayout safePadding={false}>
      <VStack className="p-8 my-8 flex-1 justify-between">
        <VStack>
          <Text
            size="xl"
            className="font-medium text-typography-950 mt-10 mb-2">
            {title}
          </Text>
          <Text size="md" className="mb-6 text-typography-500">
            {subtitle}
          </Text>

          {(method === 'email' || method === 'sms') && (
            <FormControl isInvalid={!!errors.contact}>
              <Controller
                control={control}
                name="contact"
                render={({field: {onChange, value}}) => (
                  <Input className="bg-background-600">
                    <InputField
                      placeholder={inputPlaceholder}
                      keyboardType={
                        method === 'email' ? 'email-address' : 'phone-pad'
                      }
                      autoCapitalize="none"
                      value={value}
                      onChangeText={text =>
                        handleInputChange(text, onChange, method)
                      }
                    />
                  </Input>
                )}
              />
              {errors.contact && (
                <FormControlError>
                  <FormControlErrorText>
                    {errors.contact.message}
                  </FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>
          )}

          {method === 'authenticatorApp' && (
            <Card className="items-center p-8 mt-6">
              <VStack>
                <QRCode value="https://www.useaccess.io/" size={300} />
                <Text
                  size="lg"
                  className="text-typography-950 font-medium mt-4">
                  SDF2-LK49-34F1
                </Text>
              </VStack>
            </Card>
          )}
        </VStack>

        <Button onPress={handleSubmit(onSubmit)}>
          <ButtonText>{buttonText}</ButtonText>
        </Button>
      </VStack>
    </PageLayout>
  );
};

export default TwoFactorAuthEnterScreen;
