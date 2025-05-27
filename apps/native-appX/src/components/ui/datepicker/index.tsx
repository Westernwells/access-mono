import React, {useState} from 'react';
import {Button, ButtonIcon, ButtonText} from '@/components/ui/button';
import {ArrowRight} from 'lucide-react-native';
import DatePicker from 'react-native-date-picker';

type DatePickerFieldProps = {
  value: Date | null;
  onChange: (date: Date) => void;
  placeholderText?: string;
};

const DatePickerField: React.FC<DatePickerFieldProps> = ({
  value,
  onChange,
  placeholderText = 'Select a date',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onPress={() => setIsOpen(true)}
        variant="outline"
        className="flex-row justify-between items-center">
        <ButtonText className="text-typography-950">
          {value instanceof Date ? value.toDateString() : placeholderText}
        </ButtonText>

        <ButtonIcon
          as={ArrowRight}
          size="md"
          className="ml-2" // Add margin-left to space the icon from text
        />
      </Button>

      <DatePicker
        modal
        open={isOpen}
        date={value ?? new Date()}
        mode="date"
        onConfirm={selectedDate => {
          onChange(selectedDate);
          setIsOpen(false);
        }}
        style={{
          justifyContent: 'center', // Ensures content is centered vertically
          alignItems: 'center', // Centers horizontally
        }}
        onCancel={() => setIsOpen(false)}
      />
    </>
  );
};

export default DatePickerField;
