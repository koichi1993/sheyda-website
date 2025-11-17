// File: src/sections/DrinksFeature.jsx
// Highlight block for cocktails / bottle service with a clean two-column scroll reveal.

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DrinksFeature() {
  const sectionRef = useRef(null);
  const photoRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const ctx = gsap.context(() => {
      // Text (right on desktop) — slide in from left
      gsap.from(textRef.current, {
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionEl,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Photo (left on desktop) — slide in from right
      gsap.from(photoRef.current, {
        x: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionEl,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Bullets — subtle stagger
      const bullets = gsap.utils.toArray(".drink-bullet");
      if (bullets.length > 0) {
        gsap.from(bullets, {
          y: 20,
          opacity: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="drinks"
      ref={sectionRef}
      className="relative bg-zinc-950/60 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Photo */}
          <div className="order-2 md:order-1" ref={photoRef}>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl">
              <img
                src="/drinks-feature.png" // replace with your image
                alt="Signature cocktails"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 md:order-2" ref={textRef}>
            {/* Accent heading */}
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Signature Drinks
            </p>

            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Craft cocktails & bottle service
            </h2>

            <p className="mt-3 text-white/80">
              From classics to house specials, our bar team shakes, stirs, and serves with
              style. Ask for mocktail options and seasonal recommendations.
            </p>

            {/* Feature bullets with accent dots */}
            <ul className="mt-6 grid gap-2 text-white/85 sm:grid-cols-2">
              <li className="drink-bullet flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                House signature cocktail list
              </li>
              <li className="drink-bullet flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                Bottle service available
              </li>
              <li className="drink-bullet flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                Mocktails on request
              </li>
              <li className="drink-bullet flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                Ask staff for pairings
              </li>
            </ul>

            {/* CTAs */}
            <div className="mt-6 flex gap-3">
              <a
                href="#book"
                className="inline-flex items-center rounded-lg border border-[var(--color-accent)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black transition-colors duration-300"
              >
                Book a Table
              </a>

              <a
                href="#menu"
                className="inline-flex items-center rounded-lg border border-[var(--color-accent)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black transition-colors duration-300"
              >
                View Drinks
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
