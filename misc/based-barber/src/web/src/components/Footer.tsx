import Link from "next/link";

import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-surface/90">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.1fr,1fr,1fr]">
        <div className="space-y-4">
          <div className="text-lg font-[var(--font-display)] tracking-wide">
            {site.name}
          </div>
          <p className="text-sm text-muted">{site.description}</p>
          <div className="flex flex-wrap gap-3 text-sm font-semibold text-foreground">
            {site.social.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-accent"
                target="_blank"
                rel="noreferrer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="space-y-4 text-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Hours
          </div>
          <div className="space-y-2">
            {site.hours.map((entry) => (
              <div key={entry.label} className="flex justify-between gap-4">
                <span className="text-muted">{entry.label}</span>
                <span className="text-foreground">{entry.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4 text-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Visit
          </div>
          <div className="space-y-2 text-muted">
            <div>{site.contact.address.line1}</div>
            <div>{site.contact.address.line2}</div>
            <div>
              {site.contact.address.city}, {site.contact.address.state}{" "}
              {site.contact.address.zip}
            </div>
          </div>
          <div className="space-y-1">
            <a
              href={`tel:${site.contact.phone}`}
              className="block font-semibold text-foreground transition hover:text-accent"
            >
              {site.contact.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="text-sm font-semibold text-accent transition hover:brightness-95"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted">
        {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
