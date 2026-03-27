interface SectionHeadingProps {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  overline,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignment} ${className}`}>
      {overline && (
        <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
          {overline}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
