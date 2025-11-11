// File: src/sections/Gallery.jsx
// Responsive image gallery. Swap the file names or feed from a data array.

const images = [
  { src: "/gal-01.png", alt: "Lounge photo 1" },
  { src: "/gal-02.png", alt: "Lounge photo 2" },
  { src: "/gal-03.png", alt: "Lounge photo 3" },
  { src: "/gal-04.png", alt: "Lounge photo 4" },
  { src: "/gal-05.png", alt: "Lounge photo 5" },
  { src: "/gal-06.png", alt: "Lounge photo 6" },
  { src: "/gal-07.png", alt: "Lounge photo 7" },
  { src: "/gal-08.png", alt: "Lounge photo 8" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">Gallery</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Inside the lounge</h2>
          <p className="mx-auto mt-2 max-w-2xl text-white/80">
            A glimpse of our space, drinks, and shisha moments.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((img, i) => (
            <figure
              key={i}
              className="group overflow-hidden rounded-xl border border-[var(--color-accent)]/20 bg-transparent shadow-sm backdrop-blur transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </figure>
          ))}
        </div>

        {/* Optional note */}
        <p className="mt-6 text-center text-sm text-white/60">
          Tap images to enlarge.
        </p>
      </div>
    </section>
  );
}
