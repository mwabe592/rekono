"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export type AuthState = {
  error?: string | null;
} | null;

export async function signUpWithEmail(
  prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      data: {
        first_name: formData.get("firstName") as string,
        last_name: formData.get("lastName") as string,
      },
    },
  };

  const { data: signUpData, error } = await supabase.auth.signUp(data);
  console.log("Sign up error is", error);
  console.log("Sign up data is", signUpData);

  if (error) {
    return {
      error: error.message,
    };
  }

  // Redirect on success
  redirect("/dashboard");
}

export async function signInWithEmail(
  prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { data: signInData, error } =
    await supabase.auth.signInWithPassword(data);

  if (error) {
    return {
      error: error.message,
    };
  }

  // Redirect on success
  redirect("/dashboard");
}

export async function signInWithGoogle(
  prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const supabase = await createClient();

  // Get the current origin for the callback URL

  const callbackUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`;

  console.log(callbackUrl);

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
      redirectTo: callbackUrl,
    },
  });

  console.log("data fronm google login is", data);
  console.log("error fronm google login is", error);
  if (error) {
    return { error: error.message };
  }

  // Redirect to the provider URL
  if (data?.url) {
    redirect(data.url);
  }

  return { error: "Could not get provider URL" };
}

export async function signOut(formData?: FormData): Promise<void> {
  const supabase = await createClient();

  console.log("signOut server action called");

  const { error } = await supabase.auth.signOut();

  console.log("error from logout is", error);

  redirect("/signin");
}
