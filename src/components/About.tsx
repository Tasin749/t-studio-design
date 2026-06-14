import { motion } from 'motion/react';
import { Target, Lightbulb, Compass, Zap, BookOpen, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

export default function About() {
  const credibility = [
    { text: '10+ Creative Projects Completed', icon: Briefcase },
    { text: 'Experience Across Multiple Design Categories', icon: Zap },
    { text: 'Branding, Advertising & Motion Design Expertise', icon: Target },
  ];

  const education = [
    {
      title: 'Higher Secondary Certificate (HSC)',
      school: 'Govt. Shah Sultan College, Bogura',
      year: 'Completed in 2024'
    },
    {
      title: 'Secondary School Certificate (SSC)',
      school: 'Bogura Cantonment Public School & College',
      year: 'Completed in 2022'
    }
  ];

  const interests = [
    'Brand Identity Design',
    'Advertising & Marketing Design',
    'Social Media Creative Strategy',
    'Packaging Design',
    'Motion Graphics',
    'Visual Storytelling',
    'Creative Problem Solving',
    'Modern Design Trends',
    'User-Centered Visual Communication'
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* About The Designer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">About The Designer</h2>
            <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight mb-4">
              Nurul Motasim Tasin
            </h3>
            <h4 className="text-xl md:text-2xl text-gray-500 font-medium tracking-tight mb-8">
              Graphic Designer & Creative Problem Solver
            </h4>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
              <p>
                Nurul Motasim Tasin is a graphic designer focused on creating impactful visual solutions that help brands communicate effectively and stand out in competitive markets. Through T-Design Studio, he specializes in social media design, advertising creatives, branding, packaging design, and motion graphics.
              </p>
              <p>
                His design approach combines creativity, strategic thinking, and visual storytelling to transform ideas into compelling brand experiences.
              </p>
              <p>
                He believes great design is not only visually appealing but also solves real business challenges and creates meaningful connections between brands and their audiences.
              </p>
            </div>

            <blockquote className="border-l-4 border-black pl-6 italic text-xl md:text-2xl font-medium text-gray-900 leading-snug mb-10">
              "My goal is to help brands communicate more effectively through strategic, visually compelling, and result-driven design solutions."
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
             {/* Credibility */}
             <div className="bg-[#F8F8F8] p-8 md:p-10 rounded-3xl border border-gray-100">
               <h3 className="text-xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
                 <Target size={24} className="text-gray-400" /> Professional Experience
               </h3>
               <div className="space-y-6">
                 {credibility.map((item, i) => (
                   <div key={i} className="flex items-start gap-4">
                     <item.icon size={20} className="text-black flex-shrink-0 mt-1" />
                     <span className="text-lg font-medium text-gray-700">{item.text}</span>
                   </div>
                 ))}
               </div>
             </div>

             {/* Education */}
             <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
                 <GraduationCap size={24} className="text-gray-400" /> Education Background
                </h3>
                
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:ml-2.5 md:before:-translate-x-px before:w-0.5 before:bg-gradient-to-b before:from-gray-200 before:to-transparent">
                  {education.map((edu, idx) => (
                    <div key={idx} className="relative flex items-start gap-6">
                      <div className="w-5 h-5 rounded-full bg-black ring-4 ring-white flex-shrink-0 mt-1 relative z-10" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{edu.title}</h4>
                        <p className="text-gray-500 font-medium mb-1">{edu.school}</p>
                        <p className="text-sm font-bold tracking-widest text-gray-400 uppercase">{edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </motion.div>
        </div>

        {/* Professional Interests */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: '-100px' }}
           transition={{ duration: 0.8 }}
           className="border-t border-gray-200 pt-20"
        >
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-12 text-center">
             Professional Interests
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {interests.map((interest, i) => (
              <div 
                key={i}
                className="px-6 py-4 bg-[#F8F8F8] border border-gray-100 rounded-2xl flex items-center gap-3 text-lg font-medium text-gray-700 hover:border-black hover:bg-white transition-all duration-300"
              >
                <Lightbulb size={20} className="text-gray-400" />
                {interest}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
        </section>
  );
}
