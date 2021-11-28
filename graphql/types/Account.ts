import { objectType, extendType, nonNull, idArg } from "nexus";
import { Account as PrismaAccount } from "nexus-prisma";

export const Account = objectType({
  name: PrismaAccount.$name,
  description: PrismaAccount.$description,
  definition(t) {
    t.field(PrismaAccount.id);
    t.field(PrismaAccount.createdAt);
    t.field(PrismaAccount.updatedAt);
    t.field(PrismaAccount.userId);
    t.field(PrismaAccount.type);
    t.field(PrismaAccount.provider);
    t.field(PrismaAccount.providerAccountId);
    t.field(PrismaAccount.user);
  },
});

export const AccountQueries = extendType({
  type: "Query",
  definition: (t) => {
    t.field("account", {
      type: "Account",
      args: {
        id: nonNull(idArg()),
      },
      resolve: (_, args, ctx) => {
        return ctx.prisma.account.findUnique({
          where: { id: args.id },
        });
      },
    });
  },
});
