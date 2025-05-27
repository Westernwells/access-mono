import PageLayout from '@/components/layouts/PageLayout';
import {Box} from '@/components/ui/box';
import {Button, ButtonText} from '@/components/ui/button';
import {Text} from '@/components/ui/text';
import {useNavigation} from '@react-navigation/native';
import {ImageBackground} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AccessLogo} from '@/components/icons/AccessLogo';
import {Icon} from '@/components/ui/icon';
import {KioskStackParamList} from '@/navigation/kiosk/KioskStacks';
import {useTranslation} from 'react-i18next';
// test merging access-app into access-mono
type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  KioskStackParamList,
  'KioskOnboarding'
>;

const WelcomeScreen = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();
  const {t} = useTranslation();

  return (
    <PageLayout safePadding={false}>
      <ImageBackground
        source={{
          // uri: 'https://productshop-space.nyc3.cdn.digitaloceanspaces.com/access-app/kiosk/onboarding-bg.png',
          uri: 'https://condosforsalegriffintown.com/wp-content/uploads/2018/10/MYST-sur-le-Canal-06.jpg',
        }}
        style={{flex: 1}}
        resizeMode="cover">
        <Box className="absolute top-14 right-14">
          <Button
            size="md"
            variant="link"
            action="contrast"
            onPress={() => navigation.navigate('KioskSignIn')}>
            <ButtonText size="xl" className="font-semibold">
              Admin
            </ButtonText>
          </Button>
        </Box>

        <Box className="flex justify-center items-center h-full pb-20">
          <Icon as={AccessLogo} className="w-28 h-28 mb-10 text-transparent" />

          <Box className="justify-center items-center w-5/6">
            <Box className="w-3/6 mb-10">
              <Text
                size="5xl"
                className="text-typography-950 font-extrabold text-center">
                {t('welcomeTo')} Myst
              </Text>
            </Box>

            <Box className="w-3/6 gap-5">
              <Button
                size="xl"
                variant="solid"
                action="primary"
                onPress={() => navigation.navigate('KioskSearchResident')}>
                <ButtonText>{t('searchResident')}</ButtonText>
              </Button>

              <Button
                size="xl"
                variant="solid"
                action="contrast"
                onPress={() => navigation.navigate('KioskAccessCode')}>
                <ButtonText>{t('useAccessCode')}</ButtonText>
              </Button>
            </Box>
          </Box>
        </Box>
      </ImageBackground>
    </PageLayout>
  );
};

export default WelcomeScreen;
