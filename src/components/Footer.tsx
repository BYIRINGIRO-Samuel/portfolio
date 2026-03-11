import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] text-white py-8 px-6 md:px-12 lg:px-20 border-t border-white/5 relative overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs font-semibold text-white/40 tracking-tight">
            &copy; {currentYear} Samuel Byiringiro. All rights reserved.
          </div>
          <div className="flex items-center gap-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
