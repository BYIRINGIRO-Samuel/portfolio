import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] py-12 px-8 md:px-16 border-t border-white/5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-[11px] font-bold text-white/40 tracking-tight uppercase">
          &copy; {currentYear} Samuel Byiringiro. All rights reserved.
        </div>
        <div className="flex items-center gap-10">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
