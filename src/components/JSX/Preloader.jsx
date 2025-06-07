import { useEffect, useRef, useState } from 'react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const leafRef = useRef(null);

  useEffect(() => {
    // Simulate loading with variable speed
    const interval = setInterval(() => {
      setProgress(prev => {
        const increment = 2 + Math.random() * 8; // Smoother progression
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 400); // Delay before fade-out
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, 120);

    // Subtle floating animation for the leaf
    const leaf = leafRef.current;
    if (leaf) {
      const animate = () => {
        const time = performance.now() * 0.002;
        leaf.style.transform = `translateY(${Math.sin(time) * 3}px) rotate(${Math.sin(time * 0.7) * 2}deg)`;
        requestAnimationFrame(animate);
      };
      animate();
    }

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white backdrop-blur-sm transition-opacity duration-500">
      {/* Animated Leaf Symbol (More Organic Shape) */}
      <div 
        ref={leafRef}
        className="relative mb-8 transition-transform duration-300 ease-in-out"
      >
        <svg 
          width="64" 
          height="64" 
          viewBox="0 0 64 64" 
          className="text-emerald-500"
          aria-hidden="true"
        >
          <path 
            d="M32 12C20 8 8 16 8 32s12 28 24 24c12-4 24-12 24-28S44 8 32 12z" 
            fill="currentColor" 
            className="opacity-90"
          />
          <path 
            d="M32 12c4 0 8 4 8 8s-4 8-8 8-8-4-8-8 4-8 8-8z" 
            fill="currentColor" 
            className="opacity-70"
          />
        </svg>
      </div>

      {/* App Name with Subtle Tracking */}
      <h1 className="text-3xl font-light text-gray-800 tracking-wider mb-8 animate-fade-in opacity-0">
        AROGYAM
      </h1>

      {/* Modern Thin Progress Bar */}
      <div className="w-64 h-px bg-gray-100 rounded-full overflow-hidden mb-1">
        <div 
          className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 transition-all duration-300 ease-out" 
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage with Smooth Counting */}
      <p className="text-xs text-gray-400 font-mono mt-2">
        {Math.round(progress)}%
      </p>

      {/* Micro-interaction: Blinking dot when complete */}
      {progress >= 100 && (
        <div className="absolute bottom-8 text-emerald-500 animate-pulse">
          ●
        </div>
      )}

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.2s;
        }
        .animate-pulse {
          animation: pulse 0.5 ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;