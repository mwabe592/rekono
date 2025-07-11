import { createClient } from "@/utils/supabase/server";

export default async function getUser() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  
  return data.user;
}
