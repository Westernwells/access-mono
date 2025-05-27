import React, {useState} from 'react';
import {Text} from './ui/text';
import {
  Select,
  SelectTrigger,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
} from '@/components/ui/select';
import {ChevronDownIcon} from 'lucide-react-native';
import i18n from '@/lib/i18n/i18n';
import {HStack} from './ui/hstack';
import {useTranslation} from 'react-i18next';

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const {t} = useTranslation();

  const handleLanguageChange = (newLanguage: string) => {
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Select
      selectedValue={selectedLanguage}
      onValueChange={handleLanguageChange}>
      <SelectTrigger variant="transparent" size="md">
        <HStack className="flex-row justify-between items-center w-full px-2">
          <HStack>
            <Text size="sm" className="font-semibold text-typography-300">
              {t('systemLanguage')}:{' '}
            </Text>
            <Text size="sm" className="font-semibold text-typography-950">
              {selectedLanguage === 'en' ? ' English' : ' Français'}
            </Text>
          </HStack>
          <SelectIcon className="mr-3" as={ChevronDownIcon} />
        </HStack>
      </SelectTrigger>

      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          <SelectItem label="English" value="en" />
          <SelectItem label="Français" value="fr" />
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

export default LanguageSelector;
