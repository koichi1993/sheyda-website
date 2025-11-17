// File: src/App.jsx

import { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from './components/Navbar'
import Hero from "./sections/Hero";
import Badges from "./sections/Badges";
import About from "./sections/About";
import Lounge from "./sections/Lounge";
import Menu from "./sections/Menu";
import DrinksFeature from "./sections/DrinksFeature";
import Testimonial from "./sections/Testimonial";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import LogoIntro from "./components/LogoIntro";

gsap.registerPlugin(ScrollTrigger);

// You can keep ScrollReveals or even comment it out for now if you want
function ScrollReveals() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".badge-card").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

   // const seen = window.localStorage.getItem("sheyda_intro_seen");
    //if (seen) {
      //setShowIntro(false);
    //} else {
      //setShowIntro(true);
      //window.localStorage.setItem("sheyda_intro_seen", "true");
    //}
  }, []);

  const handleIntroFinish = () => {
    setShowIntro(false);
  };

  return (
    <>
      {/* Cinematic logo intro overlay (only first visit) */}
      {showIntro && <LogoIntro onFinish={handleIntroFinish} />}

      <ScrollReveals />
      <Navbar />
      <main className="pt-20 text-white">
        <Hero />
        <Badges />
        <About />
        <Lounge />
        <Menu />
        <DrinksFeature />
        <Testimonial />
        <Services />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
