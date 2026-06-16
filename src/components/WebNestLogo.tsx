import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface WebNestLogoProps {
  className?: string;
  isDark?: boolean;
}

export default function WebNestLogo({ className = 'w-10 h-10', isDark = false }: WebNestLogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Dynamic branding glow coordinates
  const glowColor = isDark ? 'rgba(59, 130, 246, 0.85)' : 'rgba(37, 99, 235, 0.6)';

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ perspective: 1000 }}
    >
      {/* Absolute Backdrop Dynamic Heatwave/Glow Flare */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-full blur-2xl filter pointer-events-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.35, 0.75, 0.35], 
              scale: [1, 1.25, 1],
              background: `radial-gradient(circle, ${glowColor} 0%, rgba(29, 78, 216, 0) 70%)`
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      <motion.svg
        viewBox="0 0 120 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="webnest-svg-logo"
        className="w-full h-full overflow-visible select-none cursor-pointer"
        animate={isHovered ? {
          scale: 1.18,
          rotateY: 32,
          rotateX: -18,
          rotateZ: 2,
          filter: `drop-shadow(0 20px 35px ${glowColor})`,
        } : {
          scale: 1,
          rotateY: [0, 4, -4, 0],
          rotateX: [0, -3, 3, 0],
          rotateZ: 0,
          filter: `drop-shadow(0 4px 10px rgba(37, 99, 235, 0.08))`,
        }}
        transition={isHovered ? {
          type: 'spring',
          stiffness: 180,
          damping: 12,
          mass: 0.7
        } : {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <defs>
          {/* Animated liquid turbulence filter triggered on hover for holographic shimmer */}
          <filter id="liquidHologramFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={isHovered ? "0.05 0.02" : "0.01 0.01"}
              numOctaves="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={isHovered ? "4" : "1.5"}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          {/* Golden Hour / Digital Cyan-Blue Neon Gradient */}
          <motion.linearGradient 
            id="logoLeftGradient" 
            x1="0%" 
            y1="0%" 
            x2="100%" 
            y2="100%"
            animate={{
              x1: ["0%", "40%", "0%"],
              y1: ["10%", "0%", "10%"],
              x2: ["90%", "100%", "90%"],
              y2: ["100%", "60%", "100%"]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="55%" stopColor="#0072ff" />
            <stop offset="100%" stopColor="#0022ff" />
          </motion.linearGradient>

          {/* Shadow Overlay Folds */}
          <linearGradient id="logoShadowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#000e29" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#000514" stopOpacity="0" />
          </linearGradient>

          {/* High Intensity Royal-Indigo fold gradient */}
          <motion.linearGradient 
            id="logoMiddleGradient" 
            x1="0%" 
            y1="0%" 
            x2="100%" 
            y2="100%"
            animate={{
              x1: ["0%", "20%", "-10%", "0%"],
              y2: ["100%", "80%", "120%", "100%"]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="35%" stopColor="#1d4ed8" />
            <stop offset="70%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#030712" />
          </motion.linearGradient>

          {/* Extreme metallic neon cobalt gradient */}
          <motion.linearGradient 
            id="logoRightGradient" 
            x1="0%" 
            y1="0%" 
            x2="100%" 
            y2="100%"
            animate={{
              x2: ["100%", "70%", "120%", "100%"],
              y2: ["100%", "110%", "90%", "100%"]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#03001e" />
          </motion.linearGradient>

          {/* Glowing Aura Gradient */}
          <radialGradient id="portalRadarRadial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* --- HIGH-TECH RADAR RINGS & TELEMETRY BACKGROUND --- */}
        <g id="radar-backdrops">
          {/* Cosmic Center Glow */}
          <motion.circle
            cx="60"
            cy="45"
            r="44"
            fill="url(#portalRadarRadial)"
            animate={{
              scale: isHovered ? [0.95, 1.15, 0.95] : [0.95, 1.05, 0.95],
              opacity: isHovered ? [0.7, 1, 0.7] : [0.4, 0.55, 0.4]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Advanced Neon Blueprint Vector Crosshair lines (appearing on hover) */}
          <AnimatePresence>
            {isHovered && (
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.45, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                {/* Horizontal blueprint marker */}
                <line x1="18" y1="45" x2="102" y2="45" stroke="#3b82f6" strokeWidth="0.3" strokeDasharray="2 3" />
                {/* Vertical blueprint marker */}
                <line x1="60" y1="12" x2="60" y2="78" stroke="#3b82f6" strokeWidth="0.3" strokeDasharray="2 3" />
              </motion.g>
            )}
          </AnimatePresence>
          
          {/* Rotating Telemetry Orbit 1 (Clockwise Ring) */}
          <motion.circle
            cx="60"
            cy="45"
            r="40"
            stroke="#00f0ff"
            strokeWidth="0.5"
            strokeDasharray="5 15 2 10 30 15"
            opacity={isHovered ? 0.6 : 0.25}
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ originX: "60px", originY: "45px" }}
          />

          {/* Reverse Micro Particle Ring Orbit 2 (Counter-Clockwise) */}
          <motion.circle
            cx="60"
            cy="45"
            r="34"
            stroke="#3b82f6"
            strokeWidth="0.4"
            strokeDasharray="1 5 10 5"
            opacity={isHovered ? 0.7 : 0.3}
            animate={{
              rotate: -360
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ originX: "60px", originY: "45px" }}
          />
        </g>

        {/* --- MAIN STRUCTURED RIBBONS GROUP WITH HOLOGRAPHIC LIQUID SHIMMER --- */}
        <g id="main-ribbons-and-folds" filter="url(#liquidHologramFilter)">
          
          {/* LEFT RIBBON (Crystalline Cyan/Blue fold) */}
          <motion.path
            d="M 26,22 
               C 18.5,14 30.5,8 37,16 
               L 54,44 
               C 57.5,50 51.5,56.5 45.5,53.5 
               L 26,22 Z"
            fill="url(#logoLeftGradient)"
            animate={isHovered ? {
              y: [-1, 2, -1],
              x: [1, -1, 1],
            } : {
              y: 0,
              x: 0,
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* FOLD UNDERLAY SHADOW */}
          <path
            d="M 45,54 
               C 51,46 54.5,41 57,35 
               L 50,42 
               Z"
            fill="url(#logoShadowGradient)"
          />

          {/* MIDDLE FOLD (Royal Blue Ribbon, floats on alternative wave when active) */}
          <motion.path
            d="M 44.5,53.5 
               C 49.5,45.5 54.5,33.5 58.5,23.5 
               C 62.5,13.5 73.5,16.5 76,23.5 
               L 89.5,51.5 
               C 93,58.5 83.5,65 78.5,57.5 
               L 66,35.5 
               C 60,25 51.5,42.5 44.5,53.5 Z"
            fill="url(#logoMiddleGradient)"
            animate={isHovered ? {
              y: [2, -2, 2],
              x: [-1.5, 1.5, -1.5],
            } : {
              y: 0,
              x: 0,
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* RIGHT OVERLAY ACCENT (Emerald/Cobalt soar element) */}
          <motion.path
            d="M 64.5,33.5 
               L 75,54.5 
               C 78,60.5 87.5,54.5 86.5,48.5 
               L 76,23.5 
               C 74,18.5 68.5,25.5 64.5,33.5 Z"
            fill="url(#logoRightGradient)"
            animate={isHovered ? {
              scale: [1, 1.05, 1],
              y: [-2, 1, -2]
            } : {
              scale: 1,
              y: 0
            }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: "75px", originY: "38px" }}
          />
        </g>

        {/* --- DYNAMIC CONSTELLATION WEB (Links particles together on hover) --- */}
        <g id="constellation-web">
          <AnimatePresence>
            {isHovered && (
              <motion.path
                d="M 91,21.5 L 97,16.5 L 103.5,19 L 98.5,24 L 92.5,27.5 L 85.5,27 Z"
                stroke="rgba(0, 240, 255, 0.45)"
                strokeWidth="0.4"
                fill="rgba(0, 240, 255, 0.04)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            )}
          </AnimatePresence>
        </g>

        {/* --- FLOATING TECH PIXELS / HYPER-COSMIC DEBRIS --- */}
        <g id="digital-data-pixels">
          {/* Pixel 1 (Skyblue node) */}
          <motion.rect
            x="91"
            y="21.5"
            width="4.5"
            height="4.5"
            rx="0.5"
            fill="#00c3ff"
            animate={isHovered ? {
              y: [21.5, 13, 21.5],
              x: [91, 88, 91],
              rotate: [0, 180, 360],
              opacity: [0.8, 1, 0.8],
            } : {
              y: [21.5, 18.5, 21.5],
              opacity: 0.6,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Pixel 2 (Deep Azure node) */}
          <motion.rect
            x="97"
            y="16.5"
            width="5.5"
            height="5.5"
            rx="1"
            fill="#3b82f6"
            animate={isHovered ? {
              y: [16.5, 26, 16.5],
              x: [97, 102, 97],
              rotate: [0, -180, -360],
              opacity: [1, 0.5, 1],
            } : {
              y: [16.5, 20.5, 16.5],
              opacity: 0.7,
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Pixel 3 (Satellite node) */}
          <motion.rect
            x="104.5"
            y="11.5"
            width="4.5"
            height="4.5"
            rx="0.5"
            fill="#1e1b4b"
            animate={isHovered ? {
              scale: [1, 1.8, 0.8, 1],
              opacity: [0.8, 1, 0.4, 0.8],
              y: [11.5, 7, 11.5]
            } : {
              scale: [1, 0.8, 1],
              opacity: 0.4,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Pixel 4 (Crystalline Core pixel) */}
          <motion.rect
            x="85.5"
            y="27"
            width="4"
            height="4"
            rx="0.8"
            fill="#00ffb7"
            animate={isHovered ? {
              y: [27, 34, 27],
              x: [85.5, 80, 85.5],
              opacity: [0.9, 0.3, 0.9],
            } : {
              y: [27, 25, 27],
              opacity: 0.5
            }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Pixel 5 (Stardust connector) */}
          <motion.rect
            x="92.5"
            y="27.5"
            width="4"
            height="4"
            rx="0.8"
            fill="#3b82f6"
            animate={{
              scale: isHovered ? [1, 1.6, 1] : [1, 1.1, 1],
              opacity: isHovered ? [0.6, 1, 0.6] : [0.4, 0.6, 0.4]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Pixel 6 (Trailing Laser node) */}
          <motion.rect
            x="98.5"
            y="24"
            width="3"
            height="3"
            rx="0.4"
            fill="#00f0ff"
            animate={{
              y: isHovered ? [24, 18, 24] : [24, 22, 24],
              opacity: isHovered ? [0.4, 1, 0.4] : [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Absolute Dynamic Laser Quantum Spark Particles (Hover-activated real-time dispersion) */}
          <AnimatePresence>
            {isHovered && (
              <>
                {/* Hyper-speed Left Photon ray */}
                <motion.circle
                  cx="24"
                  cy="16"
                  r="1.5"
                  fill="#00f0ff"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0.5, 2, 0], 
                    opacity: [1, 0.8, 0], 
                    x: [-10, -32], 
                    y: [-4, -20] 
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: "easeOut" }}
                />

                {/* Hyper-speed Right Photon ray */}
                <motion.circle
                  cx="92"
                  cy="20"
                  r="1.5"
                  fill="#10b981"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0.5, 2.5, 0], 
                    opacity: [1, 0.9, 0], 
                    x: [10, 36], 
                    y: [-6, 12] 
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.3, repeat: Infinity, ease: "easeOut", delay: 0.15 }}
                />

                {/* Expanding Gravitational Singularity Core Ring */}
                <motion.circle
                  cx="60"
                  cy="45"
                  r="2"
                  stroke="#ffffff"
                  strokeWidth="0.8"
                  fill="none"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ 
                    scale: [1, 4.5], 
                    opacity: [0.95, 0] 
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                />

                {/* Secondary expansion ring */}
                <motion.circle
                  cx="60"
                  cy="45"
                  r="2.5"
                  stroke="#00f0ff"
                  strokeWidth="0.4"
                  fill="none"
                  initial={{ scale: 0.3, opacity: 0 }}
                  animate={{ 
                    scale: [1, 6], 
                    opacity: [0.75, 0] 
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
                />
              </>
            )}
          </AnimatePresence>
        </g>
      </motion.svg>
    </motion.div>
  );
}
