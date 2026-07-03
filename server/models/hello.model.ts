import { z } from "zod";

export const helloInputSchema = z.object({
  text: z.string(),
});

export type HelloInput = z.infer<typeof helloInputSchema>;
