import { CodegenConfig } from "@graphql-codegen/cli";
import "dotenv/config";

if (!process.env.HASURA_GRAPHQL_ENDPOINT_CODEGEN) {
  throw new Error(
    "HASURA_GRAPHQL_ENDPOINT_CODEGEN environment variable is not set"
  );
}

if (!process.env.HASURA_GRAPHQL_ADMIN_SECRET) {
  throw new Error(
    "HASURA_GRAPHQL_ADMIN_SECRET environment variable is not set"
  );
}

const config: CodegenConfig = {
  schema: [
    {
      [process.env.HASURA_GRAPHQL_ENDPOINT_CODEGEN]: {
        headers: {
          "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET,
        },
      },
    },
  ],
  documents: "./apps/api/src/lib/graphql/**/*.ts",
  overwrite: true,
  generates: {
    "./apps/api/src/types/generated/": {
      preset: "client",
      plugins: [],
      config: {
        namingConvention: {
          typeNames: "change-case-all#pascalCase",
          enumValues: "change-case-all#upperCase",
        },
      },
    },
  },
};

export default config;
