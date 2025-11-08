import { useEffect, useRef } from 'react';

// Declare spline-viewer as a custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        url?: string;
      }, HTMLElement>;
    }
  }
}

const SplineBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // No script needed for my.spline.design embeds; using iframe instead
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ 
        zIndex: -1,
        backgroundImage: 'url(/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 1
      }}
    />
  );
};

export default SplineBackground;
