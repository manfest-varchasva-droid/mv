import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Our Partners",
  description:
    "Explore the partners and collaborators that support Manfest-Varchasva at IIM Lucknow.",
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
