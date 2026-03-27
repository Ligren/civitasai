"use client";

import { APPROACH } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientText } from "@/components/ui/GradientText";
import { FadeIn } from "@/components/ui/FadeIn";

export function Approach() {
  return (
    <section id="approach" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            overline="Our Approach"
            title={APPROACH.headline}
            subtitle={APPROACH.subheadline}
          />
        </FadeIn>

        <div className="mt-16 max-w-3xl mx-auto">
          {APPROACH.principles.map((principle, i) => (
            <FadeIn key={principle.title} delay={i * 120}>
              <div className="relative flex gap-6 sm:gap-8 pb-12 last:pb-0">
                {/* Vertical line */}
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-accent/30 bg-accent/5 flex items-center justify-center">
                    <GradientText className="text-lg font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </GradientText>
                  </div>
                  {i < APPROACH.principles.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-accent/30 to-transparent mt-3" />
                  )}
                </div>

                {/* Content */}
                <div className="pt-2 pb-2">
                  <h3 className="text-xl font-bold text-text-primary">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-text-secondary leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
