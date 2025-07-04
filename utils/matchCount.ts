import { createClient } from "./supabase/server";

/**
 * Gets the current match count for a user from user_preferences.
 * @param userId The user's UUID
 * @returns The current match count (integer)
 */
export async function getMatchCount(userId: string): Promise<number> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("user_preferences")
    .select("match_count")
    .eq("user_id", userId)
    .single();

  if (error) throw new Error(error.message);
  return data?.match_count ?? 0;
}

/**
 * Increments the match count by 1 for a user in user_preferences using a supabase rpc function.
 * @param userId The user's UUID
 * @returns The new match count (integer)
 */
export async function incrementMatchCount(userId: string): Promise<number> {
  const supabase = await createClient();
  // Use a single upsert to increment atomically
  const { data, error } = await supabase.rpc("increment_match_count", {
    user_id_input: userId,
  });
  if (error) throw new Error(error.message);
  return data as number;
}
