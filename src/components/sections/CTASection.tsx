"use client";

import { CTA_FINAL } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function CTASection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="relative rounded-2xl overflow-hidden">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-cyan rounded-2xl" />
            <div className="absolute inset-[1px] bg-card rounded-2xl" />

            {/* Ambient glow */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-40 bg-accent/20 blur-[100px] pointer-events-none" />

            <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
                {CTA_FINAL.headline}
              </h2>
              <p className="mt-5 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
                {CTA_FINAL.subheadline}
              </p>
              <div className="mt-10">
                <Button variant="gradient" size="lg" href="/contact">
                  {CTA_FINAL.button}
                </Button>
              </div>
              <p className="mt-5 text-sm text-text-secondary/50">
                {CTA_FINAL.note}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
