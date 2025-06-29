"use client";
import Link from "next/link";
import { useActionState } from "react";
import {
  signInWithEmail,
  signInWithGoogle,
  type AuthState,
} from "@/app/auth/actions";

export default function SigninPage() {
  const [state, action, isPending] = useActionState(signInWithEmail, null);
  const [googleState, googleAction] = useActionState(signInWithGoogle, null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 pt-24 pb-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="space-y-8 rounded-2xl border border-gray-100 bg-white p-8 shadow-2xl">
          <div>
            <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
              Welcome back
            </h2>
            <p className="mt-3 text-center text-sm text-gray-600">
              Or{" "}
              <Link
                href="/signup"
                className="text-primary hover:text-primary-accent font-medium transition-colors"
              >
                create a new account
              </Link>
            </p>
          </div>

          {(state?.error || googleState?.error) && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-4">
              <div className="text-sm text-red-600">
                {state?.error || googleState?.error}
              </div>
            </div>
          )}

          <form action={googleAction} className="space-y-6">
            <button
              type="submit"
              className="group focus:ring-primary relative flex w-full justify-center rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md focus:ring-2 focus:ring-offset-2 focus:outline-none"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </span>
              Sign in with Google
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <form action={action} className="space-y-6">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="focus:ring-primary focus:border-primary relative block w-full appearance-none rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 shadow-sm transition-all duration-200 focus:z-10 focus:shadow-md focus:ring-2 focus:outline-none sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="focus:ring-primary focus:border-primary relative block w-full appearance-none rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 shadow-sm transition-all duration-200 focus:z-10 focus:shadow-md focus:ring-2 focus:outline-none sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="text-primary focus:ring-primary h-4 w-4 rounded border-gray-300"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="text-primary hover:text-primary-accent font-medium transition-colors"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isPending}
                className="group bg-primary hover:bg-primary-accent focus:ring-primary relative flex w-full transform justify-center rounded-xl border border-transparent px-4 py-3 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:opacity-50"
              >
                {isPending ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
