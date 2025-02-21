// supabase.js
const { createClient } = require("@supabase/supabase-js");

dotenv.config();
const supabaseUrl = "https://zqphedsadmwotmtpcqgz.supabase.co";
const supabaseKey = process.env.SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
