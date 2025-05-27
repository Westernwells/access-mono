import React from 'react';
import {Path} from 'react-native-svg';
import {createIcon} from '@/components/ui/icon';

export const ShareIcon = createIcon({
  viewBox: '0 0 24 24',
  path: (
    <>
      <Path
        d="M16 5C17.1046 5 18 5.89543 18 7C18 8.10457 17.1046 9 16 9C14.8954 9 14 8.10457 14 7C14 5.89543 14.8954 5 16 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        d="M8 12C9.10457 12 10 12.8954 10 14C10 15.1046 9.10457 16 8 16C6.89543 16 6 15.1046 6 14C6 12.8954 6.89543 12 8 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        d="M16 15C17.1046 15 18 15.8954 18 17C18 18.1046 17.1046 19 16 19C14.8954 19 14 18.1046 14 17C14 15.8954 14.8954 15 16 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        d="M10.5 13L13.5 8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M13.5 15.5L10.5 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </>
  ),
});
