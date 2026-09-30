import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore performances, speakers and memorable moments from Manfest-Varchasva at IIM Lucknow.",
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
