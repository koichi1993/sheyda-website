// File: src/sections/Testimonial.jsx
// Single featured testimonial with a glassy panel over the fixed background image.

export default function Testimonial() {
  return (
    <section id="testimonial" className="relative py-16 sm:py-20 section-fixed-bg">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Glass panel so the bg image shows through */}
        <div className="card px-6 py-8 text-center backdrop-blur-md">
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
                className="h-5 w-5"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.176 0l-2.802 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.719c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="mt-6">
            <p className="text-balance text-xl font-semibold text-white sm:text-2xl">
              “Best Shisha and he’s stuff ! Love the place you feel like home with people around and the Dj knows to play the music based on your preference! The Shisha (hookah ) is the best I tried in Japan !”
            </p>
          </blockquote>

          {/* Attribution */}
          <figcaption className="mt-4 text-sm text-white/70">
            <span className="font-semibold text-white">Ulugbekmirzo</span> — via Google Reviews
          </figcaption>
        </div>
      </div>
    </section>
  );
}
