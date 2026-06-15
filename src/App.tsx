import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import Portfolio from './components/Portfolio.tsx';
import WhyChooseUs from './components/WhyChooseUs.tsx';
import Process from './components/Process.tsx';
import Testimonials from './components/Testimonials.tsx';
import About from './components/About.tsx';
import LocalSEOSection from './components/LocalSEOSection.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import ConsultationChatbot from './components/ConsultationChatbot.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Track page scroll progress for visual feedback
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once at initial load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll navigation
  const handleNavClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      // Offset for navigation height in scroll location calculation
      const offset = 85; 
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  // Selection callback from Services grid
  const handleServiceSelect = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    handleNavClick('contact');
  };

  // IntersectionObserver to sync nav bar underlines dynamically on scroll
  useEffect(() => {
    const sections = ['home', 'services', 'portfolio', 'why-webnest', 'process', 'about', 'local-hub', 'contact'];
    
    const observers = sections.map((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        { 
          threshold: 0.15, 
          rootMargin: '-80px 0px -50% 0px' 
        }
      );

      observer.observe(el);
      return { el, observer };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 antialiased font-sans flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Scroll Progress Bar at the top of the viewport */}
      <div 
        id="scroll-progress" 
        className="fixed top-0 left-0 h-1 bg-blue-600 z-[100] transition-all duration-100 ease-out pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Dynamic sticky Navigation Menu */}
      <Navbar onNavClick={handleNavClick} activeSection={activeSection} />

      {/* Main coordinates stack */}
      <main className="flex-1">
        {/* Landing Hero */}
        <Hero onCtaClick={handleNavClick} />

        {/* Agency Capabilities Index */}
        <Services onServiceSelect={handleServiceSelect} />

        {/* Dynamic Case Studies */}
        <Portfolio />

        {/* Why Choose Us Grid */}
        <WhyChooseUs />

        {/* Sequential Process Map */}
        <Process />

        {/* Narrative bio introducing location */}
        <About />

        {/* Micro slider client testimonials */}
        <Testimonials />

        {/* Local SEO & Web Authority Section */}
        <LocalSEOSection />

        {/* Submissions form & fallback maps card */}
        <Contact preselectedService={preselectedService} />
      </main>

      {/* Structured footer with legal indicators */}
      <Footer onNavClick={handleNavClick} />

      {/* Gemini Consultation Bot Floating Launcher */}
      <ConsultationChatbot />
    </div>
  );
}
