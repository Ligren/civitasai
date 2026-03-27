import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfo } from "@/components/sections/ContactInfo";

export const metadata: Metadata = {
  title: "Contact CivitasAI — Book a Free Consultation",
  description:
    "Book a free 30-minute consultation. No pitch deck, no commitment — just a real conversation about your engineering workflow.",
  openGraph: {
    title: "Contact CivitasAI — Book a Free Consultation",
    description:
      "Book a free 30-minute consultation. No pitch deck, no commitment — just a real conversation about your engineering workflow.",
  },
  twitter: {
    title: "Contact CivitasAI — Book a Free Consultation",
    description:
      "Book a free 30-minute consultation. No pitch deck, no commitment — just a real conversation about your engineering workflow.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              overline="Get In Touch"
              title="Let's Talk"
              subtitle="Book a free 30-minute consultation. No pitch deck, no commitment — just a real conversation about your engineering workflow."
            />
          </FadeIn>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <FadeIn>
                <ContactForm />
              </FadeIn>
            </div>
            <div className="lg:col-span-2">
              <FadeIn delay={150}>
                <ContactInfo />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-xl bg-card border border-border p-8">
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                What to Expect
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                In our initial call, we&rsquo;ll discuss your current
                engineering workflow, team size, and goals. I&rsquo;ll share
                relevant examples and quick wins. If there&rsquo;s a fit,
                I&rsquo;ll propose a tailored engagement. If not, you&rsquo;ll
                still walk away with useful ideas.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
