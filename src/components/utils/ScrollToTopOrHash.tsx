import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTopOrHash: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const elementId = hash.replace('#', '');

      const scrollToElement = () => {
        const element = document.getElementById(elementId);
        if (element) {
          const headerOffset = 90;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          return true;
        }
        return false;
      };

      // Try scrolling immediately
      if (!scrollToElement()) {
        // If not found yet (e.g. page transit), retry shortly
        const timer = setTimeout(scrollToElement, 100);
        return () => clearTimeout(timer);
      }
    } else {
      // Standard page navigation: scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
};
