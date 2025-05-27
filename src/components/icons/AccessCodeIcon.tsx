import React from 'react';
import {Path, Rect} from 'react-native-svg';
import {createIcon} from '@/components/ui/icon';

export const AccessCodeIcon = createIcon({
  viewBox: '0 0 24 24',
  path: (
    <>
      <Rect width="24" height="24" rx="8" fill="#05BAAF" />
      <Path
        d="M13.7677 10.4498C13.7677 10.329 13.6697 10.2316 13.549 10.2316C13.4282 10.2322 13.3302 10.3302 13.3302 10.4509C13.3302 10.5717 13.4282 10.6697 13.549 10.6691C13.6697 10.6691 13.7677 10.5711 13.7677 10.4504"
        stroke="white"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2909 13.6248L11.6901 14.2268H10.6214V15.0837H9.76684V16.1547L8.96534 16.9585H7.0415V15.0306L10.3799 11.6846C9.90975 10.4631 10.1618 9.02693 11.1447 8.04168C12.4747 6.70876 14.6313 6.70876 15.9613 8.04168C17.2913 9.3746 17.2913 11.5358 15.9613 12.8693C14.9684 13.8633 13.5171 14.1142 12.2909 13.6248Z"
        stroke="white"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
