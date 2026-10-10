import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

const description = "A freestyle duet dance competition where chemistry, creativity and rhythm come together on stage.";

export const metadata: Metadata = {
  title: "Duex Danza — 2025–26 Archive",
  description,
  alternates: {
    canonical: "/events/duex-danza/",
  },
  openGraph: {
    url: "/events/duex-danza/",
    title: "Duex Danza | Manfest-Varchasva",
    description,
    images: ["/events/FREESTYLE_DUET_DANCE_COMPETITION_1.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Duex Danza | Manfest-Varchasva",
    description,
    images: ["/events/FREESTYLE_DUET_DANCE_COMPETITION_1.png"],
  },
};

export default function EventLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Events", href: "/events/" },
          { name: "Duex Danza", href: "/events/duex-danza/" },
        ]}
      />
      {children}
    </>
  );
}
