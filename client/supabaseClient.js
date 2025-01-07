// supabaseClient.js
const { createClient } = require("@supabase/supabase-js");

// Gantilah dengan URL dan anon key dari Supabase Anda
const SUPABASE_URL = "https://sgvceprztmnjzqglmdee.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNndmNlcHJ6dG1uanpxZ2xtZGVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNDQ1MTgsImV4cCI6MjA1MTgyMDUxOH0.KwujS1NT1cm22jLPXXZn8Xg0p9sGCcktydFtyAtQBhI";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

module.exports = supabase;
