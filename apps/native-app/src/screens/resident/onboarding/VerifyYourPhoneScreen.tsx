import {useState} from 'react';
import {Box} from '@/components/ui/box';
import {Text} from '@/components/ui/text';
import {Heading} from '@/components/ui/heading';
import PageLayout from '@/components/layouts/PageLayout';
import PhoneVerifiedModal from '@/screens/resident/onboarding/PhoneVerifiedModal';
import {Button, ButtonText} from '@/components/ui/button';
import {VStack} from '@/components/ui/vstack';
import {Keyboard} from 'react-native';
import {useTranslation} from 'react-i18next';
import CodeInput from '@/components/CodeInput';

const VerifyYourPhoneScreen = () => {
  const {t} = useTranslation();
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleComplete = (completedCode: string) => {
    if (completedCode !== '123456') {
      setError(t('invalidCode'));
      return;
    }
    setError(null);
    console.log('Submitted code:', completedCode);
    Keyboard.dismiss();
    setShowModal(true);
    setTimeout(() => setShowModal(false), 5000);
  };

  return (
    <PageLayout safePaddingTop={false}>
      <PhoneVerifiedModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
      <VStack className="flex-1 justify-center items-center px-8">
        <Heading size="xl" className="mb-4 w-full text-left">
          {t('verifyYourPhone')}
        </Heading>
        <Box className="w-full mb-8">
          <Text className="text-typography-500 text-left w-5/6">
            {t('enterVerificationCode')}
          </Text>
        </Box>

        <CodeInput onComplete={handleComplete} />

        {error && <Text className="text-error-500 mb-4">{error}</Text>}

        <Button
          className="w-full"
          variant="solid"
          action="primary"
          onPress={() => {
            // we keep button or not?
          }}
          isDisabled>
          <ButtonText>{t('continue')}</ButtonText>
        </Button>
      </VStack>
    </PageLayout>
  );
};

export default VerifyYourPhoneScreen;
