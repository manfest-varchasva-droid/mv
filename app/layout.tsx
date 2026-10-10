import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./stats-five.css";
import "./stats-overrides.css";
import "./hero-overrides.css";
import "./footer-overrides.css";
import "./partner-carousel.css";
import "./interaction-overrides.css";
import { Header } from "@/components/Header";
import { SitePartnerCarousel } from "@/components/SitePartnerCarousel";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { WebVitals } from "@/components/WebVitals";

const siteUrl = "https://iiml-manfestvarchasva.com";
const siteDescription =
  "Manfest-Varchasva 2027, IIM Lucknow's annual business, cultural and sports festival, taking place 5–7 February 2027.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Manfest-Varchasva 2027 | IIM Lucknow",
    template: "%s | Manfest-Varchasva",
  },
  description: siteDescription,
  applicationName: "Manfest-Varchasva",
  keywords: [
    "Manfest Varchasva",
    "IIM Lucknow",
    "college fest",
    "business fest",
    "cultural fest",
    "sports fest",
    "Manfest Varchasva 2027",
  ],
  authors: [{ name: "Manfest-Varchasva, IIM Lucknow" }],
  creator: "Manfest-Varchasva, IIM Lucknow",
  publisher: "Indian Institute of Management Lucknow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Manfest-Varchasva",
    title: "Manfest-Varchasva 2027 | IIM Lucknow",
    description: siteDescription,
    url: "/",
    images: [
      {
        url: "/opengraph-image.png",
        alt: "Manfest-Varchasva at IIM Lucknow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manfest-Varchasva 2027 | IIM Lucknow",
    description: siteDescription,
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/mv-logo.svg",
    shortcut: "/mv-logo.svg",
    apple: "/mv-logo.svg",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Manfest-Varchasva",
    url: siteUrl,
    logo: siteUrl + "/mv-logo.svg",
    email: "manfest-varchasva@iiml.ac.in",
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      name: "Indian Institute of Management Lucknow",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Prabandh Nagar",
      addressLocality: "Lucknow",
      postalCode: "226013",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/manfestvarchasva_iiml/",
      "https://www.youtube.com/@ManfestVarchasva",
      "https://www.facebook.com/ManfestVarchasva/",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Manfest-Varchasva 2027",
    description: siteDescription,
    url: siteUrl,
    startDate: "2027-02-05",
    endDate: "2027-02-07",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Indian Institute of Management Lucknow",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Prabandh Nagar",
        addressLocality: "Lucknow",
        postalCode: "226013",
        addressCountry: "IN",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Manfest-Varchasva, IIM Lucknow",
      url: siteUrl,
    },
  },
];

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Analytics />
        <WebVitals />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\u003c"),
          }}
        />
        <Header />
        <main id="main-content">{children}</main>
        <SitePartnerCarousel />
        <Footer />
      </body>
    </html>
  );
}
