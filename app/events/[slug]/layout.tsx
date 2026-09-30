import type { Metadata } from "next";
import type { ReactNode } from "react";
import { events } from "@/lib/content";

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

  return {
    title: event.name,
    description: event.blurb,
    alternates: {
      canonical,
    },
    openGraph: {
      url: canonical,
      title: `${event.name} | Manfest-Varchasva 2027`,
      description: event.blurb,
    },
  };
}

export default function EventLayout({ children }: Props) {
  return children;
}
