import {Card} from '@/components/ui/card';
import {Box} from '@/components/ui/box';
import {Text} from '@/components/ui/text';
import {Radio, RadioIndicator, RadioIcon} from '@/components/ui/radio';
import {CircleIcon} from 'lucide-react-native';

interface SearchApartmentCardProps {
  item: {
    id: number;
    name: string;
    address: string;
  };
}

const SearchApartmentCard = ({item}: SearchApartmentCardProps) => {
  return (
    <Card className="flex flex-row justify-between items-center">
      <Box>
        <Text className="font-medium">{item.name}</Text>
        <Text size="xs" className="text-tertiary-800">
          {item.address}
        </Text>
      </Box>
      <Radio
        value={String(item.id)}
        size="md"
        onPress={() => console.log('pressed')}>
        <RadioIndicator>
          <RadioIcon as={CircleIcon} />
        </RadioIndicator>
      </Radio>
    </Card>
  );
};

export default SearchApartmentCard;
