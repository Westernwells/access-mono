import React from 'react';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button, ButtonIcon, ButtonText} from '@/components/ui/button';
import {Box} from '@/components/ui/box';
import {ArrowRight} from 'lucide-react-native';
import PageLayout from '@/components/layouts/PageLayout';
import {KioskStackParamList} from '@/navigation/kiosk/KioskStacks';
import {useTranslation} from 'react-i18next';

import LanguageSelector from '@/components/LanguageSelector';

type HomeScreenNavigationProp = NativeStackNavigationProp<KioskStackParamList>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const {t} = useTranslation();

  return (
    <PageLayout title={t('dashboard')}>
      <Box className="flex flex-col gap-4 mt-4 px-4">
        <Button
          size="md"
          variant="outline"
          action="primary"
          onPress={() => navigation.navigate('KioskOnboarding')}>
          <ButtonText>{t('goToOnboarding')}</ButtonText>
          <ButtonIcon as={ArrowRight} />
        </Button>

        <Button
          size="md"
          variant="outline"
          action="primary"
          onPress={() => navigation.navigate('KioskSignIn')}>
          <ButtonText>{t('goToSignIn')}</ButtonText>
          <ButtonIcon as={ArrowRight} />
        </Button>

        <Button
          size="md"
          variant="outline"
          action="primary"
          onPress={() => navigation.navigate('KioskLiveCall')}>
          <ButtonText>{t('goToLiveCall')}</ButtonText>
          <ButtonIcon as={ArrowRight} />
        </Button>

        <Button
          size="md"
          variant="outline"
          action="primary"
          onPress={() => navigation.navigate('KioskAdminSettings')}>
          <ButtonText>{t('goToAdminSettings')}</ButtonText>
          <ButtonIcon as={ArrowRight} />
        </Button>

        <Button
          size="md"
          variant="outline"
          action="primary"
          onPress={() => navigation.navigate('KioskAccessCode')}>
          <ButtonText>{t('goToAccessCode')}</ButtonText>
          <ButtonIcon as={ArrowRight} />
        </Button>

        <Button
          size="md"
          variant="outline"
          action="primary"
          onPress={() => navigation.navigate('KioskSearchResident')}>
          <ButtonText>{t('goToSearchResident')}</ButtonText>
          <ButtonIcon as={ArrowRight} />
        </Button>

        <Box className="px-20 mt-4">
          <LanguageSelector />
        </Box>
      </Box>
    </PageLayout>
  );
};

export default HomeScreen;
