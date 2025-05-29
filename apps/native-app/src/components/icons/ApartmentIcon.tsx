import React from 'react';
import {Path, Rect} from 'react-native-svg';
import {createIcon} from '@/components/ui/icon';

export const ApartmentIcon = createIcon({
  viewBox: '0 0 24 24',
  path: (
    <>
      <Rect width="24" height="24" rx="8" fill="#D1712C" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.33162 7.33154H13.1674C13.4897 7.33154 13.751 7.59282 13.751 7.91512V16.6688H7.33162C7.00932 16.6688 6.74805 16.4075 6.74805 16.0852V7.91512C6.74805 7.59282 7.00932 7.33154 7.33162 7.33154Z"
        stroke="white"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.751 9.66602H16.6689C16.9912 9.66602 17.2524 9.92729 17.2524 10.2496V16.0854C17.2524 16.4077 16.9912 16.6689 16.6689 16.6689H13.751V9.66602Z"
        stroke="white"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[
        [9.08232, 9.59286],
        [11.4163, 9.59286],
        [9.08232, 11.9273],
        [11.4163, 11.9273],
        [9.08232, 14.2613],
        [11.4163, 14.2613],
        [15.5017, 11.9273],
        [15.5017, 14.2613],
      ].map(([x, y], idx) => (
        <Path
          key={idx}
          d={`M${x} ${y}C${x - 0.0403} ${y} ${x - 0.073} ${y + 0.0327} ${
            x - 0.073
          } ${y + 0.073}
             C${x - 0.073} ${y + 0.1136} ${x - 0.0403} ${y + 0.1463} ${x} ${
            y + 0.1463
          }
             C${x + 0.0403} ${y + 0.1463} ${x + 0.073} ${y + 0.1136} ${
            x + 0.073
          } ${y + 0.073}
             C${x + 0.073} ${y + 0.0327} ${x + 0.0403} ${y} ${x} ${y}`}
          stroke="white"
          strokeWidth="0.875"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </>
  ),
});
