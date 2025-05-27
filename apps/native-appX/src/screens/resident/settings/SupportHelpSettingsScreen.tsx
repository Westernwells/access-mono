import {useEffect} from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import {Card} from '@/components/ui/card';
import {Box} from '@/components/ui/box';
import {Button, ButtonIcon, ButtonText} from '@/components/ui/button';
import {useReusableToast} from '@/components/ReusableToast';
import {ChevronRight} from 'lucide-react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ResidentStackParamList} from '@/navigation/resident/ResidentStacks';
import HelpCenterIcon from '@/components/icons/HelpCenterIcon';
import ContactSupportIcon from '@/components/icons/ContactSupportIcon';
import ReportIssueIcon from '@/components/icons/ReportIssueIcon';
import GreenCheckIcon from '@/components/icons/GreenCheckIcon';
import {useTranslation} from 'react-i18next';

type ResSupportHelpSettingsScreenNavigationProp = NativeStackNavigationProp<
  ResidentStackParamList,
  'ResSupportHelpSettings'
>;

type ResSupportHelpSettingsRouteProp = RouteProp<
  ResidentStackParamList,
  'ResSupportHelpSettings'
>;

const SupportHelpSettingsScreen = () => {
  const navigation =
    useNavigation<ResSupportHelpSettingsScreenNavigationProp>();
  const route = useRoute<ResSupportHelpSettingsRouteProp>();
  const {show} = useReusableToast();
  const {t} = useTranslation();

  const contactSupport = route.params?.contactSupport;

  useEffect(() => {
    if (!contactSupport) return;
    show({
      title: t('messageSentSuccess'),
      icon: GreenCheckIcon,
      placement: 'top',
      duration: 3000,
    });
    navigation.setParams({contactSupport: false});
  }, [contactSupport, show, t, navigation]);

  return (
    <PageLayout safePadding={false}>
      <Card className="mx-8 px-0 mt-5">
        <Button
          size="xl"
          variant="solid"
          action="surface"
          onPress={() => navigation.navigate('ResHelpCenter')}
          className="justify-between w-full bg-transparent">
          <Box className="flex flex-row justify-center gap-4">
            <ButtonIcon size="sm" as={HelpCenterIcon} />
            <ButtonText>{t('helpCenter')}</ButtonText>
          </Box>
          <ButtonIcon as={ChevronRight} />
        </Button>

        <Button
          size="xl"
          variant="solid"
          action="surface"
          onPress={() => navigation.navigate('ResContactSupport')}
          className="justify-between w-full bg-transparent">
          <Box className="flex flex-row justify-center gap-4">
            <ButtonIcon size="sm" as={ContactSupportIcon} />
            <ButtonText>{t('contactSupport')}</ButtonText>
          </Box>
          <ButtonIcon as={ChevronRight} />
        </Button>

        <Button
          size="xl"
          variant="solid"
          action="surface"
          onPress={() => navigation.navigate('ResReportIssue')}
          className="justify-between w-full bg-transparent">
          <Box className="flex flex-row justify-center gap-4">
            <ButtonIcon size="sm" as={ReportIssueIcon} />
            <ButtonText>{t('reportIssue')}</ButtonText>
          </Box>
          <ButtonIcon as={ChevronRight} />
        </Button>
      </Card>
    </PageLayout>
  );
};

export default SupportHelpSettingsScreen;
