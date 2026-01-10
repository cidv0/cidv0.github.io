import type { MetadataRoute } from "next";

import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/gallery",
    "/about",
    "/contact",
    "/book",
  ];

  return routes.map((route) => ({
    url: `${site.seo.baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
