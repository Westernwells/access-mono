import {tva} from '@gluestack-ui/nativewind-utils/tva';
import {isWeb} from '@gluestack-ui/nativewind-utils/IsWeb';

const baseStyle = isWeb
  ? 'font-sans tracking-sm bg-transparent border-0 box-border display-inline list-none margin-0 padding-0 position-relative text-start no-underline whitespace-pre-wrap word-wrap-break-word'
  : '';

export const headingStyle = tva({
  base: `text-typography-900 font-bold font-heading tracking-sm my-0 ${baseStyle}`,
  variants: {
    isTruncated: {
      true: 'truncate',
    },
    bold: {
      true: 'font-bold',
    },
    underline: {
      true: 'underline',
    },
    strikeThrough: {
      true: 'line-through',
    },
    sub: {
      true: 'text-xs',
    },
    italic: {
      true: 'italic',
    },
    highlight: {
      true: 'bg-yellow-500',
    },
    size: {
      '6xl': 'text-6xl leading-tight',
      '5xl': 'text-5xl leading-tight',
      '4xl': 'text-4xl leading-tight',
      '3xl': 'text-3xl leading-tight',
      '2xl': 'text-2xl leading-tight',
      xl: 'text-xl leading-tight',
      lg: 'text-lg leading-tight',
      base: 'text-base leading-tight',
      sm: 'text-sm leading-tight',
      xs: 'text-xs leading-tight',
    },
  },
});
