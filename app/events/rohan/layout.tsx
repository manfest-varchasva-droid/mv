import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

const description = "A spoken-poetry competition where original Hindi or English verse becomes a platform for voice, emotion and expression.";

export const metadata: Metadata = {
  title: "Rohan — 2025–26 Archive",
  description,
  alternates: {
    canonical: "/events/rohan/",
  },
  openGraph: {
    url: "/events/rohan/",
    title: "Rohan | Manfest-Varchasva",
    description,
    images: ["/events/rohan (1).jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohan | Manfest-Varchasva",
    description,
    images: ["/events/rohan (1).jpeg"],
  },
};

export default function EventLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Events", href: "/events/" },
          { name: "Rohan", href: "/events/rohan/" },
        ]}
      />
      {children}
    </>
  );
}
