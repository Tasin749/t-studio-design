import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedProjects from '../components/FeaturedProjects';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="font-sans text-black bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <Services />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
