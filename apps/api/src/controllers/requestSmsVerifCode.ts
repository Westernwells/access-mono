import { Request, Response } from "express";
import { HasuraActionErrorResponse } from "types/hasuraActionErrorResponse";
import { UserSignUpInput } from "types/generated/graphql";
import { RequestSmsVerifCodeOutput } from "types/generated/graphql";
import { createVerification } from "services/twilio/createVerification";

export async function requestSmsVerifCodeController(
  req: Request<
    {},
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
  } catch (error: any) {
    console.error("☎️ [Request SMS Verification Code] Error:", error);
    return res.status(error?.status || 500).json({
      message: error?.message || String(error),
    });
  }
}
