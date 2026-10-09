import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="mv-not-found">
      <div className="mv-not-found-glow mv-not-found-glow-left" aria-hidden="true" />
      <div className="mv-not-found-glow mv-not-found-glow-right" aria-hidden="true" />

      <div className="page-shell mv-not-found-content">
        <span className="eyebrow">404 · OFF STAGE</span>
        <p className="mv-not-found-code" aria-hidden="true">404</p>
        <h1>This page has left the stage.</h1>
        <p className="mv-not-found-copy">
          The link may be outdated or the page may have moved. Head back to Manfest-Varchasva or explore the events archive.
        </p>
        <div className="mv-not-found-actions">
          <Link className="btn btn-primary" href="/">Back to home</Link>
          <Link className="btn btn-ghost" href="/events/">Explore events</Link>
        </div>
      </div>
    </section>
  );
}
