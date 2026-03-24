import { motion, useScroll, useTransform } from "motion/react";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-20 overflow-hidden"
    >
      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 text-center max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-medium tracking-widest uppercase text-white/60 mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          The Future of Experience
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.15] sm:leading-[1.1] mb-6 sm:mb-8 text-white px-2"
        >
          Performance Marketing Agency for <br />
          <span className="text-gradient text-glow">
            Institutes & Real Estate
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-sm sm:text-base md:text-xl text-white/60 max-w-2xl mx-auto mb-8 sm:mb-12 font-light leading-relaxed px-3 sm:px-4"
        >
          Experience a new standard of digital elegance. Minimalist design meets 
          unparalleled performance in a seamless, fluid interface.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full px-2"
        >
          <motion.a
            href="https://wa.me/917766828618?text=Hello%20Locanova,%20I'm%20interested%20in%20your%20Admission%20Growth%20System."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-black font-semibold text-sm transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            Get Started
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
          
          <motion.a
            href="https://www.instagram.com/locanova.in/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Watch the film
            <ChevronRight size={16} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Decorative Glow behind text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square blue-glow opacity-20 blur-[120px] -z-10"
      />
    </section>
  );
};
