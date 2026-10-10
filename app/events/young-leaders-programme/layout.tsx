import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

const description = "A three-day leadership programme to learn from distinguished leaders, exchange ideas and build a network of aspiring changemakers.";

export const metadata: Metadata = {
  title: "Young Leaders Program (YLP) — 2025–26 Archive",
  description,
  alternates: {
    canonical: "/events/young-leaders-programme/",
  },
  openGraph: {
    url: "/events/young-leaders-programme/",
    title: "Young Leaders Program (YLP) | Manfest-Varchasva",
    description,
    images: ["/events/ylp-banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Young Leaders Program (YLP) | Manfest-Varchasva",
    description,
    images: ["/events/ylp-banner.png"],
  },
};

export default function EventLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Events", href: "/events/" },
          { name: "Young Leaders Program (YLP)", href: "/events/young-leaders-programme/" },
        ]}
      />
      {children}
    </>
  );
}
