import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[999999] overflow-visible">
      {/* Outer Glow Ring - Scaled down for elegance */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary shadow-[0_0_15px_rgba(46,91,255,0.4)]"
        style={{
          left: 0,
          top: 0,
          translateX: mousePos.x - 16,
          translateY: mousePos.y - 16,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.5 }}
      />
      
      {/* Precise Center Core - Scaled down */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(46,91,255,0.8)]"
        style={{
          left: 0,
          top: 0,
          translateX: mousePos.x - 3,
          translateY: mousePos.y - 3,
        }}
        animate={{
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400, mass: 0.2 }}
      />
    </div>
  );
};

export default CustomCursor;
