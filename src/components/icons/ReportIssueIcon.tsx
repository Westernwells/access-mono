import {Svg, Rect, Path} from 'react-native-svg';

const ReportIssueIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Rect width="24" height="24" rx="8" fill="#F4A70A" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6.75V6.75C14.8998 6.75 17.25 9.10025 17.25 12V12C17.25 14.8998 14.8998 17.25 12 17.25V17.25C9.10025 17.25 6.75 14.8998 6.75 12V12C6.75 9.10025 9.10025 6.75 12 6.75Z"
        stroke="white"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9997 12.2917V9.375"
        stroke="white"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9991 14.3333C11.9186 14.3333 11.8533 14.3987 11.8538 14.4792C11.8538 14.5597 11.9192 14.625 11.9997 14.625C12.0802 14.625 12.1455 14.5597 12.1455 14.4792C12.1455 14.3987 12.0802 14.3333 11.9991 14.3333"
        stroke="white"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ReportIssueIcon;
