import "dotenv/config";

if (!process.env.EXPRESS_HASURA_GRAPHQL_ENDPOINT_CODEGEN) {
  throw new Error(
    "EXPRESS_HASURA_GRAPHQL_ENDPOINT_CODEGEN environment variable is not set"
  );
}

if (!process.env.HASURA_GRAPHQL_ADMIN_SECRET) {
  throw new Error(
    "HASURA_GRAPHQL_ADMIN_SECRET environment variable is not set"
  );
}

module.exports = {
  projects: {
    api: {
      schema: [
        {
          [process.env.EXPRESS_HASURA_GRAPHQL_ENDPOINT_CODEGEN]: {
            headers: {
              "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET,
            },
          },
        },
      ],
      documents: ["./apps/api/src/lib/graphql/**/*.ts"],
      overwrite: true,
      extensions: {
        codegen: {
          generates: {
            "./apps/api/src/types/generated/": {
              preset: "client",
              plugins: [],
              config: {
                namingConvention: {
                  typeNames: "change-case-all#pascalCase",
                  enumValues: "change-case-all#upperCase",
                },
                scalars: {
                  UUID: "string",
                  uuid: "string",
                  timestamp: "string",
                  timestamp_timestamptz: "string",
                },
              },
            },
          },
        },
      },
    },
    native: {
      schema: [
        {
          [process.env.EXPRESS_HASURA_GRAPHQL_ENDPOINT_CODEGEN]: {
            headers: {
              "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET,
            },
          },
        },
      ],
      documents: ["./apps/native-app/src/lib/graphql/**/*.ts"],
      overwrite: true,
      extensions: {
        codegen: {
          generates: {
            "./apps/native-app/src/types/generated/": {
              preset: "client",
              plugins: [],
              config: {
                namingConvention: {
                  typeNames: "change-case-all#pascalCase",
                  enumValues: "change-case-all#upperCase",
                },
                scalars: {
                  UUID: "string",
                  uuid: "string",
                  timestamp: "string",
                  timestamp_timestamptz: "string",
                },
              },
            },
          },
        },
      },
    },
  },
};
