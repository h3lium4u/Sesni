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
        background: 'transparent',
        overflow: 'hidden',
        opacity: 1
      }}
    >
      <iframe
        src="https://my.spline.design/neonlightorganictunnelloop-6txeXvnCSqLKGtiaftM4SdYu/"
        title="Spline Background"
        allow="autoplay; fullscreen"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          background: 'transparent',
          display: 'block'
        }}
      />
    </div>
  );
};

export default SplineBackground;
