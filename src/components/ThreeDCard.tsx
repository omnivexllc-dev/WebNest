import { useState, useRef, ReactNode, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface ThreeDCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number; // sensitivity of spatial tilt
}

export default function ThreeDCard({ children, className = '', intensity = 12 }: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  // Framer Motion values for normalized tracking (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for fluid 3D tilt with inertia
  const springConfig = { damping: 22, stiffness: 180, mass: 0.6 };
  const rotateXSpring = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), springConfig);
  const rotateYSpring = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    // Normalized coordinate offset relative to center coordinates
    const normalizedX = (e.clientX - rect.left) / width - 0.5;
    const normalizedY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(normalizedX);
    y.set(normalizedY);
    
    // Refined specular flare positions
    const glPercentX = ((e.clientX - rect.left) / width) * 100;
    const glPercentY = ((e.clientY - rect.top) / height) * 100;
    setGlarePos({ x: glPercentX, y: glPercentY });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative preserve-3d cursor-pointer ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
      }}
    >
      {/* Real-time Dynamic Specular Glare Layer */}
      <div 
        className="absolute inset-0 pointer-events-none rounded-[inherit] z-20 mix-blend-overlay transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.35 : 0,
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 80%)`,
        }}
      />
      
      {/* Real 3D depth border highlight */}
      <div 
        className="absolute inset-0 pointer-events-none rounded-[inherit] border border-blue-500/10 z-10 transition-all duration-300"
        style={{
          boxShadow: isHovered ? '0 25px 50px -12px rgba(15, 23, 42, 0.25)' : 'none',
        }}
      />
      
      <div className="relative h-full w-full preserve-3d">
        {children}
      </div>
    </motion.div>
  );
}
