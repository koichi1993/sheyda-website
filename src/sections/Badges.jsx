// File: src/sections/Badges.jsx
// Small highlight badges below the hero. Adjust items as needed.

const items = [
  { label: "Signature Shisha", value: "20+ blends" },
  { label: "Happy Hour", value: "18:00–20:00" },
  { label: "Open Late", value: "Fri–Sat 04:00" },
  { label: "Seats", value: "120 capacity" },
];

export default function Badges() {
  return (
    <section aria-label="Highlights" className="bg-zinc-950/60">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {items.map((it, i) => (
            <div
              key={i}
              className="rounded-xl border border-[var(--color-accent)] bg-transparent px-4 py-4 text-center shadow-sm backdrop-blur transition hover:bg-[var(--color-accent)]/10"
            >
              {/* Label text color changed to aqua-cyan */}
              <div className="text-[var(--color-accent)] text-xs uppercase tracking-widest">
                {it.label}
              </div>
              <div className="mt-1 text-lg font-semibold text-white">
                {it.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
