import React, {useState, useCallback, useRef} from 'react';
import {Box} from '@/components/ui/box';
import {Button, ButtonText} from '@/components/ui/button';
import PageLayout from '@/components/layouts/PageLayout';
import {InputField, InputIcon, InputSlot} from '@/components/ui/input';
import {Input} from '@/components/ui/input';
import {FlatList} from 'react-native';
import SearchTenantCard, {
  Tenant,
} from '@/screens/kiosk/SearchTenantScreen/SearchTenantCard';
import {SearchIcon} from 'lucide-react-native';
import CallingTenantModal from '@/screens/kiosk/SearchTenantScreen/CallingTenantModal';
import MissedCallModal from '@/screens/kiosk/SearchTenantScreen/MissedCalledModal';
import {useTranslation} from 'react-i18next';

const placeholderData: Tenant[] = [
  {
    id: 1,
    name: 'Adam Smith',
    room: '101',
    phoneNumber: '1234567890',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 2,
    name: 'Bella Wong',
    room: '102',
    phoneNumber: '2345678901',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 3,
    name: 'Carlos Rodriguez',
    room: '103',
    phoneNumber: '3456789012',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 4,
    name: 'Diana Chen',
    room: '104',
    phoneNumber: '4567890123',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 5,
    name: 'Elena Petrov',
    room: '105',
    phoneNumber: '5678901234',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 6,
    name: 'Fatemah Khalid',
    room: '106',
    phoneNumber: '6789012345',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 7,
    name: 'Gabriel Okonkwo',
    room: '107',
    phoneNumber: '7890123456',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 8,
    name: 'Hiroshi Tanaka',
    room: '108',
    phoneNumber: '8901234567',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 9,
    name: 'Isabella Martinez',
    room: '109',
    phoneNumber: '9012345678',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 10,
    name: 'Jamal Washington',
    room: '110',
    phoneNumber: '0123456789',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 11,
    name: 'Kiran Patel',
    room: '111',
    phoneNumber: '1122334455',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 12,
    name: "Liam O'Connor",
    room: '112',
    phoneNumber: '2233445566',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 13,
    name: 'Maria Silva',
    room: '113',
    phoneNumber: '3344556677',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 14,
    name: 'Nguyen Van Minh',
    room: '114',
    phoneNumber: '4455667788',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 15,
    name: 'Olivia Johnson',
    room: '115',
    phoneNumber: '5566778899',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 16,
    name: 'Priya Sharma',
    room: '116',
    phoneNumber: '6677889900',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 17,
    name: 'Qasim Ahmed',
    room: '117',
    phoneNumber: '7788990011',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 18,
    name: 'Rosa Hernandez',
    room: '118',
    phoneNumber: '8899001122',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 19,
    name: 'Samuel Kim',
    room: '119',
    phoneNumber: '9900112233',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 20,
    name: 'Tanya Williams',
    room: '120',
    phoneNumber: '0011223344',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 21,
    name: 'Umar Khan',
    room: '121',
    phoneNumber: '1122334455',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 22,
    name: 'Victoria Zhang',
    room: '122',
    phoneNumber: '2233445566',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 23,
    name: 'William Jones',
    room: '123',
    phoneNumber: '3344556677',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 24,
    name: 'Xiu Mei Lin',
    room: '124',
    phoneNumber: '4455667788',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 25,
    name: 'Yasmin Al-Farsi',
    room: '125',
    phoneNumber: '5566778899',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 26,
    name: 'Zoe Thompson',
    room: '126',
    phoneNumber: '6677889900',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
];

const alphabetLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const SearchTenantScreen = () => {
  const [search, setSearch] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMissedCallModalOpen, setIsMissedCallModalOpen] = useState(false);
  const [selectedTenant, setSelectedTenant] = useState<Tenant | null>(null);

  const {t} = useTranslation();

  // Create a ref to store the timeout ID
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Filter tenants based on selected letter and search term
  const filteredTenants = placeholderData.filter(tenant => {
    // Filter by letter if one is selected
    if (selectedLetter && !tenant.name.startsWith(selectedLetter)) {
      return false;
    }

    // Filter by search text if entered
    if (search && !tenant.name.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }

    return true;
  });

  const handleCallTenant = useCallback(
    ({tenant, retry}: {tenant?: Tenant; retry?: boolean}) => {
      if (!retry && tenant) {
        setSelectedTenant(tenant);
      }
      setIsModalOpen(true);

      if (retry) {
        setIsMissedCallModalOpen(false);
      }

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // TODO implement missed call logic
      timeoutRef.current = setTimeout(() => {
        // this is to simulate a missed call
        setIsMissedCallModalOpen(true);
        setIsModalOpen(false);
        timeoutRef.current = null;
      }, 2000);
    },
    [],
  );

  // Optimized render function for FlatList
  const renderItem = useCallback(
    ({item}: {item: Tenant}) => (
      <SearchTenantCard
        name={item.name}
        room={item.room}
        image={item.image}
        onPress={() => handleCallTenant({tenant: item})}
      />
    ),
    [handleCallTenant],
  );

  // Optimized key extractor
  const keyExtractor = useCallback((item: Tenant) => item.id.toString(), []);

  return (
    <PageLayout disableScroll={true} safePaddingTop={false}>
      <Box className="pt-8 px-20 flex-1">
        <Input>
          <InputSlot className="pl-4">
            <InputIcon as={SearchIcon} className="h-6 w-6" />
          </InputSlot>
          <InputField
            placeholder={t('searchResident')}
            keyboardType="default"
            autoCapitalize="none"
            value={search}
            onChangeText={setSearch}
          />
        </Input>

        {/* Wrapped alphabet buttons */}
        <Box className="flex-row flex-wrap gap-x-2 gap-y-3 my-10">
          {alphabetLetters.map(letter => (
            <Button
              key={letter}
              size="md"
              variant={'solid'}
              action={selectedLetter === letter ? 'primary' : 'surface'}
              onPress={() =>
                setSelectedLetter(letter === selectedLetter ? '' : letter)
              }
              className="w-[44px] h-[44px] justify-center items-center p-0">
              <ButtonText size="lg" className="font-semibold">
                {letter}
              </ButtonText>
            </Button>
          ))}
        </Box>

        {/* Tenant list using standard FlatList */}
        <FlatList
          data={filteredTenants}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{gap: 8, paddingBottom: 20}}
        />
      </Box>
      {selectedTenant && (
        <CallingTenantModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            // Clear the timeout when modal is closed
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
              timeoutRef.current = null;
            }
          }}
          tenant={selectedTenant}
        />
      )}
      {isMissedCallModalOpen && selectedTenant && (
        <MissedCallModal
          isOpen={isMissedCallModalOpen}
          onClose={() => setIsMissedCallModalOpen(false)}
          onRetry={() => {
            handleCallTenant({retry: true});
          }}
          tenant={selectedTenant}
        />
      )}
    </PageLayout>
  );
};

export default SearchTenantScreen;
