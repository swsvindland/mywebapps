import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import * as console from "console";

export const appsRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    console.log("ctx.auth.userId", ctx.auth.userId);

    return ctx.db.app.findMany({
      where: {
        userId: ctx.auth.userId,
      },
      orderBy: { createdAt: "desc" },
    });
  }),
});
