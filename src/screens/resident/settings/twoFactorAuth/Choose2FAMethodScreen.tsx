import {useState} from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import {Button, ButtonText} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {VStack} from '@/components/ui/vstack';
import {HStack} from '@/components/ui/hstack';
import {Text} from '@/components/ui/text';
import {Box} from '@/components/ui/box';
import {
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioIcon,
} from '@/components/ui/radio';
import {CircleIcon} from '@/components/ui/icon';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {ResidentStackParamList} from '@/navigation/resident/ResidentStacks';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Choose2FAMethodScreenNavigationProp =
  NativeStackNavigationProp<ResidentStackParamList>;

enum TwoFAMethod {
  EMAIL = 'email',
  SMS = 'sms',
  AUTH_APP = 'authenticatorApp',
}

const Choose2FAMethodScreen = () => {
  const navigation = useNavigation<Choose2FAMethodScreenNavigationProp>();
  const {t} = useTranslation();

  const [selectedMethod, setSelectedMethod] = useState<
    'email' | 'sms' | 'authenticatorApp' | ''
  >('');

  const methods = Object.values(TwoFAMethod);

  return (
    <PageLayout safePadding={false}>
      <VStack space="md" className="h-full w-full px-8 justify-between py-10">
        {/* Radio Method Select */}
        <RadioGroup value={selectedMethod || ''} onChange={setSelectedMethod}>
          <Card className="gap-8">
            {methods.map((method, index) => {
              return (
                <HStack
                  key={`2FA methodCard ${index}`}
                  className="justify-between">
                  <Text
                    size="sm"
                    className="text-typography-950 font-medium items-center">
                    {t(method)}
                  </Text>
                  <Radio
                    value={method}
                    size={'md'}
                    isInvalid={false}
                    isDisabled={false}>
                    <RadioIndicator>
                      <RadioIcon as={CircleIcon} />
                    </RadioIndicator>
                  </Radio>
                </HStack>
              );
            })}
          </Card>
        </RadioGroup>

        <Box>
          <Button
            isDisabled={!selectedMethod}
            onPress={() =>
              selectedMethod &&
              navigation.navigate('ResTwoFactorAuthEnter', {
                method: selectedMethod,
              })
            }>
            <ButtonText>{t('next')}</ButtonText>
          </Button>
        </Box>
      </VStack>
    </PageLayout>
  );
};

export default Choose2FAMethodScreen;
