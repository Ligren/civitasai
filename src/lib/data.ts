export const COMPANY = {
  name: "CivitasAI",
  tagline: "Transform How Your Team Builds Software",
  description:
    "We help engineering teams adopt AI-native development workflows — shipping faster, with higher quality, and fewer engineers.",
  email: "vlad@civitasai.co",
  linkedin: "https://www.linkedin.com/in/ligren/",
  website: "https://civitasai.co",
  founder: {
    name: "Vlad Kost",
    title: "Founder & Principal Consultant",
    bio: "Senior Software Engineer with 10+ years of experience, including 4 years at Google building production systems at scale. I've personally built and shipped a multi-tenant SaaS platform entirely using Claude Code — and now I help engineering teams unlock the same transformation.",
    background: [
      "4 years at Google — Workspace, Google Assistant",
      "Built production multi-tenant SaaS with Claude Code",
      "Founded 3 businesses leveraging AI across every surface",
      "C#/.NET, Java, TypeScript, PostgreSQL",
      "Oracle & Microsoft certified",
    ],
  },
};

export const HERO = {
  headline: "Your Engineering Team Is About to Get a Lot Faster",
  subheadline:
    "CivitasAI helps engineering organizations transform their development workflows with AI — not by replacing engineers, but by making every engineer dramatically more effective.",
  cta_primary: "Book a Consultation",
  cta_secondary: "See How It Works",
};

export const PROBLEM = {
  headline: "The Problem",
  subheadline: "Most engineering teams are using AI wrong — or not at all.",
  points: [
    {
      title: "Copy-Paste from ChatGPT",
      description:
        "Engineers use AI as a search engine replacement — copying snippets without understanding tradeoffs, introducing subtle bugs and inconsistent patterns across the codebase.",
    },
    {
      title: "No Systematic Adoption",
      description:
        "There's no shared workflow, no standards for AI use, no quality gates. Every engineer uses AI differently — or doesn't use it at all. The result is chaos, not velocity.",
    },
    {
      title: "Leadership Doesn't Know What's Possible",
      description:
        "Engineering leaders know AI matters but don't know where to start. They're flying blind on ROI, tooling decisions, and what 'AI-native' actually looks like in practice.",
    },
    {
      title: "Fear of Quality Regression",
      description:
        "Teams worry that AI-generated code means lower quality. Without the right guardrails and review processes, they're right — but it doesn't have to be that way.",
    },
  ],
};

export const SERVICES = [
  {
    id: "assessment",
    icon: "search",
    title: "AI Readiness Assessment",
    tagline: "Understand where you are and where you can go.",
    description:
      "A comprehensive evaluation of your current engineering workflows, toolchain, codebase, and team capabilities. We identify the highest-impact opportunities for AI adoption and deliver a prioritized roadmap.",
    deliverables: [
      "Current workflow analysis and bottleneck identification",
      "AI opportunity mapping across the SDLC",
      "Tool recommendation report (Claude Code, Copilot, Cursor, etc.)",
      "Prioritized adoption roadmap with expected ROI",
      "Risk assessment and mitigation strategy",
    ],
    extended_description: [
      "Most engineering organizations know they should be using AI — but they don't know where the biggest impact lies. Is it code generation? Testing? Code review? Architecture? The answer is different for every team, and getting it wrong means wasted budget and frustrated engineers.",
      "Our AI Readiness Assessment is a focused 1–2 week engagement where we analyze your current development workflows, toolchain, codebase patterns, and team dynamics. We identify the specific bottlenecks where AI can have the highest impact — and equally important, where it won't help.",
      "You walk away with a prioritized roadmap, tool recommendations, and a clear picture of expected ROI — so you can make investment decisions with confidence.",
    ],
    duration: "1–2 weeks",
    ideal_for:
      "Engineering leaders who know they need to adopt AI but don't know where to start.",
  },
  {
    id: "transformation",
    icon: "zap",
    title: "AI Workflow Transformation",
    tagline: "Redesign how your team builds software.",
    description:
      "Hands-on engagement where we embed with your team to redesign development workflows around AI tooling. We don't just recommend — we implement, train, and measure the impact.",
    deliverables: [
      "AI-integrated development workflow design",
      "Claude Code / AI tooling setup and configuration",
      "Custom prompt libraries and templates for your codebase",
      "AI-assisted code review process implementation",
      "Automated testing strategy powered by AI",
      "Developer training workshops (hands-on, not slides)",
      "Metrics dashboard: velocity, quality, adoption rates",
    ],
    extended_description: [
      "This is our flagship engagement. We don't just tell you what to change — we embed with your team and change it. Over 4–8 weeks, we redesign your development workflows around AI tooling, implement the changes, train your team, and measure the results.",
      "We start with your highest-impact workflows and expand from there. That might mean setting up Claude Code across the team with custom prompt libraries for your codebase. It might mean redesigning your code review process to leverage AI-assisted analysis. It might mean automating test generation or documentation.",
      "The end state is a team that's measurably faster — with the skills, workflows, and confidence to keep improving after we leave.",
    ],
    duration: "4–8 weeks",
    ideal_for: "Teams ready to go all-in on AI-native development.",
  },
  {
    id: "training",
    icon: "graduation-cap",
    title: "Team Training & Enablement",
    tagline: "Turn your engineers into AI-native developers.",
    description:
      "Intensive, hands-on training program that teaches your engineers how to effectively use AI tools — not just the basics, but the judgment, patterns, and workflows that separate productive AI use from dangerous AI use.",
    deliverables: [
      "Hands-on workshops: Claude Code, AI-assisted architecture, prompt engineering",
      "AI code review: catching when AI is subtly wrong",
      "When to use AI vs. when not to — building judgment",
      "Custom exercises using your actual codebase",
      "Ongoing office hours and support (4 weeks post-training)",
    ],
    extended_description: [
      "Tools are only as good as the people using them. Our training program goes beyond 'here's how to use Copilot' — we teach the judgment, patterns, and workflows that separate productive AI use from dangerous AI use.",
      "Engineers learn to evaluate AI output critically, catch subtle errors, understand when AI is confidently wrong, and use AI to explore architectural tradeoffs rather than just generate boilerplate. Workshops use your actual codebase — not toy examples.",
      "Training includes 4 weeks of post-workshop support: office hours, async Q&A, and review of how the team is applying what they learned.",
    ],
    duration: "1–2 weeks (training) + 4 weeks (support)",
    ideal_for: "Teams that have the tools but need the skills.",
  },
  {
    id: "architecture",
    icon: "layers",
    title: "AI-Assisted Architecture & Code Review",
    tagline: "Expert eyes on your most critical decisions.",
    description:
      "On-demand access to an experienced engineer who uses AI daily to accelerate architecture reviews, code audits, and technical decision-making. Think of it as a fractional Staff Engineer with an AI-native workflow.",
    deliverables: [
      "Architecture review and recommendations",
      "Code audit with AI-assisted analysis",
      "Technical decision support for complex tradeoffs",
      "System design sessions with AI-powered prototyping",
      "Written recommendations with implementation guidance",
    ],
    extended_description: [
      "Not every team needs a full transformation — sometimes you need an experienced engineer who thinks in systems and uses AI to move faster. Our Architecture & Code Review service gives you on-demand access to senior engineering judgment.",
      "Think of it as a fractional Staff Engineer with an AI-native workflow. We review your architecture decisions, audit critical code paths, prototype approaches using AI, and provide written recommendations with implementation guidance.",
      "Available as an ongoing retainer or project-based engagement — ideal for startups that need senior horsepower without a full-time salary.",
    ],
    duration: "Ongoing retainer or project-based",
    ideal_for:
      "Startups and scale-ups that need senior engineering judgment without a full-time hire.",
  },
];

export const APPROACH = {
  headline: "How We Work",
  subheadline:
    "AI doesn't replace engineering judgment — it raises the bar for it.",
  principles: [
    {
      title: "AI as Accelerator, Not Replacement",
      description:
        "We don't believe AI replaces engineers. We believe it makes good engineers great and great engineers unstoppable. The goal is velocity with quality, not just speed.",
    },
    {
      title: "Hands-On, Not Theoretical",
      description:
        "We don't hand you a slide deck and leave. We embed with your team, work in your codebase, and implement the changes ourselves. You see results, not recommendations.",
    },
    {
      title: "Judgment Over Generation",
      description:
        "The hardest part of AI-assisted development isn't getting AI to write code — it's knowing when the code is wrong. We teach engineers to evaluate, not just accept.",
    },
    {
      title: "Measured Impact",
      description:
        "Every engagement includes concrete metrics: build times, deployment frequency, bug rates, developer satisfaction. If it's not measurable, it's not real.",
    },
  ],
};

export const RESULTS = {
  headline: "What AI-Native Teams Look Like",
  metrics: [
    {
      value: "2–3x",
      label: "Faster feature delivery",
      description: "AI-native teams ship features in days, not weeks",
    },
    {
      value: "40%",
      label: "Less boilerplate code",
      description:
        "AI handles the repetitive work so engineers focus on architecture",
    },
    {
      value: "50%",
      label: "Faster code review cycles",
      description: "AI-assisted reviews catch issues before human review",
    },
    {
      value: "↓",
      label: "Fewer engineers needed",
      description:
        "Do more with your current team instead of hiring",
    },
  ],
  note: "These are representative outcomes based on industry data and our direct experience building production systems with AI-native workflows.",
};

export const FAQ = [
  {
    question: "What AI tools do you work with?",
    answer:
      "We're tool-agnostic but opinionated. Our primary expertise is with Claude Code (Anthropic), which we use daily in production. We also work with GitHub Copilot, Cursor, and other AI development tools. We'll recommend what works best for your team's stack and workflow.",
  },
  {
    question: "Do you work with specific tech stacks?",
    answer:
      "We have deep experience with C#/.NET, Java, TypeScript/Node.js, and Python. Our consulting approach works across any modern tech stack — the principles of AI-native development are language-agnostic.",
  },
  {
    question: "How is this different from just buying Copilot licenses?",
    answer:
      "Buying Copilot licenses is like buying a gym membership — it doesn't make you fit. The tool is 10% of the value. The other 90% is workflow design, team training, quality gates, prompt engineering, and building the judgment to know when AI is subtly wrong. That's what we do.",
  },
  {
    question: "What size teams do you work with?",
    answer:
      "We work with engineering teams from 5 to 50+ engineers. The approach scales — smaller teams see faster transformation, larger teams need more structured rollout. We tailor the engagement to your team's size and maturity.",
  },
  {
    question: "What's the typical engagement cost?",
    answer:
      "Assessments start at a fixed project fee. Transformation engagements are scoped based on team size and duration. Training is priced per workshop. We're transparent about pricing — book a call and we'll give you a clear quote.",
  },
  {
    question: "Can you just train our team without the full transformation?",
    answer:
      "Absolutely. Our Training & Enablement service is designed exactly for teams that have the tools but need the skills. We can run standalone workshops or an ongoing training program.",
  },
];

export const CTA_FINAL = {
  headline: "Ready to Transform How Your Team Builds?",
  subheadline:
    "Book a free 30-minute consultation. We'll discuss your current workflow, identify quick wins, and map out what AI-native development could look like for your team.",
  button: "Book a Free Consultation",
  note: "No commitment. No pitch deck. Just a real conversation about your engineering workflow.",
};
