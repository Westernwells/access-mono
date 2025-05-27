import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Settings, Bell, Phone} from 'lucide-react-native';

import DashboardScreen from '@/screens/resident/DashboardScreen';
import SettingsScreen from '@/screens/resident/settings/SettingsScreen';

import NotificationsScreen from '@/screens/resident/NotificationsScreen/index';

import StyledNavbar from '@/navigation/BottomNavbar/StyledNavbar';
import CallsLogsScreen from '@/screens/resident/CallLogsScreen/index';

import {useTranslation} from 'react-i18next';
// Define the type for your tab navigator
export type TabParamList = {
  Home: undefined;
  'Calls Logs': undefined;
  Notifications: undefined;
  Settings: undefined;
};

export const Tab = createBottomTabNavigator<TabParamList>();

export default function BottomNavbar() {
  const {t} = useTranslation();

  return (
    <StyledNavbar
      tabBarBackgroundClassName="bg-background-0"
      tabBarBorderClassName="border-background-600"
      tabBarActiveClassName={`text-typography-950`}
      tabBarInactiveClassName={`text-secondary-500`}>
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          tabBarLabel: t('home'),
          tabBarIcon: ({color, size}) => <Home color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Calls Logs"
        component={CallsLogsScreen}
        options={{
          tabBarLabel: t('callLogs'),
          tabBarIcon: ({color, size}) => <Phone color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarLabel: t('notifications'),
          tabBarIcon: ({color, size}) => <Bell color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: t('settings'),
          tabBarIcon: ({color, size}) => <Settings color={color} size={size} />,
        }}
      />
    </StyledNavbar>
  );
}
