import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 lg:px-12 overflow-hidden bg-[#F8F8F8] min-h-[90vh] flex items-center">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-gray-200/50 rounded-full blur-3xl opacity-50 mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-gray-300/30 rounded-full blur-3xl opacity-50 mix-blend-multiply pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gray-900 leading-[1.1] mb-8">
            <span style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Design That Helps <br className="hidden md:block"/></span>
            <span className="text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Brands Get Noticed</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mb-12 leading-relaxed">
            T-Design Studio creates high-converting social media creatives, advertising designs, brand identities, packaging solutions, and motion graphics for modern businesses worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium text-center hover:bg-gray-800 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="bg-white text-black border border-gray-200 px-8 py-4 rounded-full text-lg font-medium text-center hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm">
              Start a Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
