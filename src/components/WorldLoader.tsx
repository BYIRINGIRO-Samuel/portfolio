import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

const SpectralGlobe = () => {
  const pointsRef = useRef<THREE.Points>(null!);
  
  // High density point cloud for the sphere
  const count = 25000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      const r = 3;
      pos[i * 3] = r * Math.cos(theta) * Math.sin(phi);
      pos[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.2;
    pointsRef.current.rotation.x = time * 0.05;
  });

  return (
    <group>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#60a5fa"
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.6}
        />
      </Points>
      
      {/* Outer Atmosphere Glow - Subtle Blue Pulse */}
      <mesh>
        <sphereGeometry args={[3.05, 64, 64]} />
        <meshBasicMaterial 
          color="#3b82f6" 
          transparent 
          opacity={0.03} 
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
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "brightness(1.5) blur(40px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-black overflow-hidden flex items-center justify-center"
        >
          {/* REMOVED ALL GIF/TEXT OVERLAYS - PURE CLEAN BLACK BACKGROUND */}
          <div className="absolute inset-0 z-50 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.95)]" />
          
          <div className="relative w-full h-full">
            <Canvas dpr={[1, 2]}>
              <PerspectiveCamera makeDefault position={[0, 0, 10]} />
              <color attach="background" args={["#000000"]} />
              
              <ambientLight intensity={1} />
              <SpectralGlobe />
              
              {/* CLEAN SCANLINE EFFECT */}
              <group position={[0, 0, 0]}>
                <mesh position={[0, 0, -1]}>
                  <planeGeometry args={[30, 0.005]} />
                  <meshBasicMaterial color="#ffffff" transparent opacity={0.05} />
                </mesh>
              </group>
            </Canvas>
          </div>

          {/* SINGLE WHITE SCAN LINE */}
          <motion.div 
            animate={{ top: ["-5%", "105%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-white/10 blur-[1px] z-[40]"
          />

          {/* SUBTLE GLOW DEPTH */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/[0.02] rounded-full blur-[120px] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorldLoader;
