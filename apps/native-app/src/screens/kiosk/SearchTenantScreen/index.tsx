import React, {useState, useCallback, useRef, useEffect} from 'react';
import {Box} from '@/components/ui/box';
import {Button, ButtonText} from '@/components/ui/button';
import PageLayout from '@/components/layouts/PageLayout';
import {Input, InputField, InputIcon, InputSlot} from '@/components/ui/input';
import {FlatList, PermissionsAndroid, Platform, Alert} from 'react-native';
import SearchTenantCard, {
  Tenant,
} from '@/screens/kiosk/SearchTenantScreen/SearchTenantCard';
import {SearchIcon} from 'lucide-react-native';
import CallingTenantModal from '@/screens/kiosk/SearchTenantScreen/CallingTenantModal';
import MissedCallModal from '@/screens/kiosk/SearchTenantScreen/MissedCalledModal';
import {Voice, Call, TwilioErrors} from '@twilio/voice-react-native-sdk';

import DoorUnlockedModal from '@/screens/kiosk/DoorUnlockModal';
import {useTranslation} from 'react-i18next';

const placeholderData: Tenant[] = [
  {
    id: 1,
    name: 'Ahmed Wong',
    room: '102',
    phoneNumber: '4383555200',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 3,
    name: 'Yafus Rodriguez',
    room: '103',
    phoneNumber: '5144314664',
    image:
      'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/tenant-img-placeholder.png',
  },
  {
    id: 4,
    name: 'James Chen',
    room: '104',
    phoneNumber: '4503401404',
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
  const [_token, setToken] = useState('');
  const tokenRef = useRef<string>(''); // Add ref to store token
  const [isDoorUnlockedModalOpen, setIsDoorUnlockedModalOpen] =
    useState<boolean>(false);

  // Add these for Twilio functionality
  const [callStatus, setCallStatus] = useState('idle');
  const voiceRef = useRef<Voice | null>(null);
  const activeCallRef = useRef<Call | null>(null);

  // Door unlock function
  const unlockDoor = async () => {
    try {
      // TODO: Implement actual door unlock API call
      console.log('Unlocking door...');
      setIsDoorUnlockedModalOpen(true);

      console.log('Door unlocked successfully');
    } catch (error) {
      console.error('Failed to unlock door:', error);
      Alert.alert('Error', 'Failed to unlock door. Please try again.');
    }
  };

  // Replace your permission request code with this improved version:
  const requestMicrophonePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        // Check current permission status first
        const alreadyGranted = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        );

        if (alreadyGranted) {
          return true;
        }

        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'Microphone Permission',
            message: 'This app needs access to your microphone to make calls.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.error('Error requesting microphone permission:', err);
        return false;
      }
    } else {
      // iOS handles permissions differently
      return true;
    }
  };

  // Initialize Voice SDK
  useEffect(() => {
    const initVoice = async () => {
      try {
        // Request microphone permission
        const hasPermission = await requestMicrophonePermission();

        if (!hasPermission) {
          // If permission denied, open app settings
          Alert.alert(
            'Permission Denied',
            'Microphone permission is required for calling. Please enable it in app settings.',
            [
              {text: 'Cancel', style: 'cancel'},
              {
                text: 'Open Settings',
                onPress: () => {
                  // This will open the app settings on Android
                  if (Platform.OS === 'android') {
                    import('react-native').then(({Linking}) => {
                      Linking.openSettings();
                    });
                  }
                },
              },
            ],
          );
          return;
        }

        // Initialize Voice SDK
        const voice = new Voice();
        voiceRef.current = voice; // Store in ref for later use

        // Fetch token from your backend service
        try {
          console.log(
            'Attempting to fetch token from:',
            'https://api.useaccess.io/api/generate-token',
          );

          // The endpoint accepts both GET and POST, let's use GET with query params
          const identity = 'kiosk_device';
          const tokenUrl = `https://api.useaccess.io/api/generate-token?identity=${encodeURIComponent(identity)}`;

          console.log('Fetching token with URL:', tokenUrl);

          const response = await fetch(tokenUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          console.log('Response status:', response.status);
          console.log('Response ok:', response.ok);

          if (!response.ok) {
            const errorText = await response.text();
            console.error('Error response body:', errorText);
            throw new Error(
              `HTTP error! status: ${response.status}, body: ${errorText}`,
            );
          }

          const data = await response.json();
          console.log(
            'Token received:',
            data.token ? 'Token exists' : 'No token in response',
          );
          console.log('Full response data:', JSON.stringify(data, null, 2));

          // NOTE: If you see "InvalidApplicationSid" errors, make sure your backend
          // has a valid TwiML App SID (starting with "AP") configured in TWILIO_TWIML_APP_SID

          setToken(data.token); // Store the token for later use
          tokenRef.current = data.token; // Store the token in the ref

          if (voice && data.token) {
            console.log('Registering voice with token...');
            await voice.register(data.token);
            console.log('Voice registration successful');

            // Test if we can access voice methods
            console.log(
              'Voice SDK methods available:',
              Object.getOwnPropertyNames(Object.getPrototypeOf(voice)),
            );
            console.log(
              'Voice connect method exists:',
              typeof voice.connect === 'function',
            );
          } else {
            console.error('Missing voice instance or token');
            console.log('Voice instance exists:', !!voice);
            console.log('Token exists:', !!data.token);
          }
        } catch (fetchError) {
          console.error('Token fetch error details:', {
            message:
              fetchError instanceof Error
                ? fetchError.message
                : String(fetchError),
            name: fetchError instanceof Error ? fetchError.name : 'Unknown',
            stack: fetchError instanceof Error ? fetchError.stack : undefined,
          });

          // Try to provide more specific error information
          if (
            fetchError instanceof Error &&
            fetchError.message.includes('Network request failed')
          ) {
            console.error('Network connectivity issue. Possible causes:');
            console.error(
              '1. API endpoint is not accessible from the emulator',
            );
            console.error('2. HTTPS certificate issues');
            console.error('3. Network permissions not granted');
            console.error('4. API server is down');

            // For Android emulator, you might need to use your computer's IP instead of localhost
            console.log(
              'Current environment:',
              __DEV__ ? 'Development' : 'Production',
            );
            console.log('Platform:', Platform.OS);
          }

          throw fetchError;
        }
      } catch (error) {
        console.error('Failed to initialize Voice SDK:', error);
        Alert.alert('Error', 'Failed to initialize calling service');
      }
    };

    initVoice();
  }, []);

  // Filter tenants based on selected letter and search term
  // TODO use Fuze for fuzzy search
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

  // // Update handleCallTenant to use Twilio for real calling
  const handleCallTenant = useCallback(
    async ({tenant, retry}: {tenant?: Tenant; retry?: boolean}) => {
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

      // Make an actual call if Voice SDK is initialized
      if (tenant && voiceRef.current) {
        try {
          console.log('Voice SDK instance exists:', !!voiceRef.current);
          console.log('Token exists:', !!tokenRef.current);
          console.log('Token length:', tokenRef.current?.length);

          setCallStatus('calling');
          // Format the phone number with country code
          const formattedNumber = `+1${tenant.phoneNumber}`;

          console.log('Attempting to connect call...');
          console.log('To:', formattedNumber);
          console.log(
            'Token preview:',
            tokenRef.current?.substring(0, 50) + '...',
          );

          // Make the call
          const callParams = {
            To: formattedNumber,
          };

          console.log('Call parameters:', callParams);

          activeCallRef.current = await voiceRef.current.connect(
            tokenRef.current,
            {
              params: callParams,
            },
          );

          console.log('Connect call returned:', activeCallRef.current);
          console.log(
            'Call object properties:',
            Object.keys(activeCallRef.current || {}),
          );

          // Add event listeners to the call
          if (activeCallRef.current) {
            // Listen for call events
            activeCallRef.current.on(Call.Event.Connected, () => {
              console.log('Call connected!');
              setCallStatus('connected');
            });

            activeCallRef.current.on(
              Call.Event.Disconnected,
              (error: TwilioErrors.SignalingErrors.ConnectionDisconnected) => {
                console.log('Call disconnected', error);
                setCallStatus('disconnected');
                activeCallRef.current = null;
              },
            );

            activeCallRef.current.on(
              Call.Event.ConnectFailure,
              (error: TwilioErrors.GeneralErrors.ConnectionError) => {
                console.error('Call connect failure:', error);
                setCallStatus('error');
                activeCallRef.current = null;
              },
            );

            activeCallRef.current.on(Call.Event.Ringing, () => {
              console.log('Call ringing...');
              setCallStatus('ringing');
            });
          }

          console.log(
            `Successfully initiated call to ${tenant.name} at ${formattedNumber}`,
          );

          // Set up a timeout for missed calls
          timeoutRef.current = setTimeout(() => {
            if (callStatus !== 'connected') {
              setCallStatus('missed');
              setIsMissedCallModalOpen(true);
              setIsModalOpen(false);

              // Disconnect the call if it's still in progress
              if (activeCallRef.current) {
                activeCallRef.current.disconnect();
              }
            }
            timeoutRef.current = null;
          }, 30000); // 30 seconds timeout for missed call
        } catch (error) {
          console.error('Failed to make call:', error);
          console.error('Error type:', typeof error);
          console.error('Error details:', {
            message: error instanceof Error ? error.message : String(error),
            name: error instanceof Error ? error.name : 'Unknown',
            stack: error instanceof Error ? error.stack : undefined,
            fullError: JSON.stringify(error, null, 2),
          });
          Alert.alert(
            'Call Failed',
            `Could not connect the call: ${error instanceof Error ? error.message : 'Unknown error'}`,
          );
          setIsModalOpen(false);
          setCallStatus('error');
        }
      } else {
        // Fallback to simulated call for development
        timeoutRef.current = setTimeout(() => {
          setIsMissedCallModalOpen(true);
          setIsModalOpen(false);
          timeoutRef.current = null;
        }, 2000);
      }
    },
    [callStatus],
  );

  // // Add a function to hang up calls
  const hangUpCall = useCallback(() => {
    if (activeCallRef.current) {
      activeCallRef.current.disconnect();
      activeCallRef.current = null;
    }

    setIsModalOpen(false);

    // Clear any timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

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

        {/* <Text>Call Status: {callStatus}</Text> */}

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
            hangUpCall();
          }}
          tenant={selectedTenant}
        />
      )}
      <DoorUnlockedModal
        isOpen={isDoorUnlockedModalOpen}
        onClose={() => setIsDoorUnlockedModalOpen(false)}
      />
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
