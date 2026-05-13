import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is touch-based
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // On mobile/touch devices, we return null to let the system handle the cursor
  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999]">
      {/* High-visibility Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border-2 border-primary/60 shadow-[0_0_20px_rgba(46,91,255,0.4)]"
        animate={{
          x: mousePos.x - 24,
          y: mousePos.y - 24,
          scale: isHovering ? 1.4 : 1,
          opacity: 1
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
      />
      
      {/* Precise Center Core */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(46,91,255,0.8)]"
        animate={{
          x: mousePos.x - 5,
          y: mousePos.y - 5,
          scale: isHovering ? 0 : 1
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 400, mass: 0.2 }}
      />
    </div>
  );
};

export default CustomCursor;
