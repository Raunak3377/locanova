import { motion } from "motion/react";
import { Target, Search, RefreshCw } from "lucide-react";
import { CRMPreview } from "./CRMPreview";

const features = [
  {
    icon: <Target className="text-blue-400" />,
    title: "Lead Tracking",
    description: "Every enquiry is logged instantly into the CRM with source attribution."
  },
  {
    icon: <Search className="text-blue-400" />,
    title: "Lead Scoring",
    description: "High-intent leads are auto-flagged based on behaviour + response."
  },
  {
    icon: <RefreshCw className="text-blue-400" />,
    title: "Follow-up & Remarketing",
    description: "Counsellor updates daily → WhatsApp automation reactivates cold leads."
  }
];

export const LeadQuality = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full blue-glow opacity-5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6 relative inline-block"
          >
            Lead Quality Guarantee
            <div className="absolute -inset-x-4 -inset-y-2 bg-blue-500/10 blur-2xl -z-10 rounded-full opacity-50" />
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-white/60 text-sm sm:text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed px-2 sm:px-4"
          >
            Every lead is tracked → scored → followed → remarketed. <br className="hidden md:block" />
            No lead is ever lost.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-0">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="group p-5 sm:p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden shadow-2xl"
            >
              <div className="mb-6 p-3 w-fit rounded-xl bg-white/5 group-hover:bg-blue-500/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 tracking-tight text-white">{feature.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed font-light">
                {feature.description}
              </p>

              {/* Card Glow Pulse */}
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity pulse-glow -z-10" />
            </motion.div>
          ))}
        </div>

        <CRMPreview />
      </div>
    </section>
  );
};
