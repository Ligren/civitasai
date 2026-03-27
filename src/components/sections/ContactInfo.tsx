import { COMPANY } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Mail, ExternalLink, MapPin, Clock, Calendar } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: COMPANY.linkedin,
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Denver, CO",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Typically within 24 hours",
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-card border border-border p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-5">
          Prefer to reach out directly?
        </h3>
        <ul className="space-y-4">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <li key={item.label} className="flex items-start gap-3">
                <Icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-text-secondary">{item.label}</p>
                  <p className="text-sm text-text-primary font-medium">
                    {item.value}
                  </p>
                </div>
              </li>
            );

            if (item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="block hover:opacity-80 transition-opacity"
                >
                  {content}
                </a>
              );
            }
            return content;
          })}
        </ul>
      </div>

      {/* Book a call card */}
      <div className="relative rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-cyan rounded-xl" />
        <div className="absolute inset-[1px] bg-card rounded-xl" />
        <div className="relative p-6 text-center">
          <Calendar className="w-8 h-8 text-accent mx-auto mb-3" />
          <h3 className="text-lg font-bold text-text-primary mb-2">
            Book a Free 30-Minute Call
          </h3>
          <p className="text-sm text-text-secondary mb-4">
            No commitment. Just a real conversation about your engineering
            workflow.
          </p>
          <Button variant="gradient" size="md" href="#">
            Schedule a Call
          </Button>
        </div>
      </div>
    </div>
  );
}
