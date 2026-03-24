import { motion } from "motion/react";
import { useRef } from "react";

export const CRMPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative mt-12 sm:mt-16 md:mt-20 w-full max-w-5xl mx-auto group"
    >
      <div className="mb-8 px-2 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          CRM Conversion Engine
        </h3>
        <p className="mt-3 text-white/70 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
          How it works: every new lead and call update is uploaded to CRM. The system
          automatically triggers follow-up alerts for your team and builds a WhatsApp
          marketing list so no lead gets missed.
        </p>
      </div>

      {/* Glowing Frame */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-blue-900/20 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
        {/* Mock CRM UI with blurred content */}
        <div className="relative aspect-[16/9] w-full bg-[#050505] p-3 sm:p-6 overflow-hidden">
          {/* Sidebar Mock */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 border-r border-white/5 bg-white/[0.02] flex flex-col items-center py-3 sm:py-6 gap-3 sm:gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-5 h-5 sm:w-8 sm:h-8 rounded-lg bg-white/5 animate-pulse" />
            ))}
          </div>

          {/* Header Mock */}
          <div className="absolute left-10 sm:left-16 top-0 right-0 h-12 sm:h-16 border-bottom border-white/5 bg-white/[0.01] flex items-center px-3 sm:px-8 justify-between">
            <div className="w-16 sm:w-32 h-3 sm:h-4 rounded bg-white/10" />
            <div className="flex gap-2 sm:gap-4">
              <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-white/10" />
              <div className="w-16 sm:w-24 h-5 sm:h-8 rounded-lg bg-blue-500/20" />
            </div>
          </div>

          {/* Content Mock - Blurred */}
          <div className="mt-14 sm:mt-20 ml-12 sm:ml-20 grid grid-cols-3 gap-2 sm:gap-6 filter blur-md opacity-40">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-2 sm:p-6 rounded-xl bg-white/5 border border-white/10 h-16 sm:h-32 flex flex-col gap-2 sm:gap-4">
                <div className="w-1/2 h-2 sm:h-4 bg-white/20 rounded" />
                <div className="w-full h-4 sm:h-8 bg-white/10 rounded" />
              </div>
            ))}
            <div className="col-span-3 p-2 sm:p-6 rounded-xl bg-white/5 border border-white/10 h-24 sm:h-64 flex flex-col gap-2 sm:gap-4">
               <div className="w-1/4 h-2 sm:h-4 bg-white/20 rounded" />
               <div className="space-y-1 sm:space-y-3">
                  {[1,2,3,4,5].map(j => (
                    <div key={j} className="w-full h-2 sm:h-4 bg-white/5 rounded" />
                  ))}
               </div>
            </div>
          </div>

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        </div>

        {/* Parallax Hover Effect Wrapper */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute inset-0 cursor-pointer"
        />
      </div>

      <p className="mt-6 text-center text-white/20 text-[10px] uppercase tracking-[0.3em] font-medium">
        Actual CRM Interface (Sensitive Data Blurred)
      </p>
    </motion.div>
  );
};
