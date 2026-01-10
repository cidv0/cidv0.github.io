import type { Metadata } from "next";

import { CTASection } from "@/components/CTASection";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Book",
  description: "Book an appointment with Based Barber Co.",
};

export default function BookPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="space-y-4">
        <div className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
          Book
        </div>
        <h1 className="text-4xl font-[var(--font-display)]">
          Book your appointment.
        </h1>
        <p className="text-sm text-muted">
          Reserve a time that works for you. Booking link can be swapped for an
          embedded widget later.
        </p>
      </div>

      <div className="mt-10 rounded-3xl border border-dashed border-border/70 bg-surface/90 p-10 text-center shadow-sm">
        <div className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
          Booking Widget
        </div>
        <p className="mt-4 text-sm text-muted">
          Embed your booking provider here, or send clients to the booking page.
        </p>
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:brightness-95"
        >
          Open booking link
        </a>
      </div>

      <div className="mt-10">
        <CTASection
          eyebrow="Walk-ins"
          title="Need a same-day cut?"
          subtitle="Call for walk-in timing and availability."
          primaryLabel="Call Now"
          primaryHref={`tel:${site.contact.phone}`}
          secondaryLabel="View Services"
          secondaryHref="/services"
        />
      </div>
    </div>
  );
}
