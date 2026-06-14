import { useState } from 'react';
import { PORTFOLIO_DATA } from '../data.ts';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Grid, Monitor, Layers, ShieldCheck, ChevronRight } from 'lucide-react';
import { PortfolioItem } from '../types.ts';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  // Extract unique categories
  const categories = ['All', 'SaaS Platform', 'E-commerce / Fintech', 'E-Commerce', 'AI Solution'];

  // Filter products
  const filteredPortfolio = selectedCategory === 'All'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(item => item.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 16,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.25 },
    },
  };

  return (
    <section id="portfolio" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/10 blur-3xl rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header Section */}
        <div id="portfolio-header" className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded-full mb-3">
              Portfolio Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Selected Projects
            </h2>
          </div>
          <p className="text-slate-600 max-w-lg text-sm sm:text-base">
            Explore a curation of high-end web platforms, custom dashboards, transactional payment solutions, and bespoke user interfaces representing our commitment to quality.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div id="portfolio-filters" className="flex flex-wrap items-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border cursor-pointer transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/15'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          id="portfolio-grid"
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredPortfolio.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                exit="exit"
                className="group bg-white border border-slate-200/60 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-200/30 hover:border-blue-600 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full shadow-sm"
              >
                {/* Simulated Web Application Screen (Custom Styled Vector/Markup) */}
                <div className="bg-slate-950 p-4 h-64 md:h-76 flex flex-col relative overflow-hidden group-hover:bg-slate-900/95 transition-colors duration-300">
                  {/* Fake UI Header Bar */}
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4 shrink-0">
                    <div className="flex space-x-1.5">
                      <span className="w-2.5 h-2.5 bg-red-500/80 rounded-full inline-block" />
                      <span className="w-2.5 h-2.5 bg-yellow-500/80 rounded-full inline-block" />
                      <span className="w-2.5 h-2.5 bg-green-500/80 rounded-full inline-block" />
                    </div>
                    <div className="bg-slate-900 border border-slate-800 text-[10px] text-slate-500 font-mono px-3 py-0.5 rounded uppercase tracking-wider">
                      {project.category}
                    </div>
                    <div className="w-6" />
                  </div>

                  {/* Dynamic Graphic Preview based on Project Subject */}
                  <div className="flex-1 flex flex-col justify-center relative z-10 px-4">
                    {project.id === 'portfolio-1' && (
                      <div className="space-y-4">
                        <div className="flex justify-between items-center text-slate-300">
                          <span className="text-xs font-semibold uppercase tracking-wider">Revenue Pulse Analytics</span>
                          <span className="text-xs font-bold text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded">+340%</span>
                        </div>
                        <div className="flex gap-2.5 h-20 items-end">
                          <div className="w-[10%] bg-blue-500/20 h-[30%] rounded-t" />
                          <div className="w-[10%] bg-blue-500/35 h-[50%] rounded-t" />
                          <div className="w-[10%] bg-blue-500/50 h-[40%] rounded-t" />
                          <div className="w-[10%] bg-blue-500/70 h-[70%] rounded-t" />
                          <div className="w-[10%] bg-blue-500/40 h-[55%] rounded-t" />
                          <div className="w-[10%] bg-blue-500/80 h-[80%] rounded-t" />
                          <div className="w-[10%] bg-blue-600 h-[100%] rounded-t relative">
                            <span className="absolute -top-1 left-1/2 w-1.5 h-1.5 bg-sky-200 rounded-full inline-block -translate-x-1/2 animate-ping" />
                          </div>
                        </div>
                        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                          <div className="w-5/6 h-full bg-blue-500" />
                        </div>
                      </div>
                    )}

                    {project.id === 'portfolio-2' && (
                      <div className="space-y-3.5 flex flex-col items-center">
                        <div className="w-14 h-14 bg-gradient-to-tr from-sky-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-extrabold text-2xl shadow-lg">
                          D
                        </div>
                        <span className="text-sm font-semibold tracking-wide text-white uppercase leading-none">DEXPAY FINTECH</span>
                        <div className="flex space-x-1 items-center bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-[10px] font-bold text-slate-400 tracking-wider font-mono">Secured Stripe Verified</span>
                        </div>
                      </div>
                    )}

                    {project.id === 'portfolio-3' && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-center">
                            <span className="text-[10px] text-slate-500 block">Dispatch</span>
                            <span className="text-xs font-bold text-emerald-400">98% Match</span>
                          </div>
                          <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-center">
                            <span className="text-[10px] text-slate-500 block">Hub Node</span>
                            <span className="text-xs font-bold text-white">Durgapur</span>
                          </div>
                          <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-center">
                            <span className="text-[10px] text-slate-500 block">Pricing</span>
                            <span className="text-xs font-bold text-blue-400">Locked</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 bg-slate-905 border border-slate-800 p-2 rounded-lg text-slate-400 text-[10px] font-mono justify-center">
                          <Layers className="w-3.5 h-3.5 text-blue-500" />
                          <span>Google Maps location tags successfully parsed</span>
                        </div>
                      </div>
                    )}

                    {project.id === 'portfolio-4' && (
                      <div className="space-y-3">
                        <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl flex items-center space-x-3 max-w-sm mx-auto">
                          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                          <div className="flex-1 space-y-1">
                            <div className="w-1/2 h-2 bg-slate-700 rounded" />
                            <div className="w-5/6 h-2 bg-slate-700/60 rounded" />
                          </div>
                        </div>
                        <div className="bg-blue-600 p-3 rounded-xl flex items-center space-x-3 max-w-xs ml-auto">
                          <p className="text-[10px] font-medium text-white leading-normal">
                            Consultation details received. Generating mock proposal...
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Decorative background grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />
                </div>

                {/* Project Brief Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-widest block mb-1.5">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 leading-snug mb-3">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Technologies tags list */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-6">
                      {project.tech.map((t, index) => (
                        <span
                          key={index}
                          className="bg-slate-100 text-slate-600 font-mono text-[10px] font-bold px-2.5 py-1 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Metadata & Modal Trigger button */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-widest">
                          {project.stats.label}
                        </span>
                        <span className="text-base font-extrabold text-slate-900 block leading-tight mt-0.5">
                          {project.stats.value}
                        </span>
                      </div>

                      <button
                        onClick={() => setActiveItem(project)}
                        className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-slate-950 transition-colors duration-300 cursor-pointer"
                      >
                        <span>Read Case Study</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Case Study Details Modal Overlay */}
        <AnimatePresence>
          {activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-white rounded-2xl max-w-2xl w-full border border-slate-100 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              >
                {/* Header */}
                <div className="bg-slate-900 p-6 text-white flex items-center justify-between">
                  <div>
                    <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                      {activeItem.category}
                    </span>
                    <h3 className="text-2xl font-bold leading-tight mt-1">
                      {activeItem.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveItem(null)}
                    className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer text-sm"
                  >
                    ✕
                  </button>
                </div>

                {/* Content */}
                <div className="p-8 overflow-y-auto space-y-6">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Project Overview</span>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {activeItem.longDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4.5 rounded-xl border border-slate-100">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Metrics Lifted</span>
                      <span className="text-lg font-extrabold text-blue-600 block leading-tight mt-1">{activeItem.stats.value}</span>
                      <span className="text-[10px] text-slate-500 block mt-0.5">{activeItem.stats.label}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Status</span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded inline-block mt-1.5">
                        {activeItem.status}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">Technologies Stack</span>
                    <div className="flex flex-wrap gap-2">
                      {activeItem.tech.map((t, index) => (
                        <span
                          key={index}
                          className="bg-slate-100 border border-slate-200/50 text-slate-700 font-mono text-[10px] font-bold px-3 py-1.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
                  <button
                    onClick={() => setActiveItem(null)}
                    className="bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg transition-colors duration-300 cursor-pointer"
                  >
                    Close Case Study
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
