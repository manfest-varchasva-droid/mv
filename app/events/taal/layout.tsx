import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

const description = "An Indian Classical and Folk group dance competition where technical precision, tradition and expressive storytelling come together.";

export const metadata: Metadata = {
  title: "Taal — 2025–26 Archive",
  description,
  alternates: {
    canonical: "/events/taal/",
  },
  openGraph: {
    url: "/events/taal/",
    title: "Taal | Manfest-Varchasva",
    description,
    images: ["/events/taal_banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taal | Manfest-Varchasva",
    description,
    images: ["/events/taal_banner.png"],
  },
};

export default function EventLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Events", href: "/events/" },
          { name: "Taal", href: "/events/taal/" },
        ]}
      />
      {children}
    </>
  );
}
