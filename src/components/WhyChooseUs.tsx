import { useState, useEffect, useRef } from 'react';
import { Sparkles, Smartphone, Compass, Zap, LifeBuoy, DollarSign, LucideIcon, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US_DATA } from '../data.ts';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

function AnimatedCounter({ value, duration = 1500, suffix = '', decimals = 0 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easedProgress = progress * (2 - progress); // easeOutQuad
      const currentCount = easedProgress * value;
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(step);
  }, [hasStarted, value, duration]);

  return (
    <span ref={elementRef}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Smartphone,
  Compass,
  Zap,
  LifeBuoy,
  DollarSign
};

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  return (
    <section id="why-webnest" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative blurred backdrops */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-100/10 blur-3xl rounded-full pointer-events-none translate-x-1/2" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-slate-50 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header Section */}
        <div id="why-header" className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded-full mb-3">
            The WebNest Difference
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Why Choose WebNest?
          </h2>
          <p className="text-slate-500 text-base">
            We merge stunning creative design concepts with clean, modern coding architecture to deliver systems that establish trust instantly and fuel direct business growth.
          </p>
        </div>

        {/* Bento Grid layout */}
        <motion.div
          id="why-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {WHY_CHOOSE_US_DATA.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white border border-slate-200/60 p-8 rounded-2xl hover:border-blue-600 hover:shadow-xl hover:shadow-blue-200/30 transition-all duration-300 shadow-sm"
              >
                {/* Visual Accent Corner Bar */}
                <div className="absolute top-0 left-0 w-2 h-0 group-hover:h-full bg-blue-600 transition-all duration-300 rounded-l-2xl" />

                {/* Icon wrapper */}
                <div className="w-11 h-11 bg-slate-50 text-slate-800 group-hover:bg-blue-50 group-hover:text-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 mb-6 shrink-0 shadow-sm border border-slate-100">
                  <IconComponent className="w-5.5 h-5.5" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-all duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Additional tag just to elevate content density */}
                <div className="mt-5 flex items-center space-x-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                    Certified Delivery
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

         {/* Dynamic Interactive Stats bar */}
        <div id="stats-banner" className="mt-20 border border-slate-100 rounded-3xl bg-slate-900 text-white p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-10" />
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="text-4xl md:text-5xl font-extrabold text-white block">
                <AnimatedCounter value={150} suffix="+" />
              </span>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mt-2">Projects Completed</span>
            </div>
            <div>
              <span className="text-4xl md:text-5xl font-extrabold text-blue-400 block">
                <AnimatedCounter value={145} suffix="+" />
              </span>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mt-2">Happy Clients</span>
            </div>
            <div>
              <span className="text-4xl md:text-5xl font-extrabold text-white block">
                <AnimatedCounter value={5} suffix="+ Yrs" />
              </span>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mt-2">Years Experience</span>
            </div>
            <div>
              <span className="text-4xl md:text-5xl font-extrabold text-blue-400 block">
                <AnimatedCounter value={99.2} suffix="%" decimals={1} />
              </span>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mt-2">Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
