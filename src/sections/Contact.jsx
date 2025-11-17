// File: src/sections/Contact.jsx
// Simple layout: header on top, hours on the left, map on the right.

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HOURS = [
  { day: "Mon", hours: "18:00 – 04:00" },
  { day: "Tue", hours: "18:00 – 04:00" },
  { day: "Wed", hours: "18:00 – 04:00" },
  { day: "Thu", hours: "18:00 – 04:00" },
  { day: "Fri", hours: "18:00 – 04:00" },
  { day: "Sat", hours: "18:00 – 04:00" },
  { day: "Sun", hours: "18:00 – 04:00" },
];

const CONTACT = {
  mapsQuery: "Roppongi+3-11-6+Minato+Tokyo+106-0032",
};

export default function Contact() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const mapRef = useRef(null);

  const mapSrc = `https://www.google.com/maps?q=${CONTACT.mapsQuery}&z=16&output=embed`;

  useLayoutEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const ctx = gsap.context(() => {
      // Header
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

      // Hours rows
      const hourRows = gsap.utils.toArray(".hour-row");
      if (hourRows.length) {
        gsap.from(hourRows, {
          y: 15,
          opacity: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Map block
      if (mapRef.current) {
        gsap.from(mapRef.current, {
          y: 40,
          opacity: 0,
          scale: 0.97,
          duration: 0.8,
          ease: "power2.out",
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
      id="contact"
      ref={sectionRef}
      className="relative bg-zinc-950/60 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top header block */}
        <div
          ref={headerRef}
          className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Get in touch
          </p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Contact &amp; Opening Hours
          </h2>
          <p className="mt-3 text-white/80">
            Reservations, private events, or general inquiries — send us a
            message or call. We’ll get back quickly.
          </p>
        </div>

        {/* Under header: Hours (left) + Map (right) */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2 items-start">
          {/* Left: Opening Hours + CTA */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-accent)]">
              Opening Hours
            </h3>
            <dl className="mt-3 grid max-w-md grid-cols-2 gap-x-6 gap-y-2 text-white/85">
              {HOURS.map((h, i) => (
                <div
                  key={i}
                  className="hour-row flex items-baseline justify-between border-b border-white/10 py-2"
                >
                  <dt className="text-sm text-white/70">{h.day}</dt>
                  <dd className="text-sm font-medium text-white">
                    {h.hours}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 flex gap-3">
              <a
                href="#book"
                className="inline-flex items-center rounded-lg border border-[var(--color-accent)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--color-accent)] transition-colors duration-300 hover:bg-[var(--color-accent)] hover:text-black"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div
            ref={mapRef}
            className="relative overflow-hidden rounded-2xl border border-[var(--color-accent)]/30 bg-transparent shadow-xl"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/10]">
              <iframe
                title="Map"
                src={mapSrc}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
