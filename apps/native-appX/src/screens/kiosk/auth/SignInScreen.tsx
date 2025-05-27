import React from 'react';
import {Box} from '@/components/ui/box';
import {Button, ButtonText} from '@/components/ui/button';
import {Input, InputField, InputIcon, InputSlot} from '@/components/ui/input';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlError,
  FormControlErrorText,
} from '@/components/ui/form-control';
import {EyeIcon, EyeOffIcon} from 'lucide-react-native';
import {Text} from '@/components/ui/text';
import PageLayout from '@/components/layouts/PageLayout';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {AccessLogo} from '@/components/icons/AccessLogo';
import {Icon} from '@/components/ui/icon';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '@/navigation/Navigation';
import {useTranslation} from 'react-i18next';

type AuthScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'KioskSignIn'
>;

const SignInScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationProp>();
  const {t} = useTranslation();

  // Define the validation schema with Zod
  const signInSchema = z.object({
    email: z.string().email(t('invalidUsername')),
    password: z.string().min(1, t('passwordRequired')),
  });

  type SignInFormData = z.infer<typeof signInSchema>;

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // State for password visibility toggle
  const [showPassword, setShowPassword] = React.useState(false);

  const onSubmit = (data: SignInFormData) => {
    console.log('Form submitted:', data);
    navigation.navigate('KioskHome');
  };

  return (
    <PageLayout safePadding={false}>
      <Box className="items-center h-full">
        <Box className="flex justify-center px-6 w-3/6 h-full ">
          <Box className="items-center">
            <Icon
              as={AccessLogo}
              className="w-28 h-28 mb-10 text-transparent"
            />
            <Box className="mb-10">
              <Text
                size="5xl"
                className="text-typography-950 font-extrabold text-center">
                {t('adminLogin')}
              </Text>
            </Box>
          </Box>

          <Box className="flex flex-col gap-5">
            <FormControl isInvalid={!!errors.email}>
              <FormControlLabel>
                <FormControlLabelText>{t('username')}</FormControlLabelText>
              </FormControlLabel>
              <Controller
                control={control}
                name="email"
                render={({field: {onChange, value}}) => (
                  <Input>
                    <InputField
                      placeholder={t('enterUsername')}
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

            <FormControl isInvalid={!!errors.password}>
              <FormControlLabel>
                <FormControlLabelText>{t('password')}</FormControlLabelText>
              </FormControlLabel>
              <Controller
                control={control}
                name="password"
                render={({field: {onChange, value}}) => (
                  <Input>
                    <InputField
                      placeholder={t('enterPassword')}
                      secureTextEntry={!showPassword}
                      value={value}
                      onChangeText={onChange}
                    />
                    <InputSlot
                      className="pr-3"
                      onPress={() => setShowPassword(!showPassword)}>
                      <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                    </InputSlot>
                  </Input>
                )}
              />
              {errors.password && (
                <FormControlError>
                  <FormControlErrorText>
                    {errors.password.message}
                  </FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>
          </Box>

          <Text className="text-right mt-2 text-typography-900">
            {t('forgotPassword')}
          </Text>

          <Button className="mt-8" onPress={handleSubmit(onSubmit)}>
            <ButtonText>{t('login')}</ButtonText>
          </Button>

          <Button
            className="mt-8"
            action="secondary"
            onPress={() => navigation.navigate('KioskHome')}>
            <ButtonText>{t('back')}</ButtonText>
          </Button>
        </Box>
      </Box>
    </PageLayout>
  );
};

export default SignInScreen;
