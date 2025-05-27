import React from 'react';
import {FlatList} from 'react-native';
import {Box} from '@/components/ui/box';
import {Button, ButtonText} from '@/components/ui/button';
import AccessCodeCard from './AccessCodeCard';
import PageLayout from '@/components/layouts/PageLayout';
import {useNavigation} from '@react-navigation/native';
import {ResidentStackParamList} from '@/navigation/resident/ResidentStacks';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
type HomeScreenNavigationProp = NativeStackNavigationProp<
  ResidentStackParamList,
  'ResidentHome'
>;

const OneTimeAccessCodeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // Sample data for access codes
  const accessCodes = [
    {
      id: '1',
      code: 'ABX9K1',
      label: 'Maid Visit',
      type: 'active' as const,
      expiry: 'Mar 30, 2025',
    },
    {
      id: '2',
      code: 'CDY7L3',
      label: 'Guest Visit',
      type: 'used' as const,
      expiry: 'Apr 15, 2025',
    },
  ];

  return (
    <PageLayout disableScroll={true}>
      <Box className="px-6 py-10 flex flex-col gap-6">
        <Button
          className="border border-dashed border-outline-500 rounded-lg py-4 mb-6 items-center"
          onPress={() => navigation.navigate('ResGenerateAccessCode')}>
          <ButtonText>Generate New Code</ButtonText>
        </Button>

        <FlatList
          data={accessCodes}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <AccessCodeCard
              code={item.code}
              label={item.label}
              type={item.type}
              expiry={item.expiry}
            />
          )}
          contentContainerStyle={{gap: 16}}
        />
      </Box>
    </PageLayout>
  );
};

export default OneTimeAccessCodeScreen;
