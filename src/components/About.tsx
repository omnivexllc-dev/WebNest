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
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded-full mb-2">
              About WebNest
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Empowering Businesses Through Innovative Design & Tech
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Based in Durgapur, West Bengal, WebNest is a premium digital product and web engineering studio. We combine world-class visual design craftsmanship with rigorous full-stack software development to establish high authority, secure, and fast-loading websites for localized and global companies.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              We operate with structural honesty. By completely bypassing typical cookie-cutter template patterns and constructing custom software suites (built on React, next-gen TypeScript, Node, and Postgres databases), our applications stay responsive under traffic surges and drive long term commercial successes.
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
          </div>

          {/* Right Column: Values cards grid */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] text-slate-400 font-extrabold tracking-widest uppercase block mb-2">
              OUR CORE OPERATIONAL PILLARS
            </span>
            {coreValues.map((val, index) => {
              const ValueIcon = val.icon;
              return (
                <div
                  key={index}
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
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
