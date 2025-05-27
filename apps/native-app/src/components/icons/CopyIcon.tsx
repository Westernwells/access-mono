import React from 'react';
import {Path} from 'react-native-svg';
import {createIcon} from '@/components/ui/icon';

export const CopyIcon = createIcon({
  viewBox: '0 0 24 24',
  path: (
    <>
      {/* Back sheet */}
      <Path
        d="M9 9H15C15.5523 9 16 9.44772 16 10V16C16 16.5523 15.5523 17 15 17H9C8.44772 17 8 16.5523 8 16V10C8 9.44772 8.44772 9 9 9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Front sheet */}
      <Path
        d="M10 7H16C16.5523 7 17 7.44772 17 8V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
