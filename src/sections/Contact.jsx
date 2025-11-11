// File: src/sections/Contact.jsx
// Contact details (phone/email/WhatsApp), opening hours, and map embed.

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
  address: "Japan, 〒106-0032 Tokyo, Minato City, Roppongi, 3 Chome−11−6 Taimeビル 3F",
  instagram: "https://www.instagram.com/sheydabar/?hl=en",
  mapsQuery: "Roppongi+3-11-6+Minato+Tokyo+106-0032",
};

export default function Contact() {
  const waHref = `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`;
  const telHref = `tel:${CONTACT.phone.replace(/\D/g, "")}`;
  const mapSrc = `https://www.google.com/maps?q=${CONTACT.mapsQuery}&z=16&output=embed`;

  return (
    <section id="contact" className="relative bg-zinc-950/60 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Left: Contact & Hours */}
          <div>
            {/* Accent title */}
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Get in touch
            </p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Contact & Opening Hours
            </h2>
            <p className="mt-3 max-w-prose text-white/80">
              Reservations, private events, or general inquiries — send us a message or call. We’ll get back quickly.
            </p>

            {/* Contact methods */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[var(--color-accent)] bg-transparent p-4 hover:bg-[var(--color-accent)]/10 transition"
              >
                <div className="text-sm text-[var(--color-accent)]">WhatsApp</div>
                <div className="text-lg font-semibold text-white">{CONTACT.whatsapp}</div>
              </a>

              <a
                href={telHref}
                className="rounded-xl border border-[var(--color-accent)] bg-transparent p-4 hover:bg-[var(--color-accent)]/10 transition"
              >
                <div className="text-sm text-[var(--color-accent)]">Phone</div>
                <div className="text-lg font-semibold text-white">{CONTACT.phone}</div>
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                className="rounded-xl border border-[var(--color-accent)] bg-transparent p-4 hover:bg-[var(--color-accent)]/10 transition"
              >
                <div className="text-sm text-[var(--color-accent)]">Email</div>
                <div className="text-lg font-semibold text-white">{CONTACT.email}</div>
              </a>

              <div className="rounded-xl border border-[var(--color-accent)] bg-transparent p-4 hover:bg-[var(--color-accent)]/10 transition">
                <div className="text-sm text-[var(--color-accent)]">Address</div>
                <div className="text-lg font-semibold text-white">{CONTACT.address}</div>
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
                    className="flex items-baseline justify-between border-b border-white/10 py-2"
                  >
                    <dt className="text-sm text-white/70">{h.day}</dt>
                    <dd className="text-sm font-medium text-white">{h.hours}</dd>
                  </div>
                ))}
              </dl>

              {/* CTA Buttons */}
              <div className="mt-6 flex gap-3">
                <a
                  href="#book"
                  className="inline-flex items-center rounded-lg border border-[var(--color-accent)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black transition-colors duration-300"
                >
                  Book Now
                </a>
            
              </div>
            </div>
          </div>

          {/* Right: Map */}
          {/* Right: Map (fixed with aspect-ratio wrapper) */}
            <div className="relative overflow-hidden rounded-2xl border border-[var(--color-accent)]/30 bg-transparent shadow-xl">
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
