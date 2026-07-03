import { resolve } from "node:path";

import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { username, admin } from "better-auth/plugins";
import { config } from "dotenv";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/pglite";

import { users } from "./auth-schema";
import * as schema from "./auth-schema";

config({ path: resolve(process.cwd(), ".env") });

const seed = async () => {
  console.log("Seeding database...");

  const db = drizzle(process.env.DATABASE_URL as string);

  try {
    const auth = betterAuth({
      database: drizzleAdapter(db, {
        provider: "pg",
        schema,
        usePlural: true,
      }),
      emailAndPassword: {
        enabled: true,
      },
      plugins: [admin(), username()],
    });

    console.log("Creating Admin user (admin@example.com / password123)...");

    // Check if exists first to avoid unique constraint errors
    const existingAdmin = await db
      .select()
      .from(users)
      .where(eq(users.email, "admin@example.com"));

    if (existingAdmin.length === 0) {
      await auth.api.signUpEmail({
        body: {
          email: "admin@example.com",
          name: "Admin User",
          password: "password123",
        },
      });
      // Set role to admin
      await db
        .update(users)
        .set({ role: "admin" })
        .where(eq(users.email, "admin@example.com"));
    } else {
      console.log("Admin user already exists. Skipping.");
    }

    console.log("Creating Standard user (user@example.com / password123)...");

    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, "user@example.com"));

    if (existingUser.length === 0) {
      await auth.api.signUpEmail({
        body: {
          email: "user@example.com",
          name: "Standard User",
          password: "password123",
        },
      });
    } else {
      console.log("Standard user already exists. Skipping.");
    }

    console.log("Seed complete! 🚀");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seed();
