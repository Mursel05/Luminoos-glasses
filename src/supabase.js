import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://abgwkavwcajrbyhrozam.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiZ3drYXZ3Y2FqcmJ5aHJvemFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyNzUyNzksImV4cCI6MjAwNjg1MTI3OX0.G0o7MLEVXdOBSnZRks7w2U4e46--sP1Ea5zCROoxhec";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
