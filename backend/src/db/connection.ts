import { Client } from "pg";

console.log(`Server is pointing at ${process.env.NODE_ENV}`);
export const client =
  process.env.NODE_ENV === "development"
    ? new Client({
        host: process.env.HOST,
        user: process.env.USER_MAIN,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
      })
    : new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: false,
      });

export async function connectDatabase() {
  await client.connect();
  console.log("Database Connected");
}

export async function disconnectDatabase() {
  await client.end();
  console.log("Database Disconnected");
}
