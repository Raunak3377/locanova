import { motion } from "motion/react";
import { MessageCircle, X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";

export const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessName: "",
  });
  const hasAutoOpenedRef = useRef(false);
  const scrollTimerRef = useRef<number | null>(null);

  const phoneNumber = "917766828618";

  const buildWhatsAppUrl = () => {
    const message = encodeURIComponent(
      `New Strategy Call Request

Name: ${formData.name}
Phone: ${formData.phone}
Business Name: ${formData.businessName}`
    );

    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const whatsappUrl = buildWhatsAppUrl();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsOpen(false);
    setFormData({ name: "", phone: "", businessName: "" });
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (hasAutoOpenedRef.current || scrollTimerRef.current !== null) return;

      scrollTimerRef.current = window.setTimeout(() => {
        if (!hasAutoOpenedRef.current) {
          setIsOpen(true);
          hasAutoOpenedRef.current = true;
        }
      }, 10000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimerRef.current !== null) {
        window.clearTimeout(scrollTimerRef.current);
      }
    };
  }, []);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-5 right-4 sm:bottom-8 sm:right-8 z-[100] flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] cursor-pointer group"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40 transition-opacity" />
        <MessageCircle size={28} className="text-white relative z-10 sm:w-8 sm:h-8" />

        <div className="absolute right-20 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 sm:group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl hidden sm:block">
          View Work & Portfolio
          <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-8 border-transparent border-l-white" />
        </div>
      </motion.button>

      {isOpen && (
        <div className="fixed inset-0 z-[110] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full max-w-md rounded-2xl border border-white/10 bg-[#090909] p-4 sm:p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between mb-5">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">Book Strategy Call</h3>
                <p className="text-white/60 text-xs sm:text-sm mt-1">
                  To view our work and portfolio, connect with us on WhatsApp.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Close form"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                required
                aria-label="Your Name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-blue-500/50"
              />
              <input
                type="tel"
                required
                aria-label="Phone Number"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="Phone Number"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-blue-500/50"
              />
              <input
                type="text"
                required
                aria-label="Business Name"
                value={formData.businessName}
                onChange={(e) => handleChange("businessName", e.target.value)}
                placeholder="Business Name"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-blue-500/50"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-[#25D366] hover:bg-[#1fb85a] transition-colors px-4 py-3 text-sm font-semibold text-white"
              >
                Send on WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
};
