import React from 'react';
import {Navigation} from '@/navigation/Navigation';
import {GluestackUIProvider} from '@/components/ui/gluestack-ui-provider';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useColorScheme, StatusBar} from 'react-native';
import {ApolloWrapper} from '@/contexts/ApolloWrapper';
import {UserProvider} from '@/contexts/UserContext';
import './global.css';

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <GluestackUIProvider mode={'system'}>
      <SafeAreaProvider>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={isDarkMode ? '#000' : '#fff'}
        />
        <UserProvider>
          <ApolloWrapper>
            <Navigation />
          </ApolloWrapper>
        </UserProvider>
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}

export default App;
