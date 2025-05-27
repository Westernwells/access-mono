import {Tab} from '@/navigation/BottomNavbar';
import type {StyleProp, ViewStyle} from 'react-native';
import {cssInterop} from 'nativewind';

// Define prop types for the wrapper
interface NavbarWrapperProps {
  tabBarBackground: string;
  tabBarBorder: string;
  tabBarActiveColor: string;
  tabBarInactiveColor: string;
  children: React.ReactNode;
}

// Define prop types for the styled component
interface StyledNavbarProps {
  tabBarBackgroundClassName?: string;
  tabBarBorderClassName?: string;
  tabBarActiveClassName?: string;
  tabBarInactiveClassName?: string;
  children: React.ReactNode;
}

function NavbarWrapper({
  tabBarBackground,
  tabBarBorder,
  tabBarActiveColor,
  tabBarInactiveColor,
  children,
  ...rest
}: NavbarWrapperProps) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: tabBarActiveColor,
        tabBarInactiveTintColor: tabBarInactiveColor,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: tabBarBorder,
          backgroundColor: tabBarBackground,
          paddingBottom: 30,
          paddingTop: 5,
          height: 90,
        } as StyleProp<ViewStyle>,
        headerShown: false,
      }}
      {...rest}>
      {children}
    </Tab.Navigator>
  );
}

// Apply cssInterop to the wrapper
const StyledNavbar = cssInterop(NavbarWrapper, {
  tabBarBackgroundClassName: {
    target: false,
    nativeStyleToProp: {
      backgroundColor: 'tabBarBackground',
    },
  },
  tabBarBorderClassName: {
    target: false,
    nativeStyleToProp: {
      borderColor: 'tabBarBorder',
    },
  },
  tabBarActiveClassName: {
    target: false,
    nativeStyleToProp: {
      color: 'tabBarActiveColor',
    },
  },
  tabBarInactiveClassName: {
    target: false,
    nativeStyleToProp: {
      color: 'tabBarInactiveColor',
    },
  },
}) as React.FC<StyledNavbarProps>;

export default StyledNavbar;
