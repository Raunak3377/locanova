
import React from 'react';
import { ServiceItem } from '../types';

const coreServices: ServiceItem[] = [
  {
    title: "Lead Management System",
    description: "End-to-end tracking systems that ensure every single inquiry is accounted for and followed up on time.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "20% Lower CPC Ads",
    description: "Optimized ad sets and creative angles that outperform competitors by lowering acquisition costs by at least 20%.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "UGC Ads Reel Strategy",
    description: "Harnessing User Generated Content (UGC) to build authentic branding that resonates with modern students.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Student Management SaaS",
    description: "A comprehensive cloud platform to manage admissions, batches, and student records effortlessly.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "WhatsApp Remarketing",
    description: "Automated WhatsApp nurturing flows that convert stalled leads into active enrollments without manual work.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    )
  },
  {
    title: "Monthly Offer Strategy",
    description: "Strategic campaign planning with weekly offers that create urgency and drive predictable cash flow.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    )
  },
  {
    title: "Autonomous Systems",
    description: "Our core framework: standardizing operations so your academy runs perfectly even in your absence.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "HR & System Consultation",
    description: "Building the right team culture and hiring systems to support your long-term growth and automation goals.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#0a0f1d] relative" aria-label="Services Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center">
          <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm block mb-4">Precision Engineering</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">What We Handle</h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-xl font-light leading-relaxed">
            Every component below is a mandatory gear in the <span className="text-blue-500 font-medium">Admissions Growth Engine</span>. We don't do "one-off" services; we build complete systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreServices.map((service, index) => (
            <div key={index} className="service-card group bg-[#111827]/80 border border-blue-900/30 p-8 rounded-3xl hover:bg-blue-600/5 transition-all hover:border-blue-500/50 shadow-lg flex flex-col h-full">
              <div className="w-14 h-14 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-blue-900/10">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 leading-tight min-h-[3.5rem] flex items-center">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <div className="pt-4 border-t border-blue-900/20">
                <span className="text-[10px] font-bold text-blue-500/60 uppercase tracking-widest group-hover:text-blue-400 transition-colors">System Pillar {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-0">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
      </div>
    </section>
  );
};

export default Services;
