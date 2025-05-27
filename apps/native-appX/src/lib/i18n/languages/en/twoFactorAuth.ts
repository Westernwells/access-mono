const twoFactorAuthEN = {
  // Choose 2FA screen
  choose2faMethod: 'Choose 2FA Method',
  email: 'Email',
  sms: 'SMS',
  authenticatorApp: 'Authenticator App',
  next: 'Next',

  // 2FA Enter screen
  setupAuthenticatorApp: 'Setup Authenticator App Page',
  email2faSubtitle:
    "We'll send a verification code to this email for added security.",
  sms2faSubtitle:
    "You'll receive a verification code via SMS to secure your account.",
  authenticatorApp2faSubtitle:
    'Scan the QR code below using your authenticator app, or manually enter the code.',
  sendVerificationCode: 'Send Verification Code',

  // 2FA verification Screen
  sixDigitsVerficationCodeSent: 'A 6-digit verification code has been sent to',
  authAppSixDigitsCodeSent: 'Enter 6-digit code from your authenticator app',
  yourEmail: 'your email:',
  yourPhone: 'your phone:',
  verifyCode: 'Verify Code',
  resendCode: 'Resend Code',
  enter2faVerificationCode: 'Enter Verification Code',
  twoFactorSmsEnabled: '2FA via SMS has been enabled.',
  twoFactorEmailEnabled: '2FA via email has been enabled.',
  twoFactorAuthAppEnabled: '2FA via authenticator app has been enabled.',
};

export default twoFactorAuthEN;
