import { motion } from 'motion/react';
import { skills } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 lg:px-12 bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Toolkit & Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Industry Standard Tools
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="px-6 py-3 rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-sm text-gray-300 font-medium text-sm md:text-base hover:border-gray-600 hover:text-white transition-colors"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
