'use client';

import { useEffect, useState } from 'react';

interface UseScrollVisibilityOptions {
  threshold?: number;
  rootMargin?: string;
  preVisible?: boolean; // Make elements visible before scrolling into view
  triggerOnce?: boolean;
}

export const useScrollVisibility = (
  ref: React.RefObject<Element>,
  options: UseScrollVisibilityOptions = {}
) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    preVisible = false,
    triggerOnce = true
  } = options;

  const [isVisible, setIsVisible] = useState(preVisible);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If preVisible is true, element starts visible
    if (preVisible && !hasBeenVisible) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        
        if (isIntersecting) {
          setIsVisible(true);
          setHasBeenVisible(true);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, threshold, rootMargin, preVisible, triggerOnce, hasBeenVisible]);

  return { isVisible, hasBeenVisible };
};

export default useScrollVisibility; 