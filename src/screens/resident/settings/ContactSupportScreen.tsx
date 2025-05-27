import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import {Heading} from '@/components/ui/heading';
import {VStack} from '@/components/ui/vstack';
import {Text} from '@/components/ui/text';
import {Input, InputField} from '@/components/ui/input';
import {Textarea, TextareaInput} from '@/components/ui/textarea';
import {Button, ButtonText} from '@/components/ui/button';
import {useTranslation} from 'react-i18next';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
} from '@/components/ui/form-control';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ResidentStackParamList} from '@/navigation/resident/ResidentStacks';

type ResContactSupportScreenNavigationProp =
  NativeStackNavigationProp<ResidentStackParamList>;

const contactSupportSchema = z.object({
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
});

type ContactSupportFormData = z.infer<typeof contactSupportSchema>;

const ContactSupportScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation<ResContactSupportScreenNavigationProp>();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<ContactSupportFormData>({
    resolver: zodResolver(contactSupportSchema),
    defaultValues: {
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactSupportFormData) => {
    console.log('Form submitted:', data);
    // Add your submit logic here
    navigation.navigate('ResSupportHelpSettings', {contactSupport: true});
  };

  return (
    <PageLayout safePadding={false}>
      <VStack space="lg" className="h-full px-8 py-10 justify-between">
        <VStack space="lg">
          <Heading size="sm" className="text-typography-500">
            We&apos;re here to help. Let us know your concern and we&apos;ll get
            back to you shortly.
          </Heading>

          <FormControl isInvalid={!!errors.subject}>
            <Text className="text-typography-500 mb-2">{t('subject')}</Text>
            <Controller
              control={control}
              name="subject"
              render={({field: {onChange, value}}) => (
                <Input>
                  <InputField
                    className="p-4"
                    placeholder={t('subjectInputPlaceholder')}
                    value={value}
                    onChangeText={onChange}
                  />
                </Input>
              )}
            />
            {errors.subject && (
              <FormControlError>
                <FormControlErrorText>
                  {errors.subject.message}
                </FormControlErrorText>
              </FormControlError>
            )}
          </FormControl>

          <FormControl isInvalid={!!errors.message}>
            <Text className="text-typography-500 mb-2">{t('message')}</Text>
            <Controller
              control={control}
              name="message"
              render={({field: {onChange, value}}) => (
                <Textarea size="lg" className="w-full h-auto min-h-[200px] p-4">
                  <TextareaInput
                    className="align-top"
                    placeholder={t('messageInputPlaceholder')}
                    value={value}
                    onChangeText={onChange}
                  />
                </Textarea>
              )}
            />
            {errors.message && (
              <FormControlError>
                <FormControlErrorText>
                  {errors.message.message}
                </FormControlErrorText>
              </FormControlError>
            )}
          </FormControl>
        </VStack>

        <Button onPress={handleSubmit(onSubmit)}>
          <ButtonText>{t('submit')}</ButtonText>
        </Button>
      </VStack>
    </PageLayout>
  );
};

export default ContactSupportScreen;
