import { useState, useEffect, useRef, Suspense } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, ContactShadows, PresentationControls, MeshTransmissionMaterial, Sparkles, Text } from '@react-three/drei';

const channels = [
  {
    name: 'Amara K.',
    company: 'FinTech Africa',
    role: 'Lead Architect',
    quote: 'Samuel engineer’s with profound intent. He fundamentally restructured our frontend architecture, delivering a system that is incredibly scalable, robust, and visually flawless.',
    img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80',
  },
  {
    name: 'David O.',
    company: 'EduBridge Networks',
    role: 'CEO',
    quote: 'An absolute master of modern web technologies. Samuel built our enterprise platform with uncompromising quality. Our latency decreased massively and deployment was seamless.',
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=80',
  },
  {
    name: 'Zara M.',
    company: 'Luminary Corp',
    role: 'Director of Product',
    quote: 'Samuel operates at the highest level of technical craftsmanship. He translated complex requirements into an undeniably premium, highly responsive user interface.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80',
  },
  {
    name: 'Marcus T.',
    company: 'Sprout Ventures',
    role: 'Head of Engineering',
    quote: 'Finding dev talent like Samuel is rare. He automated our core systems and shipped a polished commercial product months ahead of schedule. An elite engineering asset.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80',
  },
  {
    name: 'Priya J.',
    company: 'GreenField Enterprise',
    role: 'VP of Technology',
    quote: 'His code is elegant, modular, and exceptionally performant. Our application serves thousands of concurrent users flawlessly. A brilliant technical partner.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1200&q=80',
  }
];

/* Premium Cinematic Countdown Overlay */
const CountdownOverlay = () => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev > 1 ? prev - 1 : prev));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black overflow-hidden select-none">
       {/* Ambient Static Glow */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />

       {/* Precision Crosshair Lines */}
       <div className="absolute w-full h-[1px] bg-white/10 top-1/2 -translate-y-1/2" />
       <div className="absolute h-full w-[1px] bg-white/10 left-1/2 -translate-x-1/2" />
       
       {/* Animated Sweeping Radar Ring */}
       <motion.div 
         initial={{ scale: 0.8, opacity: 0 }}
         animate={{ scale: [0.8, 1.5], opacity: [0.4, 0] }}
         transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
         className="absolute w-64 h-64 border-[0.5px] border-white/30 rounded-full"
       />

       {/* Circular Progress Frame */}
       <svg className="absolute w-48 h-48 md:w-56 md:h-56 -rotate-90">
         <motion.circle
           cx="50%"
           cy="50%"
           r="45%"
           stroke="rgba(255,255,255,0.1)"
           strokeWidth="1"
           fill="none"
         />
         <motion.circle
           cx="50%"
           cy="50%"
           r="45%"
           stroke="white"
           strokeWidth="2"
           fill="none"
           strokeDasharray="100 100"
           initial={{ strokeDashoffset: 100 }}
           animate={{ strokeDashoffset: 0 }}
           transition={{ duration: 3.2, ease: "linear" }}
         />
       </svg>

       {/* Main Countdown Logic Display */}
       <AnimatePresence mode="wait">
          <motion.div
            key={count}
            initial={{ scale: 0.5, opacity: 0, filter: 'blur(10px)' }}
            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            exit={{ scale: 2, opacity: 0, filter: 'blur(15px)' }}
            transition={{ duration: 0.4, ease: "backOut" }}
            className="relative z-10 flex flex-col items-center"
          >
             <span className="text-white font-black text-8xl md:text-9xl tracking-tighter drop-shadow-[0_0_40px_rgba(255,255,255,0.3)] italic uppercase">
               {count}
             </span>
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-[10px] text-white/40 font-mono tracking-[0.5em] mt-4 uppercase drop-shadow-sm font-black"
             >
               Linking...
             </motion.div>
          </motion.div>
       </AnimatePresence>

       {/* Professional Project Callouts */}
       <div className="absolute top-8 left-8 flex flex-col items-start gap-1">
          <div className="w-8 h-[1.5px] bg-blue-500 shadow-[0_0_10px_blue]" />
          <span className="text-[7px] text-white font-semibold tracking-[0.3em] uppercase">SYSTEM: OPTIMIZED</span>
          <span className="text-[6px] text-white/40 font-mono uppercase">Initializing Assets...</span>
       </div>

       <div className="absolute bottom-8 right-8 flex flex-col items-end gap-1">
          <div className="flex items-center gap-2">
            <span className="text-[8px] text-white font-semibold tracking-[0.2em] uppercase">Ready to Showcase</span>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          </div>
          <div className="w-24 h-[1px] bg-white/10" />
       </div>
       
       {/* Corner Tick Marks */}
       <div className="absolute inset-6 border border-white/5 pointer-events-none" />
    </div>
  );
};

/* Ultra-Premium Glass & Refraction Scene */
const PremiumGlassScene = () => {
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 10]} intensity={2} />
      <spotLight position={[-5, 5, 5]} angle={0.2} penumbra={1} intensity={3} color="#ffffff" />
      <spotLight position={[5, -5, -5]} angle={0.2} penumbra={1} intensity={2} color="#blue-400" />

      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
      >
        <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
          <group position={[0, -0.2, 0]}>
            {/* The Glass Obelisk / Knot */}
            <mesh scale={1.2} castShadow>
               <torusKnotGeometry args={[1, 0.4, 256, 64]} />
               <MeshTransmissionMaterial 
                  backside
                  samples={4}
                  thickness={1.5}
                  chromaticAberration={0.6}
                  anisotropy={0.3}
                  distortion={0.5}
                  distortionScale={0.5}
                  temporalDistortion={0.1}
                  iridescence={1}
                  iridescenceIOR={1}
                  iridescenceThicknessRange={[0, 1400]}
                  color="#ffffff"
               />
            </mesh>
            
            {/* Inner Core */}
            <mesh scale={0.8}>
               <octahedronGeometry args={[1, 0]} />
               <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} wireframe opacity={0.2} transparent />
            </mesh>

            {/* Orbiting Glass/Dust Shards */}
            <Sparkles count={150} scale={6} size={2} speed={0.4} opacity={0.5} color="#ffffff" />
            <Sparkles count={50} scale={4} size={3} speed={0.2} opacity={0.3} color="#60a5fa" />
          </group>
        </Float>
      </PresentationControls>

      <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={15} blur={2.5} far={4} color="#000000" />
      <Environment preset="city" />
    </Suspense>
  );
};

/* 3D Testimonial Quote Scene for Standby Screen */
const StandbyGlassScene = () => {
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 5]} intensity={1.5} />
      <spotLight position={[-4, 4, 6]} angle={0.25} penumbra={1} intensity={3} color="#60a5fa" />
      <spotLight position={[4, -2, -4]} angle={0.3} penumbra={1} intensity={1.5} color="#ffffff" />

      <PresentationControls
        global
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 1200 }}
        rotation={[0.1, 0.2, 0]}
        polar={[-Math.PI / 6, Math.PI / 6]}
        azimuth={[-Math.PI / 6, Math.PI / 6]}
      >
        <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.2}>
          <group>
            {/* Large Glass Quote Mark - Left */}
            <Text
              position={[-0.8, 0.3, 0]}
              fontSize={4}
              font="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hjQ.woff"
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
            >
              <MeshTransmissionMaterial
                backside
                samples={4}
                thickness={1.5}
                chromaticAberration={0.6}
                anisotropy={0.3}
                distortion={0.4}
                distortionScale={0.4}
                temporalDistortion={0.08}
                iridescence={1}
                iridescenceIOR={1}
                iridescenceThicknessRange={[0, 1400]}
                color="#ffffff"
              />
              “
            </Text>

            {/* Large Glass Quote Mark - Right */}
            <Text
              position={[1.2, -0.5, 0.3]}
              fontSize={4}
              font="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hjQ.woff"
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
            >
              <MeshTransmissionMaterial
                backside
                samples={4}
                thickness={1.5}
                chromaticAberration={0.6}
                anisotropy={0.3}
                distortion={0.4}
                distortionScale={0.4}
                temporalDistortion={0.08}
                iridescence={1}
                iridescenceIOR={1}
                iridescenceThicknessRange={[0, 1400]}
                color="#a0c4ff"
              />
              ”
            </Text>

            {/* Small accent sphere between quotes */}
            <mesh position={[0.2, -0.1, 0.5]} scale={0.25}>
              <sphereGeometry args={[1, 32, 32]} />
              <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={1.5} transparent opacity={0.6} />
            </mesh>

            {/* Ambient Sparkles */}
            <Sparkles count={60} scale={6} size={2} speed={0.3} opacity={0.5} color="#60a5fa" />
            <Sparkles count={30} scale={4} size={1.5} speed={0.4} opacity={0.3} color="#ffffff" />
          </group>
        </Float>
      </PresentationControls>

      <ContactShadows position={[0, -2.5, 0]} opacity={0.3} scale={10} blur={2} far={4} color="#000000" />
      <Environment preset="city" />
    </Suspense>
  );
};

type TVState = 'standby' | 'booting' | 'intro' | 'playing';

/* Premium Rwandan Imigongo SVG Background */
const StyledImigongoBackground = ({ isDark }: { isDark: boolean }) => (
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    {/* Base Gradient */}
    <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-[#111] via-[#0a0a0a] to-[#000]' : 'from-[#fefefe] via-[#f5f5f5] to-[#f0f0f0]'}`} />
    
    <svg className={`absolute inset-0 w-full h-full ${isDark ? 'opacity-[0.35]' : 'opacity-[0.45]'}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Evolving Cultural Geometric Pattern */}
        <pattern id="imigongo" width="120" height="120" patternUnits="userSpaceOnUse" patternTransform="scale(1.2) rotate(30)">
          {/* Outer diamond */}
          <path d="M 60 0 L 120 60 L 60 120 L 0 60 Z" fill="none" stroke="url(#imigongo-stroke)" strokeWidth="1" strokeOpacity={isDark ? "0.8" : "0.5"} strokeDasharray="2 4"/>
          {/* Wavy inner element mimicking traditional imigongo spirals */}
          <path d="M 30 60 Q 60 30 90 60 T 30 60" fill="none" stroke={isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"} strokeWidth="1" />
          <path d="M 30 60 Q 60 90 90 60 T 30 60" fill="none" stroke={isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"} strokeWidth="1" />
          {/* Center core */}
          <circle cx="60" cy="60" r="10" fill="none" stroke={isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.2)"} strokeWidth="1" strokeDasharray="1 2" />
          {/* Connecting technical lines */}
          <path d="M 60 0 L 60 120" stroke={isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"} strokeWidth="1" strokeDasharray="1 5" />
          <path d="M 0 60 L 120 60" stroke={isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"} strokeWidth="1" strokeDasharray="1 5" />
        </pattern>
        <linearGradient id="imigongo-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isDark ? "#fff" : "#000"} />
          <stop offset="50%" stopColor={isDark ? "#888" : "#ccc"} />
          <stop offset="100%" stopColor={isDark ? "#444" : "#eee"} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#imigongo)" />
    </svg>
    
    {/* Central Spotlight to focus on the TV */}
    <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,${isDark ? 'rgba(0,0,0,0.85)' : 'rgba(255,255,255,0.1)'}_70%,${isDark ? 'rgba(0,0,0,1)' : 'rgba(255,255,255,0.2)'}_100%)]`} />
  </div>
);

const Testimonials = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [tvState, setTvState] = useState<TVState>('standby');
  const [active, setActive] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);
  const [showOSD, setShowOSD] = useState(false);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 });

  // Auto-play when scrolled into view
  useEffect(() => {
    if (isInView && !hasAutoPlayed && tvState === 'standby') {
      setHasAutoPlayed(true);
      const timer = setTimeout(() => {
        setTvState('booting');
        setTimeout(() => {
          setTvState('intro');
        }, 3200);
      }, 3500); // Give them a solid 3.5s to appreciate the cultural news screen
      return () => clearTimeout(timer);
    }
  }, [isInView, hasAutoPlayed, tvState]);

  // Handle intro to playing transition
  useEffect(() => {
    if (tvState === 'intro') {
      const timer = setTimeout(() => {
        setTvState('playing');
        setActive(0);
      }, 4500); // Show intro panel for 4.5 seconds
      return () => clearTimeout(timer);
    }
  }, [tvState]);

  // Auto-cycle channels if untouched while playing
  useEffect(() => {
    if (tvState !== 'playing') return;
    const interval = setInterval(() => {
      handleChannelChange('next');
    }, 9000);
    return () => clearInterval(interval);
  }, [tvState]);

  // Handle Channel OSD disappearing
  useEffect(() => {
    if (tvState !== 'playing') return;
    setShowOSD(true);
    const t = setTimeout(() => setShowOSD(false), 2800);
    return () => clearTimeout(t);
  }, [active, tvState]);

  const handleChannelChange = (dir: 'next' | 'prev') => {
    if (tvState !== 'playing') return;
    setIsSwitching(true);
    setTimeout(() => {
      setActive((prev) => {
        if (dir === 'next') return (prev + 1) % channels.length;
        return (prev - 1 + channels.length) % channels.length;
      });
      setIsSwitching(false);
    }, 150);
  };

  const handlePower = () => {
    if (tvState === 'standby') {
      setTvState('booting');
      setTimeout(() => {
        setTvState('intro');
      }, 3200);
    } else {
      setTvState('standby');
    }
  };

  return (
    <section ref={sectionRef} id="testimonials" className={`${isDark ? 'bg-white' : 'bg-[#f4f4f4]'} px-2 sm:px-4 md:px-6 lg:px-8 py-4 flex justify-center font-sans tracking-tight transition-colors duration-500`}>
      {/* Inner Container wrapped tightly in deep black */}
      <div className={`relative w-full max-w-7xl ${isDark ? 'bg-[#000] border-[#222]' : 'bg-white border-gray-100'} rounded-xl md:rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,${isDark ? '1' : '0.05'})] inset-shadow-sm z-10 px-6 sm:px-10 lg:px-20 py-6 md:py-8 flex flex-col items-center overflow-hidden border transition-all duration-500`}>
        
        {/* Stunning Background Elements */}
        <StyledImigongoBackground isDark={isDark} />

        {/* Section Title */}
        <div className="w-full text-left max-w-[850px] mb-4 md:mb-5 z-10 pt-0 md:pt-2 relative">
          <div className={`absolute -left-6 md:-left-10 top-0 w-1 md:w-2 h-full bg-gradient-to-b ${isDark ? 'from-white/80' : 'from-black/10'} to-transparent`} />
          <p className={`text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] ${isDark ? 'text-white/50' : 'text-black/40'} mb-2 drop-shadow-sm`}>Professional Endorsements</p>
          <h2 className={`text-3xl md:text-5xl lg:text-5xl font-black italic tracking-tighter uppercase leading-none ${isDark ? 'text-white' : 'text-black'} drop-shadow-[0_0_20px_rgba(0,0,0,0.05)]`}>
            Client <span className={isDark ? 'text-white/20' : 'text-black/10'}>Feed</span>.
          </h2>
        </div>

        {/* ── 1. The OLED TV Screen Panel ── */}
        <div 
          className={`relative w-full max-w-[850px] aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] bg-black rounded-lg md:rounded-2xl border-[4px] md:border-[6px] ${isDark ? 'border-[#1a1a1a]' : 'border-gray-800'} shadow-[0_30px_70px_rgba(0,0,0,${isDark ? '1' : '0.2'}),0_0_30px_rgba(255,255,255,0.05)] z-10 flex overflow-hidden group outline outline-1 ${isDark ? 'outline-white/10' : 'outline-black/5'}`}
        >
          {/* Smooth Fade Transition */}
          {isSwitching && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#050505] z-50 pointer-events-none flex items-center justify-center"
            >
               <motion.div 
                 animate={{ scale: [0.95, 1.05], opacity: [0.5, 0] }}
                 transition={{ duration: 0.3 }}
                 className="w-16 h-16 rounded-full border border-white/20"
               />
            </motion.div>
          )}

          {/* Internal Bezel */}
          <div className="absolute inset-[2px] md:inset-[4px] bg-[#020202] overflow-hidden rounded-[2px] md:rounded-[4px]">
            
            <AnimatePresence mode="wait">
               {/* ── Standby / Professional Intro Screen ── */}
                {tvState === 'standby' && (
                  <motion.div 
                    key="standby"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex flex-col bg-[#030308] cursor-pointer group"
                    onClick={handlePower}
                  >
                     {/* Subtle Gradient Background */}
                     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(96,165,250,0.08)_0%,transparent_60%)] pointer-events-none" />
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.95)_100%)] pointer-events-none" />

                     {/* 3D Glass Scene - Centered Focal Point */}
                     <div className="absolute inset-0 z-[5] pointer-events-none select-none">
                       <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                         <StandbyGlassScene />
                       </Canvas>
                     </div>
                     <div className="absolute inset-0 z-[6] bg-[radial-gradient(circle_at_center,transparent_25%,rgba(3,3,8,0.85)_60%)] pointer-events-none" />

                     {/* Content Overlay */}
                     <div className="relative flex-1 flex flex-col items-center justify-center z-10">
                       
                       {/* Large Decorative Quote Mark */}
                       <span className="absolute top-[10%] left-[10%] text-[180px] md:text-[280px] leading-none font-serif text-white/[0.03] font-black select-none pointer-events-none">
                         "
                       </span>

                       {/* Small Label */}
                       <motion.div 
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.3, duration: 0.6 }}
                         className="flex items-center gap-2 mb-6"
                       >
                         <div className="w-8 h-[1px] bg-white/20" />
                         <p className="text-white/50 text-[9px] md:text-[11px] uppercase tracking-[0.4em] font-sans font-medium">What Clients Say</p>
                         <div className="w-8 h-[1px] bg-white/20" />
                       </motion.div>

                       {/* Main Heading */}
                       <motion.h1 
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                         className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight text-center drop-shadow-[0_4px_30px_rgba(96,165,250,0.15)]"
                       >
                         Trusted by<br/>
                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400/90 via-white to-blue-300/80">Professionals.</span>
                       </motion.h1>

                       {/* Subtitle */}
                       <motion.p
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ delay: 0.8, duration: 0.6 }}
                         className="text-white/30 text-[10px] md:text-[13px] font-sans mt-5 md:mt-6 tracking-wide max-w-md text-center leading-relaxed"
                       >
                         Real feedback from clients I've had the privilege to work with.
                       </motion.p>

                       {/* Animated Loading Indicator */}
                       <motion.div 
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ delay: 1.2 }}
                         className="mt-10 md:mt-14 flex flex-col items-center gap-3"
                       >
                         <div className="flex items-center gap-1.5">
                           {[0, 1, 2].map((i) => (
                             <motion.div
                               key={i}
                               animate={{ opacity: [0.2, 1, 0.2] }}
                               transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                               className="w-1.5 h-1.5 rounded-full bg-blue-400/80"
                             />
                           ))}
                         </div>
                         <span className="text-white/25 text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-sans">Loading testimonials</span>
                       </motion.div>
                     </div>

                     {/* Bottom Subtle Line */}
                     <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />
                  </motion.div>
               )}

               {/* ── Booting State: Professional Countdown ── */}
               {tvState === 'booting' && (
                  <motion.div 
                    key="booting"
                    className="absolute inset-0 flex items-center justify-center bg-black overflow-hidden"
                  >
                    <CountdownOverlay />
                  </motion.div>
               )}

               {/* ── Intro State: Premium Cinematic ── */}
               {tvState === 'intro' && (
                  <motion.div 
                    key="intro"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full relative bg-[#050505]"
                  >
                    {/* 3D Canvas rendering the abstract glass object */}
                    <div className="absolute inset-0 opacity-100 z-0 select-none">
                      <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
                        <PremiumGlassScene />
                      </Canvas>
                    </div>

                    {/* Highly stylized, editorial editorial overlay */}
                    <motion.div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10 z-20 pointer-events-none">
                      
                      {/* Top Bar Editorial Layout */}
                      <div className="flex justify-between items-start w-full">
                        <div className="overflow-hidden">
                          <motion.p 
                            initial={{ y: 20, opacity: 0 }} 
                            animate={{ y: 0, opacity: 1 }} 
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
                            className="text-white/40 text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-mono border-l border-white/20 pl-3"
                          >
                            Endorsements <br/> Archive / 01
                          </motion.p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                           <motion.p 
                             initial={{ opacity: 0 }} 
                             animate={{ opacity: 1 }} 
                             transition={{ delay: 0.6 }} 
                             className="text-white/80 text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-sans flex items-center gap-2"
                           >
                             System Secured
                             <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_10px_white]" />
                           </motion.p>
                           <motion.div
                             initial={{ width: 0 }}
                             animate={{ width: "40px" }}
                             transition={{ duration: 0.8, delay: 0.5 }}
                             className="h-[1px] bg-white/30"
                           />
                        </div>
                      </div>

                      {/* Giant Central Typography */}
                      <div className="flex flex-col items-center justify-center w-full mix-blend-overlay mt-[-40px]">
                         <motion.h2 
                           initial={{ filter: 'blur(10px)', opacity: 0, scale: 0.95 }} 
                           animate={{ filter: 'blur(0px)', opacity: 1, scale: 1 }}
                           transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                           className="text-white font-black text-6xl md:text-8xl lg:text-9xl tracking-[0.02em] uppercase leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,1)]"
                         >
                           ELEVATE
                         </motion.h2>
                         <motion.h2 
                           initial={{ y: 20, opacity: 0 }} 
                           animate={{ y: 0, opacity: 1 }}
                           transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                           className="text-gray-300 font-serif text-3xl md:text-6xl italic tracking-wide mt-[-10px] md:mt-[-25px] font-medium"
                         >
                           Expectations
                         </motion.h2>
                      </div>

                      {/* Bottom Loading Bar */}
                      <div className="flex flex-col items-center w-full overflow-hidden">
                          <motion.p 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            transition={{ duration: 0.5, delay: 1 }} 
                            className="text-white/40 text-[7px] md:text-[8px] uppercase tracking-[0.5em] mb-4"
                          >
                            Initializing Client Feedback
                          </motion.p>
                          <div className="w-full max-w-[200px] md:max-w-[300px] h-[1px] bg-white/10 relative">
                            <motion.div 
                               initial={{ width: "0%" }}
                               animate={{ width: "100%" }}
                               transition={{ duration: 3.5, ease: "easeInOut" }}
                               className="absolute left-0 top-0 h-full bg-gradient-to-r from-transparent via-white to-transparent"
                            />
                          </div>
                      </div>
                    </motion.div>
                    
                    {/* Vignette Overlay purely for contrast */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none z-10" />
                  </motion.div>
               )}

               {/* ── Playing State ── */}
               {tvState === 'playing' && (
                  <motion.div key="playing" className="w-full h-full relative">
                      
                    {/* Background Footage with Subtle Red Cast for News feel */}
                    <AnimatePresence mode="popLayout">
                      <motion.div 
                        key={active}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0"
                      >
                        {/* Background color overlay */}
                        <div className="absolute inset-0 bg-[#020510]/60 mix-blend-multiply z-10" />
                        <img 
                          src={channels[active].img} 
                          className="w-full h-full object-cover grayscale opacity-40 mix-blend-screen"
                          alt={channels[active].name}
                        />
                      </motion.div>
                    </AnimatePresence>
                    
                    {/* Clean Portfolio Overlay */}
                    <div className="absolute top-4 md:top-6 left-4 md:left-6 right-4 md:right-8 flex justify-between items-start z-30 pointer-events-none">
                       {/* Verified Badge */}
                       <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-2.5 md:px-3 py-1 md:py-1.5 rounded-full border border-white/10 shadow-sm">
                          <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-white/90 font-medium text-[9px] md:text-[10px] tracking-wide uppercase">Verified Client</span>
                       </div>

                       {/* Simple Counter */}
                       <div className="font-mono text-[9px] md:text-sm tracking-widest bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/5 text-white/70">
                          {active + 1} / {channels.length}
                       </div>
                    </div>

                    {/* Dynamic Vignette & Textures */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_120%)] z-10 pointer-events-none" />
                    
                    {/* Modern Editorial Testimonial Card */}
                    <motion.div 
                      key={`ui-testimonials-${active}`}
                      initial={{ y: 30, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      exit={{ y: -30, opacity: 0 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-4 md:inset-8 lg:inset-12 flex flex-col justify-end md:justify-center items-center z-20 pointer-events-none"
                    >
                      <div className="relative w-full max-w-4xl p-6 md:p-10 lg:p-14 overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.1)] group">
                        
                        {/* Decorative Background Glows inside the Glass Card */}
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] group-hover:bg-blue-400/30 transition-colors duration-1000" />
                        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
                        
                        {/* Huge decorative quote mark */}
                        <span className="absolute -top-12 md:-top-16 -left-2 md:-left-6 text-[150px] md:text-[250px] leading-none font-serif text-white/[0.04] font-black select-none pointer-events-none">
                          "
                        </span>

                        <div className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center w-full">
                          
                          <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="inline-flex items-center gap-2 mb-6 md:mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                            <span className="text-white/80 font-mono text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-medium">Industry Endorsement</span>
                          </motion.div>
                          
                          <motion.p 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-white/95 font-serif text-lg md:text-3xl lg:text-4xl italic font-medium leading-relaxed md:leading-normal mb-8 md:mb-12 max-w-3xl"
                          >
                            "{channels[active].quote}"
                          </motion.p>
                          
                          {/* Person Info Section */}
                          <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full pt-6 md:pt-8 border-t border-white/10 gap-4 md:gap-0">
                            
                            <motion.div 
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.5, duration: 0.6 }}
                              className="flex flex-col items-start"
                            >
                              <h2 className="text-white font-black text-xl md:text-3xl uppercase tracking-[0.1em] drop-shadow-lg mb-1 md:mb-2">
                                {channels[active].name}
                              </h2>
                              <p className="text-blue-300 font-sans text-[9px] md:text-[12px] uppercase tracking-[0.3em] font-bold">
                                {channels[active].role}
                              </p>
                            </motion.div>

                            <motion.div 
                               initial={{ x: 20, opacity: 0 }}
                               animate={{ x: 0, opacity: 1 }}
                               transition={{ delay: 0.6, duration: 0.6 }}
                               className="text-white/40 font-black text-[10px] md:text-[14px] uppercase tracking-[0.4em] md:text-right mix-blend-overlay"
                            >
                              {channels[active].company}
                            </motion.div>

                          </div>
                        </div>
                      </div>
                    </motion.div>

                  </motion.div>
               )}
            </AnimatePresence>

            {/* Retro CRT Scanlines Grid & Glare */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(transparent,transparent_2px,rgba(0,0,0,0.15)_2px,rgba(0,0,0,0.15)_4px)] pointer-events-none z-40 mix-blend-overlay" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08)_0%,transparent_50%)] pointer-events-none z-40" />

            {/* OSD (On-Screen Display Menu) */}
            <AnimatePresence>
              {showOSD && tvState === 'playing' && (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="absolute top-4 right-5 md:top-6 md:right-8 text-white font-mono text-lg md:text-2xl font-black drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] z-50 tracking-[0.1em]"
                >
                  EXT-0{active + 1}
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

        {/* ── 2. Sleek Monitor Stand ── */}
        <div className="w-full flex flex-col items-center z-10 relative">
          <div className={`w-12 md:w-16 h-6 md:h-8 bg-gradient-to-b ${isDark ? 'from-[#333] to-[#111]' : 'from-gray-300 to-gray-400'} border-x ${isDark ? 'border-white/10' : 'border-black/5'} shadow-inner`} />
          <div className={`w-32 md:w-48 h-1.5 md:h-2 ${isDark ? 'bg-gradient-to-r from-[#222] via-[#444] to-[#222]' : 'bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400'} rounded-t-sm border-t ${isDark ? 'border-white/20' : 'border-black/10'} shadow-[0_6px_15px_rgba(0,0,0,${isDark ? '0.8' : '0.1'})]`} />
        </div>

        {/* ── 3. Interactive Remote ── */}
        <div className="mt-4 md:mt-5 flex flex-col items-center gap-2 md:gap-3 z-20">
          <p className={`font-mono text-[7px] md:text-[9px] ${isDark ? 'text-white/40' : 'text-black/30'} uppercase tracking-[0.2em] drop-shadow-sm`}>
            Deck Controls
          </p>
          <div className={`${isDark ? 'bg-[#111] border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.9)]' : 'bg-white border-gray-200 shadow-[0_15px_30px_rgba(0,0,0,0.05)]'} flex items-center gap-2 md:gap-4 px-4 md:px-6 py-1.5 md:py-2.5 rounded-full border relative transition-all duration-500`}>
            
            {/* Power Button */}
            <button 
              onClick={handlePower} 
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${isDark ? 'bg-[#1a1a1a] border-white/10 shadow-[inset_0_2px_10px_rgba(0,0,0,1)]' : 'bg-gray-100 border-gray-200 shadow-[inset_0_2px_10px_rgba(0,0,0,0.03)]'} hover:opacity-80 flex items-center justify-center group transition-all border`}
            >
              <div className={`w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full transition-all ${tvState === 'playing' ? 'bg-red-500 shadow-[0_0_15px_#ef4444]' : isDark ? 'bg-white/20 group-hover:bg-white/50 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'bg-black/10 group-hover:bg-black/30'}`} />
            </button>
            
            <div className={`w-px h-6 md:h-8 ${isDark ? 'bg-white/10' : 'bg-black/5'} mx-1 md:mx-2`} />
            
            {/* Prev Channel */}
            <button 
              onClick={() => handleChannelChange('prev')} 
              className={`w-9 h-9 md:w-10 md:h-10 rounded-full ${isDark ? 'hover:bg-white/10 text-white/50 hover:text-white' : 'hover:bg-black/5 text-black/40 hover:text-black'} flex items-center justify-center transition-colors`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            
            {/* Next Channel */}
            <button 
              onClick={() => handleChannelChange('next')} 
              className={`w-9 h-9 md:w-10 md:h-10 rounded-full ${isDark ? 'hover:bg-white/10 text-white/50 hover:text-white' : 'hover:bg-black/5 text-black/40 hover:text-black'} flex items-center justify-center transition-colors`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;