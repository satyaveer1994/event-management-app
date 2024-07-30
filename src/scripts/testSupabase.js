require('dotenv').config();  // Ensure environment variables are loaded

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL or key not set');
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testSupabase() {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: 'test@example.com',
      password: 'password'
    });

    if (error) {
      console.error('Supabase error:', error.message);
    } else {
      console.log('Supabase data:', data);
    }
  } catch (err) {
    console.error('Test error:', err.message);
  }
}

testSupabase();
