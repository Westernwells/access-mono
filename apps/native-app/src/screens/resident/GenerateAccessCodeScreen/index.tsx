import React from 'react';
import {Box} from '@/components/ui/box';
import {Button, ButtonText} from '@/components/ui/button';
import {Switch} from '@/components/ui/switch';
import {Input, InputField} from '@/components/ui/input';
import {Card} from '@/components/ui/card';
import {HStack} from '@/components/ui/hstack';
import PageLayout from '@/components/layouts/PageLayout';
import {useForm, Controller} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlError,
  FormControlErrorText,
} from '@/components/ui/form-control';
import DatePickerField from '@/components/ui/datepicker';

const generateAccessCodeSchema = z.object({
  purpose: z.string().min(1, 'Purpose is required'),
  date: z
    .object({
      onlyOneDay: z.boolean(),
      startDate: z.date({required_error: 'Start date is required'}),
      endDate: z.date().optional(),
    })
    .refine(
      data => {
        if (!data.onlyOneDay && !data.endDate) {
          return false;
        }
        return true;
      },
      {
        message: 'End date is required when onlyOneDay is false',
        path: ['endDate'],
      },
    ),
});

type GenerateAccessCodeFormData = z.infer<typeof generateAccessCodeSchema>;

const defaultValues: GenerateAccessCodeFormData = {
  purpose: '',
  date: {
    onlyOneDay: true,
    startDate: new Date(),
    endDate: undefined,
  },
};
const GenerateAccessCodeScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
    setValue,
  } = useForm<GenerateAccessCodeFormData>({
    resolver: zodResolver(generateAccessCodeSchema),
    defaultValues,
  });

  const dateValue = watch('date');

  const onSubmit = (data: GenerateAccessCodeFormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <PageLayout safePadding={false}>
      <Box className="flex-1 px-4 pt-4 sm:px-6 md:px-8 pt-4 sm:pt-6">
        <Box className="flex flex-col gap-y-6">
          {/* Purpose */}
          <FormControl isInvalid={!!errors.purpose}>
            <FormControlLabel>
              <FormControlLabelText>Code Purpose</FormControlLabelText>
            </FormControlLabel>
            <Controller
              control={control}
              name="purpose"
              render={({field: {onChange, value}}) => (
                <Input>
                  <InputField
                    placeholder="Enter purpose"
                    value={value}
                    onChangeText={onChange}
                  />
                </Input>
              )}
            />
            {errors.purpose && (
              <FormControlError>
                <FormControlErrorText>
                  {errors.purpose.message}
                </FormControlErrorText>
              </FormControlError>
            )}
          </FormControl>

          <Card className="p-4 space-y-4 rounded-2xl  shadow-sm">
            {/* Only One Day Switch */}
            <FormControl>
              <HStack className="items-center justify-between mb-4">
                <FormControlLabel>
                  <FormControlLabelText>Only one day</FormControlLabelText>
                </FormControlLabel>
                <Controller
                  control={control}
                  name="date.onlyOneDay"
                  render={({field: {value}}) => (
                    <Switch
                      value={value}
                      onValueChange={val => {
                        setValue('date', {
                          onlyOneDay: val,
                          startDate: new Date(),
                          endDate: undefined,
                        });
                      }}
                    />
                  )}
                />
              </HStack>
            </FormControl>

            {/* Start Date Picker */}
            <FormControl isInvalid={!!errors.date?.startDate}>
              {!dateValue.onlyOneDay && (
                <FormControlLabel>
                  <FormControlLabelText>From Date</FormControlLabelText>
                </FormControlLabel>
              )}
              <Controller
                control={control}
                name="date.startDate"
                render={({field: {value, onChange}}) => (
                  <DatePickerField
                    value={value ?? null}
                    onChange={selectedDate => {
                      if (selectedDate instanceof Date) {
                        onChange(selectedDate);
                      }
                    }}
                    placeholderText="Select a valid date"
                  />
                )}
              />
            </FormControl>

            {/* End Date Picker (conditionally rendered) */}
            {!dateValue.onlyOneDay && (
              <FormControl isInvalid={!!errors.date?.endDate}>
                <FormControlLabel>
                  <FormControlLabelText>To Date</FormControlLabelText>
                </FormControlLabel>
                <Controller
                  control={control}
                  name="date.endDate"
                  render={({field: {value, onChange}}) => (
                    <DatePickerField
                      value={value ?? null}
                      onChange={selectedDate => {
                        if (selectedDate instanceof Date) {
                          onChange(selectedDate);
                        }
                      }}
                      placeholderText="Select end date"
                    />
                  )}
                />
              </FormControl>
            )}
          </Card>

          {/* Submit Button */}
          <Button
            variant="solid"
            action="surface"
            className="mt-6"
            onPress={handleSubmit(onSubmit)}>
            <ButtonText>Generate New Code</ButtonText>
          </Button>
        </Box>
      </Box>
    </PageLayout>
  );
};

export default GenerateAccessCodeScreen;
