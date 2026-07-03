import { helloInputSchema } from "../models/hello.model";
import { publicProcedure, router } from "../trpc";

export const appRouter = router({
  hello: publicProcedure.input(helloInputSchema).query(({ input }) => ({
    greeting: `hello ${input.text}`,
  })),
});

export type AppRouter = typeof appRouter;
