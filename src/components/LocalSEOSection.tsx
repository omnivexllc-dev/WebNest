import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ChevronDown, HelpCircle, CheckCircle, Smartphone, Globe, Share2 } from 'lucide-react';
import { SEO_LOCAL_FAQS, SEO_SERVICE_AREAS } from '../data/textContent.ts';

export default function LocalSEOSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="local-hub" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/50">
      {/* Decorative backdrop elements - modern slate styling */}
      <div className="absolute top-1/3 right-12 w-96 h-96 bg-blue-100/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-12 w-80 h-80 bg-slate-200/40 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header Block with high readability */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center space-x-2 px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded-full mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Local SEO & Web Authority</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Elite Web Design & SEO Services <br />
            in Durgapur & West Bengal
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From the heart of steel-city Durgapur, WebNest engineers world-class responsive digital platforms. We craft highly intuitive user experiences designed specifically to dominate organic Google rankings, speed up customer conversions, and fuel enterprise growth across West Bengal.
          </p>
        </motion.div>

        {/* Dynamic Service Area Grid & Local SEO Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Block: Services capabilities & Geographical listings */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="bg-white border border-slate-200/60 p-8 rounded-3xl shadow-sm">
              <span className="text-[10px] text-slate-400 font-extrabold tracking-widest uppercase block mb-2">
                ORGANIC TARGETING STRATEGY
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight leading-snug">
                Why Local Search Dominance is Critical
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                A gorgeous web layout means nothing if prospective clients can't discover it on Google. Our digital marketing analysts perform in-depth keyword analysis targeting Durgapur, Asansol, and greater West Bengal search traffic. We implement rigorous organic on-page techniques, speed up Core Web Vitals, and build structural metadata to convert traffic instantly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-2.5">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Keyword Mapping</span>
                    <span className="text-[11px] text-slate-500 block">Focused local intent keywords</span>
                  </div>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Globe className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Schema Markup</span>
                    <span className="text-[11px] text-slate-500 block">Rich snippets & local cards</span>
                  </div>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Smartphone className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Mobile Optimization</span>
                    <span className="text-[11px] text-slate-500 block">Tailored for fast rendering</span>
                  </div>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Share2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Social Metas</span>
                    <span className="text-[11px] text-slate-500 block">Formatted for simple sharing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro badge mapping regional cities */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
              <div className="relative z-10">
                <span className="text-[9px] text-blue-400 font-extrabold tracking-widest uppercase block mb-2">Regional Coverage Map</span>
                <h4 className="text-lg font-bold mb-4 tracking-tight">Active Client Support Regions inside West Bengal</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {SEO_SERVICE_AREAS.map((area, i) => (
                    <div key={i} className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3 text-left hover:border-blue-500 transition-all duration-300">
                      <span className="text-xs font-bold text-white block mb-0.5">{area.city}</span>
                      <span className="text-[10px] text-slate-400 leading-tight block">{area.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Block: Accordion FAQ block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="bg-white border border-slate-200/60 p-8 rounded-3xl shadow-sm">
              <span className="text-[10px] text-slate-400 font-extrabold tracking-widest uppercase block mb-2">Local SEO FAQ Directory</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6 tracking-tight leading-snug">
                Web Design & SEO Knowledge Base
              </h3>

              <div id="seo-faq-accordion" className="space-y-3.5">
                {SEO_LOCAL_FAQS.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div 
                      key={index} 
                      className="border border-slate-100 rounded-2xl bg-slate-50/50 hover:bg-slate-50 overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="w-full flex justify-between items-center text-left px-5 py-4 cursor-pointer focus:outline-none"
                      >
                        <span className="text-sm font-bold text-slate-800 flex items-center pr-4">
                          <HelpCircle className="w-4 h-4 text-blue-600 mr-2.5 shrink-0" />
                          {faq.question}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                          >
                            <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/20">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Exhaustive Search Index / Service Matrix for Organic Clicks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm mt-12"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-[10px] text-blue-600 font-extrabold tracking-widest uppercase block mb-1">
                EXHAUSTIVE SEO SERVICE SEARCH CLUSTERS
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Our Digital Keyword & Strategy Capabilities Index
              </h3>
            </div>
            <p className="text-slate-500 text-xs max-w-sm leading-relaxed">
              Serving local businesses and global brands from Durgapur, West Bengal with target-driven web layout execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100">
              <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-widest mb-3 border-b border-slate-200/50 pb-2">
                High-Intent Services
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="hover:text-blue-600 transition-colors">🚀 Website Design Services</li>
                <li className="hover:text-blue-600 transition-colors">💻 Website Development Services</li>
                <li className="hover:text-blue-600 transition-colors">🎯 Professional Web Designer</li>
                <li className="hover:text-blue-600 transition-colors">📈 Business Website Development</li>
                <li className="hover:text-blue-600 transition-colors">⚡ Custom Website Design</li>
                <li className="hover:text-blue-600 transition-colors">📱 Responsive Website Design</li>
                <li className="hover:text-blue-600 transition-colors">🛒 Ecommerce Website Development</li>
                <li className="hover:text-blue-600 transition-colors">🔍 SEO Services & Local SEO Services</li>
                <li className="hover:text-blue-600 transition-colors">⚙️ Technical SEO Services</li>
              </ul>
            </div>

            <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100">
              <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-widest mb-3 border-b border-slate-200/50 pb-2">
                Durgapur Hyperlocal
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="hover:text-blue-600 transition-colors">📍 Website Design Company in Durgapur</li>
                <li className="hover:text-blue-600 transition-colors">📍 Web Developer in Durgapur</li>
                <li className="hover:text-blue-600 transition-colors">📍 SEO Company in Durgapur</li>
                <li className="hover:text-blue-600 transition-colors">📍 Best Website Designer in Durgapur</li>
                <li className="hover:text-blue-600 transition-colors">📍 Ecommerce Website Development in Durgapur</li>
                <li className="hover:text-blue-600 transition-colors">📍 Digital Marketing Agency in Durgapur</li>
                <li className="hover:text-blue-600 transition-colors">📍 Website Design Services Near Me</li>
              </ul>
            </div>

            <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100">
              <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-widest mb-3 border-b border-slate-200/50 pb-2">
                West Bengal Regions
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="hover:text-blue-600 transition-colors">🏢 Website Design Company in West Bengal</li>
                <li className="hover:text-blue-600 transition-colors">🌐 Web Development Company in West Bengal</li>
                <li className="hover:text-blue-600 transition-colors">📊 SEO Agency in West Bengal</li>
                <li className="hover:text-blue-600 transition-colors">🏬 Website Designer in Kolkata</li>
                <li className="hover:text-blue-600 transition-colors">👔 SEO Expert in Kolkata</li>
              </ul>
            </div>

            <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100">
              <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-widest mb-3 border-b border-slate-200/50 pb-2">
                Industry & Long-Tail
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li className="hover:text-blue-600 transition-colors">🏢 Real Estate Website Design</li>
                <li className="hover:text-blue-600 transition-colors">🏫 School Website Development</li>
                <li className="hover:text-blue-600 transition-colors">🏥 Hospital Website Design</li>
                <li className="hover:text-blue-600 transition-colors">🍔 Restaurant Website Development</li>
                <li className="hover:text-blue-600 transition-colors">🏪 Small Business Website Design</li>
                <li className="hover:text-blue-600 transition-colors">🏗️ Construction Company Website Design</li>
                <li className="hover:text-blue-600 transition-colors">✈️ Travel Agency Website Design</li>
                <li className="hover:text-blue-600 transition-colors">⚙️ Website Redesign Services for Businesses</li>
                <li className="hover:text-blue-600 transition-colors">🔑 Affordable Website Design Company in Durgapur</li>
                <li className="hover:text-blue-600 transition-colors">🔑 SEO-Friendly Website Design Services</li>
                <li className="hover:text-blue-600 transition-colors">🌐 Local Business Website Design Experts</li>
                <li className="hover:text-blue-600 transition-colors">📍 Google Business Profile Keywords Optimizer</li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
