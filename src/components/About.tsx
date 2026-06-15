import { CheckCircle2, Shield, Users, Award, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const coreValues = [
    {
      title: 'Innovative Technology Solutions',
      description: 'We embrace high-density APIs, streaming large language models, secure cloud storage, and cutting edge design frameworks.',
      icon: Award
    },
    {
      title: 'Security-First Architecture',
      description: 'Our software engineers follow rigorous secure-shell protocols, connection pool parameters, and continuous cloud back-ups.',
      icon: Shield
    },
    {
      title: 'Highly Certified Architects',
      description: 'Our creative visual designers and full-stack engineers come armed with years of enterprise grade digital craftsmanship.',
      icon: Users
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Visual layouts decorative circles */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-100/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Main layout container split in two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Narrative description & bullet statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded-full mb-2">
              About WebNest
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Empowering Businesses Through Innovative Design & Tech
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              As a leading <strong className="font-semibold text-slate-900">Website Design Company in Durgapur</strong>, WebNest is the premier destination for high-profile <strong className="font-semibold text-slate-900">Website Design</strong>, next-gen <strong className="font-semibold text-slate-900">Web Development Services in Durgapur</strong>, and organic <strong className="font-semibold text-slate-900">SEO Services in Durgapur</strong>. Whether you are actively seeking a top-tier <strong className="font-semibold text-slate-900">Website Designer Near Me</strong>, custom <strong className="font-semibold text-slate-900">Ecommerce Website Development</strong>, or an <strong className="font-semibold text-slate-900">Affordable Website Design Company</strong> with deep regional expertise, our certified software engineers configure high authority projects built to scale.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              We specialize in custom <strong className="font-semibold text-slate-800">Business Website Creation</strong>, high-performance <strong className="font-semibold text-slate-800">Responsive Website Design</strong>, full-scale <strong className="font-semibold text-slate-800">Ecommerce Development</strong>, <strong className="font-semibold text-slate-800">Digital Marketing</strong>, and <strong className="font-semibold text-slate-800">Search Engine Optimization</strong> to maximize your company's digital footprint. By building robust <strong className="font-semibold text-slate-800">SEO-Friendly Website Development</strong> layouts using React, next-gen TypeScript, Node, and secure database schemas, we ensure your site is optimized to rank higher and load faster.
            </p>

            {/* Local Durgapur address details block inside about page */}
            <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-2xl flex items-center space-x-3.5 max-w-lg">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-5.5 h-5.5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 block uppercase tracking-widest">Office Location</span>
                <span className="text-xs font-semibold text-slate-800 leading-normal block mt-0.5">
                  2/32 Bankim Chandra Avenue, B-Zone, Durgapur, West Bengal 713205, India
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Values cards grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-[10px] text-slate-400 font-extrabold tracking-widest uppercase block mb-2">
              OUR CORE OPERATIONAL PILLARS
            </span>
            {coreValues.map((val, index) => {
              const ValueIcon = val.icon;
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { type: 'spring', stiffness: 100, damping: 15 }
                    }
                  }}
                  className="bg-slate-50/70 hover:bg-white border border-slate-200/60 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-200/30 p-6 rounded-2xl transition-all duration-300 flex items-start space-x-5 shadow-sm"
                >
                  <div className="w-12 h-12 bg-white text-slate-900 border border-slate-200/60 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <ValueIcon className="w-5.5 h-5.5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug">
                      {val.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
