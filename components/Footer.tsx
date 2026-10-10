import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid page-shell">
        <div className="footer-intro">
          <div className="footer-brand">
            <Image
              className="footer-logo"
              src="/mv-logo.svg"
              alt="Manfest Varchasva"
              width={92}
              height={92}
            />
            <span>MANFEST-VARCHASVA</span>
          </div>
          <p>IIM Lucknow&apos;s annual business, cultural and sports festival.</p>
        </div>

        <nav aria-label="Explore Manfest-Varchasva">
          <h3>Explore</h3>
          <Link href="/about">About us</Link>
          <Link href="/events">Events</Link>
          <Link href="/city-run">City Run</Link>
          <Link href="/partners">Our Partners</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
        </nav>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <a
            className="footer-email"
            href="mailto:manfest-varchasva@iiml.ac.in"
          >
            manfest-varchasva@iiml.ac.in
          </a>
          <a href="tel:+917989491054">
            <span>DHANUSH</span> : (+91) 7989491054
          </a>
          <a href="tel:+918423715546">
            <span>SAKSHI</span> : (+91) 8423715546
          </a>

          <h3 className="footer-address-title">Address</h3>
          <p className="footer-address">
            Manfest-Varchasva, IIM Lucknow, Prabandh Nagar, Lucknow 226013
          </p>
        </div>

        <div className="footer-social">
          <h3>Social Media</h3>
          <div className="footer-social-links">
            <a
              href="https://www.instagram.com/manfestvarchasva_iiml/?hl=en"
              target="_blank"
              rel="noreferrer"
              aria-label="Manfest-Varchasva on Instagram"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" className="social-dot" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@ManfestVarchasva"
              target="_blank"
              rel="noreferrer"
              aria-label="Manfest-Varchasva on YouTube"
              title="YouTube"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 8.2a3.4 3.4 0 0 0-2.4-2.4C16.5 5.2 12 5.2 12 5.2s-4.5 0-6.6.6A3.4 3.4 0 0 0 3 8.2 35 35 0 0 0 2.5 12 35 35 0 0 0 3 15.8a3.4 3.4 0 0 0 2.4 2.4c2.1.6 6.6.6 6.6.6s4.5 0 6.6-.6a3.4 3.4 0 0 0 2.4-2.4 35 35 0 0 0 .5-3.8 35 35 0 0 0-.5-3.8Z" />
                <path d="m10 9 5 3-5 3V9Z" className="social-fill" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/ManfestVarchasva/"
              target="_blank"
              rel="noreferrer"
              aria-label="Manfest-Varchasva on Facebook"
              title="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 21v-8h3l.5-4H14V7.2c0-1.2.4-2.2 2.1-2.2H18V1.4c-.4-.1-1.7-.2-3-.2-3 0-5 1.8-5 5.2V9H7v4h3v8h4Z" className="social-fill" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom page-shell">
        <span>© 2026 Manfest-Varchasva</span>
        <span>
          Developed and maintained with <span className="footer-heart" aria-label="love">♥</span> by <strong>MV Core Team</strong>.
        </span>
      </div>
    </footer>
  );
}
