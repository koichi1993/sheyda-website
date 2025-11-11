// File: src/sections/Menu.jsx
// Left: compact 3-image collage (aligned heights, no gap)
// Right: clean text menu list

const items = [
  { name: "Classic Double Apple", desc: "Traditional blend with a smooth anise finish.", price: "¥1,800" },
  { name: "Mint Breeze",          desc: "Crisp menthol with a cool exhale.",               price: "¥1,900" },
  { name: "Blueberry Mist",       desc: "Sweet blueberry with gentle floral notes.",       price: "¥2,000" },
  { name: "Citrus Splash",        desc: "Lemon–orange blend, bright and zesty.",          price: "¥2,000" },
  { name: "Tropical Sunset",      desc: "Pineapple, mango, and a hint of coconut.",       price: "¥2,200" },
  { name: "Premium Custom Mix",   desc: "Choose up to 3 flavors — your perfect bowl.",    price: "¥2,500" },
];

const leftImages = {
  top: { src: "/shisha-wide.png", alt: "Shisha wide" },
  a:   { src: "/shisha-a.png",    alt: "Shisha A"    },
  b:   { src: "/shisha-b.png",    alt: "Shisha B"    },
};

export default function Menu() {
  return (
    <section id="menu" className="relative py-16 sm:py-20 section-fixed-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="card px-4 py-4 sm:flex sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">Shisha Menu</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Our signature blends</h2>
            <p className="mt-2 max-w-2xl text-white/80">
              Hand-selected tobaccos, packed to perfection. Ask our staff for nicotine levels and bowl recommendations.
            </p>
          </div>

          <a
            href="#book"
            className="mt-4 inline-flex items-center rounded-lg border border-[var(--color-accent)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black transition-colors duration-300 sm:mt-0"
          >
            Book a Table
          </a>
        </div>

        {/* Two-column layout */}
        <div className="mt-8 grid gap-6 md:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT: image collage */}
          <div className="grid gap-2">
            {/* Top wide image */}
            <figure className="overflow-hidden rounded-xl border border-[var(--color-accent)]/25 bg-black/30 shadow-sm h-[18rem] sm:h-[20rem] lg:h-[22rem]">
              <img
                src={leftImages.top.src}
                alt={leftImages.top.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </figure>

            {/* Bottom: two side-by-side images that together match top height */}
            <div className="grid grid-cols-2 gap-2">
              {[leftImages.a, leftImages.b].map((img, i) => (
                <figure
                  key={i}
                  className="overflow-hidden rounded-xl border border-[var(--color-accent)]/25 bg-black/30 shadow-sm h-[9rem] sm:h-[10rem] lg:h-[11rem]"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </figure>
              ))}
            </div>
          </div>

          {/* RIGHT: text menu */}
          <div className="grid gap-4">
            {items.map((it, i) => (
              <article
                key={i}
                className="card flex items-start justify-between gap-4 px-4 py-4 transition hover:bg-white/10"
              >
                <div>
                  <h3 className="text-base font-semibold text-white">{it.name}</h3>
                  <p className="mt-0.5 text-sm text-white/75">{it.desc}</p>
                </div>
                <span className="shrink-0 rounded-md border border-[var(--color-accent)] bg-transparent px-2 py-1 text-sm font-semibold text-[var(--color-accent)]">
                  {it.price}
                </span>
              </article>
            ))}

            <p className="text-sm text-white/60">
              Prices include tax. Service charge may apply. Ask staff for allergens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
