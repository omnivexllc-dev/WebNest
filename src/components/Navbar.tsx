import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import WebNestLogo from './WebNestLogo';

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavClick, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Why WebNest', id: 'why-webnest' },
    { name: 'Our Process', id: 'process' },
    { name: 'About Us', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavClick(id);
    setIsOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          id="logo-container"
          onClick={() => handleLinkClick('home')} 
          className="flex items-center space-x-2 cursor-pointer group"
        >
          <div className="w-11 h-11 flex items-center justify-center transition-transform duration-350 group-hover:scale-105">
            <WebNestLogo className="w-11 h-11" isDark={false} />
          </div>
          <div>
            <span className="text-2xl font-black tracking-tight block leading-none">
              <span className="text-[#04152d]">Web</span>
              <span className="text-[#005eff]">Nest</span>
            </span>
            <span className="text-[8px] font-extrabold tracking-widest text-slate-400 block uppercase mt-0.5">
              Digital Studio
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div id="desktop-links" className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-sm font-medium tracking-wide transition-colors relative py-1.5 cursor-pointer ${
                activeSection === link.id
                  ? 'text-blue-600 font-semibold'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div id="desktop-action" className="hidden lg:block">
          <button
            onClick={() => handleLinkClick('contact')}
            className="px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            Free Consultation
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div id="mobile-toggle" className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-700 hover:text-blue-600 focus:outline-none cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-b border-slate-100 shadow-lg overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-base font-semibold tracking-wide py-2 text-left cursor-pointer border-b border-slate-50 ${
                    activeSection === link.id ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full inline-flex items-center justify-center space-x-2 bg-blue-600 text-white text-sm font-semibold uppercase tracking-wider py-3.5 rounded-lg hover:bg-slate-900 transition-colors duration-300"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
