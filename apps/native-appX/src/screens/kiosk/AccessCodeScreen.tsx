import React, {useState} from 'react';
import {Text} from '@/components/ui/text';
import {Heading} from '@/components/ui/heading';
import PageLayout from '@/components/layouts/PageLayout';
import DoorUnlockedModal from '@/screens/kiosk/DoorUnlockModal';
import {Button, ButtonText} from '@/components/ui/button';
import {VStack} from '@/components/ui/vstack';
import {Keyboard} from 'react-native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {KioskStackParamList} from '@/navigation/kiosk/KioskStacks';
import {useTranslation} from 'react-i18next';
import CodeInput from '@/components/CodeInput';

type NavigationProp = NativeStackNavigationProp<
  KioskStackParamList,
  'KioskAccessCode'
>;

const AccessCodeScreen = () => {
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const {t} = useTranslation();
  const navigation = useNavigation<NavigationProp>();

  const handleComplete = (completedCode: string) => {
    if (completedCode !== '123456') {
      setError(t('invalidAccessCode'));
      return;
    }
    setError(null);
    Keyboard.dismiss();
    setShowModal(true);
    setTimeout(() => setShowModal(false), 5000);
  };

  return (
    <PageLayout safePaddingTop={false}>
      <DoorUnlockedModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
      <VStack className="flex-1 justify-center items-center">
        <Heading size="5xl" className="mb-8">
          {t('enterAccessCode')}
        </Heading>

        <CodeInput onComplete={handleComplete} />

        <VStack space="md" className="w-3/6 px-4 mt-6">
          {error && <Text className="text-error-500 mb-4">{error}</Text>}
          <Button
            variant="solid"
            action="primary"
            onPress={() => {
              console.log('Submitted code');
            }}
            isDisabled={true}>
            <ButtonText>{t('submit')}</ButtonText>
          </Button>

          <Button
            variant="solid"
            action="surface"
            onPress={() => navigation.navigate('KioskHome')}>
            <ButtonText>{t('back')}</ButtonText>
          </Button>
        </VStack>

        <Text className="text-typography-500 mt-6 text-center">
          {t('accessCodeNote')}
        </Text>
      </VStack>
    </PageLayout>
  );
};

export default AccessCodeScreen;
