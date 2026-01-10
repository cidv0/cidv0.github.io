import Link from "next/link";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

function isExternalLink(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
}

export function CTASection({
  eyebrow,
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  const primaryExternal = isExternalLink(primaryHref);
  const secondaryExternal = secondaryHref ? isExternalLink(secondaryHref) : false;

  return (
    <section className="rounded-3xl border border-border/70 bg-[linear-gradient(135deg,#fbf5ee,rgba(251,245,238,0.4))] p-8 shadow-sm md:p-10">
      <div className="space-y-4">
        {eyebrow ? (
          <div className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="text-2xl font-[var(--font-display)] text-foreground md:text-3xl">
          {title}
        </h2>
        {subtitle ? <p className="text-sm text-muted">{subtitle}</p> : null}
        <div className="flex flex-wrap gap-3">
          {primaryExternal ? (
            <a
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition hover:brightness-95"
              target={primaryHref.startsWith("http") ? "_blank" : undefined}
              rel={primaryHref.startsWith("http") ? "noreferrer" : undefined}
            >
              {primaryLabel}
            </a>
          ) : (
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition hover:brightness-95"
            >
              {primaryLabel}
            </Link>
          )}
          {secondaryLabel && secondaryHref ? (
            secondaryExternal ? (
              <a
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
                target={secondaryHref.startsWith("http") ? "_blank" : undefined}
                rel={secondaryHref.startsWith("http") ? "noreferrer" : undefined}
              >
                {secondaryLabel}
              </a>
            ) : (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
              >
                {secondaryLabel}
              </Link>
            )
          ) : null}
        </div>
      </div>
    </section>
  );
}
