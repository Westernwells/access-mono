import React from 'react';
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalBody,
  ModalFooter,
} from '@/components/ui/modal';
import {VStack} from '@/components/ui/vstack';
import {Text} from '@/components/ui/text';
import {Button, ButtonText} from '@/components/ui/button';
import {Icon} from '@/components/ui/icon';
import {PhoneMissed} from 'lucide-react-native';
import {useTranslation} from 'react-i18next';

type MissedCallModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onRetry: () => void;
  tenant?: {
    name: string;
    room: string;
  };
};

const MissedCallModal = ({
  isOpen,
  onClose,
  onRetry,
  tenant,
}: MissedCallModalProps) => {
  const {t} = useTranslation();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xs">
      <ModalBackdrop />
      <ModalContent>
        <ModalBody>
          <VStack space="xs" className="items-center mb-3">
            <Icon as={PhoneMissed} className="text-error-500 h-16 w-16 mb-6" />
            <Text size="3xl" className="font-bold text-center">
              {t('missedCall')}
            </Text>
            <Text size="md" className="text-typography-500 text-center">
              {tenant?.name} {t('missedCallMessage')}
            </Text>
          </VStack>
        </ModalBody>
        <ModalFooter className="flex-col gap-3">
          <Button
            variant="solid"
            action="primary"
            onPress={onRetry}
            className="w-full">
            <ButtonText>{t('retryCall')}</ButtonText>
          </Button>
          <Button
            variant="solid"
            action="secondary"
            onPress={onClose}
            className="w-full">
            <ButtonText>{t('returnToMainPage')}</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MissedCallModal;
