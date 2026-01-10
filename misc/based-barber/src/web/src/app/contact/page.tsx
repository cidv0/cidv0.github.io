import type { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Location & Contact",
  description:
    "Find Based Barber Co in West Chester. Call, get directions, and check hours.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="space-y-4">
        <div className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
          Contact
        </div>
        <h1 className="text-4xl font-[var(--font-display)]">
          Location & Contact
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          Find us in the heart of West Chester. Call for walk-in timing or book
          your appointment online.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="overflow-hidden rounded-3xl border border-border/70 bg-surface/90 shadow-sm">
          <iframe
            title="Based Barber Co map"
            src={site.contact.mapEmbedUrl}
            className="h-[420px] w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-border/70 bg-surface/90 p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
              Address
            </div>
            <div className="mt-4 text-sm text-muted">
              <div>{site.contact.address.line1}</div>
              <div>{site.contact.address.line2}</div>
              <div>
                {site.contact.address.city}, {site.contact.address.state}{" "}
                {site.contact.address.zip}
              </div>
            </div>
            <p className="mt-4 text-xs text-muted">{site.contact.parkingNote}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={`tel:${site.contact.phone}`}
                className="inline-flex items-center justify-center rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground"
              >
                Call
              </a>
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground"
              >
                Book
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-border/70 bg-surface/90 p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
              Hours
            </div>
            <div className="mt-4 space-y-2 text-sm">
              {site.hours.map((entry) => (
                <div key={entry.label} className="flex justify-between">
                  <span className="text-muted">{entry.label}</span>
                  <span className="text-foreground">{entry.value}</span>
                </div>
              ))}
            </div>
          </div>
          <CTASection
            eyebrow="Directions"
            title="Need help finding us?"
            subtitle="Call or tap directions to open your map."
            primaryLabel="Get Directions"
            primaryHref={site.contact.mapLinkUrl}
            secondaryLabel="Call Now"
            secondaryHref={`tel:${site.contact.phone}`}
          />
        </div>
      </div>
    </div>
  );
}
