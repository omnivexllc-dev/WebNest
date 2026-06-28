import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Monitor, Code, TrendingUp, Sparkles, Cuboid as Cube } from 'lucide-react';
import ThreeDCard from './ThreeDCard';

interface HeroProps {
  onCtaClick: (sectionId: string) => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  // Stagger configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 18,
        mass: 0.8,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-50/70 pt-28 pb-16 overflow-hidden flex items-center bg-3d-blueprint"
    >
      {/* Background visual graphics */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-50/55 rounded-l-[120px] pointer-events-none -skew-x-12 origin-top-right transition-all duration-1000 hidden md:block" />
      <div className="absolute -top-10 left-1/3 w-72 h-72 bg-indigo-200/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-violet-200/35 blur-3xl rounded-full pointer-events-none" />

      {/* Floating 3D Geometric background objects (Decorative) */}
      <div className="absolute top-24 left-1/2 w-8 h-8 rounded bg-gradient-to-tr from-indigo-500/20 to-violet-400/20 border border-indigo-500/10 pointer-events-none animate-3d-float opacity-70" />
      <div className="absolute bottom-24 left-10 w-12 h-12 rounded bg-gradient-to-br from-violet-500/20 to-indigo-400/20 border border-violet-500/10 pointer-events-none animate-3d-isometric-float opacity-60" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Headline & Actions */}
        <motion.div
          id="hero-pitch"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Subtle announcement badge */}
          <motion.div
            variants={itemVariants}
            className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold tracking-widest uppercase rounded-full w-max mb-6"
          >
            <span className="flex items-center gap-1.5">
              <Cube className="w-3.5 h-3.5 text-indigo-600 animate-3d-float" />
              Award Winning Agency
            </span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              WebNest | Leading <br />
              <span className="text-indigo-600">Website Development Company</span> <br />
              <span className="text-2xl sm:text-3xl text-slate-600 font-bold block mt-2.5">&amp; Digital Marketing Agency</span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-500 max-w-xl leading-relaxed mb-8"
          >
            WebNest is a premier Website Development Company and Digital Marketing Agency offering expert Web Development Services, bespoke Website Designer layouts, cutting-edge Mobile App Development, result-driven SEO Services, and conversion-optimized E-commerce Website Development.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={() => onCtaClick('contact')}
              className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-xl shadow-indigo-200/50 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              Get Free Consultation
            </button>
            <button
              onClick={() => onCtaClick('portfolio')}
              className="px-8 py-4 border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-100 transition-all duration-300 cursor-pointer"
            >
              View Our Work
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pt-8 flex flex-wrap items-center gap-10 border-t border-slate-100"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900">500+</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Projects Delivered</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900">98%</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Client Retention</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900">15+</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Awards</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Beautiful Premium Graphic Canvas (Simulates interactive coding and layouts) */}
        <motion.div
          id="hero-canvas"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-5 hidden lg:block perspective-2000"
        >
          <div className="relative preserve-3d">
            {/* Main graphic container */}
            <ThreeDCard className="shadow-3d-card bg-white rounded-3xl p-6 relative z-10 overflow-hidden" intensity={15}>
              {/* Fake web browser UI */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4 select-none">
                <div className="flex space-x-1.5">
                  <span className="w-3 h-3 bg-rose-400 rounded-full inline-block" />
                  <span className="w-3 h-3 bg-amber-400 rounded-full inline-block" />
                  <span className="w-3 h-3 bg-indigo-400 rounded-full inline-block" />
                </div>
                <div className="bg-slate-50 border border-slate-100 px-3 py-1 rounded text-[10px] text-slate-400 w-1/2 text-center overflow-hidden whitespace-nowrap font-mono">
                  https://webnest.digital/3d-engine
                </div>
                <div className="w-8" />
              </div>

              {/* Interactive Dashboard Graphic Overlay - Optimized via WebP and Responsive SrcSet */}
              <div className="relative rounded-xl overflow-hidden aspect-video mb-4 border border-slate-100/80 bg-slate-50 group">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=webp&fit=crop&q=80&w=800"
                  srcSet="
                    https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=webp&fit=crop&q=80&w=480 480w,
                    https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=webp&fit=crop&q=80&w=800 800w,
                    https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=webp&fit=crop&q=80&w=1200 1200w
                  "
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  width="800"
                  height="450"
                  alt="WebNest high-performance responsive custom web application development dashboard screenshot mockup"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover select-none brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay badge matching high performance metric */}
                <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md text-[10px] font-bold text-white px-2.5 py-1 rounded-full uppercase tracking-widest flex items-center gap-1 border border-white/10 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block animate-ping" />
                  <span>99+ Speed LCP</span>
                </div>
              </div>

              {/* Graphical illustration card */}
              <div className="space-y-3" style={{ transform: 'translateZ(30px)' }}>
                <div className="grid grid-cols-3 gap-3">
                  {/* Styled component representing design features */}
                  <div className="col-span-2 bg-indigo-50/70 rounded-xl p-3 flex flex-col justify-between h-24 border border-indigo-100/50">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-indigo-500/10 text-indigo-600 flex items-center justify-center">
                        <Monitor className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-extrabold text-slate-800 uppercase tracking-wider">UI/UX Engine</span>
                    </div>
                    <div>
                      <div className="w-3/4 h-1.5 bg-indigo-200 rounded-full mb-1" />
                      <div className="w-1/2 h-1.5 bg-indigo-200/50 rounded-full" />
                    </div>
                  </div>
                  {/* Secondary stats module */}
                  <div className="col-span-1 bg-slate-950 rounded-xl p-3 flex flex-col justify-between text-white h-24 border border-slate-800">
                    <TrendingUp className="w-4 h-4 text-indigo-400 animate-bounce" />
                    <div>
                      <span className="text-[8px] text-slate-400 uppercase tracking-widest block font-bold">Boost</span>
                      <span className="text-sm font-black text-white leading-none">+180%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-indigo-600 shrink-0 shadow-sm">
                      <Code className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block leading-tight">Optimized Code</span>
                      <span className="text-[10px] text-slate-400 block leading-none mt-0.5 font-mono">Fast-loading React bundles</span>
                    </div>
                  </div>
                  <div className="flex space-x-0.5 shrink-0">
                    <span className="w-1.5 h-3 bg-indigo-400 rounded-full block animate-pulse" />
                    <span className="w-1.5 h-5 bg-indigo-600 rounded-full block" />
                    <span className="w-1.5 h-2.5 bg-indigo-300 rounded-full block" />
                  </div>
                </div>
              </div>
            </ThreeDCard>

            {/* Absolute overlay decor cards - floats even higher using translates */}
            <div 
              style={{ transform: 'translate3d(-20px, 10px, 60px)' }}
              className="absolute -bottom-6 -left-6 bg-white border border-slate-100/90 rounded-2xl p-4.5 shadow-2xl flex items-center space-x-3 z-20 select-none animate-3d-float"
            >
              <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
                <CheckCircle2 className="w-5.5 h-5.5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block leading-none mb-1">99.8% Satisfied</span>
                <span className="text-[10px] text-slate-400 block leading-none">India-wide Client base</span>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-tr from-indigo-600 to-violet-400 rounded-full blur-2xl opacity-20 pointer-events-none -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
