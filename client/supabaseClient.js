// supabaseClient.js
const { createClient } = require("@supabase/supabase-js");

// Gantilah dengan URL dan anon key dari Supabase Anda
const SUPABASE_URL = "https://your-project.supabase.co";
const SUPABASE_ANON_KEY = "your-anon-key";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

module.exports = supabase;
