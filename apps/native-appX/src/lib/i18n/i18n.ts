import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import {Resource} from 'i18next';

// importing languages
import EN from '@/lib/i18n/languages/en';
import FR from '@/lib/i18n/languages/fr';
import twoFactorAuthEN from '@/lib/i18n/languages/en/twoFactorAuth';
import twoFactorAuthFR from '@/lib/i18n/languages/fr/twoFactorAuth';
import contactSupportEN from './languages/en/contactSupport';
import contactSupportFR from './languages/fr/contactSupport';

// Here are the languages used and the contents of each one
const resources: Resource = {
  en: {
    translation: {
      ...EN,
      ...twoFactorAuthEN,
      ...contactSupportEN,
    },
  },
  fr: {
    translation: {
      ...FR,
      ...twoFactorAuthFR,
      ...contactSupportFR,
    },
  },
};

// Get the best available language based on device settings
const deviceLanguage = RNLocalize.findBestLanguageTag([
  'en',
  'fr',
])?.languageTag;

// in this snippet is being initialized so we can use the lib
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  // language resources
  resources,
  // here is the language you will use by default
  lng: deviceLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already safes from xss
  },
});

export default i18n;
