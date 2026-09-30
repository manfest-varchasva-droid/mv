"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const links = [
  ["Home", "/"],
  ["About us", "/about"],
  ["Our Partners", "/partners"],
  ["City Run", "/city-run"],
  ["Events", "/events"],
  ["Gallery", "/gallery"],
] as const;

export function Header() {
  const mobileNavRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const closeMenu = (event: PointerEvent) => {
      const mobileNav = mobileNavRef.current;
      if (!mobileNav?.open) return;

      const target = event.target as Node | null;
      if (target && !mobileNav.contains(target)) {
        mobileNav.removeAttribute("open");
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        mobileNavRef.current?.removeAttribute("open");
      }
    };

    document.addEventListener("pointerdown", closeMenu);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeMenu);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeMobileMenu = () => {
    mobileNavRef.current?.removeAttribute("open");
  };

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="brand" aria-label="Manfest Varchasva home">
          <Image className="brand-logo" src="/mv-logo.svg" alt="" width={52} height={52} priority />
          <span className="brand-copy">
            <span
              className="brand-name"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "15px",
                letterSpacing: "2.7px",
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              <strong>MANFEST</strong>
              <strong>VARCHASVA</strong>
            </span>
            <span
              className="brand-tagline"
              style={{
                maxWidth: "none",
                fontSize: "10.5px",
                letterSpacing: "0.75px",
              }}
            >
              IIM Lucknow’s Annual Business, Cultural and Sports Fest
            </span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>

        <details ref={mobileNavRef} className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <div className="mobile-panel">
            {links.map(([label, href]) => (
              <Link key={href} href={href} onClick={closeMobileMenu}>
                {label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
