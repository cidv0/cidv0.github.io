import type { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Explore haircuts, fades, beard services, and add-ons at Based Barber Co in West Chester.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="space-y-4">
        <div className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
          Services
        </div>
        <h1 className="text-4xl font-[var(--font-display)]">Services & Pricing</h1>
        <p className="max-w-2xl text-sm text-muted">
          Straightforward services with clear timing and pricing. Choose your
          cut, add a beard service, and book the time that works for you.
        </p>
      </div>

      <div className="mt-12 space-y-10">
        {site.services.map((category) => (
          <div
            key={category.category}
            className="rounded-3xl border border-border/70 bg-surface/90 p-8 shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-2xl font-[var(--font-display)]">
                {category.category}
              </h2>
              <Link
                href="/book"
                className="text-xs font-semibold uppercase tracking-[0.3em] text-accent"
              >
                Book now
              </Link>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-border/70 bg-white/80 p-5"
                >
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                    <span>{item.duration}</span>
                    <span>{item.price}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-[var(--font-display)]">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <CTASection
          eyebrow="Ready"
          title="Lock in your appointment now."
          subtitle="Online booking takes under a minute."
          primaryLabel="Book Appointment"
          primaryHref="/book"
          secondaryLabel="Call Now"
          secondaryHref={`tel:${site.contact.phone}`}
        />
      </div>

      <section className="mt-16 space-y-6">
        <div className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
          FAQ
        </div>
        <h2 className="text-3xl font-[var(--font-display)]">
          Good to know before your visit.
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {site.faq.map((entry) => (
            <div
              key={entry.question}
              className="rounded-2xl border border-border/70 bg-surface/90 p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold text-foreground">
                {entry.question}
              </h3>
              <p className="mt-2 text-sm text-muted">{entry.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
