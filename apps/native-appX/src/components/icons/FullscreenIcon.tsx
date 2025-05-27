import {Svg, Path} from 'react-native-svg';

const FullscreenIcon = () => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 21H5.5C4.395 21 3.5 20.105 3.5 19V5C3.5 3.895 4.395 3 5.5 3H19.5C20.605 3 21.5 3.895 21.5 5V19C21.5 20.105 20.605 21 19.5 21Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5 6H18.5V10"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5 18H6.5V14"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default FullscreenIcon;
