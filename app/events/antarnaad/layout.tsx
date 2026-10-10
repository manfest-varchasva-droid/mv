import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

const description = "A short film and vlog-making competition where filmmakers and creators turn ideas and experiences into stories that resonate.";

export const metadata: Metadata = {
  title: "Antarnaad — 2025–26 Archive",
  description,
  alternates: {
    canonical: "/events/antarnaad/",
  },
  openGraph: {
    url: "/events/antarnaad/",
    title: "Antarnaad | Manfest-Varchasva",
    description,
    images: ["/events/antarnaad.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antarnaad | Manfest-Varchasva",
    description,
    images: ["/events/antarnaad.png"],
  },
};

export default function EventLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Events", href: "/events/" },
          { name: "Antarnaad", href: "/events/antarnaad/" },
        ]}
      />
      {children}
    </>
  );
}
