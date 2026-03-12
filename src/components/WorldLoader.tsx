import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, PerspectiveCamera, Environment, Stars } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

const RotatingRings = () => {
  const ring1Ref = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);
  const ring3Ref = useRef<THREE.Mesh>(null!);
  const ring4Ref = useRef<THREE.Mesh>(null!);
  const ring5Ref = useRef<THREE.Mesh>(null!);
  const staffsRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    ring1Ref.current.rotation.x = time * 0.5;
    ring1Ref.current.rotation.y = time * 0.2;
    
    ring2Ref.current.rotation.y = time * 0.4;
    ring2Ref.current.rotation.z = time * 0.3;
    
    ring3Ref.current.rotation.x = time * 0.3;
    ring3Ref.current.rotation.z = time * 0.5;

    ring4Ref.current.rotation.y = -time * 0.6;
    ring4Ref.current.rotation.x = time * 0.4;

    ring5Ref.current.rotation.z = -time * 0.4;
    ring5Ref.current.rotation.y = time * 0.5;

    if (staffsRef.current) {
      staffsRef.current.rotation.y = time * 0.8;
    }
  });

  return (
    <>
      <Torus ref={ring1Ref} args={[4.2, 0.015, 16, 120]}>
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={4} />
      </Torus>
      <Torus ref={ring2Ref} args={[3.8, 0.015, 16, 120]}>
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={4} />
      </Torus>
      <Torus ref={ring3Ref} args={[3.4, 0.015, 16, 120]}>
        <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={4} />
      </Torus>
      <Torus ref={ring4Ref} args={[3.0, 0.012, 16, 120]}>
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={4} />
      </Torus>
      <Torus ref={ring5Ref} args={[2.6, 0.012, 16, 120]}>
        <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={4} />
      </Torus>

      <group ref={staffsRef}>
        {[...Array(8)].map((_, i) => (
          <mesh key={i} position={[Math.cos(i * Math.PI * 0.25) * 5, 0, Math.sin(i * Math.PI * 0.25) * 5]}>
            <cylinderGeometry args={[0.02, 0.02, 8, 8]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} transparent opacity={0.3} />
          </mesh>
        ))}
      </group>
      
      <Float speed={4} rotationIntensity={2} floatIntensity={2}>
        <Sphere args={[1.6, 64, 64]}>
          <MeshDistortMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={1.5}
            speed={6}
            distort={0.6}
            radius={1}
            roughness={0}
            metalness={1}
          />
        </Sphere>
      </Float>
    </>
  );
};

const WorldLoader = ({ onComplete }: { onComplete?: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            if (onComplete) setTimeout(onComplete, 1000);
          }, 1000);
          return 100;
        }
        return prev + Math.random() * 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030712]/80 backdrop-blur-md"
        >
          <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-black/40 rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col items-center justify-center">
            {/* 3D Canvas Container */}
            <div className="absolute inset-0 z-0">
              <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#ec4899" />
                <RotatingRings />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
              </Canvas>
            </div>

            {/* UI Overlay */}
            <div className="relative z-10 mt-64 text-center">
              <motion.h2 
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-white text-xl font-bold tracking-[0.2em] uppercase"
              >
                Initializing
              </motion.h2>
              <div className="mt-4 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-gradient-to-right from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                />
              </div>
              <p className="mt-2 text-white/40 font-mono text-sm">
                {Math.floor(progress)}%
              </p>
            </div>

            {/* Spectral Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorldLoader;
