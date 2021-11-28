import { objectType, extendType, stringArg, nonNull, idArg } from "nexus";
import { User as PrismaUser } from "nexus-prisma";

export const User = objectType({
  name: PrismaUser.$name,
  description: PrismaUser.$description,
  definition(t) {
    t.field(PrismaUser.id);
    t.field(PrismaUser.createdAt);
    t.field(PrismaUser.updatedAt);
    t.field(PrismaUser.name);
    t.field(PrismaUser.email);
    t.field(PrismaUser.password);
    t.field(PrismaUser.emailVerified);
    t.field(PrismaUser.image);
    t.field(PrismaUser.role);
    t.field(PrismaUser.accounts);
  },
});

export const UserQueries = extendType({
  type: "Query",
  definition: (t) => {
    t.field("user", {
      type: "User",
      args: {
        id: nonNull(idArg()),
      },
      resolve: (_, args, ctx) => {
        return ctx.prisma.user.findUnique({
          where: { id: args.id },
        });
      },
    });
  },
});

export const UserMutations = extendType({
  type: "Mutation",
  definition: (t) => {
    t.field("createOneUser", {
      type: "User",
      args: {
        name: stringArg(),
        email: nonNull(stringArg()),
      },
      resolve: (_, { name, email }, ctx) => {
        return ctx.prisma.user.create({
          data: {
            name,
            email,
          },
        });
      },
    });
  },
});
