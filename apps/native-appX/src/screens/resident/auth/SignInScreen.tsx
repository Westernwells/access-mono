import React from 'react';
import {Box} from '@/components/ui/box';
import {Button, ButtonIcon, ButtonText} from '@/components/ui/button';
import {Input, InputField, InputIcon, InputSlot} from '@/components/ui/input';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlError,
  FormControlErrorText,
} from '@/components/ui/form-control';
import {EyeIcon, EyeOffIcon} from 'lucide-react-native';
import {Text, Pressable} from 'react-native';
import PageLayout from '@/components/layouts/PageLayout';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import Separator from '@/components/ui/separator';
import {AppleIcon} from '@/components/icons/AppleIcon';
import {GoogleIcon} from '@/components/icons/GoogleIcon';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ResidentStackParamList} from '@/navigation/resident/ResidentStacks';
import {useTranslation} from 'react-i18next';

type SignInFormData = {
  email: string;
  password: string;
};

type AuthScreenNavigationProp = NativeStackNavigationProp<
  ResidentStackParamList,
  'ResSignIn'
>;

const SignInScreen = () => {
  const navigation = useNavigation<AuthScreenNavigationProp>();
  const {t} = useTranslation();

  // Define the validation schema with Zod
  const signInSchema = z.object({
    email: z.string().email(t('invalidEmail')),
    password: z.string().min(1, t('passwordRequired')),
  });

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
    navigation.navigate('ResidentHome');
  };

  return (
    <PageLayout title={t('login')}>
      <Box className="flex-1 px-6 py-6">
        <Box className="flex flex-col gap-5">
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

        <Separator text={t('or')} />

        <Button className="mb-3" variant="outline" action="contrast">
          <ButtonIcon
            as={AppleIcon}
            className="fill-typography-900 h-6 w-6 mb-1"
          />
          <ButtonText>{t('loginWithApple')}</ButtonText>
        </Button>
        <Button className="mb-10" variant="outline" action="contrast">
          <ButtonIcon as={GoogleIcon} className="text-transparent h-6 w-6" />
          <ButtonText className="text-typography-900">
            {t('loginWithGoogle')}
          </ButtonText>
        </Button>
        <Box className="flex-row justify-center mb-4 mt-auto">
          <Text className="text-typography-500">{t('dontHaveAccount')} </Text>
          <Pressable onPress={() => navigation.navigate('ResSignUp')}>
            <Text className="text-typography-900 font-medium">
              {t('signUp')}
            </Text>
          </Pressable>
        </Box>
      </Box>
    </PageLayout>
  );
};

export default SignInScreen;
