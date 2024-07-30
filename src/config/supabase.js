require('dotenv').config();
const axios = require('axios');
const axiosRetry = require('axios-retry');


const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL or key not set');
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;

