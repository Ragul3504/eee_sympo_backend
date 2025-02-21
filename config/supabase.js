// supabase.js
const dotenv = require("dotenv");
dotenv.config();
const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://zqphedsadmwotmtpcqgz.supabase.co";

const supabaseKey = process.env.SUPABASE_API_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);
module.exports = supabase;
