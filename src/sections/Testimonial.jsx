// File: src/sections/Testimonial.jsx
// Single featured testimonial with a glassy panel + scroll reveal.

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const ctx = gsap.context(() => {
      // Glass card: float up + fade + slight scale-in
      if (cardRef.current) {
        gsap.from(cardRef.current, {
          y: 40,
          opacity: 0,
          scale: 0.97,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Stars: little twinkle / pop-in with stagger
      const stars = gsap.utils.toArray(".testimonial-star");
      if (stars.length > 0) {
        gsap.from(stars, {
          scale: 0,
          rotate: -45,
          transformOrigin: "50% 50%",
          duration: 0.4,
          stagger: 0.05,
          ease: "back.out(1.7)",
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
      id="testimonial"
      ref={sectionRef}
      className="relative py-16 sm:py-20 section-fixed-bg"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Glass panel so the bg image shows through */}
        <div
          ref={cardRef}
          className="card px-6 py-8 text-center backdrop-blur-md"
        >
          {/* Avatar */}
          <div className="mx-auto h-20 w-20 overflow-hidden rounded-full ring-2 ring-white/20">
            <img
              src="/guest-ava.png" // replace with your guest photo/brand avatar
              alt="Guest"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Stars */}
          <div
            className="mt-4 flex items-center justify-center gap-1 text-amber-400"
            aria-label="5 star rating"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 testimonial-star"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.176 0l-2.802 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.719c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="mt-6">
            <p className="text-balance text-xl font-semibold text-white sm:text-2xl">
              “Best Shisha and he’s stuff ! Love the place you feel like home
              with people around and the Dj knows to play the music based on
              your preference! The Shisha (hookah ) is the best I tried in
              Japan !”
            </p>
          </blockquote>

          {/* Attribution */}
          <figcaption className="mt-4 text-sm text-white/70">
            <span className="font-semibold text-white">Ulugbekmirzo</span> — via
            Google Reviews
          </figcaption>
        </div>
      </div>
    </section>
  );
}
