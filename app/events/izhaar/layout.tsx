import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

const description = "A mono-act competition where individual performers take the stage through narration or method acting.";

export const metadata: Metadata = {
  title: "Izhaar — 2025–26 Archive",
  description,
  alternates: {
    canonical: "/events/izhaar/",
  },
  openGraph: {
    url: "/events/izhaar/",
    title: "Izhaar | Manfest-Varchasva",
    description,
    images: ["/events/izhaar_mobile_banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Izhaar | Manfest-Varchasva",
    description,
    images: ["/events/izhaar_mobile_banner.png"],
  },
};

export default function EventLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Events", href: "/events/" },
          { name: "Izhaar", href: "/events/izhaar/" },
        ]}
      />
      {children}
    </>
  );
}
