import { Metadata } from "next";
import Hero from "@/components/LandingPage/Hero";
import Brands from "@/components/LandingPage/Brands/Brands";
import Feature from "@/components/LandingPage/Features/Feature";
import About from "@/components/LandingPage/About";
import FeaturesTab from "@/components/LandingPage/FeaturesTab/FeaturesTab";
import FunFact from "@/components/LandingPage/FunFact";
import CTA from "@/components/LandingPage/CTA";
import FAQ from "@/components/LandingPage/FAQ/FAQ";
import Pricing from "@/components/LandingPage/Pricing";
import Contact from "@/components/LandingPage/Contact";
import Integration from "@/components/LandingPage/Integration";
import Testimonial from "@/components/LandingPage/Testimonial/Testimonial";
import React from "react";

export const metadata: Metadata = {
  title: "Rekon - Bank Statement Matcher",
  description:
    "Upload and match transactions between credit card and bank account statements",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
    </main>
  );
}
