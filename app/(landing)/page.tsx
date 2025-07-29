import { Metadata } from "next";
import Hero from "@/components/LandingPage/Hero";
import Logos from "@/components/LandingPage/Logos";
import Benefits from "@/components/LandingPage/Benefits";
import Container from "@/components/Common/Container";
import Section from "@/components/Common/Section";
import CTA from "@/components/LandingPage/CTA";
import FAQ from "@/components/LandingPage/FAQ/FAQ";

export const metadata: Metadata = {
  title: "Rekono",
  description:
    "Upload and match transactions between credit card and bank account statements",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Container>
        <Section
          id="Features"
          title="Features"
          description="See how Rekono can help you streamline your reconciliation process."
        >
          <Benefits />
        </Section>
        <Section
          id="FAQs"
          title="Frequently Asked Questions"
          description="Answers to common questions about Rekono."
        >
          <FAQ />
        </Section>

        <CTA />
      </Container>
    </main>
  );
}
