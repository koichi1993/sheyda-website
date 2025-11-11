// File: src/components/Navbar.jsx
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        "transition-shadow",
        scrolled ? "shadow-[0_1px_0_0_rgba(255,255,255,0.08)]" : "",
      ].join(" ")}
      aria-label="Site Header"
    >
      {/* translucent/blurred bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-2 mb-2 flex h-14 items-center justify-between rounded-xl border border-white/10 bg-black/40 px-3 backdrop-blur">
          {/* Brand (logo image) */}
          <a href="#home" className="flex items-center gap-2">
            {/* If your logo is in /public as /logo.png */}
            <img src="/logo.png" alt="Your Shisha Lounge" className="h-8 w-auto" />
            {/* If you prefer importing from src/assets, use:
                import logoUrl from "../assets/logo.png";
                and then: <img src={logoUrl} ... />
            */}
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            <a href="#home" className="text-sm text-white/80 hover:text-[var(--color-accent)]">Home</a>
            <a href="#menu" className="text-sm text-white/80 hover:text-[var(--color-accent)]">Menu</a>
            <a href="#gallery" className="text-sm text-white/80 hover:text-[var(--color-accent)]">Gallery</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-[var(--color-accent)]">Contact</a>
            <a
              href="#book"
              className="inline-flex items-center rounded-lg border border-[var(--color-accent)] bg-transparent px-3 py-2 text-sm font-semibold text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/90 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              {open ? (
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={[
          "md:hidden",
          "transition-[max-height] duration-300 ease-out overflow-hidden",
          open ? "max-h-96" : "max-h-0",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-3 rounded-xl border border-white/10 bg-black/60 p-3 backdrop-blur">
            <nav className="flex flex-col gap-3" aria-label="Mobile">
              <a href="#home" className="rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10">Home</a>
              <a href="#menu" className="rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10">Menu</a>
              <a href="#gallery" className="rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10">Gallery</a>
              <a href="#contact" className="rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10">Contact</a>
              <a
                href="#book"
                className="rounded-lg border border-[var(--color-accent)] bg-transparent px-3 py-2 text-center text-sm font-semibold text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black transition-colors duration-300"
              >
                Book Now
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
