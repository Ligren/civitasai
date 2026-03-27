import type { Metadata } from "next";
import { SERVICES } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTASection } from "@/components/sections/CTASection";
import { Search, Zap, GraduationCap, Layers, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Engineering Consulting Services",
  description:
    "Comprehensive AI engineering consulting — from assessment through transformation and ongoing support.",
  openGraph: {
    title: "AI Engineering Consulting Services | CivitasAI",
    description:
      "Comprehensive AI engineering consulting — from assessment through transformation and ongoing support.",
  },
  twitter: {
    title: "AI Engineering Consulting Services | CivitasAI",
    description:
      "Comprehensive AI engineering consulting — from assessment through transformation and ongoing support.",
  },
};

const iconMap: Record<string, typeof Search> = {
  search: Search,
  zap: Zap,
  "graduation-cap": GraduationCap,
  layers: Layers,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              overline="Our Services"
              title="Comprehensive AI Engineering Consulting"
              subtitle="From assessment through transformation and ongoing support — we meet you where you are and take you where you need to go."
            />
          </FadeIn>
        </div>
      </section>

      {/* Service detail sections */}
      {SERVICES.map((service, i) => {
        const Icon = iconMap[service.icon] || Zap;
        const isEven = i % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 sm:py-24 ${isEven ? "" : "bg-surface/50"} scroll-mt-20`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="max-w-3xl">
                <FadeIn>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <Badge>{service.duration}</Badge>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-lg font-medium text-accent">
                    {service.tagline}
                  </p>
                </FadeIn>

                {/* Extended description */}
                <FadeIn delay={100}>
                  <div className="mt-8 space-y-4">
                    {service.extended_description.map((paragraph, j) => (
                      <p
                        key={j}
                        className="text-text-secondary leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </FadeIn>

                {/* Deliverables */}
                <FadeIn delay={200}>
                  <div className="mt-10">
                    <h3 className="text-lg font-semibold text-text-primary mb-4">
                      What You Get
                    </h3>
                    <ul className="space-y-3">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-text-secondary">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>

                {/* Ideal for callout */}
                <FadeIn delay={300}>
                  <div className="mt-8 rounded-xl bg-accent/5 border border-accent/20 p-5">
                    <p className="text-sm">
                      <span className="font-semibold text-accent">
                        Ideal for:{" "}
                      </span>
                      <span className="text-text-secondary">
                        {service.ideal_for}
                      </span>
                    </p>
                  </div>
                </FadeIn>

                {/* CTA */}
                <FadeIn delay={400}>
                  <div className="mt-8">
                    <Button variant="gradient" href="/contact">
                      Book a consultation to discuss {service.title}
                    </Button>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}
