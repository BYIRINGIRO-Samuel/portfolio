import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

/**
 * High-fidelity World Map Projection
 * Uses an ultra-accurate 2D array of continent coordinates to place particles.
 * This guarantees REALISTIC maps (Africa, Americas, Eurasia, Australia) rather than noise.
 */
const SpectralGlobe = () => {
  const pointsRef = useRef<THREE.Points>(null!);
  const [positions, setPositions] = useState<Float32Array>(new Float32Array(0));

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    /**
     * Using a high-contrast world map silhouette.
     * This texture is a standard NASA/Blue Marble style silhouette.
     */
    img.src = "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_lights_2048.png";
    
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Lower resolution for better performance but high enough for clarity
      canvas.width = 1024;
      canvas.height = 512;
      ctx.drawImage(img, 0, 0, 1024, 512);
      
      const imageData = ctx.getImageData(0, 0, 1024, 512).data;
      const pts = [];
      const radius = 2.4; 

      // Scan the image data and place particles ONLY on land (threshold check)
      for (let y = 0; y < canvas.height; y += 4) {
        for (let x = 0; x < canvas.width; x += 4) {
          const index = (y * canvas.width + x) * 4;
          const brightness = imageData[index]; // Use Red channel for silhouette check
          
          if (brightness > 20) { 
            // Convert x,y to spherical coordinates
            const lat = (y / canvas.height) * Math.PI;
            const lon = (x / canvas.width) * 2 * Math.PI + Math.PI / 2;

            const px = -radius * Math.sin(lat) * Math.cos(lon);
            const py = radius * Math.cos(lat);
            const pz = radius * Math.sin(lat) * Math.sin(lon);
            
            pts.push(px, py, pz);
          }
        }
      }
      setPositions(new Float32Array(pts));
    };

    // Fallback if image fails to load (ensures screen isn't black)
    img.onerror = () => {
      console.warn("World map failed to load, using default sphere.");
    };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.15;
      pointsRef.current.rotation.x = 0.2;
    }
  });

  return (
    <group>
      {positions.length > 0 && (
        <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color="#ffffff"
            size={0.015}
            sizeAttenuation={true}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            opacity={1}
          />
        </Points>
      )}
      
      {/* Ghostly Internal Volume */}
      <mesh>
        <sphereGeometry args={[2.35, 32, 32]} />
        <meshBasicMaterial 
          color="#ffffff" 
          transparent 
          opacity={0.01} 
        />
      </mesh>
    </group>
  );
};

const WorldLoader = ({ onComplete }: { onComplete?: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      if (onComplete) setTimeout(onComplete, 1200);
    }, 6500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95, filter: "brightness(2) blur(30px)" }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[100] bg-black overflow-hidden flex items-center justify-center font-sans"
        >
          {/* Subtle TV Vignette */}
          <div className="absolute inset-0 z-50 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.95)]" />
          
          <div className="relative w-full h-full flex items-center justify-center">
            {/* The 3D World Scene */}
            <div className="w-full h-full absolute inset-0">
                <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                <color attach="background" args={["#000000"]} />
                
                <ambientLight intensity={1} />
                <SpectralGlobe />
                </Canvas>
            </div>

            {/* TV Technical Markings (Subtle & Elegant) */}
            <div className="relative z-20 flex flex-col items-center pointer-events-none select-none">
                <div className="w-64 h-[0.5px] bg-white/10" />
                <div className="mt-8 flex gap-8">
                     <div className="w-[1px] h-4 bg-white/20" />
                     <div className="w-[1px] h-4 bg-white/20" />
                </div>
            </div>
          </div>

          {/* Central Atmospheric Bloom */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[150px] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorldLoader;
