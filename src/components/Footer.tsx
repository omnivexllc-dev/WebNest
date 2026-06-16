import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Twitter, Linkedin, Github, Instagram, Scale, ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import WebNestLogo from './WebNestLogo';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
  onStaffHubToggle: () => void;
}

export default function Footer({ onNavClick, onStaffHubToggle }: FooterProps) {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const quickLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Our Work Portfolio', id: 'portfolio' },
    { name: 'How We Work', id: 'process' },
    { name: 'Client Benefits & Choices', id: 'why-webnest' },
    { name: 'Get In Touch', id: 'contact' }
  ];

  const coreServices = [
    { name: 'Bespoke UI/UX Design', id: 'services' },
    { name: 'Custom React Web Apps', id: 'services' },
    { name: 'Headless E-Commerce', id: 'services' },
    { name: 'Organic Search Mastery (SEO)', id: 'services' },
    { name: 'Rigorous Performance Tuning', id: 'services' },
    { name: 'Dynamic API Engineering', id: 'services' }
  ];

  return (
    <footer id="main-footer" className="bg-[#030303] text-zinc-400 py-20 px-6 sm:px-8 lg:px-12 border-t border-zinc-800/40 relative overflow-hidden font-sans">
      
      {/* Premium Cyber Ambient Orbs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-gradient-to-b from-blue-600/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/[0.03] blur-[150px] rounded-full pointer-events-none" />
      
      {/* Decorative premium thin coordinate grid line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Upper Brand Alignment & Elite Badge Call */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 mb-12 border-b border-zinc-800/50 items-center">
          <div className="lg:col-span-6 flex items-center space-x-3">
            <div 
              className="inline-flex items-center space-x-3 cursor-pointer group" 
              onClick={() => onNavClick('home')}
            >
              <div className="w-12 h-12 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-500">
                <WebNestLogo className="w-12 h-12" isDark={true} />
              </div>
              <div>
                <span className="text-2xl font-black text-white tracking-tight block leading-none">
                  Web<span className="bg-gradient-to-r from-[#00f0ff] to-[#005eff] bg-clip-text text-transparent">Nest</span>
                </span>
                <span className="text-[10px] font-black tracking-[0.25em] text-zinc-500 block uppercase mt-1">
                  Digital Engineering Studio
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-wrap lg:justify-end gap-3">
            <div className="flex items-center space-x-2 px-4 py-2 bg-zinc-900/60 border border-zinc-800/80 rounded-full text-xs font-semibold text-zinc-300">
              <Sparkles className="w-3.5 h-3.5 text-[#00f0ff] animate-pulse" />
              <span>Sub-Second Render Guarantee</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-zinc-900/60 border border-zinc-800/80 rounded-full text-xs font-semibold text-zinc-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>SOC2 Quality Frameworks</span>
            </div>
          </div>
        </div>
        
        {/* Main Information Architecture Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-zinc-800/50">
          
          {/* Column 1: Studio Bio & Social Manifest */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-sm font-bold text-zinc-200 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Our Mission
            </h4>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              We engineer beautiful, high-performance web products that transform commercial visibility. By pairing custom React systems and technical SEO, we build lasting digital assets tailored to global corporate standards.
            </p>

            {/* Glassmorphic Cybernetic Social Hub */}
            <div className="space-y-3">
              <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase block">Connect Network</span>
              <div className="flex items-center gap-2.5">
                {[
                  { icon: Twitter, url: 'https://twitter.com' },
                  { icon: Linkedin, url: 'https://linkedin.com' },
                  { icon: Github, url: 'https://github.com' },
                  { icon: Instagram, url: 'https://instagram.com' }
                ].map((soc, idx) => {
                  const SocIcon = soc.icon;
                  return (
                    <a
                      key={idx}
                      href={soc.url}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-xl bg-zinc-900/30 border border-zinc-800/60 text-zinc-400 hover:border-blue-500/40 hover:bg-zinc-900/80 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                    >
                      <SocIcon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Capabilities Core Services */}
          <div className="lg:col-span-2.5 space-y-5">
            <h4 className="text-sm font-bold text-zinc-200 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Expertise
            </h4>
            <ul className="space-y-4 text-sm">
              {coreServices.map((srv, index) => (
                <li key={index} className="group">
                  <a
                    href={`#${srv.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavClick(srv.id);
                    }}
                    className="text-zinc-500 hover:text-zinc-100 flex items-center gap-1.5 cursor-pointer transition-colors text-left font-medium"
                  >
                    <motion.span 
                      className="w-1 h-1 bg-transparent group-hover:bg-[#00f0ff] rounded-full transition-colors" 
                      layout
                    />
                    <span>{srv.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate Directory */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-sm font-bold text-zinc-200 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              Directory
            </h4>
            <ul className="space-y-4 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index} className="group">
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavClick(link.id);
                    }}
                    className="text-zinc-500 hover:text-zinc-100 flex items-center gap-1.5 cursor-pointer transition-colors font-medium"
                  >
                    <motion.span 
                      className="w-1 h-1 bg-transparent group-hover:bg-[#00f0ff] rounded-full transition-colors" 
                      layout
                    />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Local Contact Portal cards */}
          <div className="lg:col-span-2.5 space-y-5">
            <h4 className="text-sm font-bold text-zinc-200 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              Contacts
            </h4>
            <div className="space-y-3">
              {/* Premium Phone Block */}
              <a 
                href="tel:+917908774055" 
                className="group p-3 rounded-xl bg-zinc-900/40 border border-zinc-950 hover:border-zinc-800 hover:bg-zinc-900/60 block transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-zinc-800/50 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-zinc-500 uppercase block tracking-wider">Voice Hotline</span>
                    <span className="text-xs text-zinc-300 font-semibold group-hover:text-blue-400 transition-colors">+91 79087 74055</span>
                  </div>
                </div>
              </a>

              {/* Premium Mail Block */}
              <a 
                href="mailto:webnestsupport@gmail.com" 
                className="group p-3 rounded-xl bg-zinc-900/40 border border-zinc-950 hover:border-zinc-800 hover:bg-zinc-900/60 block transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-zinc-800/50 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-zinc-500 uppercase block tracking-wider">Technical Helpdesk</span>
                    <span className="text-xs text-zinc-300 font-semibold group-hover:text-blue-400 transition-colors">webnestsupport@gmail.com</span>
                  </div>
                </div>
              </a>

              {/* Premium Location / Hours Tag */}
              <div className="text-[11px] text-zinc-500 px-1 space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-600" />
                  <span>Durgapur, West Bengal, India</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-zinc-600" />
                  <span>Mon–Sat · 9:00 AM – 7:00 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Legal Deck & Core Attribution */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs select-none">
          <div className="text-zinc-500 text-center md:text-left leading-relaxed">
            <span>© {new Date().getFullYear()} WebNest Digital. Custom crafted for enterprise acceleration. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-6 text-zinc-500">
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-zinc-100 cursor-pointer transition-all flex items-center gap-1"
            >
              <span>Privacy Regulations</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </button>
            <div className="w-1 h-1 bg-zinc-800 rounded-full" />
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-zinc-100 cursor-pointer transition-all flex items-center gap-1"
            >
              <span>Terms of Engagement</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </button>
          </div>
        </div>

      </div>

      {/* Slide-Up Portal Modals */}
      <AnimatePresence>
        {modalType && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#0b0b0d] text-zinc-400 rounded-2xl max-w-xl w-full border border-zinc-800 shadow-2xl p-8 relative max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setModalType(null)}
                className="absolute top-6 right-6 text-zinc-500 hover:text-white w-8 h-8 bg-zinc-900 hover:bg-zinc-800 rounded-full flex items-center justify-center transition-colors text-xs cursor-pointer"
              >
                ✕
              </button>

              <div className="flex items-center space-x-2 bg-blue-950/40 border border-blue-900/50 px-3 py-1.5 rounded-full w-max mb-5">
                <Scale className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[10px] font-bold text-blue-300 uppercase tracking-wider">Legal Document</span>
              </div>

              {modalType === 'privacy' ? (
                <div className="space-y-4 font-sans">
                  <h3 className="text-xl font-bold text-white tracking-tight">Privacy Policy</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    At WebNest, we prioritize the secure handling and preservation of our client data. This Privacy Policy documents how we gather, process, and protect client lead details.
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    <strong>1. Lead Collection:</strong> When you submit our project inquiry form, we collect your name, email, phone number, relevant service selections, and specifications details.
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    <strong>2. Data Usage:</strong> Your details are utilized strictly to construct project estimation roadmaps, coordinate followups, and deliver high caliber digital updates. We never share, rent, or vend your data.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 font-sans">
                  <h3 className="text-xl font-bold text-white tracking-tight">Terms & Conditions</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    Welcome to the digital properties of WebNest digital engineering studio. These Terms state the compliance guidelines governing website browsing.
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    <strong>1. Intellectual Property:</strong> All visual component style libraries, vector roadmaps, typography systems, and narrative copy are the exclusive commercial property of WebNest. Unauthorised duplication is strictly prohibited.
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    <strong>2. Consultations:</strong> Our introductory estimation and road-mapping consultations are complementary and carry no structural obligations. Official pricing calculations are ratified only upon formal proposal signings.
                  </p>
                </div>
              )}

              <div className="mt-8 pt-5 border-t border-zinc-800 flex justify-end">
                <button
                  onClick={() => setModalType(null)}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl cursor-pointer transition-colors shadow-lg shadow-blue-600/10"
                >
                  I Understand
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
