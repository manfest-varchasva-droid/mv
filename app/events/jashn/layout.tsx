import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

const description = "The Manfest-Varchasva fashion parade where confidence, storytelling and style come together on the runway.";

export const metadata: Metadata = {
  title: "JashN — 2025–26 Archive",
  description,
  alternates: {
    canonical: "/events/jashn/",
  },
  openGraph: {
    url: "/events/jashn/",
    title: "JashN | Manfest-Varchasva",
    description,
    images: ["/events/mobile_banner_new_JASHN.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JashN | Manfest-Varchasva",
    description,
    images: ["/events/mobile_banner_new_JASHN.png"],
  },
};

export default function EventLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Events", href: "/events/" },
          { name: "JashN", href: "/events/jashn/" },
        ]}
      />
      {children}
    </>
  );
}
