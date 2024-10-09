import { createClient } from "@supabase/supabase-js";

const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;
const supabaseUrl = "https://fcyrimjuwctjvvoijrqi.supabase.co";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
