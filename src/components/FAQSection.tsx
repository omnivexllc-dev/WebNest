import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQ_PAGE_DATA } from '../data/textContent.ts';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/50">
      {/* Decorative background visual elements */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl pointer-events-none translate-x-1/3" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-slate-200/30 rounded-full blur-3xl pointer-events-none -translate-x-1/3" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header content styling */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded-full mb-3 border border-blue-100/50">
            <Sparkles className="w-3 h-3 text-blue-600" />
            Clear Answers
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 animate-[fade-in_0.5s_ease-out]">
            Web Design, Development & <br />
            <span className="text-blue-600">Search Strategy FAQs</span>
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Gain complete clarity regarding our premium engineering workflows, custom coding practices, local search ranking optimizations, and budget-friendly digital assets.
          </p>
        </div>

        {/* Dynamic Accordion list */}
        <div className="space-y-4">
          {FAQ_PAGE_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white border rounded-2xl transition-all duration-300 overflow-hidden shadow-sm ${
                  isOpen ? 'border-blue-500 ring-2 ring-blue-500/5' : 'border-slate-200/60 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors duration-200"
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className={`w-5 h-5 mt-0.5 shrink-0 transition-colors ${
                      isOpen ? 'text-blue-600' : 'text-slate-400'
                    }`} />
                    <span className={`text-sm sm:text-base font-bold tracking-tight text-slate-900 ${
                      isOpen ? 'text-blue-600' : 'text-slate-800'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'
                    }`} 
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-slate-100 text-slate-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line pl-[44px]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        
        {/* Callout box detailing direct communication */}
        <div className="bg-blue-50/50 rounded-2xl border border-blue-100 p-6 mt-12 text-center">
          <p className="text-slate-600 text-xs leading-relaxed">
            Have a specific business inquiry or need professional web designers to conceptualize a project? Our local Durgapur consulting desk is online. Speak to us at <strong className="text-blue-600">webnestsupport@gmail.com</strong> or launch the interactive <strong className="text-slate-800">NestBot Assistant</strong> floating on your screen for immediate guidance.
          </p>
        </div>

      </div>
    </section>
  );
}
