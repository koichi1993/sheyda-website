// File: src/sections/Services.jsx
// Three service tiles (Shisha / Drinks / VIP) with scroll reveal + hover microanimations.

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Shisha",
    desc: "Premium tobaccos, smooth draws, custom mixes.",
    cta: { label: "View Menu", href: "#menu" },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d="M11 2a1 1 0 0 0-1 1v1a3 3 0 0 1-3 3h-.5a1.5 1.5 0 1 0 0 3H9a3 3 0 0 1 3 3v6H6a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2h-6v-6a5 5 0 0 0-5-5 1 1 0 0 0 0 2 3 3 0 0 1 3 3v6h2v-6a5 5 0 0 0-5-5 1 1 0 1 0 0-2 3 3 0 0 1 3-3V3a1 1 0 0 0-1-1Z" />
      </svg>
    ),
  },
  {
    title: "Drinks",
    desc: "Craft cocktails, mocktails, and bottle service.",
    cta: { label: "See Drinks", href: "#drinks" },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d="M4 3h16v2l-6 6v7a3 3 0 1 1-6 0v-7L4 5V3Zm10.5 9.5L19 8H5l4.5 4.5V18a1.5 1.5 0 1 0 3 0v-5.5Z" />
      </svg>
    ),
  },
  {
    title: "VIP / Groups",
    desc: "Reserve private areas for celebrations.",
    cta: { label: "Book Now", href: "#book" },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d="M12 2a5 5 0 1 1-3.535 8.536A5 5 0 0 1 12 2Zm0 12c3.866 0 7 2.239 7 5v1H5v-1c0-2.761 3.134-5 7-5Z" />
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const ctx = gsap.context(() => {
      // Header fade/slide in
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Cards stagger in
      const cards = gsap.utils.toArray(".service-card");
      if (cards.length > 0) {
        gsap.from(cards, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Icons get a tiny pop-in (subtle)
      const icons = gsap.utils.toArray(".service-icon");
      if (icons.length > 0) {
        gsap.from(icons, {
          scale: 0.6,
          opacity: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center" ref={headerRef}>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
            What we offer
          </p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Choose your vibe
          </h2>
        </div>

        {/* Service cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={i}
              className="service-card group rounded-2xl border border-[var(--color-accent)]/50 bg-transparent p-5 shadow-sm backdrop-blur transition-transform duration-300 hover:-translate-y-2 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10"
            >
              {/* Icon container with accent color */}
              <div className="service-icon flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent)]/15 text-[var(--color-accent)] transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
                {s.icon}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-white">
                {s.title}
              </h3>

              <p className="mt-1 text-sm text-white/75">{s.desc}</p>

              {/* Transparent accent button */}
              <a
                href={s.cta.href}
                className="mt-4 inline-flex items-center rounded-lg border border-[var(--color-accent)] bg-transparent px-4 py-2 text-sm font-semibold text-[var(--color-accent)] transition-colors duration-300 group-hover:bg-[var(--color-accent)] group-hover:text-black"
              >
                {s.cta.label}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
