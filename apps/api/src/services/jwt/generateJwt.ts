import * as jwt from "jsonwebtoken";
import { RolesEnum } from "types/generated/graphql";

// Ref: https://hasura.io/learn/graphql/hasura-authentication/integrations/nodejs-express/
// TODO: better pattern to verify env var globally ?
if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not set");
}

const secret = process.env.JWT_SECRET;

const JWT_CONFIG: jwt.SignOptions = {
  algorithm: "HS256",
  expiresIn: "30d",
};

interface GenerateJWTParams {
  userId: string;
  role: RolesEnum;
  otherClaims?: Record<string, string | string[]>;
}

export function generateJwt({
  userId,
  role,
  otherClaims,
}: GenerateJWTParams): string {
  const payload = {
    userId,
    role,
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": Object.values(RolesEnum),
      "x-hasura-default-role": role,
      ...otherClaims,
    },
  };
  return jwt.sign(payload, secret, JWT_CONFIG);
}
