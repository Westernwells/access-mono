import {graphql} from '@/types/generated';

export const REQUEST_SMS_VERIF_CODE = graphql(`
  query RequestSmsVerifCode(
    $requestSmsVerifCodeData: RequestSmsVerifCodeInput!
  ) {
    requestSmsVerifCode(requestSmsVerifCodeData: $requestSmsVerifCodeData) {
      verificationStatus
    }
  }
`);
