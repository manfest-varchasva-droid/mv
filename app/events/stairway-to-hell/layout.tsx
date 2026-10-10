import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

const description = "A live band competition built around musicianship, stage energy and performance at Manfest-Varchasva.";

export const metadata: Metadata = {
  title: "Stairway to Hell — 2025–26 Archive",
  description,
  alternates: {
    canonical: "/events/stairway-to-hell/",
  },
  openGraph: {
    url: "/events/stairway-to-hell/",
    title: "Stairway to Hell | Manfest-Varchasva",
    description,
    images: ["/events/stairway_to_hell_700400.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stairway to Hell | Manfest-Varchasva",
    description,
    images: ["/events/stairway_to_hell_700400.jpg"],
  },
};

export default function EventLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Events", href: "/events/" },
          { name: "Stairway to Hell", href: "/events/stairway-to-hell/" },
        ]}
      />
      {children}
    </>
  );
}
