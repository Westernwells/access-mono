import React from 'react';
import {Box} from '@/components/ui/box';
import {Text} from '@/components/ui/text';
import PageLayout from '@/components/layouts/PageLayout';
import {Phone, Mic} from 'lucide-react-native';
import {Icon} from '@/components/ui/icon';
import {Image} from '@/components/ui/image';
import {VStack} from '@/components/ui/vstack';
import {useTranslation} from 'react-i18next';

const LiveCallScreen = () => {
  const {t} = useTranslation();

  return (
    <PageLayout>
      <Box className="flex flex-col items-center justify-between py-[100px] h-full">
        <VStack>
          <Image
            size="2xl"
            source={{
              uri: 'https://www.recreoviral.com/wp-content/uploads/2015/03/lee-jeffries-730x724.png',
            }}
            alt="image"
            className="rounded-full mb-10"
          />
          <Box className="items-center mb-10">
            <Text size="5xl" className="font-bold mb-4">
              {'John Doe'}
            </Text>
            <Text size="2xl" className="font-bold">
              {t('unit')} {'101'}
            </Text>
          </Box>
        </VStack>

        <Box className="flex flex-row gap-4 mt-10 w-fit p-6 rounded-full bg-background-600 mb-[80px]">
          <Box className="w-24 h-24 items-center justify-center mr-8">
            <Icon className="text-typography-950 w-16 h-16" as={Mic} />
          </Box>

          <Box className="w-24 h-24 rounded-full items-center justify-center rotate-45 bg-red-500">
            <Icon
              className="text-typography-950 w-12 h-12 rotate-90"
              as={Phone}
            />
          </Box>
        </Box>
      </Box>
    </PageLayout>
  );
};

export default LiveCallScreen;
