import { graphql } from "types/generated";

export const GET_USER_BY_PHONE = graphql(`
  query GetUserByPhone($phone: String!) {
    users(where: { phone: { _eq: $phone } }) {
      id
    }
  }
`);
