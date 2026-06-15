import { useState, useEffect, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ExternalLink, Sparkles, Check, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Inquiry } from '../types.ts';

interface ContactProps {
  preselectedService?: string;
}

export default function Contact({ preselectedService = '' }: ContactProps) {
  const [formData, setFormData] = useState<Omit<Inquiry, 'id' | 'createdAt'>>({
    name: '',
    email: '',
    phone: '',
    whatsapp: false,
    service: 'Website Design',
    budget: '₹15,000 - ₹35,000',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Sync preselected service from Services page trigger
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
      // Focus on the contact section or form
      const element = document.getElementById('contact-form-card');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [preselectedService]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit your inquiry. Please try again or chat with our live agent.');
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        whatsapp: false,
        service: 'Website Design',
        budget: '₹15,000 - ₹35,000',
        message: ''
      });
    } catch (err: any) {
      setErrorMsg(err.message || 'Connecting to server failed. Please use WhatsApp or email directly.');
    } finally {
      setLoading(false);
    }
  };

  const servicesOption = [
    'Website Design',
    'Website Development',
    'E-Commerce Development',
    'UI/UX Design',
    'SEO Optimization',
    'Branding & Logo Design',
    'AI Chatbot Solutions',
    'Website Maintenance'
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative backdrop shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          id="contact-header"
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded-full mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Let's Discuss Your Project
          </h2>
          <p className="text-slate-500 text-base">
            Have an outstanding design requirement or high performance software spec? Drop us a line of details, click submit, and we will initiate details.
          </p>
        </motion.div>

        {/* Main Grid: Form, Info, Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info Card Col */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, type: 'spring', damping: 20 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            
            {/* Quick Connect parameters list */}
            <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl relative overflow-hidden flex-1 flex flex-col justify-between">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
              
              <div className="relative z-10">
                <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest block mb-4">
                  CONTACT DETAILS
                </span>
                <h3 className="text-2xl font-bold tracking-tight leading-snug mb-8">
                  Durgapur's Premium Digital Partners
                </h3>

                {/* Vertical lists parameters */}
                <div className="space-y-6">
                  
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-slate-800 text-blue-400 rounded-xl flex items-center justify-center shrink-0 border border-slate-700/60">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider leading-none mb-1">Office Address</span>
                      <p className="text-xs sm:text-sm text-slate-300 leading-snug">
                        2/32 Bankim Chandra Avenue, B-Zone, Durgapur, West Bengal 713205, India
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-slate-800 text-blue-400 rounded-xl flex items-center justify-center shrink-0 border border-slate-700/60">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider leading-none mb-1">Email Inquiry</span>
                      <a href="mailto:webnestsupport@gmail.com" className="text-sm text-white font-semibold block hover:text-blue-400 transition-colors duration-300">
                        webnestsupport@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-slate-800 text-blue-400 rounded-xl flex items-center justify-center shrink-0 border border-slate-700/60">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider leading-none mb-1">Call Representative</span>
                      <a href="tel:+917908774055" className="text-sm text-white font-semibold block hover:text-blue-400 transition-colors duration-300">
                        +91 79087 74055
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Direct Direct redirects buttons redirects */}
              <div className="relative z-10 pt-10 border-t border-slate-800/80 mt-10 md:mt-0 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/917908774055?text=Hi%20WebNest,%20I%20visited%20your%20website%20and%20would%20like%20a%20free%20consultation."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-lg transition-colors duration-300 shadow-lg shrink-0"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Localized Vector/SVG Interactive Map Fallback (Centered uniquely on Durgapur B-Zone) */}
            <div id="durgapur-map-card" className="bg-white border border-slate-200/60 rounded-3xl p-5 shadow-xl shadow-slate-200/40 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest block">
                    DUGAPUR OFFICE REGIONSMAP
                  </span>
                  <a
                    href="https://maps.google.com/?q=2/32+Bankim+Chandra+Avenue,+B-Zone,+Durgapur,+West+Bengal+713205"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1 text-[11px] font-bold text-blue-600 uppercase tracking-wide hover:text-slate-900 transition-colors"
                  >
                    <span>Google Maps link</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Simulated interactive map layout */}
                <div className="w-full h-44 bg-blue-50/70 border border-blue-100/60 rounded-2xl relative overflow-hidden flex items-center justify-center select-none group">
                  {/* Styled vector grids and local roads simulations */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe_1px,transparent_1px)] bg-[size:16px_16px] opacity-60" />
                  <div className="absolute w-3/4 h-2 bg-amber-200/50 -rotate-12 top-10 left-4" />
                  <div className="absolute w-1/2 h-1 bg-amber-200/50 rotate-45 top-1/4 right-4" />
                  <div className="absolute w-5/6 h-2 md:h-3 bg-white rounded-full border border-slate-100 rotate-12 top-1/2 left-2" />
                  
                  {/* Actual Location Pin layout */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative">
                      <MapPin className="w-8 h-8 text-blue-600 animate-bounce" />
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-blue-600/20 blur-[1px] rounded-full inline-block" />
                    </div>
                    <span className="bg-slate-900 border border-slate-800 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded shadow mt-2 leading-none">
                      WebNest Studio
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4 text-[10px] text-slate-400 uppercase tracking-widest font-bold leading-normal text-center">
                Located inside block B-Zone Durgapur, WB
              </div>
            </div>

          </motion.div>

          {/* Inquiry Form Col */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, type: 'spring', damping: 20, delay: 0.1 }}
            id="contact-form-card"
            className="lg:col-span-1"
            style={{ flexGrow: 7, flexBasis: '0%' }}
          >
            <div className="bg-white border border-slate-200/60 rounded-3xl p-8 md:p-10 shadow-2xl shadow-slate-200/40 h-full flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {!success ? (
                  <motion.form
                    key="contact-form-element"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 bg-blue-50 border border-blue-100/60 px-3 py-1.5 rounded-full w-max">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      <span className="text-[10px] font-bold text-blue-900 uppercase tracking-wider">
                        Quick Service Dispatcher
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
                      Submit Your Specification
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-slate-950 font-medium text-sm transition-all duration-300 focus:outline-none"
                          placeholder="Anoop Sharma"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-2">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-slate-950 font-medium text-sm transition-all duration-300 focus:outline-none"
                          placeholder="anoop@agrogreen.in"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone */}
                      <div>
                        <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-slate-950 font-medium text-sm transition-all duration-300 focus:outline-none"
                          placeholder="+91 79087 74055"
                        />
                      </div>

                      {/* WhatsApp Direct */}
                      <div className="flex flex-col justify-end">
                        <label className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 flex items-center space-x-3 cursor-pointer hover:border-blue-200 transition-colors duration-200 select-none h-[50px] shrink-0">
                          <input
                            type="checkbox"
                            checked={formData.whatsapp}
                            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.checked })}
                            className="w-4 h-4 rounded text-blue-600 border-slate-350 focus:ring-blue-500 cursor-pointer"
                          />
                          <span className="text-xs font-semibold text-slate-700">Receive replies via WhatsApp</span>
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Service Dropdown */}
                      <div>
                        <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-2">
                          Required Service
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 rounded-xl px-4 py-3.5 text-slate-950 font-medium text-sm transition-colors duration-300 focus:outline-none cursor-pointer"
                        >
                          {servicesOption.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Budget Dropdown */}
                      <div>
                        <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-2">
                          Estimated Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 rounded-xl px-4 py-3.5 text-slate-950 font-medium text-sm transition-colors duration-300 focus:outline-none cursor-pointer"
                        >
                          <option value="Under ₹15,000">Under ₹15,000 (Basic Landing)</option>
                          <option value="₹15,000 - ₹35,000">₹15,000 - ₹35,000 (Standard Website)</option>
                          <option value="₹35,000 - ₹75,000">₹35,000 - ₹75,000 (E-Commerce & Advanced Apps)</option>
                          <option value="₹75,000+">₹75,000+ (Enterprise Custom Solutions)</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block mb-2">
                        Project Description *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-slate-950 font-medium text-sm transition-all duration-300 focus:outline-none"
                        placeholder="Explain your goals, layout concepts, pages content, timeline requirements..."
                      />
                    </div>

                    {/* Server Error notification wrapper */}
                    {errorMsg && (
                      <p className="text-xs font-bold text-red-600 bg-red-50 border border-red-100 p-3 rounded-xl">
                        {errorMsg}
                      </p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center space-x-2 bg-blue-600 disabled:bg-blue-400 text-white text-xs font-bold uppercase tracking-wider py-4 rounded-xl hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-300/60 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer shadow-lg shadow-blue-200/50"
                    >
                      {loading ? (
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full block animate-spin" />
                      ) : (
                        <>
                          <span>Submit Project Inquiry</span>
                          <Send className="w-4 h-4 shrink-0" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-form-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16 space-y-6 flex flex-col items-center justify-center h-full"
                  >
                    <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center border border-emerald-100 mb-2">
                      <CheckCircle className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-none">
                      Specification Submitted!
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                      Thank you for contacting WebNest. Our lead partner has recorded your specification. We will evaluate your parameters and reach back under 24 hours.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="inline-flex items-center space-x-1 border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-lg transition-colors duration-300 cursor-pointer"
                    >
                      ✕ Close Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
