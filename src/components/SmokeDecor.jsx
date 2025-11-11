// File: src/components/SmokeDecor.jsx
// Left/right decorative smoke layers (non-interactive, fixed behind content)
export default function SmokeDecor() {
  return (
    <>
      {/* Left smoke */}
      <div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[1] h-screen w-[28vw] max-w-[380px] opacity-50"
        style={{
          backgroundImage: "url('/smoke-left.png')", // or .svg / .webp
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left center',
          backgroundSize: 'contain',
          filter: 'blur(0.3px)',
        }}
      />
      {/* Right smoke */}
      <div
        aria-hidden
        className="pointer-events-none fixed right-0 top-0 z-[1] h-screen w-[28vw] max-w-[380px] opacity-50"
        style={{
          backgroundImage: "url('/smoke-right.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right center',
          backgroundSize: 'contain',
          filter: 'blur(0.3px)',
        }}
      />
    </>
  );
}
