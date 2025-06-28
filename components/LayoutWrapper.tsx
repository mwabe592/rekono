"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/LandingPage/Footer";
import Header from "@/components/Header/Header";
import Lines from "@/components/LandingPage/Lines";
import ScrollToTop from "@/components/LandingPage/ScrollToTop";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && (
        <>
          <Lines />
          <Header />
        </>
      )}
      {children}
      {!isDashboard && (
        <>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
}
