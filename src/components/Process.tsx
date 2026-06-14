import { useState } from 'react';
import { PROCESS_DATA } from '../data.ts';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, ArrowRight, CheckCircle2, ChevronRight, Clock } from 'lucide-react';

export default function Process() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  return (
    <section id="process" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-100/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header Section */}
        <div id="process-header" className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded-full mb-3">
            Our Strategy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            A Transparent, Proven Process
          </h2>
          <p className="text-slate-500 text-base">
            From your introductory consultation to final production launch and support, we execute a meticulous step-by-step strategy ensuring zero downtime and elite output.
          </p>
        </div>

        {/* Process Interaction block (Timeline layout + Active view) */}
        <div id="process-timeline-layout" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Vertical timeline steps selectors */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] text-slate-400 font-extrabold tracking-widest uppercase block mb-2">
              SELECT PROGRESS STAGES
            </span>
            {PROCESS_DATA.map((step, index) => (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(index)}
                className={`w-full text-left p-4.5 rounded-xl border flex items-center space-x-4 cursor-pointer transition-all duration-300 ${
                  activeStepIndex === index
                    ? 'bg-white border-blue-600 shadow-xl shadow-blue-200/30 font-bold'
                    : 'bg-transparent border-slate-200/60 hover:bg-white hover:border-slate-350'
                }`}
              >
                {/* Step number badge */}
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 transition-colors duration-300 ${
                    activeStepIndex === index
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  0{step.step}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-sm font-bold tracking-tight block truncate ${
                        activeStepIndex === index ? 'text-blue-600' : 'text-slate-800'
                      }`}
                    >
                      {step.title}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 shrink-0 uppercase tracking-widest ml-2">
                      {step.duration}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 block truncate mt-0.5">
                    {step.description}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Active Step Details view (animated) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStepIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-slate-200/60 rounded-2xl p-8 shadow-2xl shadow-slate-200/40 relative"
              >
                {/* Visual quote accent mark */}
                <div className="absolute top-6 right-6 text-7xl font-sans text-blue-50 text-right select-none opacity-45 pointer-events-none">
                  0{PROCESS_DATA[activeStepIndex].step}
                </div>

                <div className="flex items-center space-x-2 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full w-max mb-6">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span className="text-[10px] font-bold text-blue-900 uppercase tracking-wider">
                    TIMELINE: {PROCESS_DATA[activeStepIndex].duration}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
                  {PROCESS_DATA[activeStepIndex].title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {PROCESS_DATA[activeStepIndex].description}
                </p>

                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4">
                  CORE DELIVERABLES INCLUDED
                </h4>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PROCESS_DATA[activeStepIndex].details.map((detail, dIndex) => (
                    <li
                      key={dIndex}
                      className="bg-slate-50 border border-slate-100/60 p-3.5 rounded-xl flex items-start space-x-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-700 leading-snug">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Quick actions callback to Inquiry form */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                      Ready to start
                    </span>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-slate-900 transition-colors duration-300"
                  >
                    <span>Launch Inquiry Form</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
