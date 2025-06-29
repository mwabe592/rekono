import { Metadata } from "next";
import Hero from "@/components/LandingPage/Hero";
import Logos from "@/components/LandingPage/Logos";
import Benefits from "@/components/LandingPage/Benefits";
import Container from "@/components/Common/Container";
import Section from "@/components/Common/Section";
import Stats from "@/components/LandingPage/Stats";
import CTA from "@/components/LandingPage/CTA";
import FAQ from "@/components/LandingPage/FAQ/FAQ";
import Pricing from "@/components/LandingPage/Pricing";
import Testimonial from "@/components/LandingPage/Testimonial/Testimonial";

export const metadata: Metadata = {
  title: "Rekon - Bank Statement Matcher",
  description:
    "Upload and match transactions between credit card and bank account statements",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Logos />
      <Container>
        <Benefits />

        <Section
          id="pricing"
          title="Pricing"
          description="Simple, transparent pricing. No surprises."
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who have streamlined their reconciliation process."
        >
          <Testimonial />
        </Section>

        <FAQ />

        <Stats />

        <CTA />
      </Container>
    </main>
  );
}
