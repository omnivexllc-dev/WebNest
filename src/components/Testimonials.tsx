import { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data.ts';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[activeIndex];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-slate-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          id="testimonials-header"
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded-full mb-3">
            Client Satisfaction
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Our Clients Speak For Us
          </h2>
          <p className="text-slate-500 text-base">
            Read case testimonies from companies who have escalated their active conversion rates, built beautiful UI systems, and updated workflows with WebNest.
          </p>
        </motion.div>

        {/* Carousel slide layout */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          id="testimonial-carousel-container"
          className="max-w-4xl mx-auto relative px-4 md:px-12"
        >
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-slate-200/60 rounded-3xl p-8 md:p-14 shadow-xl shadow-slate-200/40 relative flex flex-col md:flex-row items-center gap-8 md:gap-12"
            >
              {/* Large quote symbol watermark */}
              <Quote className="absolute top-8 left-8 w-18 h-18 text-blue-100 opacity-45 pointer-events-none shrink-0" />

              {/* Left Side: Avatar & Company Info */}
              <div className="w-28 md:w-36 text-center md:text-left shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl mx-auto overflow-hidden border-2 border-white shadow-lg relative z-10 select-none">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Visual connection dot details */}
                <div className="mt-4 flex justify-center md:justify-start space-x-1">
                  {TESTIMONIALS_DATA.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setActiveIndex(dotIdx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeIndex === dotIdx ? 'w-5 bg-blue-600' : 'w-1.5 bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Side: Text & Rating */}
              <div className="flex-1 text-center md:text-left relative z-10">
                {/* 5-Star rating indicator */}
                <div className="flex items-center justify-center md:justify-start space-x-1 mb-5">
                  {Array.from({ length: current.rating }).map((_, rIdx) => (
                    <Star key={rIdx} className="w-5 h-5 fill-amber-400 text-amber-400 shrink-0" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-base sm:text-lg md:text-xl font-normal leading-relaxed italic mb-6">
                  "{current.text}"
                </p>

                {/* Client Identifiers */}
                <div>
                  <span className="text-base font-bold text-slate-900 block leading-tight">
                    {current.name}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 block mt-1">
                    {current.role} at <span className="text-blue-600 font-bold">{current.company}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Symmetrical Left/Right chevron handles */}
          <div className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 flex justify-between w-[calc(100%+32px)] md:w-[calc(100%+64px)] pointer-events-none">
            <button
              onClick={handlePrev}
              className="w-11 h-11 bg-white hover:bg-blue-600 hover:text-white text-slate-800 border border-slate-100 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 pointer-events-auto"
            >
              <ChevronLeft className="w-5 h-5 shrink-0" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 bg-white hover:bg-blue-600 hover:text-white text-slate-800 border border-slate-100 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 pointer-events-auto"
            >
              <ChevronRight className="w-5 h-5 shrink-0" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
