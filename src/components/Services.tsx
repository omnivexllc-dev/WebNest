import { Palette, CodeXml, ShoppingBag, Layers, TrendingUp, Award, Bot, Gauge, Check, LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data.ts';
import ThreeDCard from './ThreeDCard';

const iconMap: Record<string, LucideIcon> = {
  Palette,
  CodeXml,
  ShoppingBag,
  Layers,
  TrendingUp,
  Award,
  Bot,
  Gauge
};

interface ServicesProps {
  onServiceSelect?: (serviceTitle: string) => void;
}

export default function Services({ onServiceSelect }: ServicesProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden bg-3d-blueprint">
      {/* Decorative backdrop elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-indigo-50/40 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl pointer-events-none translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header Section */}
        <div id="services-header" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold tracking-widest uppercase rounded-full mb-3">
            Our Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Innovative Digital Services <br />
            Built for Real Business Growth
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            We provide a comprehensive range of cutting-edge web design, software development, search optimization, and automation services tailored to secure your commercial goals.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          id="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {SERVICES_DATA.map((service) => {
            const IconComponent = iconMap[service.iconName] || Palette;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="perspective-1000 h-full"
              >
                <ThreeDCard 
                  className="group h-full bg-white border border-slate-200/60 rounded-3xl p-6 hover:border-indigo-600 transition-all duration-300 flex flex-col justify-between shadow-sm shadow-slate-100"
                  intensity={10}
                >
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      {/* Service Icon inside themed wrapper */}
                      <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      {/* Service Title */}
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300 mb-3 leading-snug">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-500 text-xs leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Bullet Benefits */}
                      <ul className="space-y-2 mb-8" style={{ transform: 'translateZ(15px)' }}>
                        {service.benefits.map((benefit, bIndex) => (
                          <li key={bIndex} className="flex items-start space-x-2">
                            <Check className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                            <span className="text-xs font-semibold text-slate-600">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Submit action trigger */}
                    <button
                      onClick={() => onServiceSelect?.(service.title)}
                      className="w-full text-center text-xs font-bold uppercase tracking-wider py-3.5 border border-slate-200 text-slate-700 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 rounded-xl transition-all duration-300 cursor-pointer"
                      style={{ transform: 'translateZ(20px)' }}
                    >
                      Request Consultation
                    </button>
                  </div>
                </ThreeDCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
