import {Svg, Rect, Path} from 'react-native-svg';

const TwoFactorAuthIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Rect width="24" height="24" rx="8" fill="#33D26A" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6663 11.5582C16.6663 14.1062 14.8248 16.4943 12.303 17.2083C12.1058 17.2643 11.8935 17.2643 11.6963 17.2083C9.17459 16.4949 7.33301 14.1062 7.33301 11.5582V9.20851C7.33301 8.73484 7.61942 8.30784 8.05809 8.12876L10.8954 6.96793C11.6036 6.67801 12.3969 6.67801 13.1045 6.96793L15.9418 8.12876C16.3799 8.30784 16.6663 8.73484 16.6663 9.20851V11.5582Z"
        stroke="white"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8971 11.9564C13.1514 11.6711 13.2716 11.2645 13.1578 10.8334C13.0522 10.4321 12.7232 10.1049 12.3219 10.0004C11.5198 9.79161 10.7988 10.3913 10.7988 11.1595C10.7988 11.4658 10.9137 11.7446 11.1022 11.9564C11.2375 12.108 11.2923 12.3139 11.2369 12.5094L11.0117 13.2986C10.905 13.6714 11.185 14.0424 11.5729 14.0424H12.4281C12.8154 14.0424 13.0954 13.6714 12.9892 13.2986L12.7641 12.5094C12.7069 12.3139 12.7623 12.108 12.8971 11.9564V11.9564Z"
        stroke="white"
        strokeWidth="0.875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default TwoFactorAuthIcon;
