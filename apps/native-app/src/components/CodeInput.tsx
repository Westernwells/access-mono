import {useState, useRef, useEffect} from 'react';
import {Box} from '@/components/ui/box';
import {HStack} from '@/components/ui/hstack';
import {
  TextInput,
  Keyboard,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import {cn} from '@/lib/utils';

type Props = {
  onComplete: (code: string) => void;
  error?: boolean;
  codeLength?: number;
};

const DEFAULT_CODE_LENGTH = 6;

export default function CodeInput({
  onComplete,
  error = false,
  codeLength = DEFAULT_CODE_LENGTH,
}: Props) {
  const [code, setCode] = useState<string[]>(Array(codeLength).fill(''));
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const inputRefs = useRef<Array<TextInput | null>>([]);

  // Initialize refs
  useEffect(() => {
    inputRefs.current = Array(codeLength)
      .fill(0)
      .map(() => null);
  }, [codeLength]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, [inputRefs]);

  useEffect(() => {
    if (code.every(char => char !== '')) {
      onComplete(code.join(''));
      Keyboard.dismiss();
    }
  }, [code, onComplete]);

  const handleChangeText = (text: string, index: number) => {
    if (text.length > 1) {
      const pasted = text.slice(0, codeLength).split('');
      const newCode = Array(codeLength).fill('');
      pasted.forEach((char, i) => {
        if (i < codeLength) newCode[i] = char;
      });
      setCode(newCode);
      inputRefs.current[Math.min(pasted.length - 1, codeLength - 1)]?.focus();
      return;
    }

    if (text === '' && code[index] !== '') {
      const newCode = [...code];
      newCode[index] = '';
      setCode(newCode);
      return;
    }

    if (text !== '') {
      const newCode = [...code];
      newCode[index] = text;
      setCode(newCode);
      if (index < codeLength - 1) inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    if (e.nativeEvent.key === 'Backspace' && code[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <HStack space="sm" className="my-10">
      {Array(codeLength)
        .fill(0)
        .map((_, index) => (
          <Box
            key={index}
            className={cn(
              'w-[56px] h-[56px] rounded border bg-background-600',
              focusedIndex === index
                ? 'border-primary-700'
                : 'border-background-0',
              error ? 'border-error-500' : '',
            )}>
            <TextInput
              ref={el => {
                inputRefs.current[index] = el;
              }}
              className="w-full h-full text-xl font-bold text-center text-typography-950"
              value={code[index]}
              onChangeText={text => handleChangeText(text, index)}
              onKeyPress={e => handleKeyPress(e, index)}
              onFocus={() => setFocusedIndex(index)}
              onBlur={() => {
                setTimeout(() => {
                  const isFocusedElsewhere = inputRefs.current.some(
                    (ref, i) => i !== index && ref?.isFocused?.(),
                  );
                  if (!isFocusedElsewhere) setFocusedIndex(-1);
                }, 50);
              }}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              maxLength={index === 0 ? codeLength : 1}
              autoCapitalize="characters"
              selectTextOnFocus
              selectionColor="#FF5500"
            />
          </Box>
        ))}
    </HStack>
  );
}
