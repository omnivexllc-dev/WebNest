import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, MessageSquare, ChevronRight, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ChatMessage } from '../types.ts';

export default function ConsultationChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProactive, setShowProactive] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-message',
      role: 'model',
      text: 'Hi! I am NestBot, your WebNest smart design consultant. 🚀\n\nI can answer questions about our services, explain our development process, or help you brainstorm an estimated budget for your new project. What are you building today?',
      createdAt: new Date().toISOString()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Trigger proactive engagement prompt after 7 seconds if the chat hasn't been opened
  useEffect(() => {
    const dismissed = sessionStorage.getItem('nestbot-proactive-dismissed') === 'true';
    if (dismissed || isOpen) return;

    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowProactive(true);
      }
    }, 7000); // 7 seconds delay

    return () => clearTimeout(timer);
  }, [isOpen]);

  // Unified Section Smooth Scroll with target flash highlights for interactive engagement
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 85; 
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // If navigating to contact sheet, trigger high contrast overlay flash on form
      if (sectionId === 'contact') {
        const contactForm = document.getElementById('contact-form-card');
        if (contactForm) {
          contactForm.classList.add('ring-4', 'ring-blue-600', 'ring-offset-2', 'transition-all', 'duration-500');
          setTimeout(() => {
            contactForm.classList.remove('ring-4', 'ring-blue-600', 'ring-offset-2');
          }, 3500);
        }
      }
    }
  };

  // Auto scroll to bottom on message updates
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    // Auto-dismiss proactive bubble if user starts sending messages
    setShowProactive(false);

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: 'user',
      text: textToSend,
      createdAt: new Date().toISOString()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setLoading(true);

    try {
      const response = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: textToSend,
          history: messages.map((m) => ({
            role: m.role,
            text: m.text
          }))
        }),
      });

      if (!response.ok) {
        throw new Error('Consultation bot is adjusting its models. Please retry in a second!');
      }

      const data = await response.json();
      const modelText = data.text || 'I collected your details. Our lead manager will reach out with a personalized roadmap shortly.';

      const modelMsg: ChatMessage = {
        id: `gem-${Date.now()}`,
        role: 'model',
        text: modelText,
        createdAt: new Date().toISOString()
      };

      setMessages((prev) => [...prev, modelMsg]);
    } catch (err: any) {
      const errMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'model',
        text: err.message || 'Apologies, our local node API is currently re-routing traffic. You can mail webnestsupport@gmail.com directly or submit the main specification sheet below!',
        createdAt: new Date().toISOString()
      };
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setLoading(false);
    }
  };

  const starterQuestions = [
    'Estimate website budget?',
    'What is your design style?',
    'Explain Durgapur Office process?',
    'How does your SEO tune-up work?'
  ];

  return (
    <>
      {/* Proactive Engagement Notification Card */}
      <AnimatePresence>
        {showProactive && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15, x: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-40 bg-white border border-slate-200 rounded-2xl w-80 shadow-2xl p-4.5 flex flex-col space-y-2.5"
          >
            {/* Header / Avatar block */}
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shrink-0 shadow-md">
                  <Bot className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-widest block leading-none">NestBot Smart Guide</span>
                  <span className="text-xs font-bold text-slate-900 block mt-0.5">Need some guidance? 👋</span>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowProactive(false);
                  sessionStorage.setItem('nestbot-proactive-dismissed', 'true');
                }}
                className="text-slate-400 hover:text-slate-600 p-1 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Bubble teaser text */}
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Looking for a custom website, digital marketing review, or cost estimate? Let me walk you through our process & pricing!
            </p>

            {/* CTA action bottom bar */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Replies immediately</span>
              <button
                onClick={() => {
                  setIsOpen(true);
                  setShowProactive(false);
                  sessionStorage.setItem('nestbot-proactive-dismissed', 'true');
                }}
                className="inline-flex items-center space-x-1.5 bg-blue-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer shadow-md shadow-blue-100"
              >
                <span>Ask NestBot</span>
                <ChevronRight className="w-3" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Launcher Action Ball */}
      <div className="fixed bottom-6 right-6 z-40 select-none">
        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowProactive(false);
            sessionStorage.setItem('nestbot-proactive-dismissed', 'true');
          }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="w-14 h-14 bg-blue-600 hover:bg-slate-900 border border-blue-500/10 text-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer relative group"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
          
          {/* Subtle blinking notification badge */}
          {!isOpen && (
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full inline-block animate-ping" />
          )}
          {!isOpen && (
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full inline-block" />
          )}

          {/* Launcher Hover tooltip text */}
          <span className="absolute right-16 bg-slate-900 text-white font-semibold text-[10px] tracking-wide uppercase px-3.5 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
            Live Consultation Bot
          </span>
        </motion.button>
      </div>

      {/* Embedded Chat Drawer overlay Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-40 bg-white border border-slate-200 shadow-2xl rounded-3xl w-[90vw] sm:w-[410px] h-[580px] overflow-hidden flex flex-col justify-between"
          >
            {/* Header branding band */}
            <div className="bg-slate-900 p-4.5 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <Bot className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <h4 className="text-sm font-bold block leading-none">NestBot</h4>
                  <div className="flex items-center space-x-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">AI Consultant</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white bg-slate-800 p-1.5 rounded-lg transition-colors cursor-pointer text-xs"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable messages canvas */}
            <div className="flex-1 overflow-y-auto p-5 bg-slate-50/50 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-4 text-xs font-medium leading-relaxed shadow-sm border ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white border-blue-500'
                        : 'bg-white text-slate-800 border-slate-200/80'
                    }`}
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Loader Bubble block */}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200/60 rounded-2xl p-4 flex items-center space-x-1.5 shadow-sm max-w-[80px]">
                    <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                    <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                    <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Starter Suggestion Prompts drawer */}
            {messages.length === 1 && (
              <div className="px-5 py-3 border-t border-slate-100 shrink-0 bg-white">
                <span className="text-[9px] text-slate-400 font-extrabold tracking-widest uppercase block mb-2">
                  EXPLORE STARTER TOPICS
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {starterQuestions.map((q, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(q)}
                      className="inline-flex items-center space-x-1 text-[10px] font-bold text-blue-600 border border-blue-100 hover:border-blue-300 hover:bg-blue-50/50 px-2.5 py-1.5 rounded-lg cursor-pointer max-w-full transition-all leading-tight duration-200"
                    >
                      <span>{q}</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Core Guidance Quick Actions Row */}
            <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 shrink-0 flex items-center gap-1.5 overflow-x-auto scrollbar-none no-scrollbar">
              <span className="text-[9px] text-slate-400 font-extrabold tracking-widest uppercase shrink-0">
                Guarded Paths:
              </span>
              <button
                type="button"
                onClick={() => {
                  scrollToSection('contact');
                  if (window.innerWidth < 640) setIsOpen(false);
                }}
                className="inline-flex items-center space-x-1 text-[10px] font-extrabold text-slate-700 bg-white border border-slate-200 hover:border-blue-600 hover:text-blue-600 px-2.5 py-1 rounded-full cursor-pointer transition-all duration-350 shadow-sm shrink-0 hover:bg-blue-50/20"
              >
                <span>📝 Request Consultation</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  scrollToSection('portfolio');
                  if (window.innerWidth < 640) setIsOpen(false);
                }}
                className="inline-flex items-center space-x-1 text-[10px] font-extrabold text-slate-700 bg-white border border-slate-200 hover:border-blue-600 hover:text-blue-600 px-2.5 py-1 rounded-full cursor-pointer transition-all duration-350 shadow-sm shrink-0 hover:bg-blue-50/20"
              >
                <span>📁 View Our Portfolio</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  scrollToSection('process');
                  if (window.innerWidth < 640) setIsOpen(false);
                }}
                className="inline-flex items-center space-x-1 text-[10px] font-extrabold text-slate-700 bg-white border border-slate-200 hover:border-blue-600 hover:text-blue-600 px-2.5 py-1 rounded-full cursor-pointer transition-all duration-350 shadow-sm shrink-0 hover:bg-blue-50/20"
              >
                <span>⚡ Our Process</span>
              </button>
            </div>

            {/* Text message entry form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-4 border-t border-slate-100 flex items-center space-x-3 shrink-0 bg-white"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={loading}
                placeholder="Ask about budgets, services, and integrations..."
                className="flex-1 bg-slate-50 hover:bg-slate-100/60 focus:bg-white border border-slate-200 focus:border-blue-500 rounded-xl px-4 py-3 text-slate-900 font-medium text-xs focus:outline-none transition-all duration-200"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || loading}
                className="w-10 h-10 bg-blue-600 disabled:bg-blue-400 text-white rounded-xl flex items-center justify-center cursor-pointer transition-colors shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
