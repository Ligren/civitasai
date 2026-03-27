"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

const teamSizes = ["1–5", "6–15", "16–50", "50+"];
const serviceOptions = [
  ...SERVICES.map((s) => s.title),
  "Not sure yet",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — connect real backend later
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-card border border-border p-10 text-center">
        <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
        <h3 className="text-xl font-bold text-text-primary mb-2">
          Thanks for reaching out!
        </h3>
        <p className="text-text-secondary">
          I&rsquo;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-lg bg-surface border border-border px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl bg-card border border-border p-6 sm:p-8 space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@company.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-1.5">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Your company"
          className={inputClasses}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="team-size" className="block text-sm font-medium text-text-primary mb-1.5">
            Team Size
          </label>
          <select id="team-size" name="team-size" className={inputClasses}>
            <option value="">Select team size</option>
            {teamSizes.map((size) => (
              <option key={size} value={size}>
                {size} engineers
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-text-primary mb-1.5">
            Service Interest
          </label>
          <select id="service" name="service" className={inputClasses}>
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your engineering team and what you're looking for..."
          className={inputClasses}
        />
      </div>

      <Button
        variant="gradient"
        size="lg"
        type="submit"
        disabled={loading}
        className="w-full"
      >
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
