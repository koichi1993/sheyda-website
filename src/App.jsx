import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Badges from './sections/Badges'
import About from './sections/About'
import Lounge from './sections/Lounge'
import Menu from './sections/Menu'
import DrinksFeature from './sections/DrinksFeature'
import Testimonial from './sections/Testimonial'
import Services from './sections/Services'
import Gallery from './sections/Gallery'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import SmokeDecor from './components/SmokeDecor'

export default function App() {
  return (
    <>
      <Navbar />
      <SmokeDecor />
      {/* body has the gradient + fonts; keep main lean */}
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
  )
}

