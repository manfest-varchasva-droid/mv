import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Learn about the history, scale and team behind Manfest-Varchasva, IIM Lucknow's annual business, cultural and sports festival.",
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    url: "/about/",
    images: ["/events/about us hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/events/about us hero.jpg"],
  },
};

export default function AboutLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "About us", href: "/about/" }]} />
      {children}
    </>
  );
}
