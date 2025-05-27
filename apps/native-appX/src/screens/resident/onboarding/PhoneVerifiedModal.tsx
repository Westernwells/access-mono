import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalBody,
} from '@/components/ui/modal';
import {Box} from '@/components/ui/box';
import {VStack} from '@/components/ui/vstack';
import {Text} from '@/components/ui/text';
import {Icon} from '@/components/ui/icon';
import {Button, ButtonText} from '@/components/ui/button';
import PhoneVerifiedIcon from '@/components/icons/PhoneVerifiedIcon';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {ResidentStackParamList} from '@/navigation/resident/ResidentStacks';
import {useTranslation} from 'react-i18next';

type NavigationProp = NativeStackNavigationProp<
  ResidentStackParamList,
  'ResVerifyYourPhone'
>;

type PhoneVerifiedModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PhoneVerifiedModal = ({isOpen, onClose}: PhoneVerifiedModalProps) => {
  const navigation = useNavigation<NavigationProp>();
  const {t} = useTranslation();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <ModalBackdrop />
      <ModalContent>
        <ModalBody>
          <VStack space="xs" className="items-center mb-1">
            <Box className="mb-3">
              <Icon as={PhoneVerifiedIcon} />
            </Box>
            <Text size="xl" className="font-bold text-center mb-4">
              {t('phoneVerified')}
            </Text>
            <Text size="md" className="text-typography-500 text-center mb-4">
              {t('phoneVerifiedMessage')}
            </Text>

            <Button
              className="w-full"
              onPress={() => navigation.navigate('ResidentHome')}>
              <ButtonText>Continue</ButtonText>
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PhoneVerifiedModal;
