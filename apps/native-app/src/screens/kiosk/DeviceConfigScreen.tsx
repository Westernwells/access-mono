import React from 'react';
import {Box} from '@/components/ui/box';
import {Text} from '@/components/ui/text';
import {Heading} from '@/components/ui/heading';
import {Card} from '@/components/ui/card';
import PageLayout from '@/components/layouts/PageLayout';
import {useTranslation} from 'react-i18next';

const DeviceConfigScreen = () => {
  enum SignalStrength {
    Strong = 'strong',
    Medium = 'medium',
    Weak = 'weak',
  }

  const {t} = useTranslation();

  const SignalText = ({strength}: {strength: SignalStrength}) => {
    let textColor = '';

    if (strength === SignalStrength.Strong) {
      textColor = 'text-success-500';
    } else if (strength === SignalStrength.Medium) {
      textColor = 'text-warning-500';
    } else if (strength === SignalStrength.Weak) {
      textColor = 'text-error-500';
    }

    return (
      <Text className={`${textColor} font-semibold`}>
        {t(`signal.${strength}`)}
      </Text>
    );
  };

  return (
    <PageLayout safePadding={false}>
      <Box className="px-20 pt-10">
        <Heading size="lg" className="text-typography-300 mb-2">
          {t('accessControlSettings')}
        </Heading>
        <Card className="flex-col justify-start gap-4 p-4 w-full text-xl font-semibold">
          <Box className="flex-row items-center ">
            <Text className="text-typography-500 font-semibold">
              {`${t('deviceName')}: `}
            </Text>
            <Text className="font-semibold">{'Intercom Lobby Device 1'}</Text>
          </Box>
          <Box className="flex-row items-center ">
            <Text className="text-typography-500 font-semibold">
              {`${t('deviceModel')}: `}
            </Text>
            <Text className="font-semibold">{'XYZ123'}</Text>
          </Box>
          <Box className="flex-row items-center ">
            <Text className="text-typography-500 font-semibold">
              {`${t('firmwareVersion')}: `}
            </Text>
            <Text className="font-semibold">{' 1.2.0'}</Text>
          </Box>
        </Card>

        <Heading size="lg" className="text-typography-300 mb-2 my-3">
          {t('wifiSettings')}
        </Heading>
        <Card className="flex-col justify-start gap-4 p-4 w-full text-xl">
          <Box className="flex-row items-center ">
            <Text className="text-typography-500 font-semibold">
              {`${t('wifiNetwork')}: `}
            </Text>
            <Text className="font-semibold">{'Intercom_Network'}</Text>
          </Box>
          <Box className="flex-row items-center ">
            <Text className="text-typography-500 font-semibold">
              {`${t('signalStrength')}: `}
            </Text>
            <SignalText strength={SignalStrength.Strong} />
          </Box>
        </Card>
      </Box>
    </PageLayout>
  );
};

export default DeviceConfigScreen;
