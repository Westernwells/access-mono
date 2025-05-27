import React from 'react';
import {Box} from '@/components/ui/box';
import {Heading} from '@/components/ui/heading';
import PageLayout from '@/components/layouts/PageLayout';
import SettingsOptionCard from '@/components/kiosk/SettingsOptionCard';
import {useTranslation} from 'react-i18next';

const AccessControlSettingsScreen = () => {
  const {t} = useTranslation();

  const onPress = () => {
    console.log('Onpress activated');
  };
  const onValueChange = () => {
    console.log('onValueChange activated');
  };
  return (
    <PageLayout safePaddingTop={false}>
      <Box className="px-20 pt-10">
        <Heading size="lg" className="text-typography-300 mb-2">
          {t('accessControlSettings')}
        </Heading>
        <SettingsOptionCard
          subtitle={t('doorUnlockPermissions')}
          type="switch"
          onPress={onPress}
          onValueChange={onValueChange}
          value={true}
        />
        <SettingsOptionCard
          subtitle={t('enableDoorUnlockNotifications')}
          type="switch"
          onPress={onPress}
          onValueChange={onValueChange}
          value={true}
        />
        <SettingsOptionCard
          subtitle={t('requirePinForDoorUnlock')}
          type="switch"
          onPress={onPress}
          onValueChange={onValueChange}
          value={true}
        />
      </Box>
    </PageLayout>
  );
};

export default AccessControlSettingsScreen;
