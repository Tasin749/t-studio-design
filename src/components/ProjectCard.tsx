import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Project } from '../data';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/project/${project.id}`} className="block overflow-hidden relative rounded-2xl mb-4 bg-gray-100 aspect-[4/3]">
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </Link>
      
      <div>
        <p className="text-sm font-medium text-gray-500 mb-1">{project.category}</p>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 line-clamp-2">{project.shortDescription}</p>
      </div>
    </motion.div>
  );
}
