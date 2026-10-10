import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

const description = "IIM Lucknow's Model United Nations platform for diplomacy, public speaking, negotiation and leadership.";

export const metadata: Metadata = {
  title: "IIM Lucknow MUN — 2025–26 Archive",
  description,
  alternates: {
    canonical: "/events/iim-lucknow-mun/",
  },
  openGraph: {
    url: "/events/iim-lucknow-mun/",
    title: "IIM Lucknow MUN | Manfest-Varchasva",
    description,
    images: ["/events/MUN poster.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "IIM Lucknow MUN | Manfest-Varchasva",
    description,
    images: ["/events/MUN poster.jpg"],
  },
};

export default function EventLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Events", href: "/events/" },
          { name: "IIM Lucknow MUN", href: "/events/iim-lucknow-mun/" },
        ]}
      />
      {children}
    </>
  );
}
