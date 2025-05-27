import React from 'react';
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalBody,
  ModalFooter,
} from '@/components/ui/modal';
import {PhoneCall} from 'lucide-react-native';
import {VStack} from '@/components/ui/vstack';
import {Text} from '@/components/ui/text';
import {Button, ButtonText} from '@/components/ui/button';
import {Icon} from '@/components/ui/icon';
import {useTranslation} from 'react-i18next';

type CallingTenantModalProps = {
  isOpen: boolean;
  onClose: () => void;
  tenant: {
    name: string;
    room: string;
  };
};

const CallingTenantModal = ({
  isOpen,
  onClose,
  tenant,
}: CallingTenantModalProps) => {
  const {t} = useTranslation();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xs">
      <ModalBackdrop />
      <ModalContent>
        <ModalBody>
          <VStack space="xs" className="items-center mb-3">
            <Icon as={PhoneCall} className="text-success-500 h-16 w-16 mb-6" />
            <Text size="3xl" className=" font-bold text-center">
              {t('calling')} {tenant.name}
            </Text>
            <Text size="md" className="text-typography-500 text-center">
              {t('unit')} {tenant.room}
            </Text>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="solid"
            action="secondary"
            onPress={onClose}
            className="w-full">
            <ButtonText>{t('cancel')}</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CallingTenantModal;
