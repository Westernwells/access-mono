import {Card} from '@/components/ui/card';
import {Box} from '@/components/ui/box';
import {Text} from '@/components/ui/text';
import {Radio, RadioIndicator, RadioIcon} from '@/components/ui/radio';
import {CircleIcon} from 'lucide-react-native';

interface UnitCardProps {
  item: {
    id: number;
    unitNumber: string;
  };
}

const UnitCard = ({item}: UnitCardProps) => {
  return (
    <Card className="flex flex-row justify-between items-center">
      <Box>
        <Text className="font-medium">{item.unitNumber}</Text>
      </Box>
      <Radio
        value={String(item.id)}
        size="md"
        onPress={() => console.log(`selected unit id: ${item.id}`)}>
        <RadioIndicator>
          <RadioIcon as={CircleIcon} />
        </RadioIndicator>
      </Radio>
    </Card>
  );
};

export default UnitCard;
