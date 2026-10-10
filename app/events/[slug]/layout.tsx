import type { Metadata } from "next";
import type { ReactNode } from "react";
import { events } from "@/lib/content";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

const eventImages: Record<string, string> = {
  "campus-ambassador": "/events/campus_ambassador1920_x_560_px.jpg",
  vibes: "/events/vibes_banner.png",
  imperio: "/events/imperio_banner.png",
};

type Props = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Omit<Props, "children">): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);

  if (!event) {
    return {};
  }

  const canonical = `/events/${event.slug}/`;

  const image = eventImages[event.slug] ?? "/opengraph-image.png";

  return {
    title: `${event.name} — 2025–26 Archive`,
    description: event.blurb,
    alternates: {
      canonical,
    },
    openGraph: {
      url: canonical,
      title: `${event.name} | Manfest-Varchasva`,
      description: event.blurb,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${event.name} | Manfest-Varchasva`,
      description: event.blurb,
      images: [image],
    },
  };
}

export default async function EventLayout({ children, params }: Props) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);

  return (
    <>
      {event ? (
        <BreadcrumbJsonLd
          items={[
            { name: "Home", href: "/" },
            { name: "Events", href: "/events/" },
            { name: event.name, href: `/events/${event.slug}/` },
          ]}
        />
      ) : null}
      {children}
    </>
  );
}
