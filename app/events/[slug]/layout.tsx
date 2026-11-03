import type { Metadata } from "next";
import type { ReactNode } from "react";
import { events } from "@/lib/content";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

const eventImages: Record<string, string> = {
  "campus-ambassador": "/events/campus_ambassador1920_x_560_px.jpg",
  vibes: "/events/vibes_banner.png",
  imperio: "/events/imperio_banner.png",
};

const eventSeo: Record<string, { type: string; description: string }> = {
  "campus-ambassador": { type: "Campus Ambassador Programme", description: "Explore Campus Ambassador 9.0 at Manfest Varchasva, IIM Lucknow. Read about campus outreach, recognition and the previous edition's participation details." },
  "vibes": { type: "Solo Dance Competition", description: "Discover Vibes, the solo freestyle dance competition at Manfest Varchasva, IIM Lucknow. Explore the event format, performances and previous edition." },
  "imperio": { type: "Group Dance Competition", description: "Explore Imperio, the Western group dance competition at Manfest Varchasva, IIM Lucknow. See team formats, previous rounds and event highlights." },
  "duex-danza": { type: "Duet Dance Competition", description: "Discover Duex Danza, the freestyle duet dance competition at Manfest Varchasva, IIM Lucknow. Explore its performance format and past edition." },
  "taal": { type: "Classical & Folk Dance Competition", description: "Explore Taal, the Indian classical and folk group dance competition at Manfest Varchasva, IIM Lucknow. Discover its cultural performance format." },
  "jashn": { type: "Fashion Parade Competition", description: "Discover JashN, the fashion parade competition at Manfest Varchasva, IIM Lucknow. Explore team styling, runway performance and past editions." },
  "antarnaad": { type: "Short Film Competition", description: "Explore Antarnaad, the short film and visual storytelling competition at Manfest Varchasva, IIM Lucknow. Discover the past event and creative format." },
  "halla-bol": { type: "Street Play Competition", description: "Discover Halla Bol, the nukkad natak and street play competition at Manfest Varchasva, IIM Lucknow. Explore theatre, performance and past editions." },
  "izhaar": { type: "Mono Act Competition", description: "Explore Izhaar, the mono act and solo acting competition at Manfest Varchasva, IIM Lucknow. Discover its theatre format and previous edition." },
  "stairway-to-hell": { type: "Band Competition", description: "Discover Stairway to Hell, the live band competition at Manfest Varchasva, IIM Lucknow. Explore musical performances and past competition editions." },
  "sur": { type: "Solo Singing Competition", description: "Explore Sur, the solo singing competition at Manfest Varchasva, IIM Lucknow. Learn about the vocal performance format and past editions." },
  "the-joust": { type: "Debate Competition", description: "Discover The Joust, the flagship debate competition at Manfest Varchasva, IIM Lucknow. Explore competitive argumentation and previous editions." },
  "rohan": { type: "Poetry Competition", description: "Explore Rohan, the spoken poetry competition at Manfest Varchasva, IIM Lucknow. Discover the Hindi and English performance format and past editions." },
  "iim-lucknow-mun": { type: "Model United Nations", description: "Discover IIM Lucknow MUN at Manfest Varchasva. Explore the Model United Nations format, diplomacy, debate and previous edition activities." },
  "young-leaders-programme": { type: "Leadership Programme", description: "Explore the Young Leaders Programme at Manfest Varchasva, IIM Lucknow. Discover its leadership conversations, learning and previous edition format." },
};

type Props = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Omit<Props, "children">): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);
  if (!event) return {};

  const seo = eventSeo[event.slug];
  if (!seo) return {};

  const canonical = `/events/${event.slug}/`;
  const image = eventImages[event.slug] ?? "/opengraph-image.png";
  // The MUN event name already includes IIM Lucknow, so avoid repetition.
  const title = event.slug === "iim-lucknow-mun"
    ? `${event.name} - ${seo.type} | Manfest Varchasva`
    : `${event.name} - ${seo.type} | Manfest Varchasva | IIM Lucknow`;

  return {
    title: { absolute: title },
    description: seo.description,
    alternates: { canonical },
    openGraph: {
      url: canonical,
      title,
      description: seo.description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: seo.description,
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
