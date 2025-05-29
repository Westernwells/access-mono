import { Request, Response } from "express";
import { HasuraActionErrorResponse } from "types/hasuraActionErrorResponse";
import { UserSignUpInput } from "types/generated/graphql";
import { RequestSmsVerifCodeOutput } from "types/generated/graphql";
import { createVerification } from "services/twilio/createVerification";
import { standardizeError } from "utils/errorUtils";

export async function requestSmsVerifCodeController(
  req: Request<
    never,
    RequestSmsVerifCodeOutput | HasuraActionErrorResponse,
    { input: { requestSmsVerifCodeData: UserSignUpInput } }
  >,
  res: Response<RequestSmsVerifCodeOutput | HasuraActionErrorResponse>
) {
  const { phone } = req.body.input.requestSmsVerifCodeData;

  try {
    const { verificationStatus } = await createVerification({
      to: phone,
    });

    return res.status(200).json({ verificationStatus });
  } catch (error: unknown) {
    console.error("☎️ [Request SMS Verification Code] Error:", error);

    // Use the utility to standardize the error
    const { message, status } = standardizeError(error);

    return res.status(status).json({
      message: message,
    });
  }
}
