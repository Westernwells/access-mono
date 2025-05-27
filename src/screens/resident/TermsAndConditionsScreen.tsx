import PageLayout from '@/components/layouts/PageLayout';
import {Text} from '@/components/ui/text';
import {Heading} from '@/components/ui/heading';
import {VStack} from '@/components/ui/vstack';
import {useTranslation} from 'react-i18next';

const TermsAndConditionsScreen = () => {
  const {t} = useTranslation();

  return (
    <PageLayout safePadding={false}>
      <VStack className="p-8" space="4xl">
        <VStack space="md">
          <Text size="sm" className="text-typography-500">
            {t('termsWelcome')}
          </Text>
          <Text size="sm" className="text-typography-500">
            {t('termsAgreement')}
          </Text>
        </VStack>

        <Heading className="text-typography-950 text-lg">
          1. {t('useOfService')}
        </Heading>
        <VStack space="md">
          <Text size="sm" className="text-typography-500">
            {t('ageRequirement')}
          </Text>
          <Text size="sm" className="text-typography-500">
            {t('serviceMisuse')}
          </Text>
        </VStack>

        <Heading className="text-typography-950 text-lg">
          2. {t('accounts')}
        </Heading>
        <Text size="sm" className="text-typography-500">
          {t('accountResponsibility')}
        </Text>

        <Heading className="text-typography-950 text-lg">
          3. {t('intellectualProperty')}
        </Heading>
        <Text size="sm" className="text-typography-500">
          {t('contentRights')}
        </Text>
      </VStack>
    </PageLayout>
  );
};

export default TermsAndConditionsScreen;
