import React from 'react';
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalBody,
} from '@/components/ui/modal';
import {Box} from '@/components/ui/box';
import {VStack} from '@/components/ui/vstack';
import {Text} from '@/components/ui/text';
import {DoorUnLockIcon} from '@/components/icons/DoorUnlockIcon';
import {useTranslation} from 'react-i18next';

type DoorUnlockedModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DoorUnlockedModal = ({isOpen, onClose}: DoorUnlockedModalProps) => {
  const {t} = useTranslation();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xs">
      <ModalBackdrop />
      <ModalContent>
        <ModalBody>
          <VStack space="xs" className="items-center mb-3">
            <Box className="mb-3">
              <DoorUnLockIcon size="small" />
            </Box>
            <Text size="3xl" className="font-bold text-center">
              {t('doorUnlocked')}
            </Text>
            <Text size="md" className="text-typography-500 text-center">
              {t('pleaseEnter')}
            </Text>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DoorUnlockedModal;
