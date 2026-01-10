import { site } from "@/content/site";

const dayMap: Record<string, string> = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

function to24Hour(time: string) {
  const match = time.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return "";
  const [, hours, minutes, meridiem] = match;
  const hourNum = Number(hours);
  const normalized =
    meridiem.toUpperCase() === "PM"
      ? (hourNum % 12) + 12
      : hourNum % 12;
  return `${String(normalized).padStart(2, "0")}:${minutes}`;
}

function buildOpeningHours() {
  return site.hours
    .map((entry) => {
      if (entry.value.toLowerCase() === "closed") return null;
      const [opensRaw, closesRaw] = entry.value.split(" - ");
      if (!opensRaw || !closesRaw) return null;
      const opens = to24Hour(opensRaw.trim());
      const closes = to24Hour(closesRaw.trim());
      if (!opens || !closes) return null;
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayMap[entry.label],
        opens,
        closes,
      };
    })
    .filter(Boolean);
}

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    name: site.name,
    description: site.description,
    url: site.seo.baseUrl,
    telephone: site.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.contact.address.line1} ${site.contact.address.line2}`,
      addressLocality: site.contact.address.city,
      addressRegion: site.contact.address.state,
      postalCode: site.contact.address.zip,
      addressCountry: "US",
    },
    openingHoursSpecification: buildOpeningHours(),
    sameAs: site.social.map((entry) => entry.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
