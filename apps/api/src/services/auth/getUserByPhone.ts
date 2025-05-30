import createHttpError from "http-errors";
import { createAdminClient } from "lib/graphql/graphql-client";
import { GET_USER_BY_PHONE } from "lib/graphql/queries/getUserByPhone";
import { GetUserByPhoneQueryVariables } from "types/generated/graphql";
import { standardizeError } from "utils/errorUtils";

export async function getUserByPhone({
  variables,
}: {
  variables: GetUserByPhoneQueryVariables;
}) {
  try {
    const client = createAdminClient();

    const { users } = await client.request(GET_USER_BY_PHONE, variables);

    if (!users) {
      throw createHttpError(
        404,
        `User with phone ${variables.phone} not found`
      );
    }

    return { userId: users[0].id };
  } catch (error: unknown) {
    const { message, status } = standardizeError(error);
    throw createHttpError(
      status,
      `Error fetching user by phone: ${message}`
    );
  }
}
