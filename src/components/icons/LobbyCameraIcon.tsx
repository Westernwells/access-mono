import React from 'react';
import {Path, Rect, Circle} from 'react-native-svg';
import {createIcon} from '@/components/ui/icon';

export const LobbyCameraIcon = createIcon({
  viewBox: '0 0 24 24',
  path: (
    <>
      <Rect width="24" height="24" rx="8" fill="#D1712C" />
      <Circle
        cx="11.9998"
        cy="10.9793"
        r="4.52083"
        stroke="white"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.52164 13.8657C8.1861 14.0228 7.9455 14.3304 7.87382 14.6938L7.64695 15.8605C7.58044 16.2025 7.67029 16.5564 7.89191 16.8253C8.11354 17.0941 8.44375 17.2499 8.79219 17.2499H15.208C15.5565 17.2499 15.8867 17.0941 16.1083 16.8253C16.33 16.5564 16.4198 16.2025 16.3533 15.8605L16.1265 14.6938C16.0548 14.3304 15.8141 14.0228 15.4786 13.8657"
        stroke="white"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx="11.9998"
        cy="11.1248"
        r="1.45833"
        stroke="white"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5832 8.20817H11.4165"
        stroke="white"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
