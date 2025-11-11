// src/components/GlobalBackground.jsx
export default function GlobalBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 bg-center bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(7,9,12,0.65) 0%, rgba(11,16,32,0.65) 100%), url('/background.png')",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
      }}
    />
  );
}
