import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Fest Gallery & Concert Photos at IIM Lucknow",
  description:
    "Browse Manfest-Varchasva fest photos from IIM Lucknow, including concert memories, performances, leaders, competitions and campus moments from past editions.",
  alternates: {
    canonical: "/gallery/",
  },
  openGraph: {
    url: "/gallery/",
  },
};

export default function GalleryLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
