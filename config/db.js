// db.js
const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config(); // Ensure this is loaded to read the .env file

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: String(process.env.DB_PASSWORD), // Ensure password is a string
  port: Number(process.env.DB_PORT), // Ensure port is a n umber 
});

module.exports = pool;