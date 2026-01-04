
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#050811] pt-32 pb-40 overflow-hidden" aria-label="Hero Section">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -mr-96 -mt-96 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] -ml-64 -mb-64 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="hero-content max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-bold tracking-widest uppercase mb-8">
            The Admissions Growth System
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
            Build a Business that <br className="hidden md:block" />
            <span className="text-blue-500">Runs Without You.</span>
          </h1>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            We architect end-to-end growth engines for academies. From high-intent UGC ads to automated student management, we deliver predictable scale.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/25"
            >
              Get My Growth Strategy
            </a>
            <a 
              href="#services" 
              className="w-full sm:w-auto px-10 py-5 bg-transparent border border-blue-900/50 text-white rounded-2xl font-bold text-lg hover:bg-blue-900/20 transition-all"
            >
              See the System
            </a>
          </div>
          
          <div className="mt-20 pt-10 border-t border-blue-900/20 flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40">
            <span className="text-white font-semibold text-lg">20% Lower CPC</span>
            <span className="text-white font-semibold text-lg">UGC Driven</span>
            <span className="text-white font-semibold text-lg">Automated CRM</span>
            <span className="text-white font-semibold text-lg">HR Systems</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
