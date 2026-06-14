import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12 mb-12">
        <div className="md:col-span-2">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-2xl font-bold tracking-tight mb-4 inline-block">
            T-Design Studio.
          </Link>
          <p className="text-gray-400 max-w-sm mt-2">
            Designing visuals that drive results. Helping brands grow through strategic visual design and modern aesthetics.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="/#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
            <li><a href="/#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
            <li><a href="/#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
            <li><a href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">Social</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="https://www.linkedin.com/in/nurul-motasim-tasin-0b2a063b1/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/_tasin_09/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
            <li><a href="https://www.facebook.com/profile.php?id=61589243996397" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Facebook</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} T-Design Studio. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
