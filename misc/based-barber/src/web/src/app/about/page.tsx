import type { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Based Barber Co in West Chester and what to expect.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="rounded-3xl border border-border/70 bg-[linear-gradient(140deg,#f0e6db,#d9c9ba)] p-8 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
            About
          </div>
          <h1 className="mt-4 text-4xl font-[var(--font-display)]">
            {site.about.headline}
          </h1>
          <p className="mt-4 text-sm text-muted">{site.about.story}</p>
          <div className="mt-6 space-y-2 text-sm font-semibold text-foreground">
            {site.about.specialties.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <Link
            href="/book"
            className="mt-6 inline-flex items-center rounded-full bg-accent px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground"
          >
            Book Now
          </Link>
        </div>
        <div className="space-y-8">
          <div className="rounded-3xl border border-border/70 bg-surface/90 p-8 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
              What to expect
            </div>
            <ul className="mt-5 space-y-4 text-sm text-muted">
              <li>
                A clean, modern shop with a welcoming and professional vibe.
              </li>
              <li>Consultation and style guidance with every appointment.</li>
              <li>Precision detail work with a focus on consistency.</li>
              <li>Sanitized tools, fresh capes, and a tidy workspace.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border/70 bg-surface/90 p-8 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
              Cleanliness
            </div>
            <p className="mt-4 text-sm text-muted">
              We take pride in a clean and comfortable space, with tools and
              stations sanitized between every client.
            </p>
          </div>
          <CTASection
            eyebrow="Visit"
            title="Ready to meet your new barber?"
            subtitle="Book your first appointment or call for walk-in timing."
            primaryLabel="Book Appointment"
            primaryHref="/book"
            secondaryLabel="Call Now"
            secondaryHref={`tel:${site.contact.phone}`}
          />
        </div>
      </div>
    </div>
  );
}
