"use client";

import { HERO } from "@/lib/data";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px] animate-orb-1" />
        <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] bg-accent-cyan/12 rounded-full blur-[100px] animate-orb-2" />
        <div className="absolute -bottom-32 left-1/4 w-[450px] h-[450px] bg-accent/10 rounded-full blur-[110px] animate-orb-3" />
      </div>

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94A3B8 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center pt-24 pb-16">
        <FadeIn>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-8">
            AI Engineering Consulting
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            {HERO.headline.replace(" Faster", "")}{" "}
            <GradientText>Faster</GradientText>
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            {HERO.subheadline}
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gradient" size="lg" href="/contact">
              {HERO.cta_primary}
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="#approach"
            >
              {HERO.cta_secondary}
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={500}>
          <div className="mt-14 flex items-center justify-center gap-2 text-xs sm:text-sm text-text-secondary/60">
            <span>Ex-Google</span>
            <span className="w-1 h-1 rounded-full bg-text-secondary/40" />
            <span>10+ Years Engineering</span>
            <span className="w-1 h-1 rounded-full bg-text-secondary/40" />
            <span>Production AI Systems</span>
          </div>
        </FadeIn>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
    </section>
  );
}
