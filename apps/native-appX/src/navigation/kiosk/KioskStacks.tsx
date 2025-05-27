import React from 'react';
import {Stack} from '../Navigation';
import WelcomeScreen from '@/screens/kiosk/onboarding/WelcomeScreen';
import SignInScreen from '@/screens/kiosk/auth/SignInScreen';
import AdminSettingsScreen from '@/screens/kiosk/AdminSettingsScreen';
import SystemConfigurationScreen from '@/screens/kiosk/SystemConfigurationScreen';
import AccessControlSettingsScreen from '@/screens/kiosk/AccessControlSettingsScreen';
import DeviceConfigScreen from '@/screens/kiosk/DeviceConfigScreen';
import LiveCallScreen from '@/screens/kiosk/LiveCallScreen';
import AccessCodeScreen from '@/screens/kiosk/AccessCodeScreen';
import SearchTenantScreen from '@/screens/kiosk/SearchTenantScreen';
import {CustomHeader} from '@/navigation/CustomHeader.tsx';
import HomeScreen from '@/screens/kiosk/HomeScreen';
import {useTranslation} from 'react-i18next';

export type KioskStackParamList = {
  KioskHome: undefined;
  KioskSignIn: undefined;
  KioskOnboarding: undefined;
  KioskAdminSettings: undefined;
  KioskLiveCall: undefined;
  KioskAccessCode: undefined;
  KioskSearchResident: undefined;
  KioskSystemConfiguration: undefined;
  KioskAccessControlSettings: undefined;
  KioskDeviceConfig: undefined;
};

export default function KioskStacks() {
  const {t} = useTranslation();
  return (
    <React.Fragment>
      <Stack.Screen
        name="KioskHome"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="KioskOnboarding"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="KioskSignIn"
        component={SignInScreen}
        options={{
          headerShown: true,
          title: 'Administrator Login',
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="KioskAdminSettings"
        component={AdminSettingsScreen}
        options={{
          headerShown: true,
          title: 'Administrator Settings',
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="KioskSystemConfiguration"
        component={SystemConfigurationScreen}
        options={{
          headerShown: true,
          title: 'System Configuration',
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="KioskAccessControlSettings"
        component={AccessControlSettingsScreen}
        options={{
          headerShown: true,
          title: 'Access Control Settings',
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="KioskDeviceConfig"
        component={DeviceConfigScreen}
        options={{
          headerShown: true,
          title: 'Device Configuration',
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="KioskLiveCall"
        component={LiveCallScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="KioskAccessCode"
        component={AccessCodeScreen}
        options={{
          headerShown: true,
          title: 'Access Code',
          header: props => <CustomHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="KioskSearchResident"
        component={SearchTenantScreen}
        options={{
          headerShown: true,
          title: t('searchResidentHeader'),
          header: props => <CustomHeader {...props} />,
        }}
      />
    </React.Fragment>
  );
}
