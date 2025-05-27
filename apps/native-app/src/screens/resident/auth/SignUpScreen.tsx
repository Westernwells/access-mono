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
import {Pressable, Text} from 'react-native';
import PageLayout from '@/components/layouts/PageLayout';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import Separator from '@/components/ui/separator';
import {AppleIcon} from '@/components/icons/AppleIcon';
import {GoogleIcon} from '@/components/icons/GoogleIcon';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ResidentStackParamList} from '@/navigation/resident/ResidentStacks';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useQuery} from '@apollo/client';
import {REQUEST_SMS_VERIF_CODE} from '@/lib/graphql/queries/requestSmsVerifCode';

type SignUpScreenNavigationProp = NativeStackNavigationProp<
  ResidentStackParamList,
  'ResSignUp'
>;

type SignUpFormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

const SignUpScreen = () => {
  const navigation = useNavigation<SignUpScreenNavigationProp>();
  const {t} = useTranslation();

  const {data, loading, error} = useQuery(REQUEST_SMS_VERIF_CODE, {
    variables: {
      requestSmsVerifCodeData: {
        phone: '+14508227035', // TODO make sure to include country code / store it in the db
      },
    },
  });

  console.log(data);

  // Define the validation schema with Zod
  const signUpSchema = z
    .object({
      fullName: z.string().min(1, t('fullNameRequired')),
      email: z.string().email(t('invalidEmail')),
      phoneNumber: z.string().min(10, t('invalidPhone')),
      password: z
        .string()
        .min(8, t('passwordRequirements'))
        .regex(/[A-Z]/, t('passwordUppercase'))
        .regex(/[0-9]/, t('passwordNumber')),
      confirmPassword: z.string(),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: t('passwordsDontMatch'),
      path: ['confirmPassword'],
    });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
  });

  // State just for password visibility toggles
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const onSubmit = (data: SignUpFormData) => {
    console.log('Form submitted:', data);
    // Handle sign up logic here
  };

  return (
    <PageLayout title={t('signUp')}>
      <Box className="flex-1 px-6 py-6">
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
                    placeholder={t('createPassword')}
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

          <FormControl isInvalid={!!errors.confirmPassword}>
            <FormControlLabel>
              <FormControlLabelText>
                {t('confirmPassword')}
              </FormControlLabelText>
            </FormControlLabel>
            <Controller
              control={control}
              name="confirmPassword"
              render={({field: {onChange, value}}) => (
                <Input>
                  <InputField
                    placeholder={t('reEnterPassword')}
                    secureTextEntry={!showConfirmPassword}
                    value={value}
                    onChangeText={onChange}
                  />
                  <InputSlot
                    className="pr-3"
                    onPress={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }>
                    <InputIcon
                      as={showConfirmPassword ? EyeIcon : EyeOffIcon}
                    />
                  </InputSlot>
                </Input>
              )}
            />
            {errors.confirmPassword && (
              <FormControlError>
                <FormControlErrorText>
                  {errors.confirmPassword.message}
                </FormControlErrorText>
              </FormControlError>
            )}
          </FormControl>
        </Box>
        <Button className="mt-8" onPress={handleSubmit(onSubmit)}>
          <ButtonText>{t('createAccount')}</ButtonText>
        </Button>
        <Separator />

        <Button className="mb-3" variant="outline" action="contrast">
          <ButtonIcon
            as={AppleIcon}
            className="fill-typography-900 h-6 w-6 mb-1"
          />
          <ButtonText>{t('signUpWithApple')}</ButtonText>
        </Button>
        <Button className="mb-10" variant="outline" action="contrast">
          <ButtonIcon as={GoogleIcon} className="text-transparent h-6 w-6" />
          <ButtonText className="text-typography-900">
            {t('signUpWithGoogle')}
          </ButtonText>
        </Button>
        <Box className="flex-row justify-center mb-4">
          <Text className="text-typography-500">
            {t('alreadyHaveAccount')}{' '}
          </Text>
          <Pressable onPress={() => navigation.navigate('ResSignIn')}>
            <Text className="text-typography-900 font-medium">
              {t('login')}
            </Text>
          </Pressable>
        </Box>
      </Box>
    </PageLayout>
  );
};

export default SignUpScreen;
