import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Points, PointMaterial, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

const SpectralGlobe = () => {
  const pointsRef = useRef<THREE.Points>(null!);
  
  // Use a high-quality world map texture to project particles
  // This is a common technique: sample a map image and only place dots where pixels are bright (continents)
  const count = 30000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const radius = 2.2; // Reduced size as requested
    
    // We'll use a mathematical projection of the continents if a texture isn't ready,
    // but for the most "innovative" look, we'll simulate the landmass density.
    for (let i = 0; i < count; i++) {
        const phi = Math.acos(-1 + (2 * i) / count);
        const theta = Math.sqrt(count * Math.PI) * phi;
        
        // Add "noise" that clusters points into land-like shapes
        // Simulating the world map layout roughly
        const lat = (phi * 180) / Math.PI - 90;
        const lon = (theta * 180) / Math.PI % 360 - 180;
        
        // This is a placeholder for a real map sampling logic
        // It creates a "particle clump" effect that mimics continents better than a grid
        const isLand = Math.sin(phi * 5) * Math.cos(theta * 3) > -0.2;
        
        const r = isLand ? radius : radius * 0.98; // Contrast between land and water layers
        pos[i * 3] = r * Math.cos(theta) * Math.sin(phi);
        pos[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
        pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.12;
    pointsRef.current.rotation.x = 0.1; // Slight tilt for better view
  });

  return (
    <group>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff" // Clean white particles for B&W theme
          size={0.008}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.8}
        />
      </Points>
      
      {/* Glow highlight for the "TV" look */}
      <mesh>
        <sphereGeometry args={[2.22, 64, 64]} />
        <meshBasicMaterial 
          color="#ffffff" 
          transparent 
          opacity={0.02} 
          side={THREE.BackSide}
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
    }, 5500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9, filter: "brightness(2) blur(30px)" }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[100] bg-black overflow-hidden flex items-center justify-center"
        >
          <div className="absolute inset-0 z-50 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,1)]" />
          
          <div className="relative w-full h-full">
            <Canvas dpr={[1, 2]}>
              <PerspectiveCamera makeDefault position={[0, 0, 10]} />
              <color attach="background" args={["#000000"]} />
              <ambientLight intensity={1} />
              <SpectralGlobe />
            </Canvas>
          </div>

          {/* Precision TV Tuning Marks (Professional Highlight) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
             <div className="absolute w-64 h-[0.5px] bg-white" />
             <div className="absolute h-64 w-[0.5px] bg-white" />
          </div>

          {/* Minimal Scanning Ray */}
          <motion.div 
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-px bg-white/30 z-[40]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorldLoader;
