import React from 'react';
import {Text} from '@/components/ui/text';
import {Icon} from '@/components/ui/icon';
import {HStack} from '@/components/ui/hstack';
import {Card} from '@/components/ui/card';
import {ArrowDownLeft, TrendingUp} from 'lucide-react-native';
import {cn} from '@/lib/utils';
type NotificationCardProps = {
  title: string;
  time: string;
  ago: string;
  type: 'missed' | 'answered';
};

const NotificationCard: React.FC<NotificationCardProps> = ({
  title,
  time,
  ago,
  type,
}) => {
  return (
    <Card className="mb-2 px-1 rounded-lg bg-transparent">
      <Text size="lg" className="text-typography-950">
        {title}
      </Text>

      <HStack className="mt-1 flex-row  ">
        <Icon
          as={type === 'missed' ? TrendingUp : ArrowDownLeft}
          size="lg"
          className={cn(
            type === 'missed' ? 'text-error-500' : 'text-typography-500',
          )}
        />
        <Text
          size="sm"
          className={`ml-2 ${
            type === 'missed' ? 'text-error-500' : 'text-typography-500'
          }`}>
          {time}
        </Text>

        <HStack className="items-center space-x-1 ml-2">
          <Text
            size="sm"
            className={
              type === 'missed' ? 'text-error-500' : 'text-typography-500'
            }>
            •
          </Text>
          <Text
            size="sm"
            className={
              type === 'missed' ? 'text-error-500' : 'text-typography-500'
            }>
            {ago}
          </Text>
        </HStack>
      </HStack>
    </Card>
  );
};

export default NotificationCard;
