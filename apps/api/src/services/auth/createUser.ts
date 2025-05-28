import createHttpError from "http-errors";
import { createAdminClient } from "lib/graphql/graphql-client";
import { INSERT_USER } from "lib/graphql/mutations/insertUser";
import { InsertUserMutationVariables } from "types/generated/graphql";
import { standardizeError } from "utils/errorUtils";

export async function createUser({
  variables,
}: {
  variables: InsertUserMutationVariables;
}) {
  try {
    const client = createAdminClient();

    const { insert_users_one } = await client.request(INSERT_USER, variables);

    if (!insert_users_one) {
      throw createHttpError(400, `Unable to create new user`);
    }

    return { userId: insert_users_one.id };
  } catch (error: unknown) {
    const { message, status } = standardizeError(error);
    throw createHttpError(
      status,
      `Error creating user: ${message}`
    );
  }
}
