import React from 'react';
import {FlatList, View} from 'react-native';
import {ChevronRight, Building2} from 'lucide-react-native';
import {Button, ButtonIcon, ButtonText} from '@/components/ui/button';
import {Box} from '@/components/ui/box';
import {HStack} from '@/components/ui/hstack';
import {Text} from '@/components/ui/text';
import {VStack} from '@/components/ui/vstack';
import {Icon} from '@/components/ui/icon';
import {Image} from '@/components/ui/image';
import PageLayout from '@/components/layouts/PageLayout';
import {AccessCodeIcon} from '@/components/icons/AccessCodeIcon';
import {DoorUnlockColorIcon} from '@/components/icons/DoorUnlockColorIcon';
import {LobbyCameraIcon} from '@/components/icons/LobbyCameraIcon';
import AnnouncementCard from '../AnnouncementScreen/AnnouncementCard';
import {AnnouncementTypes, Announcement} from '@/types/AnnouncementTypes';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ResidentStackParamList} from '@/navigation/resident/ResidentStacks';
import {useReusableToast} from '@/components/ReusableToast';
import {CheckIcon} from '@/components/ui/icon';
type HomeScreenNavigationProp = NativeStackNavigationProp<
  ResidentStackParamList,
  'ResidentHome'
>;

const announcements: Announcement[] = [
  {
    id: '1',
    type: AnnouncementTypes.MAINTENANCE,
    title: 'Water Supply Notice: Maintenance',
    date: 'Mar 25, 2025',
    description:
      'There will be a temporary disruption in water supply due to maintenance work.',
  },
  {
    id: '2',
    type: AnnouncementTypes.INSTALLATION,
    title: 'New Security System Installed',
    date: 'Mar 30, 2025',
    description: 'A new security system has been installed in the building.',
  },
  {
    id: '3',
    type: AnnouncementTypes.FIRE_DRILL,
    title: 'Fire Drill Scheduled',
    date: 'Apr 5, 2025',
    description: 'A fire drill is scheduled for all residents.',
  },
  {
    id: '4',
    type: AnnouncementTypes.LOCK,
    title: 'Lock Replacement Notice',
    date: 'Apr 10, 2025',
    description: 'Locks will be replaced in all units.',
  },
  {
    id: '5',
    type: AnnouncementTypes.KEY,
    title: 'Key Distribution Update',
    date: 'Apr 15, 2025',
    description: 'Keys will be distributed to all residents.',
  },
  {
    id: '6',
    type: AnnouncementTypes.CCTV,
    title: 'CCTV Maintenance',
    date: 'Apr 20, 2025',
    description: 'CCTV cameras will undergo maintenance.',
  },
];

const DashboardScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const {show} = useReusableToast();

  const handleDoorUnlock = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 5000)); // Simulated door unlock delay
      show({
        title: 'Door unlocked!',
        subtitle: 'The remote door was successfully unlocked.',
        icon: CheckIcon,
        placement: 'top',
      });
    } catch (error) {
      show({
        title: 'Unlock failed',
        subtitle: 'Could not unlock the door.',
        icon: CheckIcon,
        placement: 'top',
      });
    }
  };

  return (
    <PageLayout safePadding={false} title="Dashboard">
      <Box className="flex px-4 pt-6">
        {/* Property Name */}
        <HStack className="bg-background-600 p-3 rounded-2xl items-center mb-4 shadow-md w-full">
          <Box className="p-3 rounded-full mr-4">
            <Icon as={Building2} className="text-typography-500" size="md" />
          </Box>
          <Text className="text-typography-950 font-semibold" size="lg">
            Sunrise Towers: 001
          </Text>
        </HStack>

        {/* Live Lobby Camera */}
        <Box className="bg-background-600 rounded-2xl mb-4 shadow-lg w-full">
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
            }}
            alt="Lobby"
            className="w-full h-40 rounded-t-2xl"
          />
          <Button
            className="flex-row items-center justify-between p-4 rounded-b-2xl"
            onPress={() => navigation.navigate('ResOneTimeAccessCode')}
            variant="solid"
            action="surface"
            size="xl">
            <HStack className="items-center">
              <ButtonIcon
                size="md"
                as={LobbyCameraIcon}
                className="text-transparent h-6 w-6"
              />
              <ButtonText>Live Lobby Camera</ButtonText>
            </HStack>
            <ButtonIcon as={ChevronRight} />
          </Button>
        </Box>

        {/* Quick Actions */}
        <VStack space="md" className="mb-6 w-full">
          <Button
            variant="solid"
            onPress={handleDoorUnlock}
            action="surface"
            size="xl"
            className="p-4 flex-row items-center justify-between">
            <HStack className="items-center">
              <ButtonIcon
                size="md"
                as={DoorUnlockColorIcon}
                className="text-transparent h-6 w-6"
              />
              <ButtonText>Remote Door Unlock</ButtonText>
            </HStack>
            <ButtonIcon as={ChevronRight} />
          </Button>

          <Button
            variant="solid"
            onPress={() => navigation.navigate('ResOneTimeAccessCode')}
            action="surface"
            size="xl"
            className="p-4 flex-row items-center justify-between">
            <HStack className="items-center ">
              <ButtonIcon
                size="md"
                as={AccessCodeIcon}
                className="text-transparent h-6 w-6"
              />
              <ButtonText>One-Time Access Code</ButtonText>
            </HStack>
            <ButtonIcon as={ChevronRight} />
          </Button>
        </VStack>

        {/* Announcements */}
        <HStack className="justify-between items-center mb-2 w-full">
          <Text className="text-typography-950" size="lg">
            Announcements
          </Text>
          <Button
            size="sm"
            variant="link"
            action="surface"
            className="flex-row items-center"
            onPress={() => navigation.navigate('ResAnnouncementScreen')}>
            <ButtonText className="text-primary-500" size="sm">
              See More
            </ButtonText>
          </Button>
        </HStack>

        <FlatList
          data={announcements}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <AnnouncementCard announcement={item} icon={<Icon size="sm" />} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 4}}
          ItemSeparatorComponent={() => <View className="mr-2" />}
          className="pb-16"
        />
      </Box>
    </PageLayout>
  );
};

export default DashboardScreen;
