import React from 'react';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button, ButtonIcon, ButtonText} from '@/components/ui/button';
import {Box} from '@/components/ui/box';
import {ArrowRight, ChevronRight} from 'lucide-react-native';
import PageLayout from '@/components/layouts/PageLayout';
import {AccessCodeIcon} from '@/components/icons/AccessCodeIcon';
import {DoorUnlockColorIcon} from '@/components/icons/DoorUnlockColorIcon';
import {LobbyCameraIcon} from '@/components/icons/LobbyCameraIcon';
import {ResidentStackParamList} from '@/navigation/resident/ResidentStacks';
import {useTranslation} from 'react-i18next';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  ResidentStackParamList,
  'ResidentHome'
>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const {t} = useTranslation();

  return (
    <PageLayout title={t('dashboard')}>
      <Box className="flex flex-col gap-4 mt-4 px-4">
        <Button
          size="xl"
          variant="solid"
          action="surface"
          onPress={() => navigation.navigate('ResLiveLobbyCamera')}
          className="justify-between min-h-[64px]">
          <Box className="flex flex-row items-center gap-3">
            <ButtonIcon
              as={LobbyCameraIcon}
              className="text-transparent h-6 w-6"
            />
            <ButtonText>{t('liveLobbyCamera')}</ButtonText>
          </Box>
          <ButtonIcon as={ChevronRight} />
        </Button>

        <Button
          size="xl"
          variant="solid"
          action="surface"
          // onPress={() => navigation.navigate('Details', {itemId: 1})}
          onPress={() => navigation.navigate('ResOneTimeAccessCode')}
          className="justify-between min-h-[64px]">
          <Box className="flex flex-row items-center gap-3">
            <ButtonIcon
              as={AccessCodeIcon}
              className="text-transparent h-6 w-6"
            />
            <ButtonText>{t('oneTimeAccessCode')}</ButtonText>
          </Box>
          <ButtonIcon as={ChevronRight} />
        </Button>

        <Button
          size="xl"
          variant="solid"
          action="surface"
          onPress={() => console.log('Remote Door Unlock')}
          className="justify-between min-h-[64px]">
          <Box className="flex flex-row items-center gap-3">
            <ButtonIcon
              as={DoorUnlockColorIcon}
              // as={() => <DoorUnLockIcon size="mini" />}
              className="text-transparent h-6 w-6"
            />
            <ButtonText>{t('remoteDoorUnlock')}</ButtonText>
          </Box>
          <ButtonIcon as={ChevronRight} />
        </Button>

        <Button
          size="md"
          variant="outline"
          action="primary"
          onPress={() => navigation.navigate('ResOnboarding')}>
          <ButtonText>{t('navigateToOnboarding')}</ButtonText>
          <ButtonIcon as={ArrowRight} />
        </Button>

        <Button
          size="md"
          variant="outline"
          action="primary"
          onPress={() => navigation.navigate('ResSignUp')}>
          <ButtonText>{t('goToSignUp')}</ButtonText>
          <ButtonIcon as={ArrowRight} />
        </Button>

        <Button
          size="md"
          variant="outline"
          action="primary"
          onPress={() => navigation.navigate('ResSignIn')}>
          <ButtonText>{t('goToSignIn')}</ButtonText>
          <ButtonIcon as={ArrowRight} />
        </Button>

        <Button
          size="md"
          variant="outline"
          action="primary"
          onPress={() => navigation.navigate('ResVerifyYourPhone')}>
          <ButtonText>{t('verifyPhoneScreen')}</ButtonText>
          <ButtonIcon as={ArrowRight} />
        </Button>
      </Box>
    </PageLayout>
  );
};

export default HomeScreen;
