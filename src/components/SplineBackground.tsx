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
      className="fixed inset-0 pointer-events-none hidden md:block"
      style={{ 
        zIndex: -1,
        backgroundImage: 'url(https://freefiremobile-a.akamaihd.net/common/web_event/official2.ff.garena.all/img/20228/63b4b6a53c2aaf2aee801591afadeb88.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 1
      }}
    />
  );
};

export default SplineBackground;
