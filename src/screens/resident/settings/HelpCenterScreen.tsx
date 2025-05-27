import {useState} from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import {Text} from '@/components/ui/text';
import {Box} from '@/components/ui/box';
import {Card} from '@/components/ui/card';
import {VStack} from '@/components/ui/vstack';
import {Button, ButtonText} from '@/components/ui/button';
import {Input, InputSlot, InputIcon, InputField} from '@/components/ui/input';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionContentText,
  AccordionIcon,
  AccordionContent,
} from '@/components/ui/accordion';
import {ChevronUp, ChevronDown, SearchIcon} from 'lucide-react-native';
import {Heading} from '@/components/ui/heading';
import {useTranslation} from 'react-i18next';

const faqsPlaceholder = [
  {
    question: 'How do I unlock the main door?',
    answer: 'Use the app to send an unlock command when nearby.',
  },
  {
    question: 'Can I let guests in remotely?',
    answer: "Yes, tap 'Unlock' while on a call with them at the entrance.",
  },
  {
    question: "What if the app doesn't work?",
    answer: 'Ensure Bluetooth and internet are enabled, then retry.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, all data is encrypted and securely stored.',
  },
  {
    question: 'Can I see my unlock history?',
    answer: "Yes, view it in the 'History' tab of the app.",
  },
  {
    question: 'How do I add a family member?',
    answer: "Go to 'Users' and tap 'Invite' to add them.",
  },
  {
    question: 'Does the app work offline?',
    answer: 'It needs an internet connection to unlock remotely.',
  },
  {
    question: 'Can I report an issue?',
    answer: "Yes, use the 'Support' section in the app.",
  },
  {
    question: 'Will it work on all phones?',
    answer: 'It supports most iOS and Android devices.',
  },
  {
    question: 'Is there a backup way to enter?',
    answer: 'Yes, use your key fob or contact building staff.',
  },
];

const categoriesPlaceholder = [
  'App Setup',
  'Account & security',
  'Door Locking & Access Control',
  'Troubleshooing',
  'Contact Support',
];

const HelpCenterScreen = () => {
  const [search, setSearch] = useState('');
  const {t} = useTranslation();

  const filteredFaqs = faqsPlaceholder.filter(
    faq =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.question.toLowerCase().includes(search.toLowerCase()),
  );
  const handlePressCategory = (categorie: string) => {
    console.log('Category pressed: ', categorie);
  };

  return (
    <PageLayout safePadding={false}>
      <VStack className="mx-8 mt-8">
        <Text size="sm" className="text-typography-500">
          {t('faqs')}
        </Text>
        {/* Search FAQS section */}
        <Box className="my-4 flex-row items-center gap-2">
          <Input className="flex-1 mr-2">
            <InputSlot className="pl-4">
              <InputIcon as={SearchIcon} className="h-6 w-6" />
            </InputSlot>
            <InputField
              placeholder={t('search')}
              keyboardType="default"
              autoCapitalize="none"
              value={search}
              onChangeText={setSearch}
            />
          </Input>
          {search.length > 0 && (
            <Button variant="link" onPress={() => setSearch('')}>
              <ButtonText>{t('cancel')}</ButtonText>
            </Button>
          )}
        </Box>

        <Accordion className="m-0 w-full bg-transparent">
          {filteredFaqs.map((faq, index) => {
            return (
              <Card key={`question ${index}`} className="my-3 px-0">
                <AccordionItem
                  value={`item-${index + 1}`}
                  className="rounded-lg bg-transparent">
                  <AccordionHeader>
                    <AccordionTrigger className="focus:web:rounded-lg">
                      {({isExpanded}: {isExpanded: boolean}) => {
                        return (
                          <Box className="flex flex-row justify-between">
                            <AccordionTitleText className="font-medium text-sm">
                              {faq.question}
                            </AccordionTitleText>
                            {isExpanded ? (
                              <AccordionIcon as={ChevronUp} className="mr-3" />
                            ) : (
                              <AccordionIcon
                                as={ChevronDown}
                                className="mr-3"
                              />
                            )}
                          </Box>
                        );
                      }}
                    </AccordionTrigger>
                  </AccordionHeader>

                  <AccordionContent>
                    <AccordionContentText className="text-sm">
                      {faq.answer}
                    </AccordionContentText>
                  </AccordionContent>
                </AccordionItem>
              </Card>
            );
          })}
        </Accordion>

        {/* Categories */}
        <VStack className="my-8">
          <Heading className="text-typography-500 text-sm mb-4">
            {t('categories')}
          </Heading>
          <Box className="flex flex-row flex-wrap">
            {categoriesPlaceholder.map((categorie, index) => {
              return (
                <Button
                  size="xs"
                  key={`categories ${index}`}
                  action="surface"
                  onPress={() => handlePressCategory(categorie)}
                  className="m-3 ml-0">
                  <ButtonText>{categorie}</ButtonText>
                </Button>
              );
            })}
          </Box>
        </VStack>
      </VStack>
    </PageLayout>
  );
};

export default HelpCenterScreen;
