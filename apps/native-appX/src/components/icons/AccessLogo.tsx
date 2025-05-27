import React from 'react';
import {
  Path,
  Defs,
  RadialGradient,
  Stop,
  Mask,
  G,
  ClipPath,
  Rect,
} from 'react-native-svg';
import {createIcon} from '@/components/ui/icon';

export const AccessLogo = createIcon({
  viewBox: '0 0 80 86',
  path: (
    <>
      <Defs>
        <RadialGradient
          id="paint0_radial_477_7602"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(39.4347 42.9856) rotate(90) scale(42.8426 39.4191)">
          <Stop stopColor="#FF8F3E" />
          <Stop offset="1" stopColor="#D1712C" />
        </RadialGradient>
        <RadialGradient
          id="paint1_radial_477_7602"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(38.0675 42.5574) rotate(90) scale(12.4885 4.59877)">
          <Stop stopColor="#FF8F3E" />
          <Stop offset="1" stopColor="#D1712C" />
        </RadialGradient>
        <Mask
          id="mask0_477_7602"
          style={{maskType: 'luminance'}}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="79"
          height="86">
          <Path
            d="M0.015625 0.143066H78.4612V85.8282H0.015625V0.143066Z"
            fill="white"
          />
        </Mask>
        <Mask
          id="mask1_477_7602"
          style={{maskType: 'luminance'}}
          maskUnits="userSpaceOnUse"
          x="-1"
          y="0"
          width="80"
          height="86">
          <Path
            d="M-0.000976562 18.7766V67.1995C-0.000976562 77.4868 13.7731 85.8331 30.7683 85.8331H48.116C65.1112 85.8331 78.8852 77.4868 78.8852 67.1995V18.7766C78.8852 8.48449 65.1112 0.143066 48.116 0.143066H30.7683C13.7731 0.143066 -0.000976562 8.48449 -0.000976562 18.7766Z"
            fill="white"
          />
        </Mask>
        <Mask
          id="mask2_477_7602"
          style={{maskType: 'luminance'}}
          maskUnits="userSpaceOnUse"
          x="33"
          y="29"
          width="11"
          height="29">
          <Path
            d="M33.4697 29.5308H43.7552V57.0394H33.4697V29.5308Z"
            fill="white"
          />
        </Mask>
        <Mask
          id="mask3_477_7602"
          style={{maskType: 'luminance'}}
          maskUnits="userSpaceOnUse"
          x="23"
          y="27"
          width="31"
          height="32">
          <Path
            d="M39.1813 27.9595L53.9332 42.3451L38.6924 58.0604L23.9473 43.6748L39.1813 27.9595Z"
            fill="white"
          />
        </Mask>
        <ClipPath id="clip0_477_7602">
          <Rect
            width="80"
            height="85.7143"
            fill="white"
            transform="translate(0 0.143066)"
          />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip0_477_7602)">
        <G mask="url(#mask0_477_7602)">
          <G mask="url(#mask1_477_7602)">
            <Path
              d="M0.015625 0.143066L51.8666 8.2273V77.744L0.015625 85.8282H78.8538V0.143066H39.4347H0.015625Z"
              fill="url(#paint0_radial_477_7602)"
            />
          </G>
        </G>
        <G mask="url(#mask2_477_7602)">
          <G mask="url(#mask3_477_7602)">
            <Path
              d="M37.1281 42.5876C37.175 45.7105 38.0991 47.8663 39.1973 47.8462L40.7106 47.826C41.7486 47.8126 42.6057 48.6454 42.6191 49.6931L42.6659 53.0914C42.686 54.1323 41.849 54.992 40.8111 55.0054L38.1661 55.0457C35.675 55.0793 33.5724 49.7334 33.472 42.6413C33.4251 39.0886 33.8938 36.2477 34.6773 33.9173C35.4608 31.5801 36.5723 30.1227 37.8178 30.1026L40.4629 30.069C41.5008 30.0556 42.3579 30.8884 42.3713 31.9293L42.4182 35.3343C42.4383 36.3753 41.6012 37.2349 40.5633 37.2484L39.05 37.2685C37.9518 37.282 37.088 39.4647 37.1281 42.5876Z"
              fill="url(#paint1_radial_477_7602)"
            />
          </G>
        </G>
      </G>
    </>
  ),
});
