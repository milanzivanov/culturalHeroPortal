import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;
// const supabaseUrl = process.env.VITE_PUBLIC_SUPABASE_URL;
// const supabaseAnonKey = process.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

const supabaseUrl = "https://fcyrimjuwctjvvoijrqi.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjeXJpbWp1d2N0anZ2b2lqcnFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxMjUxNDIsImV4cCI6MjA0MjcwMTE0Mn0.0kiLl2Yg5n1O_RZ_UJFv-kzK-VlnWxPSqlU3YyIl1eA";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
