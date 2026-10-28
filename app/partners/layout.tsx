import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Festival Sponsors & Partners at IIM Lucknow",
  description:
    "Discover past sponsors, brands and institutional partners supporting Manfest-Varchasva, the annual business, cultural and sports festival of IIM Lucknow.",
  alternates: {
    canonical: "/partners/",
  },
  openGraph: {
    url: "/partners/",
  },
};

export default function PartnersLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
