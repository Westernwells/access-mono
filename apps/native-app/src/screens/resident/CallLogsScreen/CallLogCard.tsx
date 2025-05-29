import React from 'react';

import {Text} from '@/components/ui/text';
import {Icon} from '@/components/ui/icon';
import {HStack} from '@/components/ui/hstack';
import {ArrowDownLeft, TrendingUp} from 'lucide-react-native';
import {cn} from '@/lib/utils';
import {Card} from '@/components/ui/card';

type CallLogCardProps = {
  title: string;
  type: 'missed' | 'answered';
  time: string;
  unlocked: boolean;
  recent?: string;
  ago: string;
};

const CallLogCard: React.FC<CallLogCardProps> = ({
  title,
  type,
  time,
  unlocked,
  recent,
  ago,
}) => {
  return (
    <Card className="p-4 sm:p-5 bg-transparent md:p-6 rounded-2xl shadow-sm  mb-1">
      <Text
        size="sm"
        className="text-typography-950 mb-1 mt-1 text-base sm:text-lg md:text-xl">
        {title}
      </Text>
      <HStack className="flex-row   mb-1">
        <Icon
          as={type === 'missed' ? TrendingUp : ArrowDownLeft}
          size="sm"
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
        {unlocked && (
          <>
            <Text size="sm" className="mx-1 text-typography-500">
              •
            </Text>
            <Text size="sm" className="text-success-500">
              Door Unlocked
            </Text>
          </>
        )}
        {recent && (
          <>
            <Text size="sm" className="mx-1 text-error-500">
              •
            </Text>
            <Text size="sm" className="text-error-500">
              {recent}
            </Text>
          </>
        )}
      </HStack>
      <Text size="sm" className="text-typography-500 text-sm">
        {ago}
      </Text>
    </Card>
  );
};

export default CallLogCard;
