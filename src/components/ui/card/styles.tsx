import {tva} from '@gluestack-ui/nativewind-utils/tva';
import {isWeb} from '@gluestack-ui/nativewind-utils/IsWeb';
const baseStyle = isWeb ? 'flex flex-col relative z-0' : '';

export const cardStyle = tva({
  base: baseStyle,
  variants: {
    size: {
      sm: 'py-3 px-4 rounded-md',
      md: 'py-4 px-6 rounded',
      lg: 'py-6 px-8 rounded-xl',
    },
    variant: {
      elevated: 'bg-background-600',
      outline: 'border border-outline-200 ',
      ghost: 'rounded-none',
      filled: 'bg-background-50',
    },
  },
});
