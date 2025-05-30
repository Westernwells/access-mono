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

export async function createVerification({ to }: { to: string }) {
  try {
    const verification = await client.verify.v2
      .services(process.env.TWILIO_SMS_VERIF_SERVICE_SID!)
      .verifications.create({
        channel: "sms",
        to,
      });

    return { verificationStatus: verification.status };
  } catch (error: unknown) {
    const { message, status } = standardizeError(error);
    throw createHttpError(
      status,
      `Error creating SMS verification: ${message}`
    );
  }
}
