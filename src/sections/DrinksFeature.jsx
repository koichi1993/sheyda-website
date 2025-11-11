// File: src/sections/DrinksFeature.jsx
// Highlight block for cocktails / bottle service. Swap image + copy.

export default function DrinksFeature() {
  return (
    <section id="drinks" className="relative bg-zinc-950/60 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Photo */}
          <div className="order-2 md:order-1">
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
          <div className="order-1 md:order-2">
            {/* Accent heading */}
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Signature Drinks
            </p>

            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Craft cocktails & bottle service
            </h2>

            <p className="mt-3 text-white/80">
              From classics to house specials, our bar team shakes, stirs, and serves with style.
              Ask for mocktail options and seasonal recommendations.
            </p>

            {/* Feature bullets with accent dots */}
            <ul className="mt-6 grid gap-2 text-white/85 sm:grid-cols-2">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                House signature cocktail list
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                Bottle service available
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                Mocktails on request
              </li>
              <li className="flex items-center gap-2">
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
