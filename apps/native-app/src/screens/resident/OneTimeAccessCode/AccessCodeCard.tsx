import React from 'react';
import {Text} from '@/components/ui/text';
import {VStack} from '@/components/ui/vstack';
import {HStack} from '@/components/ui/hstack';
import {Card} from '@/components/ui/card';
import {Button, ButtonIcon} from '@/components/ui/button';
import {CopyIcon} from '@/components/ui/icon';
import {ShareIcon} from '@/components/ui/icon';
import Clipboard from '@react-native-clipboard/clipboard';
import {useReusableToast} from '@/components/ReusableToast';
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
  const {show} = useReusableToast();
  const handleCopy = () => {
    Clipboard.setString(code);
    show({
      title: 'Copied!',
      subtitle: 'Code has been copied to clipboard.',
      icon: CopyIcon,
      placement: 'top',
    });
  };

  const handleShare = () => {
    //  implement Share functionality using `Share` from 'react-native'? or whatever library you prefer
    //    try {
    //   await Share.share({
    //     message: `Here is your access code: ${code} (Expires: ${expiry})`,
    //   });
    // } catch (error) {
    //   show({
    //     title: 'Sharing Failed',
    //     subtitle: 'Something went wrong while trying to share the code.',
    //     icon: ShareIcon,
    //     placement: 'top',
    //   });
    // }
  };

  return (
    <Card className="mb-1 p-4 sm:p-5 md:p-6">
      <VStack space="md">
        <HStack className="flex-row justify-between items-center">
          {/* Left: Code and Buttons */}
          <HStack className="flex-row items-center">
            <Text size="lg" className="text-typography-950 font-bold">
              {code}
            </Text>
            <HStack className="ml-2 space-x-2">
              <Button size="lg" variant="link" onPress={handleCopy}>
                <ButtonIcon
                  as={CopyIcon}
                  size="sm"
                  className="text-typography-950"
                />
              </Button>
              <Button
                size="lg"
                variant="link"
                className=" ml-2"
                onPress={handleShare}>
                <ButtonIcon
                  as={ShareIcon}
                  size="sm"
                  className="text-typography-950"
                />
              </Button>
            </HStack>
          </HStack>

          {/* Right: Status */}
          <Text
            size="xs"
            className={`text-xs sm:text-sm md:text-base ${statusColor}`}>
            {statusText}
          </Text>
        </HStack>

        {/* Bottom: Label and Expiry */}
        <HStack className="flex-row justify-between items-center flex-wrap md:flex-nowrap">
          <Text size="xs" className="text-typography-500 text-xs sm:text-sm">
            {label}
          </Text>
          <Text
            size="xs"
            className="text-typography-500 text-xs sm:text-sm text-right">
            Expire at {expiry}
          </Text>
        </HStack>
      </VStack>
    </Card>
  );
};

export default AccessCodeCard;
