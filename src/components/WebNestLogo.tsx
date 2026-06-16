import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface WebNestLogoProps {
  className?: string;
  isDark?: boolean;
}

export default function WebNestLogo({ className = 'w-10 h-10', isDark = false }: WebNestLogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Core brand design attributes mapped to dynamic scales
  const glowColor = isDark ? 'rgba(59, 130, 246, 0.65)' : 'rgba(37, 99, 235, 0.4)';

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ perspective: 600 }}
    >
      <motion.svg
        viewBox="0 0 120 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="webnest-svg-logo"
        className="w-full h-full overflow-visible"
        animate={isHovered ? {
          scale: 1.15,
          rotateY: 28,
          rotateX: -15,
          filter: `drop-shadow(0 15px 25px ${glowColor})`,
        } : {
          scale: 1,
          rotateY: 0,
          rotateX: 0,
          filter: `drop-shadow(0 4px 6px rgba(0,0,0,0.02))`,
        }}
        transition={{
          type: 'spring',
          stiffness: 140,
          damping: 14,
          mass: 0.8
        }}
      >
        <defs>
          {/* Animated Leftmost Ribbon Gradient: Glowing active sky blue to neon blue */}
          <motion.linearGradient 
            id="logoLeftGradient" 
            x1="0%" 
            y1="0%" 
            x2="100%" 
            y2="100%"
            animate={{
              x1: ["0%", "30%", "0%"],
              y1: ["10%", "0%", "10%"],
              x2: ["90%", "100%", "90%"],
              y2: ["100%", "70%", "100%"]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <stop offset="0%" stopColor="#00c3ff" />
            <stop offset="50%" stopColor="#0080ff" />
            <stop offset="100%" stopColor="#005aff" />
          </motion.linearGradient>

          {/* Shadow overlap for realistic 3D depth folds */}
          <linearGradient id="logoShadowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00183f" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#00091c" stopOpacity="0" />
          </linearGradient>

          {/* Animated Main center fold ribbon: Royal sapphire gradient */}
          <motion.linearGradient 
            id="logoMiddleGradient" 
            x1="10%" 
            y1="0%" 
            x2="90%" 
            y2="100%"
            animate={{
              x1: ["10%", "0%", "15%", "10%"],
              y2: ["100%", "90%", "110%", "100%"]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <stop offset="0%" stopColor="#0055ff" />
            <stop offset="40%" stopColor="#0035b8" />
            <stop offset="100%" stopColor="#001240" />
          </motion.linearGradient>

          {/* Animated Right soaring gradient: Cyber premium navy/cobalt */}
          <motion.linearGradient 
            id="logoRightGradient" 
            x1="0%" 
            y1="0%" 
            x2="100%" 
            y2="100%"
            animate={{
              x2: ["100%", "80%", "110%", "100%"]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <stop offset="0%" stopColor="#0a50e5" />
            <stop offset="50%" stopColor="#002166" />
            <stop offset="100%" stopColor="#020a1c" />
          </motion.linearGradient>

          {/* Soft outer radar ring gradient */}
          <radialGradient id="radarRadial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.12" />
            <stop offset="85%" stopColor="#3b82f6" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* --- HIGH-TECH RADAR RINGS & TELEMETRY BACKGROUND --- */}
        <g id="radar-backdrops">
          {/* Pulsing focal point background */}
          <motion.circle
            cx="60"
            cy="45"
            r="42"
            fill="url(#radarRadial)"
            animate={{
              scale: [0.93, 1.07, 0.93],
              opacity: isHovered ? [0.6, 1, 0.6] : [0.4, 0.6, 0.4]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Blueprint Telemetry Orbit 1 (Outer Clockwise) */}
          <motion.circle
            cx="60"
            cy="45"
            r="38"
            stroke="#3b82f6"
            strokeWidth="0.4"
            strokeDasharray="6 8 1 8"
            opacity={isHovered ? 0.35 : 0.15}
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ originX: "60px", originY: "45px" }}
          />

          {/* Blueprint Telemetry Orbit 2 (Inner Counter-Clockwise) */}
          <motion.circle
            cx="60"
            cy="45"
            r="32"
            stroke="#00c3ff"
            strokeWidth="0.3"
            strokeDasharray="12 4 3 4"
            opacity={isHovered ? 0.45 : 0.2}
            animate={{
              rotate: -360
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ originX: "60px", originY: "45px" }}
          />
        </g>

        {/* --- MAIN STRUCTURED RIBBONS GROUP --- */}
        <g id="main-ribbons-and-folds">
          
          {/* LEFT RIBBON (Sky Blue) */}
          <motion.path
            d="M 26,22 
               C 18.5,14 30.5,8 37,16 
               L 54,44 
               C 57.5,50 51.5,56.5 45.5,53.5 
               L 26,22 Z"
            fill="url(#logoLeftGradient)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* FOLD UNDERLAY SHADOW */}
          <motion.path
            d="M 45,54 
               C 51,46 54.5,41 57,35 
               L 50,42 
               Z"
            fill="url(#logoShadowGradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />

          {/* MIDDLE FOLD (Royal Blue) */}
          <motion.path
            d="M 44.5,53.5 
               C 49.5,45.5 54.5,33.5 58.5,23.5 
               C 62.5,13.5 73.5,16.5 76,23.5 
               L 89.5,51.5 
               C 93,58.5 83.5,65 78.5,57.5 
               L 66,35.5 
               C 60,25 51.5,42.5 44.5,53.5 Z"
            fill="url(#logoMiddleGradient)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.2, ease: "easeInOut" }}
          />

          {/* RIGHT OVERLAY SLOPE ACCENT (Soaring Sapphire) */}
          <motion.path
            d="M 64.5,33.5 
               L 75,54.5 
               C 78,60.5 87.5,54.5 86.5,48.5 
               L 76,23.5 
               C 74,18.5 68.5,25.5 64.5,33.5 Z"
            fill="url(#logoRightGradient)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
          />
        </g>

        {/* --- FLOATING PARTICLE & DIGITAL DATA FLIGHT --- */}
        <g id="digital-data-pixels">
          {/* Pixel 1 (Top Left in flight cluster) */}
          <motion.rect
            x="91"
            y="21.5"
            width="4.5"
            height="4.5"
            rx="0.5"
            fill="#00c3ff"
            animate={{
              y: [21.5, 17.5, 21.5],
              opacity: [0.7, 1, 0.7],
              scale: [1, 1.25, 1]
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Pixel 2 (High Apex) */}
          <motion.rect
            x="97"
            y="16.5"
            width="5.5"
            height="5.5"
            rx="1"
            fill="#005aff"
            animate={{
              y: [16.5, 21.5, 16.5],
              x: [97, 100, 97],
              opacity: [0.9, 0.4, 0.9]
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Pixel 3 (Far Right Outpost) */}
          <motion.rect
            x="104.5"
            y="11.5"
            width="4.5"
            height="4.5"
            rx="0.5"
            fill="#001b54"
            animate={{
              scale: [1, 0.7, 1.3, 1],
              opacity: [0.6, 1, 0.3, 0.6]
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Pixel 4 (Lower Middle Left) */}
          <motion.rect
            x="85.5"
            y="27"
            width="3.5"
            height="3.5"
            rx="0.5"
            fill="#00c3ff"
            animate={{
              y: [27, 24.5, 27],
              x: [85.5, 87.5, 85.5],
              opacity: [0.85, 0.3, 0.85]
            }}
            transition={{
              duration: 2.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Pixel 5 (Lower Center Deep Outpost) */}
          <motion.rect
            x="92.5"
            y="27.5"
            width="4"
            height="4"
            rx="0.8"
            fill="#004bc8"
            animate={{
              scale: [1, 1.35, 1],
              opacity: [0.5, 0.9, 0.5]
            }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Pixel 6 (Trailing Micro Node) */}
          <motion.rect
            x="98.5"
            y="24"
            width="3"
            height="3"
            rx="0.4"
            fill="#00c3ff"
            animate={{
              y: [24, 21, 24],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 2.1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Pixel 7 (Top-Right High Tracker) */}
          <motion.rect
            x="103.5"
            y="19"
            width="3.5"
            height="3.5"
            rx="0.5"
            fill="#004bc8"
            animate={{
              y: [19, 16, 19],
              opacity: [0.9, 0.4, 0.9]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Dynamic Laser Spark Particles (Hover Specific) */}
          <AnimatePresence>
            {isHovered && (
              <>
                {/* Spark left */}
                <motion.circle
                  cx="22"
                  cy="14"
                  r="1.2"
                  fill="#00c3ff"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [1, 2, 0], opacity: [1, 0.8, 0], x: [-5, -15] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                {/* Spark right */}
                <motion.circle
                  cx="88"
                  cy="18"
                  r="1"
                  fill="#00ffcc"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [1, 2.5, 0], opacity: [1, 0.9, 0], x: [5, 16], y: [-5, -10] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: 0.1 }}
                />
                {/* Spark center core */}
                <motion.circle
                  cx="60"
                  cy="45"
                  r="1.5"
                  stroke="#ffffff"
                  strokeWidth="0.5"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 4, opacity: [0.8, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
              </>
            )}
          </AnimatePresence>
        </g>
      </motion.svg>
    </motion.div>
  );
}
