"use client";

import { SERVICES } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { Search, Zap, GraduationCap, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, typeof Search> = {
  search: Search,
  zap: Zap,
  "graduation-cap": GraduationCap,
  layers: Layers,
};

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-surface/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            overline="What We Do"
            title="Services That Drive Real Impact"
            subtitle="From assessment to transformation — we meet you where you are and take you where you need to go."
          />
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Zap;
            const isFeatured = service.id === "transformation";

            return (
              <FadeIn key={service.id} delay={i * 100}>
                <div
                  className={`group relative rounded-xl bg-card p-6 sm:p-8 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 ${
                    isFeatured
                      ? "border-2 border-accent/50 hover:border-accent"
                      : "border border-border hover:border-accent/30"
                  }`}
                >
                  {isFeatured && (
                    <div className="absolute -top-3 left-6">
                      <Badge variant="accent">Most Popular</Badge>
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        isFeatured
                          ? "bg-gradient-to-br from-accent to-accent-cyan"
                          : "bg-accent/10"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          isFeatured ? "text-white" : "text-accent"
                        }`}
                      />
                    </div>
                    <Badge>{service.duration}</Badge>
                  </div>

                  <h3 className="text-xl font-bold text-text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {service.tagline}
                  </p>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed flex-1">
                    {service.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-border">
                    <p className="text-xs text-text-secondary">
                      <span className="font-medium text-text-primary">
                        Ideal for:
                      </span>{" "}
                      {service.ideal_for}
                    </p>
                  </div>

                  <Link
                    href={`/services#${service.id}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-cyan transition-colors group/link"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
