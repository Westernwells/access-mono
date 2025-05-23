import createHttpError from "http-errors";
import { createAdminClient } from "lib/graphql/graphql-client";
import { INSERT_USER } from "lib/graphql/mutations/insertUser";
import { InsertUserMutationVariables } from "types/generated/graphql";

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
  } catch (error: any) {
    throw createHttpError(
      error?.status || 500,
      `Error creating user: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}
