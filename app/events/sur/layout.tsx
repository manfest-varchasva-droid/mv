import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

const description = "A solo singing competition where vocalists take the spotlight with their voice, musicality and individual performance style.";

export const metadata: Metadata = {
  title: "Sur — 2025–26 Archive",
  description,
  alternates: {
    canonical: "/events/sur/",
  },
  openGraph: {
    url: "/events/sur/",
    title: "Sur | Manfest-Varchasva",
    description,
    images: ["/events/SUR_MOBILE.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sur | Manfest-Varchasva",
    description,
    images: ["/events/SUR_MOBILE.jpg"],
  },
};

export default function EventLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Events", href: "/events/" },
          { name: "Sur", href: "/events/sur/" },
        ]}
      />
      {children}
    </>
  );
}
