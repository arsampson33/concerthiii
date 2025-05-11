// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
import { Knex } from 'knex';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const config: Knex.Config = {
  client: 'pg', // PostgreSQL driver
  connection: {
    connectionString: "postgresql://postgres.lxugnhnxoherctmvybjt:eB7PgBKy6394es6b@aws-0-us-east-1.pooler.supabase.com:5432/postgres",
    ssl: false, // Required for Supabase connections
  },
  pool: { min: 2, max: 10 }, // Connection pooling
  migrations: {
    tableName: 'knex_migrations', // Table to track migrations
    directory: './migrations',   // Directory for migration files
  },
  seeds: {
    directory: './seeds', // Directory for seed files
  },
};

export default config;
