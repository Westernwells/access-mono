import React from 'react';
import {Path as SvgPath} from 'react-native-svg';
import {createIcon} from '@/components/ui/icon';
import {cssInterop} from 'nativewind';

// Create a scoped Path component just for this icon
const AppleIconPath = (props: React.ComponentProps<typeof SvgPath>) => (
  <SvgPath {...props} />
);

// Apply cssInterop only to this specific component
cssInterop(AppleIconPath, {
  fill: 'fill',
  stroke: 'stroke',
});

export const AppleIcon = createIcon({
  viewBox: '0 0 18 21',
  path: (
    <AppleIconPath
      d="M17.099 7.57173C17.0056 7.62744 14.7809 8.8031 14.7809 11.4098C14.8858 14.3826 17.5883 15.4252 17.6347 15.4252C17.5883 15.4809 17.2267 16.8454 16.1554 18.2757C15.3052 19.5078 14.3615 20.75 12.9286 20.75C11.5655 20.75 11.0762 19.9288 9.5035 19.9288C7.81451 19.9288 7.33661 20.75 6.04347 20.75C4.61052 20.75 3.59698 19.4412 2.70044 18.2207C1.5357 16.6232 0.545703 14.1164 0.510753 11.7093C0.4872 10.4338 0.744005 9.18004 1.3959 8.11507C2.31599 6.62831 3.95863 5.61905 5.75247 5.58577C7.12691 5.54164 8.35016 6.48434 9.18895 6.48434C9.9928 6.48434 11.4956 5.58577 13.196 5.58577C13.93 5.58649 15.8872 5.79703 17.099 7.57173ZM9.07271 5.3311C8.82806 4.16629 9.5035 3.00148 10.1326 2.25846C10.9364 1.3599 12.206 0.75 13.3009 0.75C13.3708 1.91481 12.9278 3.05719 12.1361 3.8892C11.4257 4.78777 10.2025 5.46422 9.07271 5.3311Z"
      fill={'currentColor'}
    />
  ),
});
