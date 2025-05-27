import React from 'react';
import {Box} from '@/components/ui/box';
import {Text} from '@/components/ui/text';
import PageLayout from '@/components/layouts/PageLayout';
import {Card} from '@/components/ui/card';
import {ChevronRightIcon} from '@/components/ui/icon';
import {useNavigation} from '@react-navigation/native';
import {Button, ButtonIcon} from '@/components/ui/button';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {KioskStackParamList} from '@/navigation/kiosk/KioskStacks';
import {useTranslation} from 'react-i18next';

type NavigationProp = NativeStackNavigationProp<
  KioskStackParamList,
  'KioskAdminSettings'
>;

const AdminSettingsScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const {t} = useTranslation();

  const adminSettings: {
    title: string;
    subtitle: string;
    ctaLink: keyof KioskStackParamList;
  }[] = [
    {
      title: t('systemConfigTitle'),
      subtitle: t('systemConfigSubtitle'),
      ctaLink: 'KioskSystemConfiguration',
    },
    {
      title: t('accessControlTitle'),
      subtitle: t('accessControlSubtitle'),
      ctaLink: 'KioskAccessControlSettings',
    },
    {
      title: t('deviceSettingsTitle'),
      subtitle: t('deviceSettingsSubtitle'),
      ctaLink: 'KioskDeviceConfig',
    },
  ];

  return (
    <PageLayout safePadding={false}>
      <Box className="flex flex-col gap-4 items-center w-full h-full px-20 pt-10">
        {adminSettings.map((setting, index) => {
          return (
            <Card
              key={index}
              className="flex-row justify-between items-center p-4 w-full">
              <Box>
                <Text size="xl" className="font-semibold">
                  {setting.title}
                </Text>
                <Text size="sm" className="text-typography-500">
                  {setting.subtitle}
                </Text>
              </Box>
              <Button
                action="secondary"
                onPress={() => navigation.navigate(setting.ctaLink)}
                variant="link">
                <ButtonIcon size="xl" as={ChevronRightIcon} />
              </Button>
            </Card>
          );
        })}
      </Box>
    </PageLayout>
  );
};

export default AdminSettingsScreen;
