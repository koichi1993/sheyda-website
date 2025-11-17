// File: src/sections/Footer.jsx
// Footer with brand logo, quick links, contact, and instagram icon button
// + smooth GSAP scroll reveal.

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const CONTACT = {
  phone: "+81-00-0000-0000",
  email: "admin@sheydabar.com",
  address: "Roppongi, Minato City, Tokyo 106-0032",
};

// 👉 Set your real Instagram URL here
const INSTAGRAM_URL = "https://www.instagram.com/sheydabar"; // <- update to your handle

export default function Footer() {
  const telHref = `tel:${CONTACT.phone.replace(/\D/g, "")}`;
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const footerEl = footerRef.current;
    if (!footerEl) return;

    const ctx = gsap.context(() => {
      // Columns (brand, links, contact, reservations)
      const cols = gsap.utils.toArray(".footer-col");
      if (cols.length) {
        gsap.from(cols, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerEl,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Bottom copyright line
      const bottom = footerEl.querySelector(".footer-bottom");
      if (bottom) {
        gsap.from(bottom, {
          y: 15,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerEl,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative border-t border-[var(--color-accent)]/20 bg-black/60 py-12 text-white/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="footer-col">
            {/* Logo replaces the text brand */}
            <a href="#home" className="inline-flex items-center">
              <img
                src="/logo.png" /* place file in /public */
                alt="Sheyda Bar"
                className="h-9 w-auto"
                loading="eager"
              />
              <span className="sr-only">Sheyda Bar</span>
            </a>

            <p className="mt-3 max-w-sm text-sm">
              Premium shisha, crafted cocktails, and cozy vibes in the heart of
              Roppongi. Follow us for events &amp; offers.
            </p>

            {/* Instagram icon button */}
            <div className="mt-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-accent)] bg-transparent px-3 py-2 text-sm font-semibold text-[var(--color-accent)] transition-colors duration-300 hover:bg-[var(--color-accent)] hover:text-black"
                aria-label="Instagram"
              >
                {/* Instagram SVG icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm6.25-.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z" />
                </svg>
                <span className="hidden sm:inline">Instagram</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-col">
            <h4 className="text-sm font-semibold text-[var(--color-accent)]">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              {LINKS.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.href}
                    className="transition-colors hover:text-[var(--color-accent)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="text-sm font-semibold text-[var(--color-accent)]">
              Contact
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-[var(--color-accent)]"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={telHref} className="hover:text-[var(--color-accent)]">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <span className="text-white/90">{CONTACT.address}</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="footer-col">
            <h4 className="text-sm font-semibold text-[var(--color-accent)]">
              Reservations
            </h4>
            <p className="mt-3 text-sm">Secure your table for tonight.</p>
            <a
              href="#book"
              className="mt-3 inline-flex items-center rounded-lg border border-[var(--color-accent)] bg-transparent px-4 py-2 text-sm font-semibold text-[var(--color-accent)] transition-colors duration-300 hover:bg-[var(--color-accent)] hover:text-black"
            >
              Book Now
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-bottom mt-10 border-t border-[var(--color-accent)]/20 pt-6 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Sheyda Bar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
