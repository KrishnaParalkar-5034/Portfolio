import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Skills from './sections/Skills';
import Shooting from './sections/Shooting';
import Projects from './sections/Projects';
import Showreel from './sections/Showreel';
import Education from './sections/Education';
import Contact from './sections/Contact';

/**
 * Main App — assembles all sections in order.
 */
export default function App() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Shooting />
        <Projects />
        <Showreel />
        <Education />
        <Contact />
      </main>
    </>
  );
}
