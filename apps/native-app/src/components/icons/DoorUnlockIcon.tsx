import React from 'react';
import {Svg, Path} from 'react-native-svg';

export const DoorUnLockIcon = ({
  size = 'medium',
}: {
  size?: 'mini' | 'small' | 'medium' | 'large';
}) => {
  const dimensions = {
    mini: 30,
    small: 60,
    medium: 150,
    large: 225,
  }[size];

  return (
    <Svg width={dimensions} height={dimensions} viewBox="0 0 57 56" fill="none">
      <Path
        d="M19.1667 25.6665V30.3332"
        stroke="#D1712C"
        strokeWidth={3.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.5 11.6731V44.3258C7.5 47.7955 11.1517 50.0518 14.2527 48.5001L23.586 43.8335C25.168 43.0401 26.1667 41.4255 26.1667 39.6568V16.3398C26.1667 14.5711 25.168 12.9565 23.586 12.1655L14.2527 7.49881C11.1517 5.94714 7.5 8.20347 7.5 11.6731Z"
        stroke="#D1712C"
        strokeWidth={3.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M46.9111 35.5764C50.3598 31.1571 50.3598 24.8407 46.9111 20.4214"
        stroke="#D1712C"
        strokeWidth={3.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M40.9924 23.5806C43.0014 26.1566 43.0014 29.8409 40.9924 32.4192"
        stroke="#D1712C"
        strokeWidth={3.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M42.5 41.9977V44.331C42.5 46.9093 40.4117 48.9977 37.8333 48.9977H12.1667C9.58833 48.9977 7.5 46.9093 7.5 44.331V11.6667C7.5 9.08833 9.58833 7 12.1667 7H37.8333C40.4117 7 42.5 9.08833 42.5 11.6667V14"
        stroke="#D1712C"
        strokeWidth={3.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
};
