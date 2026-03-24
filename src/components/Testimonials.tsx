import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Locanova's system is a game-changer. Our admissions grew by 40% in just one intake cycle. The automation is flawless.",
    author: "Dr. Rajesh Sharma",
    role: "Director, Heritage Institute"
  },
  {
    text: "The lead quality tracking is what sets them apart. We finally know exactly where our best students are coming from.",
    author: "Rajesh Kumar",
    role: "Admissions Head, LanguageStep"
  },
  {
    text: "Locanova has completely transformed how our team handles enquiries. The minimal aesthetic of their landing pages converts like crazy.",
    author: "Vijay Vidyarthi",
    role: "Marketing Head, Aura Academy"
  }
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden bg-black/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="absolute -top-10 sm:-top-16 left-1/2 -translate-x-1/2 opacity-20">
          <Quote size={72} fill="white" className="text-blue-500 sm:w-[100px] sm:h-[100px]" />
        </div>

        <div className="min-h-[280px] sm:min-h-[320px] md:min-h-[300px] flex items-center justify-center px-2 sm:px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 sm:space-y-10"
            >
              <p className="text-lg sm:text-2xl md:text-4xl font-medium tracking-tight leading-snug italic text-white text-glow">
                "{testimonials[index].text}"
              </p>
              
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white">{testimonials[index].author}</h4>
                <p className="text-blue-400 text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-2">
                  {testimonials[index].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                i === index ? "w-8 bg-blue-500" : "bg-white/10 hover:bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
