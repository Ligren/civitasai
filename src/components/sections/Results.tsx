"use client";

import { useEffect, useRef, useState } from "react";
import { RESULTS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientText } from "@/components/ui/GradientText";
import { FadeIn } from "@/components/ui/FadeIn";

function AnimatedValue({ value, inView }: { value: string; inView: boolean }) {
  const [display, setDisplay] = useState(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    // Extract numeric part for animation
    const numMatch = value.match(/(\d+)/);
    if (!numMatch) {
      setDisplay(value);
      return;
    }

    const target = parseInt(numMatch[1], 10);
    const prefix = value.slice(0, numMatch.index);
    const suffix = value.slice((numMatch.index ?? 0) + numMatch[1].length);
    const duration = 1200;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      setDisplay(`${prefix}${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [inView, value]);

  return <>{display}</>;
}

export function Results() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="results" className="py-24 sm:py-32 bg-surface/50" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            overline="The Impact"
            title={RESULTS.headline}
          />
        </FadeIn>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {RESULTS.metrics.map((metric, i) => (
            <FadeIn key={metric.label} delay={i * 100}>
              <div className="text-center p-6 rounded-xl bg-card border border-border">
                <div className="text-4xl sm:text-5xl font-bold mb-2">
                  <GradientText>
                    <AnimatedValue value={metric.value} inView={inView} />
                  </GradientText>
                </div>
                <p className="text-sm font-semibold text-text-primary">
                  {metric.label}
                </p>
                <p className="mt-1 text-xs text-text-secondary">
                  {metric.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={500}>
          <p className="mt-8 text-center text-xs text-text-secondary/50 max-w-xl mx-auto">
            {RESULTS.note}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
