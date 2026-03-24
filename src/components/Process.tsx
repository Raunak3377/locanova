import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Settings, Rocket, BarChart3, Layers } from "lucide-react";

const steps = [
  {
    icon: <Settings size={24} />,
    title: "System Setup",
    description: "Week 1: We configure your growth engine, tracking, and CRM integration."
  },
  {
    icon: <Rocket size={24} />,
    title: "Launch",
    description: "Week 2-3: Hiring team, launching ads, and starting the lead engine."
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Optimize",
    description: "Week 4+: Daily CPL optimization and lead scoring refinement."
  },
  {
    icon: <Layers size={24} />,
    title: "Scale",
    description: "Month 2+: Expanding reach and scaling admissions exponentially."
  }
];

export const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 max-w-4xl mx-auto relative overflow-hidden">
      <div className="text-center mb-12 sm:mb-16 md:mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-white text-glow"
        >
          The Path to Growth
        </motion.h2>
        <p className="text-white/60 font-light text-sm sm:text-base md:text-xl px-2">Our streamlined process ensures your success at every stage.</p>
      </div>

      <div className="relative px-0 sm:px-2 md:px-0">
        {/* Vertical Line */}
        <div className="absolute left-[27px] md:left-[27px] top-0 bottom-0 w-[2px] bg-white/10" />
        <motion.div 
          style={{ scaleY: pathLength, originY: 0 }}
          className="absolute left-[27px] md:left-[27px] top-0 bottom-0 w-[2px] bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
        />

        <div className="space-y-12 sm:space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex gap-4 sm:gap-6 md:gap-12 items-start"
            >
              <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black border-2 border-blue-500/30 flex items-center justify-center text-white/80 group-hover:text-white transition-all shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                <motion.div
                  whileInView={{ scale: [0.8, 1.1, 1] }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {step.icon}
                </motion.div>
              </div>
              
              <div className="pt-1 sm:pt-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 tracking-tight text-white">{step.title}</h3>
                <p className="text-white/60 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
