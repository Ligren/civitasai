import type { Metadata } from "next";
import { COMPANY } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientText } from "@/components/ui/GradientText";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTASection } from "@/components/sections/CTASection";
import { Building2, Code2, Briefcase, Award, Monitor, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "About CivitasAI — Founded by an Ex-Google Engineer",
  description:
    "CivitasAI was founded by Vlad Kost — a senior software engineer who spent 4 years at Google, then went all-in on AI-native development.",
  openGraph: {
    title: "About CivitasAI — Founded by an Ex-Google Engineer",
    description:
      "CivitasAI was founded by Vlad Kost — a senior software engineer who spent 4 years at Google, then went all-in on AI-native development.",
  },
  twitter: {
    title: "About CivitasAI — Founded by an Ex-Google Engineer",
    description:
      "CivitasAI was founded by Vlad Kost — a senior software engineer who spent 4 years at Google, then went all-in on AI-native development.",
  },
};

const credentials = [
  { icon: Building2, text: "4 years at Google — Workspace & Assistant" },
  { icon: Code2, text: "Shipped production SaaS built entirely with Claude Code" },
  { icon: Briefcase, text: "10+ years professional engineering experience" },
  { icon: Monitor, text: "C#/.NET, Java, TypeScript, PostgreSQL" },
  { icon: Award, text: "Oracle & Microsoft certified" },
  { icon: Rocket, text: "Founded and operate 3 businesses" },
];

const beliefs = [
  {
    title: "AI makes good engineers great",
    description:
      "The best engineers will use AI. The engineers who don't will fall behind. Our job is to make sure your team is in the first group.",
  },
  {
    title: "Workflow beats tooling",
    description:
      "The tool is 10% of the value. Workflow design, judgment, and team culture are the other 90%. That's why buying licenses isn't enough.",
  },
  {
    title: "Measure everything",
    description:
      "If a transformation can't be measured, it isn't real. We track velocity, quality, and developer satisfaction — before, during, and after.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              overline="About"
              title="Built by an Engineer, for Engineers"
              subtitle="CivitasAI was founded by Vlad Kost — a senior software engineer who spent 4 years at Google, then went all-in on AI-native development."
            />
          </FadeIn>
        </div>
      </section>

      {/* Founder Story */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn>
            <div className="prose-custom space-y-6 text-text-secondary leading-relaxed">
              <p>
                I spent four years at Google building systems that millions of
                people depend on. I shipped integration test infrastructure
                across all of Google Workspace. I built performance tooling for
                Google Assistant. I worked in Java, C++, and Python at a scale
                most engineers never see.
              </p>
              <p>
                When I left Google in 2025, I did something most people thought
                was crazy: I started building a production SaaS platform by
                myself, using AI as my engineering team.
              </p>
              <p>
                Rent-RV.co is a multi-tenant platform where RV rental businesses
                each get their own branded site with booking, admin dashboards,
                and payment processing. I built the entire thing — database
                schema, API layer, authentication, multi-tenancy, deployment —
                using Claude Code as my daily development partner.
              </p>
              <p>
                It worked. Not &ldquo;worked for a side project&rdquo; — worked
                for production. Real users, real businesses, real money flowing
                through the system.
              </p>
              <p>
                That experience taught me something that most consulting firms
                can&rsquo;t offer:{" "}
                <span className="text-text-primary font-medium">
                  I don&rsquo;t just talk about AI-native development — I&rsquo;ve
                  shipped production software this way.
                </span>{" "}
                I know where AI accelerates you, where it leads you astray, and
                what the workflow actually looks like when it&rsquo;s working.
              </p>
              <p>
                CivitasAI exists because I believe every engineering team can
                experience this transformation. Not by replacing engineers with
                AI, but by giving engineers the tools, workflows, and judgment to
                be dramatically more effective.
              </p>
              <p>
                If your team is still debating whether to try AI, or if
                they&rsquo;ve tried and it feels messy — that&rsquo;s exactly
                where we start.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 sm:py-24 bg-surface/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              overline="Credentials"
              title="Background & Experience"
            />
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {credentials.map((cred, i) => {
              const Icon = cred.icon;
              return (
                <FadeIn key={cred.text} delay={i * 80}>
                  <div className="flex items-center gap-3 rounded-xl bg-card border border-border p-4">
                    <Icon className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm text-text-primary">
                      {cred.text}
                    </span>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              overline="Philosophy"
              title="What We Believe"
            />
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {beliefs.map((belief, i) => (
              <FadeIn key={belief.title} delay={i * 120}>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-4">
                    <GradientText>
                      {String(i + 1).padStart(2, "0")}
                    </GradientText>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {belief.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {belief.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
