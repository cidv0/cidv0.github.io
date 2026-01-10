import type { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Home",
  description: site.description,
};

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-8">
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
              {site.city}
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl font-[var(--font-display)] leading-tight md:text-5xl">
                {site.hero.headline}
              </h1>
              <p className="text-lg text-muted">{site.hero.subhead}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={site.hero.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:brightness-95"
              >
                {site.hero.primaryCta.label}
              </Link>
              <Link
                href={site.hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
              >
                {site.hero.secondaryCta.label}
              </Link>
              <a
                href={`tel:${site.contact.phone}`}
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
              >
                Call Now
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted">
              <span>{site.trust.rating} rating</span>
              <span>{site.trust.reviewCount} reviews</span>
              <span>{site.trust.walkIns}</span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-border/70 bg-surface/90 p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                Known For
              </div>
              <ul className="mt-4 space-y-3 text-sm font-semibold text-foreground">
                {site.valueProps.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-border/70 bg-[linear-gradient(140deg,#171411,#2f2620)] p-6 text-white shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                New Clients
              </div>
              <h3 className="mt-3 text-2xl font-[var(--font-display)]">
                Now taking bookings for this week.
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Book ahead for the times you want, or check walk-in availability.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black"
                >
                  Book Now
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
              Services
            </div>
            <h2 className="text-3xl font-[var(--font-display)]">
              Precision cuts with honest pricing.
            </h2>
            <p className="text-sm text-muted">
              Straightforward service menu with the details that matter.
            </p>
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold text-accent transition hover:brightness-95"
          >
            View full menu
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {site.servicesPreview.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl border border-border/70 bg-surface/90 p-6 shadow-sm"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                <span>{service.duration}</span>
                <span>{service.price}</span>
              </div>
              <h3 className="mt-4 text-xl font-[var(--font-display)]">
                {service.name}
              </h3>
              <p className="mt-2 text-sm text-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
              Gallery
            </div>
            <h2 className="text-3xl font-[var(--font-display)]">
              Sample styles and inspiration.
            </h2>
            <p className="text-sm text-muted">
              Client results coming soon. These are style references to show
              direction.
            </p>
          </div>
          <Link
            href="/gallery"
            className="text-sm font-semibold text-accent transition hover:brightness-95"
          >
            See more
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.gallery.slice(0, 9).map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-[linear-gradient(135deg,#f0e6db,#d6c7b8)] p-6 text-sm text-foreground shadow-sm"
            >
              <div className="flex h-full flex-col justify-between gap-8">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                  Sample
                </div>
                <div className="text-lg font-[var(--font-display)]">
                  {item.label}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.6),transparent_70%)]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.1fr]">
          <div className="space-y-6">
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
              Reviews
            </div>
            <h2 className="text-3xl font-[var(--font-display)]">
              Consistent quality, five-star energy.
            </h2>
            <p className="text-sm text-muted">
              Real feedback from clients who book with us weekly.
            </p>
            <CTASection
              eyebrow="Ready"
              title="Skip the wait and lock in your slot."
              subtitle="Book online in under a minute or call for walk-in timing."
              primaryLabel="Book Appointment"
              primaryHref="/book"
              secondaryLabel="Call Now"
              secondaryHref={`tel:${site.contact.phone}`}
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {site.reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-2xl border border-border/70 bg-surface/90 p-5 text-sm text-muted shadow-sm"
              >
                <p className="text-foreground">"{review.quote}"</p>
                <div className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                  {review.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="rounded-3xl border border-border/70 bg-[linear-gradient(135deg,#f2e7da,#e8d4c2)] p-8 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
              About
            </div>
            <h2 className="mt-4 text-3xl font-[var(--font-display)]">
              {site.about.headline}
            </h2>
            <p className="mt-4 text-sm text-muted">{site.about.story}</p>
            <div className="mt-6 grid gap-2 text-sm font-semibold text-foreground">
              {site.about.specialties.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center text-sm font-semibold text-accent"
            >
              Meet the team
            </Link>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-border/70 bg-surface/90 p-8 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
                What to expect
              </div>
              <ul className="mt-5 space-y-4 text-sm text-muted">
                <li>
                  Clean, comfortable space with a relaxed, professional vibe.
                </li>
                <li>Consultation on every cut to match your style.</li>
                <li>Precision detail work and consistent results.</li>
                <li>Refreshments available while you wait.</li>
              </ul>
              <Link
                href="/book"
                className="mt-6 inline-flex items-center rounded-full bg-accent px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground"
              >
                Book now
              </Link>
            </div>
            <CTASection
              eyebrow="Walk-ins"
              title="Need a quick cleanup today?"
              subtitle="Call to confirm walk-in timing or check the booking link."
              primaryLabel="Call Now"
              primaryHref={`tel:${site.contact.phone}`}
              secondaryLabel="Get Directions"
              secondaryHref="/contact"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
              Location
            </div>
            <h2 className="text-3xl font-[var(--font-display)]">
              Easy to find in the heart of West Chester.
            </h2>
            <p className="text-sm text-muted">
              {site.contact.address.line1} {site.contact.address.line2},{" "}
              {site.contact.address.city}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${site.contact.phone}`}
              className="inline-flex items-center justify-center rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground"
            >
              Call
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground"
            >
              Directions
            </Link>
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="overflow-hidden rounded-3xl border border-border/70 bg-surface/90 shadow-sm">
            <iframe
              title="Based Barber Co map"
              src={site.contact.mapEmbedUrl}
              className="h-80 w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
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
            <p className="mt-4 text-xs text-muted">{site.contact.parkingNote}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
