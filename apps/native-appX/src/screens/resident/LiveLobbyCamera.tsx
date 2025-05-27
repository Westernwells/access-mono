import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import {HStack} from '@/components/ui/hstack';
import {VStack} from '@/components/ui/vstack';
import {Button, ButtonIcon} from '@/components/ui/button';
import SoundIcon from '@/components/icons/SoundIcon';
import FullscreenIcon from '@/components/icons/FullscreenIcon';
import {Box} from '@/components/ui/box';
import {Text} from '@/components/ui/text';

const LiveLobbyCameraScreen = () => {
  const soundToggle = () => {
    console.log('Sound toggled');
  };
  const fullScreenToggle = () => {
    console.log('Fullscreen toggled');
  };
  return (
    <PageLayout safePadding={false}>
      <VStack className="flex-1 justify-between items-center px-8 py-10">
        {/* Place holder for lobby video live feed */}
        <Box className="flex-1 justify-center items-center w-full">
          <Text>Live feed placeholder</Text>
        </Box>

        {/* Buttons area */}
        <HStack className="w-full justify-between px-20">
          <Button action="transparent" onPress={soundToggle}>
            <ButtonIcon as={SoundIcon} />
          </Button>
          <Button action="transparent" onPress={fullScreenToggle}>
            <ButtonIcon as={FullscreenIcon} />
          </Button>
        </HStack>
      </VStack>
    </PageLayout>
  );
};

export default LiveLobbyCameraScreen;
