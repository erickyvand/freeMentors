import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL;

const client = new Client({
  connectionString,
});

module.exports = client;
