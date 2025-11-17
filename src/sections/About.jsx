// File: src/sections/About.jsx
// Two-column About block with image, copy and CTA. Swap image and text.

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const ctx = gsap.context(() => {
      // Strong, obvious animation for testing:
      // image and text come from below + fade in when About enters view
      gsap.from(imageRef.current, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionEl,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(textRef.current, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionEl,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Image */}
          <div className="relative order-2 md:order-1" ref={imageRef}>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl">
              <img
                src="/about-placeholder.png" // place a real image in /public or import from src/assets
                alt="About our lounge"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2" ref={textRef}>
            {/* Accent header text */}
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Our Story
            </p>

            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              A cozy escape for shisha lovers
            </h2>

            <p className="mt-3 text-white/80">
              We blend premium tobaccos with handcrafted cocktails to create a warm, social atmosphere.
              Whether you’re winding down after work or celebrating with friends, our lounge is designed
              for comfort and conversation.
            </p>

            {/* Features list */}
            <ul className="mt-6 grid gap-2 text-white/85 sm:grid-cols-2">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                Premium shisha blends
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                Craft cocktails & mocktails
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                Late-night vibes
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                Group seating
              </li>
            </ul>

            {/* Transparent buttons */}
            <div className="mt-6 flex gap-3">
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
        </div>
      </div>
    </section>
  );
}
