import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@/screens/HomeScreen.tsx';
import KioskStacks from './kiosk/KioskStacks.tsx';
import {ResidentStackParamList} from '@/navigation/resident/ResidentStacks';
import {KioskStackParamList} from '@/navigation/kiosk/KioskStacks';
import ResidentStacks from '@/navigation/resident/ResidentStacks';

// Define the type for the stack navigator
export type RootStackParamList = ResidentStackParamList &
  KioskStackParamList & {
    Home: undefined;
  };

export const Stack = createNativeStackNavigator<RootStackParamList>();

export function Navigation() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const navigationTheme = isDarkMode ? DarkTheme : DefaultTheme; 
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        {KioskStacks()}
        {ResidentStacks()}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
