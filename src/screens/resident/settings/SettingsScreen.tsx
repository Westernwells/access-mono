import React, {useState} from 'react';
import {Box} from '@/components/ui/box';
import {Text} from '@/components/ui/text';
import {Image} from '@/components/ui/image';
import {Button, ButtonText, ButtonIcon} from '@/components/ui/button';
import PageLayout from '@/components/layouts/PageLayout';
import NotificationsAlertIcon from '@/components/icons/NotificationsAlertIcon';
import SupportHelpIcon from '@/components/icons/SupportHelpIcon';
import TermsConditionsIcon from '@/components/icons/TermsConditionsIcon';
import PrivacyPolicyIcon from '@/components/icons/PrivacyPolicyIcon';
import {ChevronRight} from 'lucide-react-native';
import {Card} from '@/components/ui/card';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ResidentStackParamList} from '@/navigation/resident/ResidentStacks';
import LanguageSelector from '@/components/LanguageSelector';

import {useTranslation} from 'react-i18next';

type ResSettingsScreenNavigationProp =
  NativeStackNavigationProp<ResidentStackParamList>;

const SettingsScreen = () => {
  const [signedIn, setSignedIn] = useState(true);
  const navigation = useNavigation<ResSettingsScreenNavigationProp>();

  const {t} = useTranslation();

  const handleSignOut = () => {
    setSignedIn(true);
    navigation.navigate('ResOnboarding');
  };

  return (
    <PageLayout title={t('settings')}>
      <Box className="flex flex-col justify-between h-full px-8">
        <Box>
          {/* USER SETTINGS AREA */}
          <Button
            size="xl"
            action="transparent"
            onPress={() => navigation.navigate('ResAccountSettings')}
            className="justify-between w-full px-0">
            <Box className="flex flex-row justify-center items-center">
              <Image
                size="sm"
                source={{
                  uri: 'https://wallpapers.com/images/high/funny-profile-picture-dhi3nz1hg6elgc3o.webp',
                }}
                alt="image"
                className="rounded-full mr-4"
              />
              <Box className="flex flex-col">
                <ButtonText className="text-base">user name</ButtonText>
                <ButtonText className="text-xs text-typography-500">
                  user@gmail.com
                </ButtonText>
              </Box>
            </Box>
            <ButtonIcon as={ChevronRight} />
          </Button>

          {/* OTHER SETTINGS CARD */}
          <Card className="px-0 mt-5">
            <Button
              size="xl"
              variant="solid"
              action="surface"
              onPress={() =>
                navigation.navigate('ResNotificationsAlertsSettings')
              }
              className="justify-between w-full bg-transparent">
              <Box className="flex flex-row justify-center gap-4">
                <ButtonIcon size="sm" as={NotificationsAlertIcon} />
                <ButtonText>{t('notificationsAlerts')}</ButtonText>
              </Box>
              <ButtonIcon as={ChevronRight} />
            </Button>

            <Button
              size="xl"
              variant="solid"
              action="surface"
              onPress={() => navigation.navigate('ResSupportHelpSettings')}
              className="justify-between w-full bg-transparent">
              <Box className="flex flex-row justify-center gap-4">
                <ButtonIcon size="sm" as={SupportHelpIcon} />
                <ButtonText>{t('supportHelp')}</ButtonText>
              </Box>
              <ButtonIcon as={ChevronRight} />
            </Button>

            <Button
              size="xl"
              variant="solid"
              action="surface"
              onPress={() => navigation.navigate('ResTermsConditions')}
              className="justify-between w-full bg-transparent">
              <Box className="flex flex-row justify-center gap-4">
                <ButtonIcon size="sm" as={TermsConditionsIcon} />
                <ButtonText>{t('termsConditions')}</ButtonText>
              </Box>
              <ButtonIcon as={ChevronRight} />
            </Button>

            <Button
              size="xl"
              variant="solid"
              action="surface"
              onPress={() => navigation.navigate('ResPrivacyPolicy')}
              className="justify-between w-full bg-transparent">
              <Box className="flex flex-row justify-center gap-4">
                <ButtonIcon size="sm" as={PrivacyPolicyIcon} />
                <ButtonText>{t('privacyPolicy')}</ButtonText>
              </Box>
              <ButtonIcon as={ChevronRight} />
            </Button>

            <Button
              size="xl"
              variant="solid"
              action="surface"
              onPress={() => navigation.navigate('ResAccessSecuritySettings')}
              className="justify-between w-full bg-transparent">
              <Box className="flex flex-row justify-center gap-4">
                <ButtonIcon size="sm" as={PrivacyPolicyIcon} />
                <ButtonText>{t('accessSecurity')}</ButtonText>
              </Box>
              <ButtonIcon as={ChevronRight} />
            </Button>
          </Card>

          {/* LANGUAGE SELECT */}
          <Box className="px-2 mt-4">
            <LanguageSelector />
          </Box>
        </Box>

        {signedIn ? (
          <Button
            action="secondary"
            onPress={() => setSignedIn(false)}
            className="mb-24">
            <ButtonText>{t('signOut')}</ButtonText>
          </Button>
        ) : (
          <Card className="mb-24">
            <Text className="mt-2 mb-6 text-center font-medium text-typography-950">
              {t('signOutConfirmation')}
            </Text>
            <Box className="flex flex-row justify-between">
              <Button
                action="secondary"
                onPress={() => setSignedIn(true)}
                className="min-w-[150px]">
                <ButtonText>{t('cancel')}</ButtonText>
              </Button>
              <Button
                action="secondary"
                onPress={() => handleSignOut()}
                className="min-w-[150px]">
                <ButtonText>{t('ok')}</ButtonText>
              </Button>
            </Box>
          </Card>
        )}
      </Box>
    </PageLayout>
  );
};

export default SettingsScreen;
