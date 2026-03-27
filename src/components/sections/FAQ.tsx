"use client";

import { useState } from "react";
import { FAQ as FAQ_DATA } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            overline="Common Questions"
            title="Frequently Asked Questions"
          />
        </FadeIn>

        <div className="mt-16 space-y-3">
          {FAQ_DATA.map((item, i) => {
            const isOpen = openIndex === i;
            const id = `faq-${i}`;
            return (
              <FadeIn key={i} delay={i * 60}>
                <div className="rounded-xl border border-border bg-card overflow-hidden transition-colors hover:border-accent/30">
                  <h3>
                    <button
                      id={`${id}-trigger`}
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                      aria-expanded={isOpen}
                      aria-controls={`${id}-panel`}
                    >
                      <span className="text-sm sm:text-base font-medium text-text-primary">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 flex-shrink-0 text-text-secondary transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    id={`${id}-panel`}
                    role="region"
                    aria-labelledby={`${id}-trigger`}
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm text-text-secondary leading-relaxed">
                        {item.answer}
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
