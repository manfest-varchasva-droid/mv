import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "City Run",
  description:
    "Discover the Manfest-Varchasva City Run, part of IIM Lucknow's annual business, cultural and sports festival.",
  alternates: {
    canonical: "/city-run/",
  },
  openGraph: {
    url: "/city-run/",
  },
};

export default function CityRunLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
