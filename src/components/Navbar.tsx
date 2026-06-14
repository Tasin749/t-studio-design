import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Services', path: '/#services' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Contact', path: '/#contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-xl font-bold tracking-tight text-black mix-blend-difference z-50">
          T-Design Studio.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={handleNavClick}
              className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={handleNavClick}
            className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Start a Project
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2 text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 bg-white shadow-xl pt-24 pb-8 px-6 md:hidden flex flex-col gap-6 items-center"
          >
            {navLinks.map((link) => (
               <Link
               key={link.name}
               to={link.path}
               onClick={handleNavClick}
               className="text-lg font-medium text-gray-900"
             >
               {link.name}
             </Link>
            ))}
             <Link
                to="/#contact"
                onClick={handleNavClick}
                className="bg-black text-white px-8 py-3 rounded-full text-base font-medium mt-4"
              >
                Start a Project
              </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
