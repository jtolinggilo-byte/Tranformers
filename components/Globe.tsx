
import React, { useEffect, useRef } from 'react';
import createGlobe from 'https://cdn.skypack.dev/cobe';

const Globe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;

    // Indonesian markers coordinates [lat, lon]
    const locations: [number, number][] = [
      [-6.2088, 106.8456], // Java (Jakarta)
      [0.0, 114.0],        // Kalimantan (Central)
      [-2.0, 121.0],       // Sulawesi (Central)
      [-3.5, 138.0],       // Papua (Central)
    ];

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1000 * 2,
      height: 1000 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 12000,
      mapBrightness: 6,
      baseColor: [0.05, 0.05, 0.05],
      markerColor: [0.96, 0.62, 0.04], // Amber/Yellow
      glowColor: [0.2, 0.1, 0.02],
      markers: locations.map(loc => ({ location: loc, size: 0.03 })),
      onRender: (state: any) => {
        state.phi = phi;
        phi += 0.003;
        
        // Flashing/Pulsing animation logic
        // We calculate a size that oscillates between 0.02 and 0.06
        const pulse = 0.03 + Math.abs(Math.sin(Date.now() / 400)) * 0.04;
        
        state.markers = locations.map(loc => ({
          location: loc,
          size: pulse
        }));
      },
    });

    return () => globe.destroy();
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-60 mix-blend-plus-lighter pointer-events-none">
      <canvas
        ref={canvasRef}
        style={{ width: '1000px', height: '1000px', maxWidth: '100vw', maxHeight: '100vw' }}
      />
    </div>
  );
};

export default Globe;
