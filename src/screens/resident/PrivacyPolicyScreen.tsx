import PageLayout from '@/components/layouts/PageLayout';
import {Text} from '@/components/ui/text';
import {Heading} from '@/components/ui/heading';
import {VStack} from '@/components/ui/vstack';
import {useTranslation} from 'react-i18next';

const PrivacyPolicyScreen = () => {
  const {t} = useTranslation();

  return (
    <PageLayout safePadding={false}>
      <VStack className="p-8" space="4xl">
        <VStack space="md">
          <Text size="sm" className=" text-typography-500">
            {t('privacyPolicyIntro')}
          </Text>
          <Text size="sm" className=" text-typography-500">
            {t('privacyPolicyAgreement')}
          </Text>
        </VStack>

        <Heading className="text-typography-950 text-lg">
          1. {t('informationWeCollect')}
        </Heading>
        <Heading size="sm" className="text-typography-950 ">
          a. {t('personalInformation')}
        </Heading>
        <VStack space="md">
          <Text size="sm" className=" text-typography-500">
            {t('personalInfoIntro')}
          </Text>
          <Text className=" text-typography-500">• {t('name')}</Text>
          <Text className=" text-typography-500">• {t('emailAddress')}</Text>
          <Text className=" text-typography-500">• {t('phoneNumber')}</Text>
          <Text className=" text-typography-500">
            • {t('billingInformation')}
          </Text>
        </VStack>

        <Heading size="sm" className="text-typography-950 ">
          b. {t('usageData')}
        </Heading>
        <VStack space="md">
          <Text size="sm" className=" text-typography-500">
            {t('usageDataIntro')}
          </Text>
          <Text size="sm" className=" text-typography-500">
            • {t('ipAddress')}
          </Text>
          <Text size="sm" className=" text-typography-500">
            • {t('browserType')}
          </Text>
        </VStack>
      </VStack>
    </PageLayout>
  );
};

export default PrivacyPolicyScreen;
