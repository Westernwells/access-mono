import { Request, Response } from "express";
import { HasuraActionErrorResponse } from "types/hasuraActionErrorResponse";
import { RolesEnum, UserSignUpInput } from "types/generated/graphql";
import { UserSignUpOutput } from "types/generated/graphql";
import { createUser } from "services/auth/createUser";
import { generateJwt } from "services/jwt/generateJwt";
import { checkVerification } from "services/twilio/checkVerification";

export async function userSignUpController(
  req: Request<
    {},
    UserSignUpOutput | HasuraActionErrorResponse,
    { input: { signUpData: UserSignUpInput } }
  >,
  res: Response<UserSignUpOutput | HasuraActionErrorResponse>
) {
  const { email, name, phone, unitId, verificationCode } =
    req.body.input.signUpData;

  try {
    await checkVerification({
      to: phone,
      code: verificationCode,
    });

    const { userId } = await createUser({
      variables: {
        object: {
          email,
          name,
          role: RolesEnum.RESIDENT,
          phone,
          user_units: {
            data: [
              {
                unit_id: unitId,
              },
            ],
          },
        },
      },
    });

    const accessToken = generateJwt({
      userId,
      role: RolesEnum.RESIDENT,
    });

    return res.status(200).json({ accessToken, userId });
  } catch (error: any) {
    console.error("✏️ [User Sign Up] Error:", error);
    return res.status(error?.status || 500).json({
      message: error?.message || String(error),
    });
  }
}
