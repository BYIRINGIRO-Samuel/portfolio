import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Stars, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

const SpectralGlobe = () => {
  const pointsRef = useRef<THREE.Points>(null!);
  
  // Create a dense cloud of points for the globe shape
  const count = 15000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Points distributed on a sphere surface
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      const r = 3; // radius
      pos[i * 3] = r * Math.cos(theta) * Math.sin(phi);
      pos[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.15;
    pointsRef.current.rotation.x = Math.sin(time * 0.05) * 0.1;
  });

  return (
    <group>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      
      {/* Outer Atmosphere Glow */}
      <mesh>
        <sphereGeometry args={[3.1, 64, 64]} />
        <meshBasicMaterial 
          color="#1e40af" 
          transparent 
          opacity={0.05} 
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
    }, 6000); // 6s duration to appreciate the globe

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "brightness(2) blur(30px)" }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[100] bg-black overflow-hidden flex items-center justify-center"
        >
          {/* TV Overlay Effects */}
          <div className="absolute inset-0 z-50 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,1)]" />
          <div className="absolute inset-0 z-40 opacity-[0.03] pointer-events-none bg-[url('https://media.giphy.com/media/oEI9uWUicRlsc/giphy.gif')] bg-repeat" />
          
          <div className="relative w-full h-full">
            <Canvas dpr={[1, 2]}>
              <PerspectiveCamera makeDefault position={[0, 0, 10]} />
              <color attach="background" args={["#000000"]} />
              
              <ambientLight intensity={1} />
              
              <SpectralGlobe />
              
              <Stars 
                radius={100} 
                depth={50} 
                count={2000} 
                factor={4} 
                saturation={0} 
                fade 
                speed={0.5} 
              />
              
              {/* Cinematic Horizontal Scanline */}
              <group position={[0, 0, 0]}>
                <mesh position={[0, 0, -2]}>
                  <planeGeometry args={[20, 0.01]} />
                  <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
                </mesh>
              </group>
            </Canvas>
          </div>

          {/* Minimal Scan Line */}
          <motion.div 
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-px bg-white/20 blur-[1px] z-[40]"
          />

          {/* Bottom Bloom */}
          <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-blue-900/10 to-transparent z-10 pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorldLoader;
