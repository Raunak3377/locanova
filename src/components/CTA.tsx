import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-white/[0.02] border border-white/5 p-6 sm:p-10 md:p-24 text-center">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blue-glow opacity-10 blur-[100px] -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold tracking-tight leading-tight text-white">
            Ready to scale <br />
            your admissions?
          </h2>
          
          <p className="text-white/60 text-sm sm:text-base md:text-xl font-light max-w-xl mx-auto px-1 sm:px-4">
            Join the elite institutions who are already building the future with Locanova.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto pt-2 sm:pt-4 px-0 sm:px-4">
            <motion.a
              href="https://wa.me/917766828618?text=Hello%20Locanova,%20I'm%20ready%20to%20scale%20my%20admissions!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 sm:px-8 py-4 sm:py-5 rounded-2xl bg-white text-black font-bold text-sm sm:text-base flex items-center justify-center gap-2 whitespace-nowrap hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all"
            >
              Contact Us on WhatsApp
              <ArrowRight size={20} />
            </motion.a>
          </div>

          <p className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-[0.15em] sm:tracking-[0.2em] pt-5 sm:pt-8">
            Limited slots available for this intake • Expert support • Guaranteed results
          </p>
        </motion.div>
      </div>
    </section>
  );
};
