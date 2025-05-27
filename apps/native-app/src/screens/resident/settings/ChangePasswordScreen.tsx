import React, {useState} from 'react';
import {Box} from '@/components/ui/box';
import {Input, InputField, InputSlot, InputIcon} from '@/components/ui/input';
import PageLayout from '@/components/layouts/PageLayout';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlError,
  FormControlErrorText,
} from '@/components/ui/form-control';
import {Button, ButtonText} from '@/components/ui/button';
import {EyeIcon, EyeOffIcon} from 'lucide-react-native';

const schema = z
  .object({
    currentPassword: z.string().min(1, 'Current password is required'),
    newPassword: z
      .string()
      .min(10, 'New password must be at least 8 characters'),
    confirmNewPassword: z.string().min(1, 'Please confirm your new password'),
  })
  .refine(data => data.newPassword !== data.currentPassword, {
    message: 'New password must be different from current password',
    path: ['newPassword'],
  })
  .refine(data => data.newPassword === data.confirmNewPassword, {
    message: 'Passwords do not match',
    path: ['confirmNewPassword'],
  });

type FormData = z.infer<typeof schema>;

const ChangePasswordScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  });
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log('Updated info:', data);
    // handle update logic
  };

  return (
    <PageLayout safePadding={false}>
      <Box className="flex flex-col justify-between h-full px-8">
        <Box className="flex-1 py-6">
          <Box className="flex flex-col gap-5">
            <FormControl isInvalid={!!errors.currentPassword}>
              <FormControlLabel>
                <FormControlLabelText>Current Password</FormControlLabelText>
              </FormControlLabel>
              <Controller
                control={control}
                name="currentPassword"
                render={({field: {onChange, value}}) => (
                  <Input>
                    <InputField
                      secureTextEntry={!showCurrentPassword}
                      placeholder="Current password"
                      value={value}
                      onChangeText={onChange}
                    />
                    <InputSlot
                      className="pr-3"
                      onPress={() =>
                        setShowCurrentPassword(!showCurrentPassword)
                      }>
                      <InputIcon
                        as={showCurrentPassword ? EyeIcon : EyeOffIcon}
                      />
                    </InputSlot>
                  </Input>
                )}
              />
              {errors.currentPassword && (
                <FormControlError>
                  <FormControlErrorText>
                    {errors.currentPassword.message}
                  </FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>

            <FormControl isInvalid={!!errors.newPassword}>
              <FormControlLabel>
                <FormControlLabelText>New Password</FormControlLabelText>
              </FormControlLabel>
              <Controller
                control={control}
                name="newPassword"
                render={({field: {onChange, value}}) => (
                  <Input>
                    <InputField
                      secureTextEntry={!showNewPassword}
                      placeholder="Enter your new password"
                      value={value}
                      onChangeText={onChange}
                    />
                    <InputSlot
                      className="pr-3"
                      onPress={() => setShowNewPassword(!showNewPassword)}>
                      <InputIcon as={showNewPassword ? EyeIcon : EyeOffIcon} />
                    </InputSlot>
                  </Input>
                )}
              />
              {errors.newPassword && (
                <FormControlError>
                  <FormControlErrorText>
                    {errors.newPassword.message}
                  </FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>

            <FormControl isInvalid={!!errors.confirmNewPassword}>
              <FormControlLabel>
                <FormControlLabelText>
                  Confirm New Password
                </FormControlLabelText>
              </FormControlLabel>
              <Controller
                control={control}
                name="confirmNewPassword"
                render={({field: {onChange, value}}) => (
                  <Input>
                    <InputField
                      secureTextEntry={!showConfirmPassword}
                      placeholder="Confirm new password"
                      value={value}
                      onChangeText={onChange}
                    />
                    <InputSlot
                      className="pr-3"
                      onPress={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }>
                      <InputIcon
                        as={showConfirmPassword ? EyeIcon : EyeOffIcon}
                      />
                    </InputSlot>
                  </Input>
                )}
              />
              {errors.confirmNewPassword && (
                <FormControlError>
                  <FormControlErrorText>
                    {errors.confirmNewPassword.message}
                  </FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>
          </Box>
        </Box>

        <Button className="mb-8 px-8" onPress={handleSubmit(onSubmit)}>
          <ButtonText>Save</ButtonText>
        </Button>
      </Box>
    </PageLayout>
  );
};

export default ChangePasswordScreen;
