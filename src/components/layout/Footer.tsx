import Link from "next/link";
import { COMPANY } from "@/lib/data";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold">
              <span className="text-text-primary">Civitas</span>
              <span className="text-accent">AI</span>
            </Link>
            <p className="mt-3 text-sm text-text-secondary max-w-xs">
              {COMPANY.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-text-primary transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-secondary">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-xs text-text-secondary/50">
            Built with AI-native development practices
          </p>
        </div>
      </div>
    </footer>
  );
}
