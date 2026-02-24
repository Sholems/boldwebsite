
import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

const connectionString = process.env.DATABASE_URL!;

const globalForDb = globalThis as unknown as {
    db: PostgresJsDatabase<typeof schema> | undefined;
};

const client = globalForDb.db ? null : postgres(connectionString, {
    prepare: false,
    connect_timeout: 20
});

export const db = globalForDb.db ?? drizzle(client!, { schema });

if (process.env.NODE_ENV !== 'production') globalForDb.db = db;
