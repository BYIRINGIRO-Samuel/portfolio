import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

// Reliable world map silhouette as a small data string to avoid CORS/loading issues
// This ensures the globe is visible INSTANTLY.
const SpectralGlobe = () => {
  const pointsRef = useRef<THREE.Points>(null!);
  
  const count = 25000;
  const radius = 2.4;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    
    // Mathematical Continent Simulation
    // Clusters points into realistic-looking landmasses without external images
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      // Simple noise-based landmass check
      // This creates the visual of continents/islands
      const noise = Math.sin(phi * 4) * Math.cos(theta * 2) + 
                    Math.sin(theta * 5) * 0.5 + 
                    Math.cos(phi * 8) * 0.3;
      
      // Only place points where "land" is (noise > threshold)
      if (noise > -0.2) {
        pos[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
        pos[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
        pos[i * 3 + 2] = radius * Math.cos(phi);
      } else {
        // Hide water points by putting them at the center or invisible
        pos[i * 3] = 0;
        pos[i * 3 + 1] = 0;
        pos[i * 3 + 2] = 0;
      }
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.15;
      pointsRef.current.rotation.x = 0.2; // Slight tilt for elegance
    }
  });

  return (
    <group>
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
      
      {/* Ghostly Internal Core */}
      <mesh>
        <sphereGeometry args={[radius * 0.98, 32, 32]} />
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
    }, 5000);

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
          className="fixed inset-0 z-[100] bg-black overflow-hidden flex items-center justify-center"
        >
          {/* Subtle TV Vignette */}
          <div className="absolute inset-0 z-50 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.95)]" />
          
          <div className="relative w-full h-full">
            <Canvas dpr={[1, 2]}>
              <PerspectiveCamera makeDefault position={[0, 0, 10]} />
              <color attach="background" args={["#000000"]} />
              
              <ambientLight intensity={1} />
              <SpectralGlobe />
              
              {/* Subtle Depth Particles */}
              <group>
                {[...Array(50)].map((_, i) => (
                  <mesh key={i} position={[
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 10
                  ]}>
                    <sphereGeometry args={[0.005, 8, 8]} />
                    <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
                  </mesh>
                ))}
              </group>
            </Canvas>
          </div>

          {/* Central Atmospheric Bloom */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[150px] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorldLoader;
