import React from 'react';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '@/navigation/Navigation';
import {Button, ButtonIcon, ButtonText} from '@/components/ui/button';
import {Box} from '@/components/ui/box';
import {ArrowRight} from 'lucide-react-native';

import PageLayout from '@/components/layouts/PageLayout';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <PageLayout title="Dashboard">
      <Box className="flex flex-col gap-4 mt-4 px-4">
        <Button
          size="md"
          variant="outline"
          action="primary"
          onPress={() => navigation.navigate('KioskHome')}>
          <ButtonText>Go to Kiosk Home</ButtonText>
          <ButtonIcon as={ArrowRight} />
        </Button>

        <Button
          size="md"
          variant="outline"
          action="primary"
          onPress={() => navigation.navigate('ResidentHome')}>
          <ButtonText>Go to Resident Home</ButtonText>
          <ButtonIcon as={ArrowRight} />
        </Button>
      </Box>
    </PageLayout>
  );
};

export default HomeScreen;
