import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ProjectCard from './ProjectCard';
import { projects, Category } from '../data';

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState<Category | 'All'>('All');
  
  const filters = ['All', 'Social Media', 'Advertising', 'Branding', 'Packaging', 'Motion Graphics'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 lg:px-12 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Selected Work</h2>
            <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
              Recent Projects
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as Category | 'All')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter 
                    ? 'bg-black text-white' 
                    : 'bg-transparent text-gray-500 hover:text-black border border-transparent hover:border-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-gray-500">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
