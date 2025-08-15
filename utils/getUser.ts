//this gets the user from the database on server side

import { createClient } from "@/utils/supabase/server";

export default async function getUser() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error("Error fetching user:", error);
    return null;
  }
 
  return data.user;
}
