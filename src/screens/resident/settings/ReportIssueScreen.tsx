import PageLayout from '@/components/layouts/PageLayout';
import {Box} from '@/components/ui/box';
import {Text} from '@/components/ui/text';
import {Button, ButtonText} from '@/components/ui/button';
import {Textarea, TextareaInput} from '@/components/ui/textarea';
import {useForm, Controller} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useTranslation} from 'react-i18next';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlError,
  FormControlErrorText,
} from '@/components/ui/form-control';

const issueCategoriePlaceholder = [
  'App Bug or Glitch',
  'Building Facility Issue',
  'Access Issues',
  'Other',
];

const schema = z.object({
  issueCategory: z.string().min(1, 'Category is required'),
  issue: z.string().min(1, 'Issue description is required'),
});

type FormData = z.infer<typeof schema>;

const ReportIssueScreen = () => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: {errors},
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      issueCategory: '',
      issue: '',
    },
  });
  const {t} = useTranslation();
  const selectedCategory = watch('issueCategory');

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <PageLayout safePadding={false}>
      <Box className="flex-1 p-8">
        <Box className="flex flex-col justify-between flex-1">
          <Box>
            <Text className="text-typography-500 text-sm mb-8">
              {t('reportIssueDescription')}
            </Text>

            {/* BUTTONS AREA */}
            <FormControl isInvalid={!!errors.issueCategory}>
              <FormControlLabel>
                <FormControlLabelText>
                  {t('selectIssueCategory')}
                </FormControlLabelText>
              </FormControlLabel>
              <Box className="flex flex-row flex-wrap gap-4 my-2">
                {issueCategoriePlaceholder.map((category, index) => (
                  <Button
                    key={index}
                    action={
                      selectedCategory === category ? 'primary' : 'surface'
                    }
                    onPress={() => setValue('issueCategory', category)}>
                    <ButtonText className="text-sm">{t(category)}</ButtonText>
                  </Button>
                ))}
              </Box>
              {errors.issueCategory && (
                <FormControlError>
                  <FormControlErrorText>
                    {errors.issueCategory.message}
                  </FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>

            <FormControl isInvalid={!!errors.issue} className="mt-8">
              <FormControlLabel>
                <FormControlLabelText>
                  {t('describeIssue')}
                </FormControlLabelText>
              </FormControlLabel>
              <Controller
                control={control}
                name="issue"
                render={({field: {onChange, value}}) => (
                  <Textarea
                    size="lg"
                    isReadOnly={false}
                    isInvalid={!!errors.issue}
                    isDisabled={false}
                    className="w-full h-auto min-h-[200px] py-1 px-4">
                    <TextareaInput
                      placeholder={t('issueDescriptionPlaceholder')}
                      className="font-typography-500 align-top "
                      value={value}
                      onChangeText={onChange}
                    />
                  </Textarea>
                )}
              />
              {errors.issue && (
                <FormControlError>
                  <FormControlErrorText>
                    {errors.issue.message}
                  </FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>
          </Box>

          <Button className="mt-8 mb-2" onPress={handleSubmit(onSubmit)}>
            <ButtonText>{t('submit')}</ButtonText>
          </Button>
        </Box>
      </Box>
    </PageLayout>
  );
};

export default ReportIssueScreen;
