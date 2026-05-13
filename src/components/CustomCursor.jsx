import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Use requestAnimationFrame for smoother updates in production
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
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border-2 border-primary shadow-[0_0_25px_rgba(46,91,255,0.6)]"
        style={{
          left: 0,
          top: 0,
          translateX: mousePos.x - 24,
          translateY: mousePos.y - 24,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.5 }}
      />
      
      {/* Precise Center Core */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_15px_rgba(46,91,255,1)]"
        style={{
          left: 0,
          top: 0,
          translateX: mousePos.x - 5,
          translateY: mousePos.y - 5,
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
