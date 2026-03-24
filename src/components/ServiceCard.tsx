import { motion } from "motion/react";
import React, { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.04, y: -5 }}
      className="group relative p-5 sm:p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all duration-500 overflow-hidden shadow-2xl"
    >
      {/* Subtle Shimmer Effect */}
      <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Background Glow */}
      <div className="absolute -inset-px bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
      <div className="relative z-10">
        <div className="mb-4 sm:mb-5 md:mb-6 p-3 sm:p-4 w-fit rounded-xl bg-white/5 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-all duration-500 transform group-hover:rotate-3">
          {icon}
        </div>
        
        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 tracking-tight text-white group-hover:text-blue-100 transition-colors">
          {title}
        </h3>
        
        <p className="text-white/60 text-sm leading-relaxed font-light group-hover:text-white/80 transition-colors">
          {description}
        </p>
      </div>

      {/* Pulsating Glow behind card on hover */}
      <div className="absolute -z-10 inset-0 bg-blue-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pulse-glow" />
    </motion.div>
  );
};
