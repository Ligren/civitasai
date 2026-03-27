"use client";

import { PROBLEM } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Copy, Shuffle, HelpCircle, ShieldAlert } from "lucide-react";

const icons = [Copy, Shuffle, HelpCircle, ShieldAlert];

export function Problem() {
  return (
    <section id="problem" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            overline="The Problem"
            title={PROBLEM.subheadline}
          />
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PROBLEM.points.map((point, i) => {
            const Icon = icons[i];
            return (
              <FadeIn key={point.title} delay={i * 100}>
                <div className="group relative rounded-xl bg-card border border-border p-6 transition-all duration-300 hover:border-red-500/30">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary">
                        {point.title}
                      </h3>
                      <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
