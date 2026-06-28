import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Moon, Sun, Layers, X } from 'lucide-react';
import ThreeDCard from './ThreeDCard';

interface DimensionControllerProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  perspective: number;
  setPerspective: (val: number) => void;
  isFloatingShapesActive: boolean;
  setIsFloatingShapesActive: (val: boolean) => void;
}

export default function DimensionController({
  theme,
  setTheme,
  perspective,
  setPerspective,
  isFloatingShapesActive,
  setIsFloatingShapesActive,
}: DimensionControllerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Auto-close tooltip after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-[90] font-sans">
      {/* Mini floating trigger button with beautiful pulsing outline and 3D hover */}
      <div className="relative">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -10, y: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: -10 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              className="absolute bottom-full left-0 mb-3 bg-slate-900 text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg shadow-xl border border-slate-800 whitespace-nowrap flex items-center space-x-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span>Configure 3D Dimensions &amp; Themes here!</span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTooltip(false);
                }} 
                className="text-slate-400 hover:text-white ml-1 cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowTooltip(false);
          }}
          whileHover={{ scale: 1.08, rotate: [0, -5, 5, 0] }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-gradient-to-tr from-slate-900 to-slate-850 hover:from-indigo-600 hover:to-violet-500 text-white rounded-full flex items-center justify-center shadow-2xl border-2 border-indigo-500/30 cursor-pointer relative group"
          id="dimension-trigger-btn"
        >
          <div className="absolute inset-0 rounded-full bg-indigo-400/20 animate-ping pointer-events-none group-hover:hidden" />
          <Layers className="w-6 h-6 animate-pulse" />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-indigo-500"></span>
          </span>
        </motion.button>
      </div>

      {/* Control Console Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, x: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20, x: -10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="absolute bottom-16 left-0 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 w-[340px] shadow-[0_30px_70px_rgba(0,0,0,0.65)] text-slate-100 overflow-hidden"
          >
            {/* Holographic background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/5 blur-2xl rounded-full pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm tracking-tight">3D Dimension Desk</h4>
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider font-mono">Control Desk v2.4</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-5 relative z-10">
              {/* Theme Selection Toggle */}
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-2.5">
                  Dimension Theme
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setTheme('light')}
                    className={`flex items-center justify-center space-x-2 py-2.5 rounded-xl border text-xs font-bold transition-all duration-300 cursor-pointer ${
                      theme === 'light'
                        ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                        : 'bg-slate-850 border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Sun className="w-3.5 h-3.5" />
                    <span>Pristine Glass</span>
                  </button>
                  <button
                    onClick={() => setTheme('dark')}
                    className={`flex items-center justify-center space-x-2 py-2.5 rounded-xl border text-xs font-bold transition-all duration-300 cursor-pointer ${
                      theme === 'dark'
                        ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                        : 'bg-slate-850 border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Moon className="w-3.5 h-3.5" />
                    <span>Obsidian Cyber</span>
                  </button>
                </div>
              </div>

              {/* 3D Depth Level Perspective Control */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                    3D Perspective Depth
                  </span>
                  <span className="text-[10px] font-mono font-bold text-indigo-400">
                    {perspective}px
                  </span>
                </div>
                <input
                  type="range"
                  min="800"
                  max="2500"
                  step="100"
                  value={perspective}
                  onChange={(e) => setPerspective(Number(e.target.value))}
                  className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between text-[9px] text-slate-500 font-mono mt-1">
                  <span>Intense (800px)</span>
                  <span>Subtle (2500px)</span>
                </div>
              </div>

              {/* Background Bobbing Physics Toggle */}
              <div className="flex items-center justify-between bg-slate-850 p-3 rounded-xl border border-slate-800">
                <div>
                  <span className="text-xs font-bold block text-slate-200">Bobbing Physics Shapes</span>
                  <span className="text-[9px] text-slate-500 block">Toggles background geometric floating vectors</span>
                </div>
                <button
                  onClick={() => setIsFloatingShapesActive(!isFloatingShapesActive)}
                  className={`w-10 h-6 rounded-full flex items-center p-0.5 transition-colors cursor-pointer ${
                    isFloatingShapesActive ? 'bg-indigo-600 justify-end' : 'bg-slate-800 justify-start'
                  }`}
                >
                  <motion.div 
                    layout 
                    className="w-5 h-5 bg-white rounded-full shadow-md"
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                </button>
              </div>

              {/* Real-time 3D Interactive Playground Preview */}
              <div className="bg-slate-850 border border-slate-850 rounded-2xl p-3 text-center">
                <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider block mb-2">
                  Live Mouse-Tracking Demo Card
                </span>
                <ThreeDCard className="w-full bg-slate-900 border border-slate-800 p-4 rounded-xl text-left" intensity={15}>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-xs font-bold text-indigo-400">⚡</div>
                    <div>
                      <span className="text-[11px] font-bold text-white block">Interactive Physics Card</span>
                      <span className="text-[9px] text-slate-500 block leading-tight">Hover to rotate &amp; shine specular glare</span>
                    </div>
                  </div>
                </ThreeDCard>
              </div>
            </div>

            {/* Micro Credit Footer */}
            <div className="border-t border-slate-800 pt-3 mt-5 flex items-center justify-between text-[9px] text-slate-500 font-mono">
              <span>ACTIVE ENGINE: FRAME-MOTION</span>
              <span className="text-indigo-500">ONLINE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
