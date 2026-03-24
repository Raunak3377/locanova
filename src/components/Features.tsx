import { motion } from "motion/react";
import { Shield, Zap, Cpu, Globe } from "lucide-react";

const features = [
  {
    icon: <Zap className="text-blue-400" />,
    title: "Instant Lead Sync",
    description: "Every enquiry is logged instantly into our high-speed CRM system."
  },
  {
    icon: <Shield className="text-blue-400" />,
    title: "Data Security",
    description: "Enterprise-grade protection for your student and institutional data."
  },
  {
    icon: <Cpu className="text-blue-400" />,
    title: "AI Optimization",
    description: "Smart lead scoring and automated follow-ups powered by Locanova AI."
  },
  {
    icon: <Globe className="text-blue-400" />,
    title: "Global Reach",
    description: "Target students across cities and countries with surgical precision."
  }
];

export const Features = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative p-5 sm:p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all duration-500 shadow-2xl"
          >
            <div className="mb-4 sm:mb-6 p-3 w-fit rounded-2xl bg-white/5 group-hover:bg-blue-500/20 transition-all duration-500">
              {feature.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 tracking-tight text-white">{feature.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed font-light group-hover:text-white/80 transition-colors">
              {feature.description}
            </p>
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-blue-500/10 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity -z-10 pulse-glow" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
