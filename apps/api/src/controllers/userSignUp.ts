import { Request, Response } from "express";
import { HasuraActionErrorResponse } from "types/hasuraActionErrorResponse";
import { RolesEnum, UserSignUpInput } from "types/generated/graphql";
import { UserSignUpOutput } from "types/generated/graphql";
import { createUser } from "services/auth/createUser";
import { generateJwt } from "services/jwt/generateJwt";
import { checkVerification } from "services/twilio/checkVerification";
import { standardizeError } from "utils/errorUtils";

export async function userSignUpController(
  req: Request<
    never,
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
  } catch (error: unknown) {
    console.error("✏️ [User Sign Up] Error:", error);
    const { message, status } = standardizeError(error);
    return res.status(status).json({
      message: message,
    });
  }
}
