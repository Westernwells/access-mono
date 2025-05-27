import React, {useState, useCallback} from 'react';
import {Box} from '@/components/ui/box';
import {FlatList} from 'react-native';
import {Button, ButtonText} from '@/components/ui/button';
import {Input, InputSlot, InputIcon, InputField} from '@/components/ui/input';
import {RadioGroup} from '@/components/ui/radio';
import PageLayout from '@/components/layouts/PageLayout';
import {SearchIcon} from 'lucide-react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '@/navigation/Navigation';
import SearchApartmentCard from '@/screens/resident/onboarding/SearchApartmentCard';
import {useTranslation} from 'react-i18next';

type ResidentSelectApartmentScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ResSelectApartment'
>;

type Apartment = {
  id: number;
  name: string;
  address: string;
};

const apartments = [
  {id: 1, name: 'Greenwood Apartments', address: '123 Main St, New York, NY'},
  {id: 2, name: 'Lakeside Residences', address: '456 Lakeview Rd, Chicago, IL'},
  {id: 3, name: 'Sunset Villas', address: '789 Sunset Blvd, Los Angeles, CA'},
  {id: 4, name: 'Oakwood Heights', address: '321 Oak St, Austin, TX'},
  {id: 5, name: 'Maple Grove', address: '654 Maple Ave, Seattle, WA'},
  {id: 6, name: 'Riverbend Flats', address: '987 River Rd, Denver, CO'},
  {id: 7, name: 'Pinecrest Towers', address: '135 Pine St, San Francisco, CA'},
  {id: 8, name: 'Hilltop Manor', address: '246 Hilltop Dr, Portland, OR'},
  {
    id: 9,
    name: 'Brookstone Apartments',
    address: '369 Brookstone Ave, Miami, FL',
  },
  {id: 10, name: 'Cedar View', address: '753 Cedar St, Minneapolis, MN'},
  {id: 11, name: 'Willow Park', address: '159 Willow Ln, Nashville, TN'},
  {id: 12, name: 'Elmwood Residences', address: '852 Elm St, Atlanta, GA'},
  {id: 13, name: 'The Birchwood', address: '951 Birch Rd, Raleigh, NC'},
  {
    id: 14,
    name: 'Silverlake Lofts',
    address: '357 Silverlake Blvd, Phoenix, AZ',
  },
  {
    id: 15,
    name: 'Highland Estates',
    address: '468 Highland Rd, Salt Lake City, UT',
  },
  {id: 16, name: 'The Summit', address: '102 Summit Ave, Boise, ID'},
  {id: 17, name: 'Canyon Ridge', address: '204 Canyon Dr, Las Vegas, NV'},
  {id: 18, name: 'The Grove', address: '675 Grove St, Orlando, FL'},
  {id: 19, name: 'Aspen Meadows', address: '388 Aspen Way, Boulder, CO'},
  {
    id: 20,
    name: 'Stonebridge Flats',
    address: '590 Stonebridge Ln, Dallas, TX',
  },
];

const SelectApartmentScreen = () => {
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState('');
  const navigation =
    useNavigation<ResidentSelectApartmentScreenNavigationProp>();
  const {t} = useTranslation();

  const filteredApartments = apartments.filter(
    appartment =>
      appartment.name.toLowerCase().includes(search.toLowerCase()) ||
      appartment.address.toLowerCase().includes(search.toLowerCase()),
  );

  const renderItem = useCallback(
    ({item}: {item: Apartment}) => <SearchApartmentCard item={item} />,
    [],
  );

  return (
    <PageLayout safePadding={false} disableScroll={true}>
      <Box className="pt-8 px-8 flex-1">
        {/* Search apartments section */}
        <Box className="mb-4 flex-row items-center gap-2">
          <Input className="flex-1 mr-2">
            <InputSlot className="pl-4">
              <InputIcon as={SearchIcon} className="h-6 w-6" />
            </InputSlot>
            <InputField
              placeholder={t('searchPlaceholder')}
              keyboardType="default"
              autoCapitalize="none"
              value={search}
              onChangeText={setSearch}
            />
          </Input>
          {search.length > 0 && (
            <Button variant="link" onPress={() => setSearch('')}>
              <ButtonText>{t('cancel')}</ButtonText>
            </Button>
          )}
        </Box>

        {/* Apartments list section */}
        <Box>
          <RadioGroup value={selectedId} onChange={setSelectedId}>
            <FlatList
              data={filteredApartments}
              renderItem={renderItem}
              keyExtractor={item => String(item.id)}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                gap: 8,
                paddingBottom: 100,
                paddingTop: 20,
              }}
            />
          </RadioGroup>
        </Box>
      </Box>

      {/* Continue button section */}
      <Box className="px-8 mt-20 mb-10">
        <Button
          disabled={!selectedId ? true : false}
          onPress={() =>
            navigation.navigate('ResSelectUnit', {apartmentId: selectedId})
          }>
          <ButtonText>{t('continue')}</ButtonText>
        </Button>
      </Box>
    </PageLayout>
  );
};

export default SelectApartmentScreen;
