// File: src/components/LogoIntro.jsx
// Full-screen cinematic logo intro overlay.

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function LogoIntro({ onFinish }) {
  const overlayRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const overlayEl = overlayRef.current;
    const logoEl = logoRef.current;
    const textEl = textRef.current;
    if (!overlayEl || !logoEl) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        onComplete: () => {
          // Let React know we're done so App can hide this component
          onFinish?.();
        },
      });

      tl.fromTo(
        logoEl,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.2 }
      )
        .from(
          textEl,
          { opacity: 0, y: 12, duration: 0.5 },
          "-=0.3" // slightly overlapping
        )
        .to(
          overlayEl,
          { opacity: 0, duration: 3 },
          "+=0.3" // small pause with logo fully visible
        );
    }, overlayRef);

    return () => ctx.revert();
  }, [onFinish]);

  // Allow user to skip by click/tap or pressing any key
  const handleSkip = () => {
    onFinish?.();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleSkip}
      onKeyDown={handleSkip}
      tabIndex={-1}
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-black
        text-white
        cursor-pointer
      "
      aria-label="Sheyda Bar intro"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Logo */}
        <div
          ref={logoRef}
          className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-6 shadow-2xl"
        >
          <img
            src="/logo.png"
            alt="Sheyda Bar"
            className="h-14 w-auto sm:h-16"
            loading="eager"
          />
        </div>

        {/* Small tagline text */}
        <p
          ref={textRef}
          className="text-xs tracking-[0.3em] uppercase text-white/60"
        >
          Sheyda Bar • Roppongi
        </p>

        {/* Hint to skip (very subtle) */}
        <p className="mt-4 text-[10px] text-white/30">
          Tap to skip
        </p>
      </div>
    </div>
  );
}
