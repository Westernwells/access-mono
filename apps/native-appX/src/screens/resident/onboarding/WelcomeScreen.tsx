import {Box} from '@/components/ui/box';
import {Text} from '@/components/ui/text';
import {Button, ButtonText} from '@/components/ui/button';
import PageLayout from '@/components/layouts/PageLayout';
import {Image} from '@/components/ui/image';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '@/navigation/Navigation';
import {useTranslation} from 'react-i18next';

type ResidentWelcomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ResOnboarding'
>;

const WelcomeScreen = () => {
  const navigation = useNavigation<ResidentWelcomeScreenNavigationProp>();
  const {t} = useTranslation();

  return (
    <PageLayout>
      <Box className="flex flex-col items-center justify-between h-5/6 mt-32 mb-20">
        {/* title section */}
        <Box className="flex flex-col items-center">
          <Text size="2xl" className="font-medium">
            {t('welcomeToAccess')}
          </Text>

          <Text
            size="lg"
            className="font-medium mt-3 px-10 text-center text-typography-500">
            {t('welcomeSubtitle')}
          </Text>
        </Box>

        {/* Image section */}
        <Image
          className="w-full h-3/6"
          resizeMode="contain"
          source={{
            uri: 'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/onboarding-card-img.png',
          }}
          alt="image"
        />

        {/* Button section */}
        <Box className="px-auto mt-10 w-5/6">
          <Button onPress={() => navigation.navigate('ResSelectApartment')}>
            <ButtonText>{t('getStarted')}</ButtonText>
          </Button>
          <Box className="mt-3">
            <Button variant="solid" action="secondary">
              <ButtonText
                className="text-center"
                onPress={() => navigation.navigate('ResSignIn')}>
                {t('alreadyHaveAccount')}
              </ButtonText>
            </Button>
          </Box>
        </Box>
      </Box>
    </PageLayout>
  );
};

export default WelcomeScreen;
