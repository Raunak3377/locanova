
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0f1d]/90 backdrop-blur-lg border-b border-blue-900/30" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10  flex items-center justify-center shadow-lg shadow-blue-500/20 overflow-hidden">
              <img 
                src="/assets/images/logo1.png" 
                alt="LOCANOVA Logo" 
                className="w-full h-full object-contain p-0.1"
              />
            </div>
            <span className="text-xl font-bold text-white tracking-tight hidden sm:block">LOCANOVA</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#philosophy" className="hover:text-blue-400 transition-colors">Philosophy</a>
            <a href="#work" className="hover:text-blue-400 transition-colors">Work</a>
            <a href="#team" className="hover:text-blue-400 transition-colors">Team</a>
          </div>

          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20"
            >
              Consult Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="text-slate-300 hover:text-white p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0f1d] border-b border-blue-900/30 px-4 pt-2 pb-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <a href="#services" onClick={() => setIsOpen(false)} className="block text-slate-300 py-2 font-medium">Services</a>
          <a href="#philosophy" onClick={() => setIsOpen(false)} className="block text-slate-300 py-2 font-medium">Philosophy</a>
          <a href="#work" onClick={() => setIsOpen(false)} className="block text-slate-300 py-2 font-medium">Work</a>
          <a href="#team" onClick={() => setIsOpen(false)} className="block text-slate-300 py-2 font-medium">Team</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-semibold">Consult Now</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
