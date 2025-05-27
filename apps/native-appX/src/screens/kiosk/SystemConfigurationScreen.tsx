import React from 'react';
import {Box} from '@/components/ui/box';
import {Heading} from '@/components/ui/heading';
import PageLayout from '@/components/layouts/PageLayout';
import SettingsOptionCard from '@/components/kiosk/SettingsOptionCard';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {KioskStackParamList} from '@/navigation/kiosk/KioskStacks';
import LanguageSelector from '@/components/LanguageSelector';
import {useTranslation} from 'react-i18next';

type KioskSystemConfigurationNavigationProp = NativeStackNavigationProp<
  KioskStackParamList,
  'KioskSystemConfiguration'
>;

const SystemConfigurationScreen = () => {
  const navigation = useNavigation<KioskSystemConfigurationNavigationProp>();
  const {t} = useTranslation();

  const onPress = () => {
    console.log('Onpress activated');
  };
  const onValueChange = () => {
    console.log('onValueChange activated');
  };

  return (
    <PageLayout safePadding={false}>
      <Box className="px-20 pt-10">
        <Heading size="lg" className="text-typography-300 mb-2">
          {t('generalSettings')}
        </Heading>
        {/* <SettingsOptionCard
          title={'System Language'}
          subtitle={'Setting value'}
          type="button"
          onPress={onPress}
          onValueChange={onValueChange}
        /> */}
        <SettingsOptionCard
          title={t('accessControlSettings')}
          subtitle={''}
          type="button"
          onPress={() => navigation.navigate('KioskAccessControlSettings')}
          onValueChange={onValueChange}
        />
        <SettingsOptionCard
          subtitle={t('enableKioskMode')}
          type="switch"
          onPress={onPress}
          onValueChange={onValueChange}
          value={true}
        />
        <SettingsOptionCard
          subtitle={t('enableAppLock')}
          type="switch"
          onPress={onPress}
          onValueChange={onValueChange}
          value={true}
        />

        <Heading size="lg" className="text-typography-300 mt-10 mb-2">
          {t('intercomSettings')}
        </Heading>
        <SettingsOptionCard
          title={t('defaultCallDuration')}
          subtitle={t('settingValue')}
          type="slider"
          onPress={onPress}
          onValueChange={onValueChange}
          value={50}
        />
        <SettingsOptionCard
          title={t('speakerVolume')}
          subtitle={t('settingValue')}
          type="slider"
          onPress={onPress}
          onValueChange={onValueChange}
          value={50}
        />
        <SettingsOptionCard
          title={t('videoCallQuality')}
          subtitle={t('settingValue')}
          type="slider"
          onPress={onPress}
          onValueChange={onValueChange}
          value={50}
        />
      </Box>

      <Box className="px-20 mt-4">
        <LanguageSelector />
      </Box>
    </PageLayout>
  );
};

export default SystemConfigurationScreen;
