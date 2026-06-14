import { motion } from 'motion/react';
import { services } from '../data';
import { CheckCircle2 } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Specialized Design Services
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#F8F8F8] rounded-3xl p-8 lg:p-10 border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center mb-8">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.benefits.map((benefit, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
