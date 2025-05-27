import {Box} from '@/components/ui/box';
import {
  Toast,
  ToastTitle,
  useToast,
  ToastDescription,
} from '@/components/ui/toast';
import {HStack} from '@/components/ui/hstack';
import {Icon} from '@/components/ui/icon';
import {VStack} from './ui/vstack';

type ShowToastProps = {
  title: string;
  subtitle?: string;
  duration?: number;
  icon: React.ElementType;
  placement?:
    | 'top'
    | 'top right'
    | 'top left'
    | 'bottom'
    | 'bottom left'
    | 'bottom right';
};

export function useReusableToast() {
  const toast = useToast();

  function show({
    title,
    subtitle,
    duration = 3000,
    icon,
    placement = 'top',
  }: ShowToastProps) {
    if (!title) return;
    const id = Math.random().toString();
    toast.show({
      id,
      placement,
      duration,
      render: () => (
        <Box className="pt-20 px-10">
          <Toast
            className="h-full"
            variant="solid"
            action="muted"
            nativeID={`toast-${id}`}>
            <HStack space="md" className="items-center w-5/6 h-full">
              <Icon as={icon} />
              <VStack>
                <ToastTitle className="text-typography-950">{title}</ToastTitle>
                {subtitle && (
                  <ToastDescription size="sm" className="text-typography-500">
                    {subtitle}
                  </ToastDescription>
                )}
              </VStack>
            </HStack>
          </Toast>
        </Box>
      ),
    });
  }

  return {show};
}
