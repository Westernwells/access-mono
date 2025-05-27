import React from 'react';
import {Card} from '@/components/ui/card';
import {HStack} from '@/components/ui/hstack';
import {VStack} from '@/components/ui/vstack';
import {Text} from '@/components/ui/text';
import {Image} from '@/components/ui/image';
import {PhoneIcon} from '@/components/ui/icon';
import {Button, ButtonIcon} from '@/components/ui/button';
import {useTranslation} from 'react-i18next';

export type Tenant = {
  id: number;
  name: string;
  room: string;
  phoneNumber: string;
  image: string;
};

type SearchTenantCardProps = Omit<Tenant, 'id' | 'phoneNumber'> & {
  onPress?: () => void;
};

const SearchTenantCard = ({
  name,
  room,
  image,
  onPress,
}: SearchTenantCardProps) => {
  const {t} = useTranslation();

  return (
    <Card>
      <HStack space="md" className="items-center">
        <Image
          source={{uri: image}}
          className="w-12 h-12 rounded-full"
          alt={`${name}'s profile picture`}
        />
        <VStack className="flex-1">
          <Text size="xl" className="font-semibold">
            {name}
          </Text>
          <Text size="sm" className="text-typography-500">
            {t('unit')} {room}
          </Text>
        </VStack>
        <Button size="sm" variant="link" action="contrast" onPress={onPress}>
          <ButtonIcon as={PhoneIcon} className="h-6 w-6" />
        </Button>
      </HStack>
    </Card>
  );
};

export default SearchTenantCard;
