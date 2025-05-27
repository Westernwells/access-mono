import {Path, Svg, Rect} from 'react-native-svg';

const PrivacyPolicyIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Rect width="24" height="24" rx="8" fill="#329BEC" />
      <Path
        d="M10.833 12L11.708 12.875L13.458 11.125"
        stroke="white"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.04199 11.2808C7.04199 13.8623 8.64452 16.1727 11.0625 17.0771L11.08 17.0836C11.6736 17.3056 12.3274 17.3054 12.9208 17.0831L12.935 17.0777C15.3552 16.1708 16.9587 13.8575 16.9587 11.273V9.10097C16.9587 8.59062 16.627 8.13951 16.1398 7.98736L12.3482 6.80306C12.1217 6.73231 11.879 6.73231 11.6525 6.80306L7.86084 7.98732C7.3737 8.13947 7.04199 8.59059 7.04199 9.10093V11.2808Z"
        stroke="white"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default PrivacyPolicyIcon;
