import { Request, Response } from "express";
import { HasuraActionErrorResponse } from "types/hasuraActionErrorResponse";
import {
  RolesEnum,
  UserSignInInput,
  UserSignInOutput,
} from "types/generated/graphql";
import { generateJwt } from "services/jwt/generateJwt";
import { getUserByPhone } from "services/auth/getUserByPhone";
import { checkVerification } from "services/twilio/checkVerification";
import { standardizeError } from "utils/errorUtils";

export async function userSignInController(
  req: Request<
    never,
    UserSignInOutput | HasuraActionErrorResponse,
    { input: { signInData: UserSignInInput } }
  >,
  res: Response<UserSignInOutput | HasuraActionErrorResponse>
) {
  const { phone, verificationCode } = req.body.input.signInData;

  try {
    const { userId } = await getUserByPhone({
      variables: {
        phone,
      },
    });

    await checkVerification({
      to: phone,
      code: verificationCode,
    });

    const accessToken = generateJwt({
      userId,
      role: RolesEnum.RESIDENT,
    });

    return res.status(200).json({ accessToken, userId });
  } catch (error: unknown) {
    console.error("✏️ [User Sign In] Error:", error);
    const { message, status } = standardizeError(error);
    return res.status(status).json({
      message: message,
    });
  }
}
