import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Providers from "@/components/Providers";
import ToasterContext from "../context/ToastContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rekono",
  description:
    "Sign in or Sign up to Rekono to get started with matching your statements",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <ToasterContext />
      <div className="">{children}</div>
    </Providers>
  );
}
