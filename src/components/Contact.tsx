import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-8">
              Let's Build Something <br/>
              <span className="text-gray-400">Great Together</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-md">
              We're currently taking on new projects. Fill out the form or send us an email directly at <a href="mailto:email.tasin78@gmail.com" className="font-semibold hover:text-black hover:underline transition-colors">email.tasin78@gmail.com</a>.
            </p>
            
            <div className="flex flex-col gap-6">
              <a href="https://www.facebook.com/profile.php?id=61589243996397" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xl font-medium text-gray-900 hover:text-gray-500 transition-colors w-fit border-b border-black pb-1">
                Facebook <ArrowUpRight size={20} />
              </a>
              <a href="https://www.linkedin.com/in/nurul-motasim-tasin-0b2a063b1/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xl font-medium text-gray-900 hover:text-gray-500 transition-colors w-fit border-b border-black pb-1">
                LinkedIn <ArrowUpRight size={20} />
              </a>
              <a href="https://www.instagram.com/_tasin_09/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xl font-medium text-gray-900 hover:text-gray-500 transition-colors w-fit border-b border-black pb-1">
                Instagram <ArrowUpRight size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F8F8F8] p-8 md:p-12 rounded-3xl"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-black transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-black transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-900 mb-2">Project Type</label>
                <select 
                  id="projectType" 
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-black transition-colors text-gray-700"
                >
                  <option value="">Select a service</option>
                  <option value="Branding">Branding & Identity</option>
                  <option value="SocialMedia">Social Media Design</option>
                  <option value="Ads">Advertising Creatives</option>
                  <option value="Packaging">Packaging Design</option>
                  <option value="Motion">Motion Graphics</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">Project Details</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-black transition-colors resize-none"
                  placeholder="Tell us about your project goals, timeline, and budget..."
                />
              </div>

              <button className="bg-black text-white rounded-xl py-4 mt-2 font-medium text-lg hover:bg-gray-800 transition-colors">
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
