import React from 'react';
import {Box} from '@/components/ui/box';
import {Text} from '@/components/ui/text';
import {ChevronLeft} from 'lucide-react-native';
import {Button, ButtonIcon} from '@/components/ui/button';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

export const CustomHeader = ({...props}: NativeStackHeaderProps) => {
  const {options, navigation} = props;

  return (
    <Box className="bg-background-0 pt-safe px-4 md:px-20">
      <Box className="flex h-16 flex-row items-center relative">
        <Button
          onPress={navigation.goBack}
          action="transparent"
          className="p-0 w-[44px] h-[44px]">
          <ButtonIcon
            as={ChevronLeft}
            className="text-typography-900 w-8 h-8 mt-1"
          />
        </Button>
        <Text
          size="xl"
          className="text-typography-900 font-semibold flex-1 text-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ">
          {options.title}
        </Text>
      </Box>
    </Box>
  );
};
