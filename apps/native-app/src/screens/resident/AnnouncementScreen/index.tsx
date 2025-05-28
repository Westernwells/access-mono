import React from 'react';
import {FlatList} from 'react-native';
import {Box} from '@/components/ui/box';
import PageLayout from '@/components/layouts/PageLayout';
import AnnouncementCard from './AnnouncementCard';
import {Icon} from '@/components/ui/icon';
import {AnnouncementTypes, Announcement} from '@/types/AnnouncementTypes';

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

//
// Screen Component
//
const AnnouncementScreen = () => {
  return (
    <PageLayout disableScroll={true} safePadding={false}>
      <Box className="flex-1 px-2 sm:px-4 md:px-6 pt-6 md:pt-8">
        <FlatList
          data={announcements}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <AnnouncementCard
                announcement={item}
                icon={<Icon size="sm" />} // Pass an icon
              />
            );
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 16, paddingHorizontal: 8}}
        />
      </Box>
    </PageLayout>
  );
};

export default AnnouncementScreen;
