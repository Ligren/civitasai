# CivitasAI — AI Engineering Consulting Website

Marketing website for [civitasai.co](https://civitasai.co) — an AI engineering consulting firm that helps engineering teams adopt AI-native development workflows.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Hosting:** Vercel
- **Icons:** Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/           — Pages (App Router)
  components/
    layout/      — Header, Footer
    sections/    — Homepage sections, contact form
    ui/          — Reusable primitives (Button, Card, Badge, etc.)
  lib/
    data.ts      — All site content and copy
```

## Pages

- `/` — Landing page with hero, problem, services, approach, results, FAQ, CTA
- `/services` — Detailed service breakdowns with anchor links
- `/about` — Founder story, credentials, philosophy
- `/contact` — Contact form + direct contact info

## Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy preview
vercel

# Deploy to production
vercel --prod
```

## Content

All site copy lives in `src/lib/data.ts` for easy editing. Update the placeholder Calendly link (`#`) in the contact page when ready.

---

Built with AI-native development practices using [Claude Code](https://claude.ai/code).
