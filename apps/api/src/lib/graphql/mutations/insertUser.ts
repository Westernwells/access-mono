import { graphql } from "types/generated";

export const INSERT_USER = graphql(`
  mutation InsertUser($object: users_insert_input!) {
    insert_users_one(object: $object) {
      id
      name
      email
    }
  }
`);
