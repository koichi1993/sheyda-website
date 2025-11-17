// File: src/sections/Hero.jsx

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
// ScrollTrigger is not needed here anymore, hero is static on scroll

export default function Hero() {
  const sectionRef = useRef(null);
  const mediaRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const buttonsRef = useRef(null);
  const smokeRefs = useRef([]);

  useLayoutEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const ctx = gsap.context(() => {
      // Simple on-load fade for hero text
      gsap.from([headingRef.current, subRef.current, buttonsRef.current], {
        opacity: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.12,
        ease: "power2.out",
      });

      // Smoke blobs: continuous float (not tied to scroll)
      smokeRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.to(el, {
          y: -80,
          x: i % 2 === 0 ? 25 : -25,
          opacity: 0.35,
          duration: 14 + i * 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={sectionRef} className="relative h-[80vh]">
      {/* Background media (video + fallback) */}
      <div ref={mediaRef} className="absolute inset-0 z-0">
        {/* Motion-friendly: show video */}
        <video
          className="h-full w-full object-cover motion-safe:block motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg" // lives in /public
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Reduced motion: show static image */}
        <img
          src="/hero-poster.jpg" // lives in /public
          alt=""
          className="h-full w-full object-cover motion-safe:hidden motion-reduce:block"
          loading="eager"
        />
      </div>

      {/* Dark overlay above media */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 to-black/40" />

      {/* Smoke blobs ABOVE overlay */}
      <div className="pointer-events-none absolute inset-0 z-20">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            ref={(el) => (smokeRefs.current[i] = el)}
            className="absolute h-40 w-40 rounded-full bg-white/14 blur-3xl"
            style={{
              top: `${20 + i * 20}%`,
              left: i === 0 ? "12%" : i === 1 ? "55%" : "78%",
            }}
          />
        ))}
      </div>

      {/* Foreground content */}
      <div className="relative z-30 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-[var(--color-accent)]">
            Shisha • Drinks
          </p>

          <h1
            ref={headingRef}
            className="mt-2 text-4xl font-extrabold leading-tight sm:text-5xl"
          >
            Sheyda Bar
          </h1>

          <p ref={subRef} className="mt-3 text-white/80">
            Premium shisha blends, crafted cocktails, and a cozy vibe in the
            heart of Roppongi.
          </p>

          <div ref={buttonsRef} className="mt-6 flex flex-wrap gap-3">
            <a
              href="#book"
              className="inline-flex items-center rounded-lg border border-[var(--color-accent)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--color-accent)] transition-colors duration-300 hover:bg-[var(--color-accent)] hover:text-black"
            >
              Book Now
            </a>
            <a
              href="#menu"
              className="inline-flex items-center rounded-lg border border-white/20 bg-transparent px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
            >
              View Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
