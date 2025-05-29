import React from 'react';
import {FlatList, Dimensions, View} from 'react-native';
import {ChevronRightIcon} from '@/components/ui/icon';
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
import GreenCheckIcon from '@/components/icons/GreenCheckIcon';
import RedCheckIcon from '@/components/icons/RedCheckIcon';
import {ApartmentIcon} from '@/components/icons/ApartmentIcon';
import {Card} from '@/components/ui/card';
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

  const screenWidth = Dimensions.get('window').width;
  const handleDoorUnlock = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 5000)); // Simulated door unlock delay
      show({
        title: 'Door unlocked!',
        subtitle: 'The remote door was successfully unlocked.',
        icon: GreenCheckIcon,
        placement: 'top',
      });
    } catch (error) {
      show({
        title: 'Unlock failed',
        subtitle: 'Could not unlock the door.',
        icon: RedCheckIcon,
        placement: 'top',
      });
    }
  };

  return (
    <PageLayout safePadding={false} title="Dashboard">
      <Box className="flex px-4 sm:px-6 md:px-8 pt-6">
        {/* Property Name */}
        <Card className="mb-4 w-full p-2 ">
          <HStack className=" p-2 gap-3 items-center  w-full">
            <Icon
              as={ApartmentIcon}
              className="text-transparent h-6 w-6"
              size="md"
            />

            <Text className="text-typography-950 font-semibold" size="lg">
              Sunrise Towers: 001
            </Text>
          </HStack>
        </Card>

        {/* Live Lobby Camera */}
        <Card className=" mb-4 w-full p-2 overflow-hidden">
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
            }}
            alt="Lobby"
            className="w-full  h-40 md:h-60 lg:h-72 "
          />
          <Button
            className="px-2 py-4 mt-2 md:p-5 flex-row  items-center justify-between"
            onPress={() => navigation.navigate('ResLiveLobbyCamera')}
            variant="solid"
            action="surface"
            size="xl">
            <HStack className="flex flex-row items-center gap-3">
              <ButtonIcon
                size="md"
                as={LobbyCameraIcon}
                className="text-transparent   h-6 w-6"
              />
              <ButtonText size="sm">Live Lobby Camera</ButtonText>
            </HStack>
            <ButtonIcon as={ChevronRightIcon} />
          </Button>
        </Card>

        {/* Quick Actions */}
        <VStack space="md" className="mb-6 w-full">
          <Button
            variant="solid"
            onPress={handleDoorUnlock}
            action="surface"
            size="xl"
            className="p-4 md:p-5 flex-row items-center justify-between">
            <HStack className="flex flex-row items-center gap-3">
              <ButtonIcon
                size="md"
                as={DoorUnlockColorIcon}
                className="text-transparent h-6 w-6"
              />
              <ButtonText size="sm">Remote Door Unlock</ButtonText>
            </HStack>
            <ButtonIcon as={ChevronRightIcon} />
          </Button>

          <Button
            variant="solid"
            onPress={() => navigation.navigate('ResOneTimeAccessCode')}
            action="surface"
            size="xl"
            className="p-4 md:p-5 flex-row items-center justify-between">
            <HStack className="flex flex-row items-center gap-3">
              <ButtonIcon
                size="md"
                as={AccessCodeIcon}
                className="text-transparent h-6 w-6"
              />
              <ButtonText size="sm">One-Time Access Code</ButtonText>
            </HStack>
            <ButtonIcon as={ChevronRightIcon} />
          </Button>
        </VStack>

        {/* Announcements */}
        <HStack className="justify-between items-center  mb-4 md:mb-6 w-full">
          <Text className="text-typography-950" size="md">
            Announcements
          </Text>
          <Button
            size="md"
            variant="solid"
            action="transparent"
            className="flex-row items-center"
            onPress={() => navigation.navigate('ResAnnouncementScreen')}>
            <ButtonText
              className="text-primary-500 text-sm md:text-base"
              size="md">
              See More
            </ButtonText>
          </Button>
        </HStack>

        <FlatList
          data={announcements}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 8}}
          renderItem={({item, index}) => (
            <View
              // container for the card
              style={{
                width: screenWidth / 2 - 12, // half screen minus margin approx
                marginRight: index !== announcements.length - 1 ? 8 : 0, // right margin except last
              }}>
              <AnnouncementCard announcement={item} horizontal />
            </View>
          )}
          className="pb-16"
        />
      </Box>
    </PageLayout>
  );
};

export default DashboardScreen;
