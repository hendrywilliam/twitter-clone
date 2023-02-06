import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
export const supabase = createClient(
  "https://trpsidwnzkgefmvrmziw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRycHNpZHduemtnZWZtdnJteml3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyNzQwNzIsImV4cCI6MTk4OTg1MDA3Mn0.jhNvYA3oHi1sasi3P0iX_wXGnxOsPV6v118pjRabTz8"
);
