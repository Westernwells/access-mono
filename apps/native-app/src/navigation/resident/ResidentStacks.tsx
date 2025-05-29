import React from 'react';
import {Stack} from '@/navigation/Navigation';
import BottomNavbar from '@/navigation/BottomNavbar';
import LiveLobbyCamera from '@/screens/resident/LiveLobbyCamera';
import {CustomHeader} from '@/navigation/CustomHeader';
import SignInScreen from '@/screens/resident/auth/SignInScreen';
import SignUpScreen from '@/screens/resident/auth/SignUpScreen';
import WelcomeScreen from '@/screens/resident/onboarding/WelcomeScreen';
import OneTimeAccessCode from '@/screens/resident/OneTimeAccessCode';
import SelectApartmentScreen from '@/screens/resident/onboarding/SelectApartmentScreen';
import SelectUnitScreen from '@/screens/resident/onboarding/SelectUnitScreen';
import VerifyYourPhoneScreen from '@/screens/resident/onboarding/VerifyYourPhoneScreen';
import SettingsScreen from '@/screens/resident/settings/SettingsScreen';
import AccountSettingsScreen from '@/screens/resident/settings/AccountSettingsScreen';
import NotificationsAlertsScreen from '@/screens/resident/settings/NotificationsAlertsSettingsScreen';
import AccessSecurityScreen from '@/screens/resident/settings/AccessSecuritySettingsScreen';
import ChangePasswordScreen from '@/screens/resident/settings/ChangePasswordScreen';
import SupportHelpSettingsScreen from '@/screens/resident/settings/SupportHelpSettingsScreen';
import HelpCenterScreen from '@/screens/resident/settings/HelpCenterScreen';
import ReportIssueScreen from '@/screens/resident/settings/ReportIssueScreen';
import TermsAndConditionsScreen from '@/screens/resident/TermsAndConditionsScreen';
import PrivacyPolicyScreen from '@/screens/resident/PrivacyPolicyScreen';
import GenerateAccessCode from '@/screens/resident/GenerateAccessCodeScreen';
import AnnouncementScreen from '@/screens/resident/AnnouncementScreen';
import AnnouncementDetailScreen from '@/screens/resident/AnnouncementDetailScreen';
import Choose2FAMethodScreen from '@/screens/resident/settings/twoFactorAuth/Choose2FAMethodScreen';
import TwoFactorAuthEnterScreen from '@/screens/resident/settings/twoFactorAuth/TwoFactorAuthEnterScreen';
import TwoFactorAuthVerificationScreen from '@/screens/resident/settings/twoFactorAuth/TwoFactorAuthVerificationScreen';
import ContactSupportScreen from '@/screens/resident/settings/ContactSupportScreen';

import {useTranslation} from 'react-i18next';

export type ResidentStackParamList = {
  ResidentHome: undefined;
  ResSignIn: undefined;
  ResSignUp: undefined;
  ResOnboarding: undefined;
  ResSelectApartment: undefined;
  ResSelectUnit: {apartmentId: string};
  ResGroup: undefined;
  ResOneTimeAccessCode: undefined;
  ResGenerateAccessCode: undefined;
  ResLiveLobbyCamera: undefined;
  ResVerifyYourPhone: undefined;
  ResSettings: undefined;
  ResAccountSettings?: {method: string};
  ResChangePassword: undefined;
  ResNotificationsAlertsSettings: undefined;
  ResAccessSecuritySettings: undefined;
  ResSupportHelpSettings: {contactSupport: boolean};
  ResHelpCenter: undefined;
  ResReportIssue: undefined;
  ResTermsConditions: undefined;
  ResPrivacyPolicy: undefined;
  ResAnnouncementScreen: undefined;
  ResAnnouncementDetailScreen: {
    title: string;
    type: string;
    date: string;
    description: string;
  };
  ResChoose2FAMethod: undefined;
  ResTwoFactorAuthEnter: {method: 'sms' | 'email' | 'authenticatorApp'};
  ResTwoFactorAuthVerification: {
    phoneNumber?: string;
    email?: string;
    authenticatorApp?: boolean;
  };
  ResContactSupport: undefined;
};

export default function ResidentStacks() {
  const {t} = useTranslation();

  return (
    <React.Fragment>
      <Stack.Screen name="ResidentHome" component={BottomNavbar} />

      {/* Screens without bottom tabs */}
      <Stack.Screen
        name="ResOneTimeAccessCode"
        component={OneTimeAccessCode}
        options={{
          headerShown: true,
          title: t('oneTimeAccessCode'),
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="ResGenerateAccessCode"
        component={GenerateAccessCode}
        options={{
          headerShown: true,
          title: t('oneTimeAccessCode'),
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="ResLiveLobbyCamera"
        component={LiveLobbyCamera}
        options={{
          headerShown: true,
          title: t('liveLobbyCamera'),
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="ResSelectApartment"
        component={SelectApartmentScreen}
        options={{
          headerShown: true,
          title: t('selectApartment'),
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="ResSelectUnit"
        component={SelectUnitScreen}
        options={{
          headerShown: true,
          title: t('selectUnit'),
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="ResSignIn"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ResSignUp"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ResOnboarding"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ResVerifyYourPhone"
        component={VerifyYourPhoneScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ResSettings"
        component={SettingsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ResAccountSettings"
        component={AccountSettingsScreen}
        options={{
          headerShown: true,
          title: t('accountSettings'),
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="ResChangePassword"
        component={ChangePasswordScreen}
        options={{
          headerShown: true,
          title: t('changePassword'),
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="ResNotificationsAlertsSettings"
        component={NotificationsAlertsScreen}
        options={{
          headerShown: true,
          title: t('notificationsAlerts'),
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="ResAccessSecuritySettings"
        component={AccessSecurityScreen}
        options={{
          headerShown: true,
          title: t('accessSecurity'),
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="ResSupportHelpSettings"
        component={SupportHelpSettingsScreen}
        options={{
          headerShown: true,
          title: t('supportHelp'),
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="ResHelpCenter"
        component={HelpCenterScreen}
        options={{
          headerShown: true,
          title: t('helpCenter'),
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="ResReportIssue"
        component={ReportIssueScreen}
        options={{
          headerShown: true,
          title: t('reportIssue'),
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="ResTermsConditions"
        component={TermsAndConditionsScreen}
        options={{
          headerShown: true,
          title: t('termsConditions'),
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="ResPrivacyPolicy"
        component={PrivacyPolicyScreen}
        options={{
          headerShown: true,
          title: t('privacyPolicy'),
          header: props => <CustomHeader {...props} />,
        }}
      />

      <Stack.Screen
        name="ResAnnouncementScreen"
        component={AnnouncementScreen}
        options={{
          headerShown: true,
          title: t('Announcements'),
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="ResAnnouncementDetailScreen"
        component={AnnouncementDetailScreen}
        options={{
          headerShown: true,
          title: t('Announcement Details'),
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="ResChoose2FAMethod"
        component={Choose2FAMethodScreen}
        options={{
          headerShown: true,
          title: t('choose2faMethod'),
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="ResTwoFactorAuthEnter"
        component={TwoFactorAuthEnterScreen}
        options={{
          headerShown: true,
          // todo, pass the translated page title: Email, SMS or Authenticator App
          title: t(''),
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="ResTwoFactorAuthVerification"
        component={TwoFactorAuthVerificationScreen}
        options={{
          headerShown: true,
          // todo, pass the translated page title: Email, SMS or Authenticator App
          title: t(''),
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="ResContactSupport"
        component={ContactSupportScreen}
        options={{
          headerShown: true,
          title: t(''),
          header: props => <CustomHeader {...props} />,
        }}
      />
    </React.Fragment>
  );
}
