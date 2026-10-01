"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";

const links = [
  ["Home", "/"],
  ["About us", "/about"],
  ["Our Partners", "/partners"],
  ["City Run", "/city-run"],
  ["Events", "/events"],
  ["Gallery", "/gallery"],
] as const;

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 70);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    setMobileOpen(false);

    // The Home navigation item should always return to the top of the homepage,
    // rather than restoring the previous scroll position.
    if (pathname === "/") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
    }
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <ScrollProgress />
      <BackToTop />
      {mobileOpen && (
        <button
          type="button"
          className="mv-mobile-backdrop"
          aria-label="Close navigation"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
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
              <Link
                key={href}
                href={href}
                onClick={() => {
                  if (href === "/") {
                    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                  }
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="mv-mobile-nav">
            <button
              type="button"
              className={`mv-mobile-toggle${mobileOpen ? " is-open" : ""}`}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-panel"
              onClick={() => setMobileOpen((open) => !open)}
            >
              <span>{mobileOpen ? "Close" : "Menu"}</span>
              <span className="mv-mobile-toggle-icon" aria-hidden="true">
                <i />
                <i />
              </span>
            </button>

            {mobileOpen && (
              <nav id="mobile-navigation-panel" className="mv-mobile-panel" aria-label="Mobile navigation">
                {links.map(([label, href]) => {
                  const active = isActive(href);
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={active ? "is-active" : undefined}
                      aria-current={active ? "page" : undefined}
                      onClick={() => {
                        setMobileOpen(false);
                        if (href === "/") {
                          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                        }
                      }}
                    >
                      <span>{label}</span>
                      <b aria-hidden="true">→</b>
                    </Link>
                  );
                })}
              </nav>
            )}
          </div>
        </div>
      </header>

      <style>{`
        .mv-mobile-nav {
          display: none;
        }

        .mv-mobile-backdrop {
          position: fixed;
          inset: 0;
          z-index: 45;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          border: 0;
          background: rgba(2, 3, 9, 0.64);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          animation: mvBackdropIn 180ms ease-out both;
        }

        @keyframes mvBackdropIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes mvPanelIn {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 820px) {
          .mv-mobile-nav {
            position: relative;
            z-index: 2;
            display: block;
          }

          .mv-mobile-toggle {
            min-width: 96px;
            min-height: 42px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 0 14px;
            border: 1px solid rgba(255, 255, 255, 0.13);
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.055);
            color: #fff;
            cursor: pointer;
            font-size: 10px;
            font-weight: 900;
            letter-spacing: 1.8px;
            text-transform: uppercase;
            transition: background 180ms ease, border-color 180ms ease, transform 180ms ease;
          }

          .mv-mobile-toggle:active {
            transform: scale(0.97);
          }

          .mv-mobile-toggle.is-open {
            border-color: rgba(207, 111, 255, 0.38);
            background: rgba(157, 95, 255, 0.12);
          }

          .mv-mobile-toggle-icon {
            position: relative;
            width: 15px;
            height: 12px;
            display: inline-block;
          }

          .mv-mobile-toggle-icon i {
            position: absolute;
            left: 0;
            width: 15px;
            height: 1.5px;
            border-radius: 999px;
            background: currentColor;
            transition: top 180ms ease, transform 180ms ease;
          }

          .mv-mobile-toggle-icon i:first-child { top: 3px; }
          .mv-mobile-toggle-icon i:last-child { top: 8px; }

          .mv-mobile-toggle.is-open .mv-mobile-toggle-icon i:first-child {
            top: 5px;
            transform: rotate(45deg);
          }

          .mv-mobile-toggle.is-open .mv-mobile-toggle-icon i:last-child {
            top: 5px;
            transform: rotate(-45deg);
          }

          .mv-mobile-panel {
            position: absolute;
            right: 0;
            top: 50px;
            width: min(290px, calc(100vw - 34px));
            padding: 9px;
            display: grid;
            gap: 4px;
            border: 1px solid rgba(255, 255, 255, 0.11);
            border-radius: 18px;
            background: rgba(7, 8, 16, 0.97);
            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);
            box-shadow: 0 24px 70px rgba(0, 0, 0, 0.48);
            animation: mvPanelIn 190ms cubic-bezier(.2,.8,.2,1) both;
          }

          .mv-mobile-panel a {
            min-height: 49px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
            padding: 0 14px;
            border: 1px solid transparent;
            border-radius: 12px;
            color: rgba(255, 255, 255, 0.82);
            font-size: 13px;
            font-weight: 800;
            letter-spacing: 0.6px;
            transition: background 160ms ease, border-color 160ms ease, color 160ms ease;
          }

          .mv-mobile-panel a b {
            color: rgba(255, 255, 255, 0.32);
            font-size: 16px;
            transition: transform 160ms ease, color 160ms ease;
          }

          .mv-mobile-panel a.is-active {
            border-color: rgba(202, 111, 255, 0.24);
            background: linear-gradient(90deg, rgba(156, 100, 255, 0.17), rgba(236, 77, 181, 0.08));
            color: #fff;
          }

          .mv-mobile-panel a.is-active b {
            color: #d77aff;
            transform: translateX(2px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mv-mobile-backdrop,
          .mv-mobile-panel {
            animation: none;
          }

          .mv-mobile-toggle,
          .mv-mobile-toggle-icon i,
          .mv-mobile-panel a,
          .mv-mobile-panel a b {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
