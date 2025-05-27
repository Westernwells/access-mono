import PageLayout from '@/components/layouts/PageLayout';
import {Text} from '@/components/ui/text';
import {Card} from '@/components/ui/card';
import {HStack} from '@/components/ui/hstack';
import {Switch} from '@/components/ui/switch';
import {useTranslation} from 'react-i18next';

const AccessSecurityScreen = () => {
  const {t} = useTranslation();

  return (
    <PageLayout safePadding={false}>
      <Card className="mx-8 mt-8 gap-8">
        <HStack className="flex justify-between">
          <Text size="sm" className="text-typography-950">
            {t('enableAppLock')}
          </Text>
          <Switch />
        </HStack>

        <HStack className="flex justify-between">
          <Text size="sm" className="text-typography-950">
            {t('useFingerprintUnlock')}
          </Text>
          <Switch />
        </HStack>
      </Card>
    </PageLayout>
  );
};

export default AccessSecurityScreen;
