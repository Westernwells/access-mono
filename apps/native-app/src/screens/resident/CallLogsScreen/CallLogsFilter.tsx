import React from 'react';
import {ScrollView} from 'react-native';

import {Button, ButtonText} from '@/components/ui/button';
import {HStack} from '@/components/ui/hstack';
import {capitalize} from '@/lib/utils'; // Adjusted the import path to match the correct location of the utility function

enum CallTypes {
  ALL = 'all',
  MISSED = 'missed',
  ANSWERED = 'answered',
  UNLOCKED = 'unlocked',
}

type CallLogsFilterProps = {
  activeType: CallTypes;
  onTypeChange: (type: CallTypes) => void;
};

const callTypes = Object.values(CallTypes); // Use enum values for callTypes

const CallLogsFilter: React.FC<CallLogsFilterProps> = ({
  activeType,
  onTypeChange,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 8}}>
      <HStack className="gap-2">
        {callTypes.map(type => (
          <Button
            key={type}
            size="md"
            onPress={() => onTypeChange(type)}
            variant={activeType === type ? 'solid' : 'outline'}
            action={activeType === type ? 'primary' : 'surface'}
            className={`px-4 mx-2 mb-8 ${
              activeType === type ? 'bg-primary-700' : 'bg-secondary-500'
            }`}>
            <ButtonText className="text-typography-950">
              {capitalize(type)}
            </ButtonText>
          </Button>
        ))}
      </HStack>
    </ScrollView>
  );
};

export {CallTypes};

export default CallLogsFilter;
