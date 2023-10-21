import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import * as console from "console";
import { z } from "zod";

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

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1), url: z.string().min(1) }))
    .mutation(({ ctx, input }) => {
      return ctx.db.app.create({
        data: {
          name: input.name,
          url: input.url,
          userId: ctx.auth.userId,
        },
      });
    }),
});
