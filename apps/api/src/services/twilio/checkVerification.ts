import twilio from "twilio";
import createHttpError from "http-errors";
import { standardizeError } from "utils/errorUtils";

// Ref: https://www.twilio.com/docs/verify/quickstarts/node-express#install-nodejs-and-the-twilio-helper-library

if (
  !process.env.TWILIO_ACCOUNT_SID ||
  !process.env.TWILIO_AUTH_TOKEN ||
  !process.env.TWILIO_SMS_VERIF_SERVICE_SID
) {
  throw new Error(
    "TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN and TWILIO_SMS_VERIF_SERVICE_SID must be set"
  );
}

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export async function checkVerification({
  to,
  code,
}: {
  to: string;
  code: string;
}) {
  try {
    const verificationCheck = await client.verify.v2
      .services(process.env.TWILIO_SMS_VERIF_SERVICE_SID!)
      .verificationChecks.create({
        code,
        to,
      });

    if (!verificationCheck.valid) {
      throw createHttpError(400, "Invalid verification code");
    }
  } catch (error: unknown) {
    const { message, status } = standardizeError(error);
    throw createHttpError(
      status,
      `Error checking SMS verification: ${message}`
    );
  }
}
