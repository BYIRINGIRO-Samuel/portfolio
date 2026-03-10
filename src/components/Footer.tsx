import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/BYIRINGIRO-Samuel', color: 'hover:text-white' },
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'hover:text-[#0a66c2]' },
    { name: 'Twitter / X', icon: Twitter, url: '#', color: 'hover:text-blue-400' },
    { name: 'Email', icon: Mail, url: 'mailto:samuel@example.com', color: 'hover:text-red-400' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="w-full bg-[#050505] text-white pt-24 pb-12 px-6 md:px-12 lg:px-20 border-t border-white/5 relative overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          
          {/* Main Hero Footer Text */}
          <div className="flex flex-col gap-6 lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1.1] text-white">
              Let's Build <br/>
              <span className="text-white/40 italic">Something Great.</span>
            </h2>
            <p className="text-sm md:text-base text-white/50 max-w-md leading-relaxed font-medium">
              Transforming complex problems into elegant, scaleable digital solutions. Open for freelance opportunities and collaborative tech projects.
            </p>
          </div>

          {/* Links Grid */}
          <div className="flex flex-wrap gap-16 lg:w-1/2 lg:justify-end">
            
            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-2">Navigation</span>
              <div className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className="text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-2">Socials</span>
              <div className="flex flex-col gap-3">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name} 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-medium text-white/70 transition-colors flex items-center gap-2 group ${social.color}`}
                  >
                    <social.icon className="w-4 h-4 text-white/40 group-hover:text-inherit transition-colors" />
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-2">Location</span>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-white/80">Kigali, Rwanda</span>
                <span className="text-xs text-white/40">Available Locally & Globally</span>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <span className="text-[10px] font-bold text-white/60 tracking-widest uppercase">Available for work</span>
              </div>
            </div>

          </div>
        </div>

        {/* Big Text Divider */}
        <div className="w-full flex justify-center py-10 border-t border-b border-white/5 mb-10 overflow-hidden relative">
          <motion.div 
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 1, scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="text-[12vw] leading-none font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent select-none"
          >
            B.SAMUEL
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs font-medium text-white/40">
            &copy; {currentYear} Samuel Byiringiro. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs font-medium text-white/40 hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-xs font-medium text-white/40 hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-white text-white/50 hover:text-black transition-all group"
          >
            <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
