import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

const description = "A street-play competition where teams use performance, emotion and message to turn everyday spaces into powerful stages.";

export const metadata: Metadata = {
  title: "Halla Bol — 2025–26 Archive",
  description,
  alternates: {
    canonical: "/events/halla-bol/",
  },
  openGraph: {
    url: "/events/halla-bol/",
    title: "Halla Bol | Manfest-Varchasva",
    description,
    images: ["/events/halla_bol.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halla Bol | Manfest-Varchasva",
    description,
    images: ["/events/halla_bol.png"],
  },
};

export default function EventLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Events", href: "/events/" },
          { name: "Halla Bol", href: "/events/halla-bol/" },
        ]}
      />
      {children}
    </>
  );
}
