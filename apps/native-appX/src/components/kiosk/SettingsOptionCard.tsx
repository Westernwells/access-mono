import {Card} from '@/components/ui/card';
import {Box} from '@/components/ui/box';
import {Text} from '@/components/ui/text';
import {ChevronRightIcon} from '@/components/ui/icon';
import {Button, ButtonIcon} from '@/components/ui/button';
import {
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
} from '@/components/ui/slider';
import {Switch} from '@/components/ui/switch';

type SettingsCardProps = {
  title?: string;
  subtitle?: string;
  type: 'button' | 'slider' | 'switch';
  onPress?: () => void;
  onValueChange?: (val: boolean | number) => void;
  value?: boolean | number;
};

const SettingsOptionCard = ({
  title,
  subtitle,
  type,
  onPress,
  onValueChange,
  value,
}: SettingsCardProps) => {
  return (
    <Card className="flex-row justify-between items-center p-4 h-16 w-full my-2">
      <Box className="flex-row items-center space-x-2">
        {title && (
          <Text size="xl" className="font-semibold text-typography-300">
            {title}:{' '}
          </Text>
        )}
        <Text size="xl" className="font-semibold text-typography-950">
          {subtitle}
        </Text>
      </Box>

      {type === 'button' && (
        <Button action="secondary" onPress={onPress} variant="link">
          <ButtonIcon size="xl" as={ChevronRightIcon} />
        </Button>
      )}

      {type === 'slider' && (
        <Box className="w-[150px] pr-5">
          <Slider
            value={value as number}
            onChange={onValueChange as (val: number) => void}
            size="md">
            <SliderTrack className="h-2">
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb className="bg-typography-950 border-2 border-primary-700" />
          </Slider>
        </Box>
      )}

      {type === 'switch' && (
        <Switch
          // isChecked={value as boolean}
          defaultValue={value as boolean}
          onToggle={onValueChange as (val: boolean) => void}
        />
      )}
    </Card>
  );
};

export default SettingsOptionCard;
