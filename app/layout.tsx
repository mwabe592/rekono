import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import ToasterContext from "./context/ToastContext";
import { PostHogProvider } from "@/components/PostHogProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rekon",
  description:
    "Upload and match transactions between credit card and bank account statements",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <PostHogProvider>

        <Providers>
          <ToasterContext />
          {children}
        </Providers>
        </PostHogProvider>
      </body>
    </html>
  );
}
