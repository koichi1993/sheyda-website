// File: src/sections/Lounge.jsx
// Lounge section: static text + auto-rotating image slideshow (no scroll control)

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const stats = [
  { label: "Total Capacity", value: "120 Guests" },
  { label: "Private Rooms", value: "3 VIP Areas" },
  { label: "Outdoor Terrace", value: "Yes" },
  { label: "Music Style", value: "Deep House / Chill" },
];

const features = [
  "Air conditioning & ventilation system",
  "Full bar with signature cocktails",
  "Free Wi-Fi",
  "Contactless payment accepted",
  "Open until 4 AM weekends",
];

// Replace with your real images later
const loungeImages = [
  {
    src: "/lounge-placeholder.png",
    alt: "Main lounge area",
    
  },
  {
    src: "/lounge-placeholder2.png",
    alt: "VIP lounge area",
    
  },
  {
    src: "/lounge-placeholder3.png",
    alt: "Outdoor terrace",
    
  },
];

export default function Lounge() {
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);

  useLayoutEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const ctx = gsap.context(() => {
      const slides = imageRefs.current.filter(Boolean);
      if (!slides.length) return;

      // Start: first slide visible, others hidden
      gsap.set(slides, { autoAlpha: 0 });
      gsap.set(slides[0], { autoAlpha: 1 });

      let current = 0;
      const slideDuration = 3; // seconds each slide fully visible
      const fadeDuration = 1;  // seconds for the crossfade
      let delayedCallRef;

      const showNext = () => {
        const prev = slides[current];
        const nextIndex = (current + 1) % slides.length;
        const next = slides[nextIndex];

        // Crossfade: next fades in WHILE prev fades out, so no full black gap
        gsap.timeline()
          .to(prev, {
            autoAlpha: 0,
            duration: fadeDuration,
            ease: "power2.inOut",
          })
          .to(
            next,
            {
              autoAlpha: 1,
              duration: fadeDuration,
              ease: "power2.inOut",
            },
            0 // start at the same time as prev fade-out
          );

        current = nextIndex;

        // Schedule the next change
        delayedCallRef = gsap.delayedCall(slideDuration, showNext);
      };

      // Start the loop after the first visible period
      delayedCallRef = gsap.delayedCall(slideDuration, showNext);

      // Cleanup on unmount
      return () => {
        if (delayedCallRef) delayedCallRef.kill();
        gsap.killTweensOf(slides);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="lounge"
      ref={sectionRef}
      className="relative bg-zinc-950/60 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Text column */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
              The Lounge
            </p>

            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Designed for comfort and conversation
            </h2>

            <p className="mt-3 text-white/80">
              Our lounge blends modern design with warm lighting, cozy sofas,
              and a relaxing playlist that sets the mood for an unforgettable
              night. Whether you’re chilling with friends or celebrating,
              we’ve got a space for you.
            </p>

            {/* Stats grid */}
            <dl className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md">
              {stats.map((s, i) => (
                <div key={i}>
                  <dt className="text-xs text-white/60">{s.label}</dt>
                  <dd className="text-lg font-semibold text-white">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Features list */}
            <ul className="mt-8 grid gap-2 text-white/85 sm:grid-cols-2">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  {f}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex gap-3">
              <a
                href="#menu"
                className="inline-flex items-center rounded-lg border border-[var(--color-accent)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black transition-colors duration-300"
              >
                Explore Menu
              </a>
              <a
                href="#book"
                className="inline-flex items-center rounded-lg border border-[var(--color-accent)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black transition-colors duration-300"
              >
                Book a Table
              </a>
            </div>
          </div>

          {/* Image column: auto slideshow */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl">
              {loungeImages.map((img, i) => (
                <div
                  key={i}
                  ref={(el) => (imageRefs.current[i] = el)}
                  className="absolute inset-0"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                      {img.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
