import React from 'react';
import {Box} from '@/components/ui/box';
import {Text} from '@/components/ui/text';
import PageLayout from '@/components/layouts/PageLayout';
import {useRoute, RouteProp} from '@react-navigation/native';
import {Icon} from '@/components/ui/icon';
import {Heading} from '@/components/ui/heading';
import {VStack} from '@/components/ui/vstack';

import {ResidentStackParamList} from '@/navigation/resident/ResidentStacks';
import {AnnouncementTypes, announcementIcons} from '@/types/AnnouncementTypes';
import {Bell} from 'lucide-react-native';

type AnnouncementDetailScreenRouteProps = RouteProp<
  ResidentStackParamList,
  'ResAnnouncementDetailScreen'
>;
const AnnouncementDetailScreen: React.FC = () => {
  const route = useRoute<AnnouncementDetailScreenRouteProps>();
  const {title, date, type, description} = route.params;
  const fallbackIcon = Bell; // default icon

  const IconComponent =
    announcementIcons[type as AnnouncementTypes] ?? fallbackIcon;

  return (
    <PageLayout safePadding={false}>
      <Box className="flex-1 px-4 sm:px-6 md:px-10 pt-4">
        <Icon
          as={IconComponent}
          size="lg"
          className="text-typography-950 mb-3"
        />
        <Heading className="text-typography-950 mb-2 text-base sm:text-lg md:text-xl">
          {title}
        </Heading>

        <VStack space="md">
          <Text className="text-typography-500  mb-4" size="sm">
            {date}
          </Text>
          <Text className="text-typography-950 text-base " size="md">
            {description}
          </Text>
        </VStack>
      </Box>
    </PageLayout>
  );
};

export default AnnouncementDetailScreen;
