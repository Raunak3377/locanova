import { motion } from "motion/react";
import {
  ArrowRight,
  Megaphone,
  Workflow,
  ShieldCheck,
  Sparkles,
  MessageCircle,
} from "lucide-react";

export const DetailedSEOContent = () => {
  const layers = [
    {
      title: "Lead Generation Engine",
      icon: Megaphone,
      promise: "Consistent flow of qualified leads",
      points: [
        "Meta & Google Ads setup",
        "High-converting landing pages",
        "Lead funnel creation",
        "Retargeting systems",
      ],
    },
    {
      title: "Conversion Infrastructure",
      icon: Workflow,
      promise: "Turn leads into actual admissions",
      points: [
        "Lead Management CRM",
        "WhatsApp automation & nurturing",
        "Instant response system",
        "Follow-up workflows",
        "Counsellor tracking + scripts",
      ],
    },
    {
      title: "Brand & Authority Engine",
      icon: ShieldCheck,
      promise: "Build trust so people choose you",
      points: [
        "Social media growth",
        "Content system (reels, creatives)",
        "Personal branding",
        "SEO & Google visibility",
        "Influencer collaborations",
      ],
    },
  ];

  const systemFlow = [
    "Ads",
    "Landing Page",
    "CRM",
    "WhatsApp",
    "Counsellor",
    "Admission",
    "Branding Loop",
  ];

  const outcomes = [
    "No more lost leads",
    "Faster response time",
    "Higher conversion rate",
    "Better tracking and control",
    "Stronger brand trust",
    "Predictable admissions",
  ];

  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm px-3 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-300 mb-5">
            <Sparkles size={14} />
            ONE COMPLETE SYSTEM
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            The Locanova Growth System
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-4xl">
            We build a complete admission and growth system - from lead generation to conversion to branding - so your business runs without constant involvement.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-3 mb-10 md:mb-12">
          {layers.map((layer, idx) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl border border-blue-500/20 bg-gradient-to-b from-blue-500/[0.08] to-white/[0.02] p-5 sm:p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-300 flex items-center justify-center mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{layer.title}</h3>
                <p className="text-blue-300 text-sm mb-4">{layer.promise}</p>
                <ul className="space-y-2 text-white/75 text-sm">
                  {layer.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-[2px]">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 mb-8"
        >
          <p className="text-white/90 text-base sm:text-lg leading-relaxed">
            Most agencies only focus on one part. We connect all three - so leads come, get nurtured, and convert.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.08] p-4 sm:p-5 mb-10"
        >
          <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-white/90">
            {systemFlow.map((step, idx) => (
              <div key={step} className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-lg border border-white/15 bg-black/30">{step}</span>
                {idx !== systemFlow.length - 1 && <ArrowRight size={14} className="text-blue-300" />}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 mb-10"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-5">What This System Fixes</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {outcomes.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-blue-500/20 bg-blue-500/[0.06] px-4 py-3 text-sm text-white/85"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border border-blue-400/30 bg-gradient-to-r from-blue-500/20 to-blue-700/10 p-6 sm:p-8"
        >
          <h4 className="text-xl sm:text-2xl font-semibold mb-5">
            Want to see how this system would work for your institute?
          </h4>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 hover:bg-blue-400 transition-colors px-5 py-3 text-sm font-semibold text-white"
            >
              Book Free Strategy Call
            </a>
            <a
              href="https://wa.me/917766828618"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 hover:border-blue-400/60 hover:bg-blue-500/10 transition-colors px-5 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle size={16} />
              WhatsApp Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
