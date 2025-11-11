// File: src/sections/Hero.jsx

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh]">
      {/* Background (z-0) */}
      <div className="absolute inset-0 z-0">
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

      {/* Dark overlay above media (z-10) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 to-black/30" />

      {/* Foreground content (z-20) */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Aqua cyan text */}
          <p className="text-sm uppercase tracking-widest text-[var(--color-accent)]">
            Shisha • Drinks 
          </p>

          <h1 className="mt-2 text-4xl font-extrabold leading-tight sm:text-5xl">
            Sheyda Bar
          </h1>

          <p className="mt-3 text-white/80">
            Premium shisha blends, crafted cocktails, and a cozy vibe in the heart of Roppongi.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {/* Transparent aqua button */}
            <a
              href="#book"
              className="inline-flex items-center rounded-lg border border-[var(--color-accent)] bg-transparent px-5 py-3 text-sm font-semibold text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black transition-colors duration-300"
            >
              Book Now
            </a>

            <a
              href="#menu"
              className="inline-flex items-center rounded-lg border border-white/20 bg-transparent px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors duration-300"
            >
              View Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
