import {useEffect} from 'react';
import {Image} from '@/components/ui/image';
import {Box} from '@/components/ui/box';
import {Input, InputField} from '@/components/ui/input';
import PageLayout from '@/components/layouts/PageLayout';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlError,
  FormControlErrorText,
} from '@/components/ui/form-control';
import {Button, ButtonIcon, ButtonText} from '@/components/ui/button';
import TwoFactorAuthIcon from '@/components/icons/TwoFactorAuthIcon';
import GreenCheckIcon from '@/components/icons/GreenCheckIcon';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '@/navigation/Navigation';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ResidentStackParamList} from '@/navigation/resident/ResidentStacks';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {useTranslation} from 'react-i18next';
import {ChevronRight} from 'lucide-react-native';
import {useReusableToast} from '@/components/ReusableToast';

type AccountSettingsScreenRouteProp = RouteProp<
  RootStackParamList,
  'ResAccountSettings'
>;
type ResAccountSettingsScreenNavigationProp = NativeStackNavigationProp<
  ResidentStackParamList,
  'ResAccountSettings'
>;

export enum TwoFAMethod {
  SMS = 'sms',
  Email = 'email',
  AuthenticatorApp = 'authenticatorApp',
}

const schema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().min(10, 'Invalid phone number'),
});

type FormData = z.infer<typeof schema>;

const AccountSettingsScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
    },
  });

  const {t} = useTranslation();
  const navigation = useNavigation<ResAccountSettingsScreenNavigationProp>();
  const route = useRoute<AccountSettingsScreenRouteProp>();

  const {show} = useReusableToast();

  const method = route.params?.method ?? '';

  useEffect(() => {
    if (!method) return;
    const getToastTitle = (method: TwoFAMethod) => {
      switch (method) {
        case TwoFAMethod.SMS:
          return t('twoFactorSmsEnabled');
        case TwoFAMethod.Email:
          return t('twoFactorEmailEnabled');
        case TwoFAMethod.AuthenticatorApp:
          return t('twoFactorAuthAppEnabled');
        default:
          return '';
      }
    };
    show({
      title: getToastTitle(method as TwoFAMethod),
      icon: GreenCheckIcon,
      placement: 'top',
      duration: 3000,
    });

    // Clear method so toast doesn't retrigger on re-render
    navigation.setParams({method: undefined});
  }, [method, navigation, show, t]);

  const onSubmit = (data: FormData) => {
    console.log('Updated info:', data);
  };

  return (
    <PageLayout safePadding={false}>
      <Box className="flex flex-col justify-between h-full px-8">
        <Box className="flex flex-row justify-center items-center mt-10">
          <Image
            size="sm"
            source={{
              uri: 'https://wallpapers.com/images/high/funny-profile-picture-dhi3nz1hg6elgc3o.webp',
            }}
            alt="image"
            className="rounded-full mr-4"
          />
        </Box>

        <Box className="flex-1 py-6">
          <Box className="flex flex-col gap-5">
            <FormControl isInvalid={!!errors.fullName}>
              <FormControlLabel>
                <FormControlLabelText>{t('fullName')}</FormControlLabelText>
              </FormControlLabel>
              <Controller
                control={control}
                name="fullName"
                render={({field: {onChange, value}}) => (
                  <Input>
                    <InputField
                      placeholder={t('enterFullName')}
                      value={value}
                      onChangeText={onChange}
                    />
                  </Input>
                )}
              />
              {errors.fullName && (
                <FormControlError>
                  <FormControlErrorText>
                    {errors.fullName.message}
                  </FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>

            <FormControl isInvalid={!!errors.email}>
              <FormControlLabel>
                <FormControlLabelText>{t('email')}</FormControlLabelText>
              </FormControlLabel>
              <Controller
                control={control}
                name="email"
                render={({field: {onChange, value}}) => (
                  <Input>
                    <InputField
                      placeholder={t('enterEmail')}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      value={value}
                      onChangeText={onChange}
                    />
                  </Input>
                )}
              />
              {errors.email && (
                <FormControlError>
                  <FormControlErrorText>
                    {errors.email.message}
                  </FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>

            <FormControl isInvalid={!!errors.phoneNumber}>
              <FormControlLabel>
                <FormControlLabelText>{t('phoneNumber')}</FormControlLabelText>
              </FormControlLabel>
              <Controller
                control={control}
                name="phoneNumber"
                render={({field: {onChange, value}}) => (
                  <Input>
                    <InputField
                      placeholder={t('enterPhoneNumber')}
                      keyboardType="phone-pad"
                      value={value}
                      onChangeText={onChange}
                    />
                  </Input>
                )}
              />
              {errors.phoneNumber && (
                <FormControlError>
                  <FormControlErrorText>
                    {errors.phoneNumber.message}
                  </FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>
          </Box>

          <Button
            size="xl"
            action="surface"
            onPress={() => navigation.navigate('ResChoose2FAMethod')}
            className="justify-between w-full my-10">
            <Box className="flex flex-row justify-center gap-4">
              <ButtonIcon size="sm" as={TwoFactorAuthIcon} />
              <ButtonText>{t('twoFactorAuth')}</ButtonText>
            </Box>
            <ButtonIcon as={ChevronRight} />
          </Button>
        </Box>

        <Button className="mb-8 px-8" onPress={handleSubmit(onSubmit)}>
          <ButtonText>{t('save')}</ButtonText>
        </Button>
      </Box>
    </PageLayout>
  );
};

export default AccountSettingsScreen;
