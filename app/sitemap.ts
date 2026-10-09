import type { MetadataRoute } from "next";
import { events } from "@/lib/content";

export const dynamic = "force-static";

const baseUrl = "https://iiml-manfestvarchasva.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/events/`, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/city-run/`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/gallery/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/partners/`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/selections-2026/`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/terms-and-conditions/`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const eventPages: MetadataRoute.Sitemap = events.map((event) => ({
    url: `${baseUrl}/events/${event.slug}/`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...eventPages];
}
