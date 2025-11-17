// File: src/sections/Contact.jsx
// Contact details (phone/email/WhatsApp), opening hours, and map embed
// with a smooth GSAP scroll reveal.

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
  phone: "+81-00-0000-0000",
  whatsapp: "+81-00-0000-0000",
  email: "admin@sheydabar.com",
  address:
    "Japan, 〒106-0032 Tokyo, Minato City, Roppongi, 3 Chome−11−6 Taimeビル 3F",
  instagram: "https://www.instagram.com/sheydabar/?hl=en",
  mapsQuery: "Roppongi+3-11-6+Minato+Tokyo+106-0032",
};

export default function Contact() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const mapRef = useRef(null);

  const waHref = `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`;
  const telHref = `tel:${CONTACT.phone.replace(/\D/g, "")}`;
  const mapSrc = `https://www.google.com/maps?q=${CONTACT.mapsQuery}&z=16&output=embed`;

  useLayoutEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const ctx = gsap.context(() => {
      // Header (Get in touch + title + intro)
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

      // Contact method cards
      const contactCards = gsap.utils.toArray(".contact-card");
      if (contactCards.length) {
        gsap.from(contactCards, {
          y: 30,
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
            start: "top 75%",
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
      className="relative bg-zinc-950/60 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Left: Contact & Hours */}
          <div>
            {/* Accent title + heading + intro */}
            <div ref={headerRef}>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Get in touch
              </p>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
                Contact & Opening Hours
              </h2>
              <p className="mt-3 max-w-prose text-white/80">
                Reservations, private events, or general inquiries — send us a
                message or call. We’ll get back quickly.
              </p>
            </div>

            {/* Contact methods */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="contact-card rounded-xl border border-[var(--color-accent)] bg-transparent p-4 transition hover:bg-[var(--color-accent)]/10"
              >
                <div className="text-sm text-[var(--color-accent)]">
                  WhatsApp
                </div>
                <div className="text-lg font-semibold text-white">
                  {CONTACT.whatsapp}
                </div>
              </a>

              <a
                href={telHref}
                className="contact-card rounded-xl border border-[var(--color-accent)] bg-transparent p-4 transition hover:bg-[var(--color-accent)]/10"
              >
                <div className="text-sm text-[var(--color-accent)]">Phone</div>
                <div className="text-lg font-semibold text-white">
                  {CONTACT.phone}
                </div>
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className="contact-card rounded-xl border border-[var(--color-accent)] bg-transparent p-4 transition hover:bg-[var(--color-accent)]/10"
              >
                <div className="text-sm text-[var(--color-accent)]">Email</div>
                <div className="text-lg font-semibold text-white">
                  {CONTACT.email}
                </div>
              </a>

              <div className="contact-card rounded-xl border border-[var(--color-accent)] bg-transparent p-4 transition hover:bg-[var(--color-accent)]/10">
                <div className="text-sm text-[var(--color-accent)]">
                  Address
                </div>
                <div className="text-lg font-semibold text-white">
                  {CONTACT.address}
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-8">
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

              {/* CTA Buttons */}
              <div className="mt-6 flex gap-3">
                <a
                  href="#book"
                  className="inline-flex items-center rounded-lg border border-[var(--color-accent)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--color-accent)] transition-colors duration-300 hover:bg-[var(--color-accent)] hover:text-black"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div
            ref={mapRef}
            className="relative overflow-hidden rounded-2xl border border-[var(--color-accent)]/30 bg-transparent shadow-xl"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9]">
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
