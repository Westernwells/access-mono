import React, {useState, useCallback} from 'react';
import {Box} from '@/components/ui/box';
import {FlatList} from 'react-native';
import {Button, ButtonText} from '@/components/ui/button';
import {Input, InputSlot, InputIcon, InputField} from '@/components/ui/input';
import {RadioGroup} from '@/components/ui/radio';
import PageLayout from '@/components/layouts/PageLayout';
import {RouteProp, useRoute, useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '@/navigation/Navigation';
import UnitCard from '@/screens/resident/onboarding/UnitCard';
import {SearchIcon} from 'lucide-react-native';
import {useTranslation} from 'react-i18next';

type ResidentSelectUnitScreenRouteProp = RouteProp<
  RootStackParamList,
  'ResSelectUnit'
>;
type ResidentSelectUnitScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ResSelectUnit'
>;

type Unit = {
  id: number;
  unitNumber: string;
};

const allUnits = [
  {id: 1, unitNumber: '001'},
  {id: 2, unitNumber: '002'},
  {id: 3, unitNumber: '003'},
  {id: 4, unitNumber: '004'},
  {id: 5, unitNumber: '005'},
  {id: 6, unitNumber: '006'},
  {id: 7, unitNumber: '007'},
  {id: 8, unitNumber: '008'},
  {id: 9, unitNumber: '009'},
  {id: 10, unitNumber: '010'},
  {id: 11, unitNumber: '011'},
  {id: 12, unitNumber: '012'},
  {id: 13, unitNumber: '013'},
  {id: 14, unitNumber: '014'},
  {id: 15, unitNumber: '015'},
  {id: 16, unitNumber: '016'},
  {id: 17, unitNumber: '017'},
  {id: 18, unitNumber: '018'},
  {id: 19, unitNumber: '019'},
  {id: 20, unitNumber: '020'},
];

const unitsToTestApartmentIdParam = [
  {id: 1, unitNumber: '001'},
  {id: 2, unitNumber: '002'},
  {id: 3, unitNumber: '003'},
  {id: 4, unitNumber: '004'},
  {id: 5, unitNumber: '005'},
  {id: 6, unitNumber: '006'},
  {id: 7, unitNumber: '007'},
  {id: 8, unitNumber: '008'},
  {id: 9, unitNumber: '009'},
  {id: 10, unitNumber: '010'},
];

const SelectUnitScreen = () => {
  const [selectedId, setSelectedId] = useState('');
  const [search, setSearch] = useState('');
  const navigation = useNavigation<ResidentSelectUnitScreenNavigationProp>();
  const route = useRoute<ResidentSelectUnitScreenRouteProp>();
  const {apartmentId} = route.params;
  const {t} = useTranslation();

  // Placeholder logic. Will fetch the backend using the appartment id to get the list of units.
  const units = apartmentId === '1' ? unitsToTestApartmentIdParam : allUnits;

  const filteredApartments = units.filter(units =>
    units.unitNumber.toLowerCase().includes(search.toLowerCase()),
  );

  const renderItem = useCallback(
    ({item}: {item: Unit}) => <UnitCard item={item} />,
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
        {/* Units list section */}
        <RadioGroup value={selectedId} onChange={setSelectedId}>
          <Box>
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
          </Box>
        </RadioGroup>
      </Box>

      {/* Continue button section */}
      <Box className="px-8 mt-20 mb-10">
        <Button
          disabled={!selectedId ? true : false}
          onPress={() => navigation.navigate('ResSignUp')}>
          <ButtonText>{t('continue')}</ButtonText>
        </Button>
      </Box>
    </PageLayout>
  );
};

export default SelectUnitScreen;
