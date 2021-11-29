import { makeSchema } from "nexus";
import NexusPrismaScalars from "nexus-prisma/scalars";
import path from "path";

import * as Account from "./types/Account";
import * as User from "./types/User";
import * as ExampleQuery from "./types/ExampleQuery";

export const schema = makeSchema({
  types: [Account, User, ExampleQuery, NexusPrismaScalars],
  plugins: [],
  outputs: {
    typegen: path.join(process.cwd(), "graphql/nexus-typegen.generated.ts"),
    schema: path.join(process.cwd(), "graphql/schema.generated.graphql"),
  },
  contextType: {
    module: path.join(process.cwd(), "graphql/context.ts"),
    export: "Context",
  },
  sourceTypes: {
    modules: [
      {
        module: "@prisma/client",
        alias: "prisma",
      },
    ],
  },
});
