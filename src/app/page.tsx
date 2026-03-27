import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Services } from "@/components/sections/Services";
import { Approach } from "@/components/sections/Approach";
import { Results } from "@/components/sections/Results";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "CivitasAI — AI Engineering Consulting | Transform How Your Team Builds Software",
  openGraph: {
    title: "CivitasAI — AI Engineering Consulting | Transform How Your Team Builds Software",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Services />
      <Approach />
      <Results />
      <FAQ />
      <CTASection />
    </>
  );
}
