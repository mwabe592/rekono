"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
