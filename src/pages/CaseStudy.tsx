import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects } from '../data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <button onClick={() => navigate('/')} className="text-blue-600 underline">Return Home</button>
      </div>
    );
  }

  return (
    <div className="font-sans text-black bg-white">
      <Navbar />
      
      <main className="pt-24 md:pt-32 pb-24">
        {/* Header Section */}
        <section className="px-6 lg:px-12 max-w-5xl mx-auto mb-16">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-12 font-medium">
            <ArrowLeft size={20} /> Back to Projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex gap-4 items-center mb-6">
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">{project.category}</span>
              <span className="text-sm text-gray-500 font-medium">{project.industry}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8 max-w-4xl leading-[1.1]">
              {project.title}
            </h1>
          </motion.div>
        </section>

        {/* Hero Image */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-6 lg:px-12 max-w-7xl mx-auto mb-20"
        >
          <div className="w-full aspect-[21/9] bg-gray-100 rounded-3xl overflow-hidden">
            <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
          </div>
        </motion.section>

        {/* Project Details Grid */}
        <section className="px-6 lg:px-12 max-w-5xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
            <div className="md:col-span-2 space-y-16">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Client Background</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{project.clientBackground}</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">The Problem</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{project.problem}</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Objective</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{project.objective}</p>
              </div>
            </div>

            <div className="bg-[#F8F8F8] p-8 rounded-3xl h-fit">
              <div className="mb-8">
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Services</h4>
                <ul className="space-y-1">
                  {project.servicesProvided.map(service => (
                    <li key={service} className="font-medium text-gray-900">{service}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                 <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Timeline</h4>
                 <p className="font-medium text-gray-900">{project.timeline}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategy & Process */}
        <section className="px-6 lg:px-12 max-w-5xl mx-auto mb-24">
          <div className="space-y-16">
             <div>
                <h3 className="text-2xl font-semibold mb-6">Research & Analysis</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{project.researchAnalysis}</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Creative Strategy</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{project.creativeStrategy}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-b border-gray-100 py-12">
                <div>
                   <h4 className="text-xl font-semibold mb-4">Typography</h4>
                   <p className="text-gray-600 text-lg">{project.designProcess.typography || 'Custom Type System'}</p>
                </div>
                <div>
                   <h4 className="text-xl font-semibold mb-4">Color Palette</h4>
                   <div className="flex gap-4">
                      {project.designProcess.colorChoices?.map(color => (
                        <div key={color} className="flex flex-col items-center gap-2">
                           <div className="w-12 h-12 rounded-full border border-gray-200 shadow-sm" style={{ backgroundColor: color }} />
                           <span className="text-xs text-gray-500 font-mono hidden md:block">{color}</span>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-24 space-y-8">
          {project.finalMockups.map((img, index) => (
             <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className="w-full rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100"
            >
               <img src={img} alt={`Mockup ${index + 1}`} className="w-full object-cover" />
             </motion.div>
          ))}
        </section>

        {/* Results */}
        <section className="px-6 lg:px-12 max-w-5xl mx-auto mb-16">
          <div className="bg-black text-white p-8 md:p-16 rounded-3xl space-y-12">
             <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-200">Design Solution</h3>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed">{project.designSolution}</p>
              </div>
              <div className="border-t border-gray-800 pt-12">
                <h3 className="text-2xl font-semibold mb-4 text-gray-200">Outcome & Impact</h3>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed">{project.outcomeImpact}</p>
              </div>
          </div>
        </section>

         {/* Takeaways */}
         <section className="px-6 lg:px-12 max-w-3xl mx-auto text-center mb-20 space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Key Takeaway</h3>
            <p className="text-2xl md:text-3xl font-medium text-gray-900 leading-tight">"{project.keyTakeaways}"</p>
         </section>

         {/* Next Project CTA */}
         <section className="px-6 lg:px-12 max-w-5xl mx-auto border-t border-gray-100 flex justify-center py-24">
            <Link to="/#contact" className="group flex items-center gap-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900 hover:text-gray-500 transition-colors">
              Start a similar project <ArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" size={48} />
            </Link>
         </section>

      </main>

      <Footer />
    </div>
  );
}
