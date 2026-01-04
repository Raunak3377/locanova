
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurWork from './components/OurWork';
import Services from './components/Services';
import OurTeam from './components/OurTeam';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import WhatsAppCTA from './components/WhatsAppCTA';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

const App: React.FC = () => {

  return (
    <div className="min-h-screen flex flex-col bg-[#050811] selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-grow" role="main">
        <Hero />
        
        {/* Our Philosophy Section */}
        <section id="philosophy" className="py-32 bg-[#0a0f1d] border-y border-blue-900/20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
             <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs block mb-6">Foundation</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 leading-tight">
              Our Philosophy: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 italic font-light">
                Build a Business that Runs Without You.
              </span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-xl leading-relaxed font-light">
              We don't just help you sell. We help you build the structure where selling happens automatically, 
              reporting is real-time, and your team knows exactly what to do—even when you're offline.
            </p>
          </div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10"></div>
        </section>

        <Clients />
        <Services />
        <OurWork />
        <Testimonials />
        <OurTeam />
        <WhatsAppCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
