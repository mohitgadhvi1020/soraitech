'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useScrollVisibility from '@/hooks/useScrollVisibility';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  delay?: number;
  duration?: number;
  distance?: number;
  preVisible?: boolean; // Make element visible before it comes into view
  triggerOnce?: boolean;
  threshold?: number;
  rootMargin?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 20,
  preVisible = false,
  triggerOnce = true,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px', // Trigger slightly before element is visible
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible } = useScrollVisibility(ref, {
    threshold,
    rootMargin,
    preVisible,
    triggerOnce,
  });

  const getInitialState = () => {
    if (preVisible) return { opacity: 1, x: 0, y: 0, scale: 1 };
    
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance };
      case 'down':
        return { opacity: 0, y: -distance };
      case 'left':
        return { opacity: 0, x: distance };
      case 'right':
        return { opacity: 0, x: -distance };
      case 'scale':
        return { opacity: 0, scale: 0.8 };
      case 'fade':
        return { opacity: 0 };
      default:
        return { opacity: 0, y: distance };
    }
  };

  const getAnimateState = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      case 'scale':
        return { opacity: 1, scale: 1 };
      case 'fade':
        return { opacity: 1 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialState()}
      animate={isVisible ? getAnimateState() : getInitialState()}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal; 