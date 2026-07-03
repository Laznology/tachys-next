import { trpcServer } from "@hono/trpc-server";
import { Hono } from "hono";
import { handle } from "hono/vercel";

import { appRouter } from "../../../server/routers/_app";

const app = new Hono().basePath("/api");

app.get("/hello", (c) =>
  c.json({
    message: "Hello Next.js!",
  })
);

app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
  })
);

export const GET = handle(app);
export const POST = handle(app);
