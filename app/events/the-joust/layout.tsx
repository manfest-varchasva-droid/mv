import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

const description = "The annual debate competition that tests argumentation, rebuttal, persuasion and the ability to think on your feet.";

export const metadata: Metadata = {
  title: "The Joust — 2025–26 Archive",
  description,
  alternates: {
    canonical: "/events/the-joust/",
  },
  openGraph: {
    url: "/events/the-joust/",
    title: "The Joust | Manfest-Varchasva",
    description,
    images: ["/events/joust_mobile (1).jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Joust | Manfest-Varchasva",
    description,
    images: ["/events/joust_mobile (1).jpg"],
  },
};

export default function EventLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Events", href: "/events/" },
          { name: "The Joust", href: "/events/the-joust/" },
        ]}
      />
      {children}
    </>
  );
}
