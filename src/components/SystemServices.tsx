import { motion } from "motion/react";
import { ServiceCard } from "./ServiceCard";
import { 
  Palette, 
  Video, 
  Instagram, 
  Layout, 
  Target, 
  Database, 
  MessageSquare, 
  Users, 
  Settings 
} from "lucide-react";

const services = [
  {
    icon: <Palette size={24} />,
    title: "Performance Creative System",
    description: "CTA posters, ad creatives, thumbnails, ad-reels library, AI voice."
  },
  {
    icon: <Video size={24} />,
    title: "Ad-Reels Engine",
    description: "Hook-based reels, pain→solution→CTA, variants for city/course."
  },
  {
    icon: <Instagram size={24} />,
    title: "Personal Branding Engine",
    description: "Instagram authority positioning, content calendar, storytelling."
  },
  {
    icon: <Layout size={24} />,
    title: "High-Conversion Landing Pages",
    description: "Psychology-based copy, tracking setup, fast & mobile-first."
  },
  {
    icon: <Target size={24} />,
    title: "Meta + Google Lead Engine",
    description: "Daily CPL optimisation, keyword/interest targeting, retargeting."
  },
  {
    icon: <Database size={24} />,
    title: "CRM + Lead Tracking",
    description: "Daily counsellor updates, lead scoring, attribution tracking."
  },
  {
    icon: <MessageSquare size={24} />,
    title: "WhatsApp Automation",
    description: "Daily follow-up, weekly drips, abandoned lead nurturing, segmentation."
  },
  {
    icon: <Users size={24} />,
    title: "On-Site Team Deployment",
    description: "Counsellor hiring, videographer/editor hiring, daily operations."
  },
  {
    icon: <Settings size={24} />,
    title: "System Setup + Operations",
    description: "Week 1 setup → Week 2 hiring → Week 3 launch → Week 4 optimise."
  }
];

export const SystemServices = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black relative overflow-hidden">
      {/* Section Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] blue-glow opacity-5 blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]"
          >
            Locanova Admission Growth System
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6"
          >
            Our System Services
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/40 text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto px-2"
          >
            A comprehensive, end-to-end growth engine designed to scale your institution's admissions with surgical precision.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
