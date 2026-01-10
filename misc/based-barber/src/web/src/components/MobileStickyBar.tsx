import Link from "next/link";

import { site } from "@/content/site";

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-2 px-4 py-3">
        <Link
          href="/book"
          className="rounded-full bg-accent px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide text-accent-foreground"
        >
          Book
        </Link>
        <a
          href={`tel:${site.contact.phone}`}
          className="rounded-full border border-border px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide text-foreground"
        >
          Call
        </a>
        <Link
          href="/contact"
          className="rounded-full border border-border px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide text-foreground"
        >
          Directions
        </Link>
      </div>
    </div>
  );
}
