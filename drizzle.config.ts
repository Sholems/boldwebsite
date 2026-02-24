
import type { Config } from 'drizzle-kit';
import * as dotenv from "dotenv";

dotenv.config();

export default {
  schema: './src/lib/db/schema.ts',
  out: './drizzle/migrations', // Output standard SQL files here
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
