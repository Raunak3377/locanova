
import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "We finally know which leads convert. The dashboard gives me actual clarity on where our marketing budget is going.",
    author: "RK Ranjan sir",
    academy: "Brave institute, Ara"
  },
  {
    quote: "Follow-ups stopped depending on my staff's memory. The automation handles the first 3 days of contact perfectly.",
    author: "Dr Zeeshan khan sir",
    academy: "Excellence study circle, Hazaribagh"
  },
  {
    quote: "As an owner, my visibility improved overnight. I can see what every counselor is doing without asking for manual reports.",
    author: "Vijay kumar Vidyarthi",
    academy: "Aura national hair and Beauty Academy,Gaya"
  },
  {
    quote: "The system makes our team more efficient and confident. I'm confident we'll hit our goals this year.",
    author: "Rajveer raushan",
    academy: "Rambagh PVT. ITI, Gaya"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-[#0a0f1d]" aria-label="Testimonials Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">What Business Owners Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-[#111827]/50 p-10 rounded-3xl border border-blue-900/20 shadow-sm flex flex-col justify-between hover:border-blue-500/20 transition-all">
              <div>
                <div className="text-blue-500 mb-6 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 italic leading-relaxed mb-8 text-lg">"{t.quote}"</p>
              </div>
              <div>
                <p className="font-bold text-white text-lg">{t.author}</p>
                <p className="text-sm text-blue-500 font-medium">{t.academy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
