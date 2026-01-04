
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050811] py-16 border-t border-blue-900/10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Locanova</span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              We build high-performance systems for academies that value scale, automation, and operational excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="#philosophy" className="hover:text-blue-500 transition-colors">Philosophy</a></li>
              <li><a href="#work" className="hover:text-blue-500 transition-colors">Our Work</a></li>
              <li><a href="#team" className="hover:text-blue-500 transition-colors">Our Team</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>locanova,digital@gmail.com</li>
              <li>+91 7766828618</li>
              <li className="text-xs italic">Gaya, India</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-blue-900/10 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
          <p>&copy; {new Date().getFullYear()} Admissions Growth Systems. Built for Scale.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
