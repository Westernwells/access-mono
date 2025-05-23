import { GraphQLClient } from "graphql-request";

// Client for admin access
export const createAdminClient = () => {
  if (!process.env.HASURA_GRAPHQL_ADMIN_SECRET) {
    throw new Error("HASURA_GRAPHQL_ADMIN_SECRET is not set");
  }

  if (!process.env.EXPRESS_HASURA_GRAPHQL_ENDPOINT) {
    throw new Error("EXPRESS_HASURA_GRAPHQL_ENDPOINT is not set");
  }

  const adminSecret = process.env.HASURA_GRAPHQL_ADMIN_SECRET as string;
  const endpoint = process.env.EXPRESS_HASURA_GRAPHQL_ENDPOINT as string;

  return new GraphQLClient(endpoint, {
    headers: {
      "x-hasura-admin-secret": adminSecret,
    },
  });
};

// Client for user access with JWT
export const createUserClient = (jwtToken: string) => {
  if (!process.env.EXPRESS_HASURA_GRAPHQL_ENDPOINT) {
    throw new Error("EXPRESS_HASURA_GRAPHQL_ENDPOINT is not set");
  }

  if (!jwtToken) {
    throw new Error("JWT token is not set for the user graphql client");
  }

  const endpoint = process.env.EXPRESS_HASURA_GRAPHQL_ENDPOINT as string;

  return new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
};
