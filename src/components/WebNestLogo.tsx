import React from 'react';

interface WebNestLogoProps {
  className?: string;
  isDark?: boolean;
}

export default function WebNestLogo({ className = 'w-10 h-10', isDark = false }: WebNestLogoProps) {
  // Brand Colors:
  // Navy / Deep Blue: #0c2340 or #102a43
  // Bright Green: #39b546 (from original logo image)
  const navyColor = isDark ? '#ffffff' : '#0c2340';
  const greenColor = '#39b546';

  return (
    <svg
      className={className}
      viewBox="0 0 110 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 1. First leg of the W (Navy blue diagonal, tilted right) */}
      <polygon
        points="14,18 29,18 43,68 28,68"
        fill={navyColor}
      />

      {/* 2. Green segments of the W (connected V shape) */}
      {/* Leg 2: Up-right, meets middle peak at y=35 */}
      <polygon
        points="28,68 40,35 55,35 43,68"
        fill={greenColor}
      />
      {/* Leg 3: Down-right, meets bottom of the V at y=68 */}
      <polygon
        points="40,35 52,68 67,68 55,35"
        fill={greenColor}
      />
      {/* Leg 4: Up-right, goes to top peak at y=18 */}
      <polygon
        points="52,68 71,18 86,18 67,68"
        fill={greenColor}
      />

      {/* 3. Floating Digital Pixels dispersed from top-right tip (representing digital solutions / digital agency) */}
      <rect x="88" y="14" width="4.5" height="4.5" fill={greenColor} opacity="1.0" />
      <rect x="94" y="9" width="6" height="6" fill={greenColor} opacity="0.9" />
      <rect x="101" y="4" width="4.5" height="4.5" fill={greenColor} opacity="0.7" />
      <rect x="83" y="7" width="3" height="3" fill={greenColor} opacity="0.8" />
      <rect x="90" y="4" width="4" height="4" fill={greenColor} opacity="0.6" />
      <rect x="96" y="17" width="5" height="5" fill={greenColor} opacity="0.85" />
      <rect x="103" y="12" width="3" height="3" fill={greenColor} opacity="0.5" />
    </svg>
  );
}
