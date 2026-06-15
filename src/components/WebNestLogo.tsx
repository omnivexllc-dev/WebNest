import React from 'react';

interface WebNestLogoProps {
  className?: string;
  isDark?: boolean;
}

export default function WebNestLogo({ className = 'w-10 h-10', isDark = false }: WebNestLogoProps) {
  // Brand Colors matching the logo update:
  // - Left ribbon: Bright cyan & sky blue gradient (#00c3ff to #005aff)
  // - Middle shadow overlap: Deep rich indigo-navy (#001b54)
  // - Right ribbon: Sophisticated deep royal & navy gradient (#0040c0 to #031430)
  // - Dispersed pixels: Multi-shade blues

  const darkAccent = isDark ? '#ffffff' : '#04152d'; // Deepest navy / black for wordmark/shadows if needed

  return (
    <svg
      className={className}
      viewBox="0 0 120 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="webnest-svg-logo"
    >
      <defs>
        {/* Leftmost Ribbon Gradient: Glowing active sky blue to neon blue */}
        <linearGradient id="logoLeftGradient" x1="15%" y1="15%" x2="85%" y2="85%">
          <stop offset="0%" stopColor="#00c3ff" />
          <stop offset="100%" stopColor="#005aff" />
        </linearGradient>

        {/* Shadow overlap to give the true 3D fold effect */}
        <linearGradient id="logoShadowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00183f" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00091c" stopOpacity="0" />
        </linearGradient>

        {/* Middle Fold & Center ribbon: Smart royal blue gradient */}
        <linearGradient id="logoMiddleGradient" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#004bc8" />
          <stop offset="100%" stopColor="#001b54" />
        </linearGradient>

        {/* Right soaring ribbon: Professional deep navy */}
        <linearGradient id="logoRightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#063eb0" />
          <stop offset="60%" stopColor="#001d54" />
          <stop offset="100%" stopColor="#020e26" />
        </linearGradient>
      </defs>

      {/* --- RIBBON LAYER 1: Leftmost rounded glowing ribbon (Sky Blue) --- */}
      <path
        d="M 26,22 
           C 18.5,14 30.5,8 37,16 
           L 54,44 
           C 57.5,50 51.5,56.5 45.5,53.5 
           L 26,22 Z"
        fill="url(#logoLeftGradient)"
      />

      {/* --- RIBBON LAYER 2: Underlap shadow for the folding corner --- */}
      <path
        d="M 45,54 
           C 51,46 54.5,41 57,35 
           L 50,42 
           Z"
        fill="url(#logoShadowGradient)"
      />

      {/* --- RIBBON LAYER 3: Middle fold/V & Right soaring ribbon (Deep Royal Blue) --- */}
      <path
        d="M 44.5,53.5 
           C 49.5,45.5 54.5,33.5 58.5,23.5 
           C 62.5,13.5 73.5,16.5 76,23.5 
           L 89.5,51.5 
           C 93,58.5 83.5,65 78.5,57.5 
           L 66,35.5 
           C 60,25 51.5,42.5 44.5,53.5 Z"
        fill="url(#logoMiddleGradient)"
      />

      {/* --- RIBBON LAYER 4: Overlay peak & Rightmost slope gradient accent --- */}
      <path
        d="M 64.5,33.5 
           L 75,54.5 
           C 78,60.5 87.5,54.5 86.5,48.5 
           L 76,23.5 
           C 74,18.5 68.5,25.5 64.5,33.5 Z"
        fill="url(#logoRightGradient)"
      />

      {/* --- DIGITAL PIXEL FLIGHT (Cascading square blocks from top right ribbon tip) --- */}
      {/* Flight Path Row 1 */}
      <rect x="91" y="21.5" width="4.5" height="4.5" fill="#00c3ff" />
      <rect x="97" y="16.5" width="5.5" height="5.5" fill="#005aff" />
      <rect x="104.5" y="11.5" width="4.5" height="4.5" fill="#001b54" />

      {/* Flight Path Row 2 */}
      <rect x="85.5" y="27" width="3.5" height="3.5" fill="#00c3ff" opacity="0.85" />
      <rect x="92.5" y="27.5" width="4" height="4" fill="#004bc8" />

      {/* Flight Path Row 3 */}
      <rect x="98.5" y="24" width="3" height="3" fill="#00c3ff" opacity="0.7" />
      <rect x="103.5" y="19" width="3.5" height="3.5" fill="#004bc8" opacity="0.9" />
    </svg>
  );
}
