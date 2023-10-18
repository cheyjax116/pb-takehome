import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:8888/graphql",
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/app/gql/": {
      preset: "client",
    },
  },
};
export default config;
