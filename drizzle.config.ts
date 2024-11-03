import type { Config } from "drizzle-kit";

export default {
  schema: "./schemas/schema.ts",
  out: "./drizzle",
  driver: "d1-http",
  dialect: "sqlite",
  dbCredentials: {
    accountId: process.env.CF_ACCOUNT_ID!,
    token: process.env.CF_AUTH_TOKEN!,
    databaseId: process.env.CF_DATABASE_ID!,
},
} satisfies Config;

