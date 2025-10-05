"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        defaults: "2025-05-24",
        capture_pageview: true,
        capture_pageleave: true,
        capture_exceptions: true,
        session_recording: {
          maskAllInputs: true,
        },
        debug: process.env.NODE_ENV === "development",
      });
    } else {
      console.warn(
        "PostHog API key not found. PostHog will not be initialized.",
      );
    }
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
