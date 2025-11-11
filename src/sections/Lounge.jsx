// File: src/sections/Lounge.jsx
// Lounge details section with a short intro, feature list, and optional photo.

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

export default function Lounge() {
  return (
    <section id="lounge" className="relative bg-zinc-950/60 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Text */}
          <div>
            {/* Section header with accent color */}
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">The Lounge</p>

            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Designed for comfort and conversation
            </h2>

            <p className="mt-3 text-white/80">
              Our lounge blends modern design with warm lighting, cozy sofas, and a relaxing playlist that sets the mood
              for an unforgettable night. Whether you’re chilling with friends or celebrating, we’ve got a space for you.
            </p>

            {/* Stats grid */}
            <dl className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md">
              {stats.map((s, i) => (
                <div key={i}>
                  <dt className="text-xs text-white/60">{s.label}</dt>
                  <dd className="text-lg font-semibold text-white">{s.value}</dd>
                </div>
              ))}
            </dl>

            {/* Features list with accent dots */}
            <ul className="mt-8 grid gap-2 text-white/85 sm:grid-cols-2">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
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

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl">
              <img
                src="/lounge-placeholder.png" // replace with real image
                alt="Lounge interior"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
