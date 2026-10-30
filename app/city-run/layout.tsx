import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Lucknow City Run — Past Editions at IIM Lucknow",
  description:
    "Explore past editions of the Manfest-Varchasva City Run, part of IIM Lucknow's annual business, cultural and sports fest.",
  alternates: {
    canonical: "/city-run/",
  },
  openGraph: {
    url: "/city-run/",
    images: ["/events/city_run_33x.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/events/city_run_33x.png"],
  },
};

export default function CityRunLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "City Run", href: "/city-run/" }]} />
      {children}
    </>
  );
}
