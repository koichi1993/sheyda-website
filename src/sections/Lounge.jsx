// File: src/sections/Lounge.jsx
// Lounge section: pinned text + scroll-driven image sequence (3 images)

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

// For now all 3 use the same placeholder.
// Later, replace with /lounge-1.png, /lounge-2.png, /lounge-3.png, etc.
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
  const imagesWrapperRef = useRef(null);
  const imageRefs = useRef([]);

  useLayoutEffect(() => {
    const sectionEl = sectionRef.current;
    const wrapperEl = imagesWrapperRef.current;
    if (!sectionEl || !wrapperEl) return;

    const ctx = gsap.context(() => {
      // Set initial positions:
      // first image visible, next ones off to the right
      gsap.set(imageRefs.current, (el, i) => ({
        xPercent: i === 0 ? 0 : 100,
        autoAlpha: i === 0 ? 1 : 0,
      }));

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: "top top",
          end: "bottom+=200% top", // enough scroll distance
          scrub: true,
          pin: true,               // pin the whole Lounge section
        },
      });

      // Transition 1: image 0 -> image 1
      if (imageRefs.current[0] && imageRefs.current[1]) {
        tl.to(
          imageRefs.current[0],
          {
            xPercent: -100,
            autoAlpha: 0,
            ease: "power2.inOut",
          },
          0
        ).fromTo(
          imageRefs.current[1],
          { xPercent: 100, autoAlpha: 0 },
          { xPercent: 0, autoAlpha: 1, ease: "power2.inOut" },
          0
        );
      }

      // Transition 2: image 1 -> image 2
      if (imageRefs.current[1] && imageRefs.current[2]) {
        tl.to(
          imageRefs.current[1],
          {
            xPercent: -100,
            autoAlpha: 0,
            ease: "power2.inOut",
          },
          1 // happens in the second half of the scroll
        ).fromTo(
          imageRefs.current[2],
          { xPercent: 100, autoAlpha: 0 },
          { xPercent: 0, autoAlpha: 1, ease: "power2.inOut" },
          1
        );
      }
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
          {/* Text column (stays visible while images change) */}
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

          {/* Image column: scroll-driven sequence */}
          <div className="relative" ref={imagesWrapperRef}>
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
