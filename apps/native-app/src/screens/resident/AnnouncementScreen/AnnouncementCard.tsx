import React from 'react';
import {Icon} from '@/components/ui/icon';
import {Text} from '@/components/ui/text';
import {Button, ButtonText} from '@/components/ui/button';
import {useNavigation} from '@react-navigation/native';
import {Card} from '@/components/ui/card';
import {Bell} from 'lucide-react-native';
import {
  AnnouncementTypes,
  announcementIcons,
  Announcement,
} from '@/types/AnnouncementTypes'; // Import enum
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {ResidentStackParamList} from '@/navigation/resident/ResidentStacks';

type AnnouncementCardProps = {
  announcement: Announcement;

  horizontal?: boolean; // Add this
};
// Navigation prop type (explicit pattern)
type AnnouncementCardNavigationProp = NativeStackNavigationProp<
  ResidentStackParamList,
  'ResAnnouncementDetailScreen'
>;
const AnnouncementCard: React.FC<AnnouncementCardProps> = ({
  announcement,
  horizontal,
}) => {
  const {title, type, date, description} = announcement;
  const navigation = useNavigation<AnnouncementCardNavigationProp>();

  const fallbackIcon = Bell; // default icon
  // Fixed width for horizontal, full width for vertical
  const IconComponent =
    announcementIcons[type as AnnouncementTypes] ?? fallbackIcon;

  return (
    <Card size="sm" className="mb-2 w-full">
      <Icon as={IconComponent} size="lg" className="text-typography-950 mb-3" />
      <Text
        size="md"
        className="text-typography-950 break-words overflow-hidden"
        numberOfLines={2}
        ellipsizeMode="tail">
        {title}
      </Text>
      {/* <Text size="sm" className="text-typography-950 mb-1">
        {capitalize(type)}
      </Text> */}
      <Text size="sm" className="text-typography-500 mb-3">
        {date}
      </Text>
      <Button
        size="xs"
        variant="solid"
        action="contrast"
        className={`px-3 py-2 bg-contrast-950 ${
          horizontal ? 'w-auto' : 'self-start'
        }`}
        onPress={() =>
          navigation.navigate('ResAnnouncementDetailScreen', {
            title,
            type,
            date,
            description,
          })
        }>
        <ButtonText size="xs" className="text-typography-500">
          Read More
        </ButtonText>
      </Button>
    </Card>
  );
};

export default AnnouncementCard;
