import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Learn about the history, scale and team behind Manfest-Varchasva, IIM Lucknow's annual business, cultural and sports festival.",
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    url: "/about/",
  },
};

export default function AboutLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
