import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and conditions for participation in Manfest-Varchasva events at IIM Lucknow.",
  alternates: {
    canonical: "/terms-and-conditions/",
  },
  openGraph: {
    url: "/terms-and-conditions/",
  },
};

export default function TermsLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
