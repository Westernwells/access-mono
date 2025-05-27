import React from 'react';
import {Box} from '@/components/ui/box';
import {Text} from 'react-native';
import {cn} from '@/lib/utils';

interface SeparatorProps {
  className?: string;
  text?: string;
}

const Separator = ({className, text = 'Or'}: SeparatorProps) => {
  return (
    <Box className={cn('flex-row items-center justify-center my-8', className)}>
      <Box className="flex-1 h-[1px] bg-typography-300" />
      <Text className="mx-4 text-typography-500">{text}</Text>
      <Box className="flex-1 h-[1px] bg-typography-300" />
    </Box>
  );
};

export default Separator;
