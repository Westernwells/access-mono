const twoFactorAuthFR = {
  // Choose 2FA screen
  choose2faMethod: 'Choisissez la méthode 2FA',
  email: 'Email',
  sms: 'SMS',
  authenticatorApp: "Application d'Authentification",
  next: 'Suivant',

  // 2FA Enter screen
  setupAuthenticatorApp: "Configuration de l'Application d'Authentification",
  email2faSubtitle:
    'Nous enverrons un code de vérification à cet e-mail pour plus de sécurité.',
  sms2faSubtitle:
    'Vous recevrez un code de vérification par SMS pour sécuriser votre compte.',
  authenticatorApp2faSubtitle:
    'Scannez le code QR ci-dessous avec votre application d’authentification, ou entrez le code manuellement.',
  sendVerificationCode: 'Envoyer le code de vérification',

  // 2FA verification Screen
  sixDigitsVerficationCodeSent:
    'Un code de vérification à 6 chiffres a été envoyé à',
  authAppSixDigitsCodeSent:
    'Entrez le code à 6 chiffres de votre application d’authentification',
  yourEmail: 'votre e-mail:',
  yourPhone: 'votre téléphone:',
  verifyCode: 'Verifié le Code',
  enter2faVerificationCode: 'Entrez le Code de Vérification',
  twoFactorSmsEnabled: 'La 2FA par SMS a été activée.',
  twoFactorEmailEnabled: 'La 2FA par e-mail a été activée.',
  twoFactorAuthAppEnabled:
    "La 2FA via l'application d'authentification a été activée.",
};

export default twoFactorAuthFR;
