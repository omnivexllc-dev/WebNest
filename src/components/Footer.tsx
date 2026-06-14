import { useState } from 'react';
import { Layers, Mail, Phone, MapPin, Clock, Twitter, Linkedin, Github, Instagram, Scale } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const quickLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Our Process', id: 'process' },
    { name: 'Why WebNest', id: 'why-webnest' },
    { name: 'Contact Form', id: 'contact' }
  ];

  const coreServices = [
    { name: 'Website Design', id: 'services' },
    { name: 'Web Development', id: 'services' },
    { name: 'E-Commerce', id: 'services' },
    { name: 'SEO Services', id: 'services' },
    { name: 'UI/UX Design', id: 'services' },
    { name: 'AI Automation', id: 'services' }
  ];

  return (
    <footer id="main-footer" className="bg-[#09090b] text-zinc-500 py-16 px-6 sm:px-8 border-t border-[#18181b] relative overflow-hidden font-sans">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-12 w-64 h-64 bg-blue-500/[0.02] blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-12 border-b border-[#18181b]">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-6">
            <div 
              className="inline-flex items-center space-x-2.5 cursor-pointer group" 
              onClick={() => onNavClick('home')}
            >
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/10 group-hover:scale-105 transition-transform duration-300">
                <Layers className="w-5.5 h-5.5" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight block leading-tight">
                  Web<span className="text-[#60a5fa] transition-colors duration-300 group-hover:text-blue-500">Nest</span>
                </span>
                <span className="text-[9px] font-extrabold tracking-widest text-[#71717a] block uppercase">
                  Digital Studio
                </span>
              </div>
            </div>

            <p className="text-sm text-[#52525b] leading-relaxed max-w-sm">
              Premium web design and digital solutions. Building conversion-oriented, blazing fast business platforms from Durgapur, West Bengal — serving clients globally.
            </p>

            {/* Premium Social Media Icons Deck */}
            <div className="flex items-center gap-2 pt-2">
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
                    className="w-9 h-9 rounded-lg bg-[#18181b] border border-[#27272a] text-[#71717a] hover:bg-[#27272a] hover:text-[#a1a1aa] flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <SocIcon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Core Capabilities */}
          <div className="lg:col-span-2.5 space-y-5">
            <h4 className="text-xs font-bold text-[#71717a] uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-3.5 text-sm">
              {coreServices.map((srv, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavClick(srv.id)}
                    className="text-[#52525b] hover:text-[#a1a1aa] flex items-center cursor-pointer transition-colors text-left"
                  >
                    <span>{srv.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate Directory */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xs font-bold text-[#71717a] uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-3.5 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavClick(link.id)}
                    className="text-[#52525b] hover:text-[#a1a1aa] flex items-center cursor-pointer transition-colors"
                  >
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Local Contact Info */}
          <div className="lg:col-span-2.5 space-y-5">
            <h4 className="text-xs font-bold text-[#71717a] uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a 
                  href="tel:+917908774055" 
                  className="text-[#52525b] hover:text-[#a1a1aa] flex items-center gap-2.5 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#71717a] shrink-0" />
                  <span>+91 79087 74055</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:heena6917@gmail.com" 
                  className="text-[#52525b] hover:text-[#a1a1aa] flex items-center gap-2.5 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#71717a] shrink-0" />
                  <span>heena6917@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[#52525b]">
                <MapPin className="w-4 h-4 text-[#71717a] shrink-0 mt-0.5" />
                <span className="leading-snug">Durgapur, West Bengal 713205</span>
              </li>
              <li className="flex items-start gap-2.5 text-[#52525b]">
                <Clock className="w-4 h-4 text-[#71717a] shrink-0 mt-0.5" />
                <span>Mon–Sat · 9AM–7PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Row & Copyright Badge */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs select-none">
          <div className="text-zinc-600 text-center md:text-left leading-relaxed">
            <span>© {new Date().getFullYear()} WebNest · All rights reserved · Built with craft in Durgapur, India</span>
          </div>

          <div className="flex items-center space-x-6 text-zinc-600">
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-zinc-400 cursor-pointer transition-all"
            >
              Privacy Policy
            </button>
            <div className="w-1 h-1 bg-[#18181b] rounded-full" />
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-zinc-400 cursor-pointer transition-all"
            >
              Terms of Service
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
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#0c0c0e] text-zinc-400 rounded-2xl max-w-xl w-full border border-zinc-800 shadow-2xl p-8 relative max-h-[85vh] overflow-y-auto"
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
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">Privacy Policy</h3>
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
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">Terms & Conditions</h3>
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
