"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { PostHogProvider } from "./PostHogProvider";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <PostHogProvider>
      <ThemeProvider enableSystem={true} attribute="class" defaultTheme="light">
        {children}
      </ThemeProvider>
    </PostHogProvider>
  );
}
