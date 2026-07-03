import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
  dialect: "postgresql",
  driver: "pglite",
  out: "./drizzle",
  schema: "./server/db/schema.ts",
});
