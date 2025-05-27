import {useState} from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import {VStack} from '@/components/ui/vstack';
import {HStack} from '@/components/ui/hstack';
import {Heading} from '@/components/ui/heading';
import {Text} from '@/components/ui/text';
import {Button, ButtonText} from '@/components/ui/button';
import {RouteProp, useRoute, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@/navigation/Navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import {TwoFAMethod} from '../AccountSettingsScreen';
import CodeInput from '@/components/CodeInput';

type RouteProps = RouteProp<RootStackParamList, 'ResTwoFactorAuthVerification'>;
type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const TwoFactorAuthVerificationScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<RouteProps>();
  const {email, phoneNumber, authenticatorApp} = route.params;
  const [error, setError] = useState(false);

  const handleCodeComplete = (input: string) => {
    if (input !== '123456') {
      setError(true);
      return;
    }

    setError(false);

    let method = '';
    if (authenticatorApp) method = TwoFAMethod.AuthenticatorApp;
    else if (phoneNumber) method = TwoFAMethod.SMS;
    else if (email) method = TwoFAMethod.Email;

    navigation.navigate('ResAccountSettings', {method});
  };

  const handleResendCode = () => {
    console.log('resending code');
  };

  return (
    <PageLayout safePadding={false}>
      <VStack className="px-8 my-10">
        <VStack>
          <Heading size="xl" className="font-medium text-typography-950 mb-4">
            {t('enter2faVerificationCode')}
          </Heading>

          {(email || phoneNumber) && (
            <Text size="md" className="text-typography-500">
              {t('sixDigitsVerficationCodeSent')}{' '}
              {email ? (
                <HStack>
                  <Text size="md">{t('yourEmail')} </Text>
                  <Text size="md" className="text-typography-950">
                    {email}
                  </Text>
                </HStack>
              ) : (
                <HStack>
                  <Text size="md">{t('yourPhone')} </Text>
                  <Text size="md" className="text-typography-950">
                    {phoneNumber}
                  </Text>
                </HStack>
              )}
            </Text>
          )}

          {authenticatorApp && (
            <Text size="md" className="text-typography-500">
              {t('authAppSixDigitsCodeSent')}
            </Text>
          )}

          <CodeInput onComplete={handleCodeComplete} error={error} />

          {error && (
            <Text className="text-error-500 mb-4">{t('invalidCode')}</Text>
          )}

          {(email || phoneNumber) && (
            <Button size="sm" action="transparent" onPress={handleResendCode}>
              <ButtonText>{t('resendCode')}</ButtonText>
            </Button>
          )}
        </VStack>

        <VStack space="4xl" className="mt-20">
          <Button onPress={() => {}}>
            <ButtonText>{t('verifyCode')}</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </PageLayout>
  );
};

export default TwoFactorAuthVerificationScreen;
