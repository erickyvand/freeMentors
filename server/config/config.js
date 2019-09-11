import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// const connectionString = process.env.DATABASE_URL;

// const client = new Client({
//   connectionString,
// });

// DATABASE_URL = postgresql://postgres:@localhost:5432/free_mentorsDB

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

client.connect();

module.exports = client;
