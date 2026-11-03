import type { Metadata } from "next";
import type { ReactNode } from "react";
import { events } from "@/lib/content";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { getEventMetadata } from "@/lib/event-seo";

type Props = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Omit<Props, "children">): Promise<Metadata> {
  const { slug } = await params;
  return getEventMetadata(slug);
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
