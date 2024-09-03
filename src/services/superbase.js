// supabase.js
import { createClient } from '@supabase/supabase-js';

// Supabase project URL and anon key
const supabaseUrl = 'https://rnjehyfamdumuxahkyrz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuamVoeWZhbWR1bXV4YWhreXJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzNDM0OTgsImV4cCI6MjA0MDkxOTQ5OH0.AzoUMQ_dxZE0glvnfL3tytappM5mPJdY5FyQAPhcYIg';

// Create a Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
