import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { username, admin } from "better-auth/plugins";

import * as schema from "@/server/db/auth-schema";
import { db } from "@/server/db/client";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema, // Required for PGlite/Drizzle when executing outside Next context
    usePlural: true,
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [admin(), username()],
});
