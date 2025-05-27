import React from 'react';
import {Text} from '@/components/ui/text';
import {VStack} from '@/components/ui/vstack';
import {HStack} from '@/components/ui/hstack';
import {Icon} from '@/components/ui/icon';
import {Card} from '@/components/ui/card';

import {CopyIcon} from '@/components/icons/CopyIcon';
import {ShareIcon} from '@/components/icons/ShareIcon';

type AccessCodeCardProps = {
  code: string;
  label: string;
  expiry: string;
  type: 'active' | 'used';
};

const AccessCodeCard = ({code, label, expiry, type}: AccessCodeCardProps) => {
  const isActive = type === 'active';
  const statusText = isActive ? 'Active' : 'Used';
  const statusColor = isActive ? 'text-success-500' : 'text-typography-500';

  return (
    <Card className=" mb-3 p-4 rounded-lg  bg-background-600">
      <VStack space="md">
        <HStack className="flex-row justify-between items-center center">
          <HStack>
            <Text size="lg" className="  text-typography-500">
              {code}
            </Text>
            <Icon
              as={CopyIcon}
              size="sm"
              className="w-5 h-5 p-1 rounded flex items-center justify-center"
            />
            <Icon
              as={ShareIcon}
              size="sm"
              className="w-5 h-5 p-1 rounded flex items-center justify-center"
            />
          </HStack>

          <Text size="xs" className={`  ${statusColor}`}>
            {statusText}
          </Text>
        </HStack>
        <HStack className="mt-1 flex-row justify-between items-center">
          <Text size="xs" className="  text-typography-500">
            {label}
          </Text>
          <Text size="xs" className="  text-typography-500">
            {' '}
            Expire at {expiry}{' '}
          </Text>
        </HStack>
      </VStack>
    </Card>
  );
};

export default AccessCodeCard;
