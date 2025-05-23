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

export async function userSignInController(
  req: Request<
    {},
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
  } catch (error: any) {
    console.error("✏️ [User Sign In] Error:", error);
    return res.status(error?.status || 500).json({
      message: error?.message || String(error),
    });
  }
}
