import { CheckCircle2, Shield, Users, Award, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const coreValues = [
    {
      title: 'Innovative Technical Stack',
      description: 'We deploy robust component structures, highly optimized API layers, secure cloud data storage, and modern visual frameworks to build blazing-fast interfaces.',
      icon: Award
    },
    {
      title: 'Enterprise-Grade Reliability',
      description: 'We build with a steadfast commitment to secure data pipelines, proper security protocols, and robust client redundancy systems to safeguard your assets.',
      icon: Shield
    },
    {
      title: 'Bespoke Digital Craftsmanship',
      description: 'Our senior visual designers and full-stack engineers work collaboratively to turn complex product requirements into beautiful, elegant, and modern digital assets.',
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
              Our Agency
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Empowering Global Brands with Precision Engineering
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              WebNest is a premier web design and software engineering studio. We bridge the gap between creative visual artistry and rigorous systems engineering, building custom interfaces curated directly to our clients' commercial goals. Our engineering team focuses on building custom systems designed to represent your brand with utmost distinction, rank prominently on search engines, and convert visitors into long-term commercial relationships.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              We specialize in custom enterprise website development, high-performance responsive web applications, secure e-commerce portals, and strategic search engine optimization. By leveraging React, next-gen TypeScript, solid Node.js backends, and beautiful performance practices, we ensure your platform maintains superior Core Web Vitals—loading instantly, scaling effortlessly, and engaging users across all screen sizes.
            </p>

            {/* Local Durgapur address details block inside about page */}
            <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-2xl flex items-center space-x-3.5 max-w-lg">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-5.5 h-5.5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 block uppercase tracking-widest animate-pulse">Design Studio</span>
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
