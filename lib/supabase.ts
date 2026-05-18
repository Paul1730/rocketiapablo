import { createClient } from '@supabase/supabase-js';

const supabaseUrl  = process.env.NEXT_PUBLIC_SUPABASE_URL  ?? '';
const supabaseKey  = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface SocioRow {
  id:         string;
  nombre:     string;
  apellido:   string;
  slug:       string;
  link:       string;
  created_at: string;
}
