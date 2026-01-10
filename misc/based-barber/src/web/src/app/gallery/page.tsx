import type { Metadata } from "next";
import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse sample styles and inspiration at Based Barber Co in West Chester.",
};

const filters = ["All", "Haircut", "Fade", "Beard"];

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="space-y-4">
        <div className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
          Gallery
        </div>
        <h1 className="text-4xl font-[var(--font-display)]">
          Styles that set the standard.
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          Sample styles and inspiration while client photos load in. Swap in
          real cuts as soon as assets are ready.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-muted">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className="rounded-full border border-border px-4 py-2 text-foreground transition hover:border-accent hover:text-accent"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {site.gallery.map((item, index) => (
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

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
        <CTASection
          eyebrow="Book"
          title="Ready for your next cut?"
          subtitle="Reserve a time that fits your schedule."
          primaryLabel="Book Appointment"
          primaryHref="/book"
          secondaryLabel="View Services"
          secondaryHref="/services"
        />
        <div className="rounded-3xl border border-border/70 bg-surface/90 p-8 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.35em] text-muted">
            Inspiration
          </div>
          <p className="mt-4 text-sm text-muted">
            Want your own work featured? Book your next cut and let us know you
            are open to a quick photo after your service.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center text-sm font-semibold text-accent"
          >
            Contact the shop
          </Link>
        </div>
      </div>
    </div>
  );
}
