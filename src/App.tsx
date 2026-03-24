import { NeuralBackground } from "./components/NeuralBackground";
import { CustomCursor } from "./components/CustomCursor";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { SystemServices } from "./components/SystemServices";
import { LeadQuality } from "./components/LeadQuality";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { DetailedSEOContent } from "./components/DetailedSEOContent";
import { CTA } from "./components/CTA";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Instagram, Linkedin, Mail, MessageCircle, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import {
  BlogIndexPage,
  BlogPostPage,
  InstitutePage,
  RealEstatePage,
  ServicePage,
} from "./pages/MarketingPages";

const LOGO_SRC = "/logo.png";

const LegacyHomeSections = () => (
  <>
    <Hero />
    <Features />
    <div id="services">
      <SystemServices />
    </div>
    <div id="guarantee">
      <LeadQuality />
    </div>
    <div id="process">
      <Process />
    </div>
    <Testimonials />
    <DetailedSEOContent />
    <CTA />
  </>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsMenuOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen selection:bg-blue-500/30 overflow-x-hidden">
      <CustomCursor />

      <nav className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3 sm:py-6 md:py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md px-3 sm:px-4 py-2.5 sm:py-3">
          <Link to="/" className="flex items-center gap-3 z-50">
            <img
              src={LOGO_SRC}
              alt="Locanova logo"
              className="w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-[0_0_8px_rgba(10,61,145,0.5)]"
            />
            <div className="text-base sm:text-lg md:text-xl font-bold tracking-tighter text-white">
              LOCANOVA<span className="text-blue-500">.</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-xs font-medium uppercase tracking-widest text-white/70">
            <Link to="/institute-marketing-system" className="hover:text-white transition-colors">Institutes</Link>
            <Link to="/real-estate-marketing-system" className="hover:text-white transition-colors">Real Estate</Link>
            <Link to="/blog/" className="hover:text-white transition-colors">Blog</Link>
            <a 
              href="https://wa.me/917766828618" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition-all flex items-center gap-2 text-white"
            >
              <MessageCircle size={14} />
              Contact Us
            </a>
          </div>

          <button 
            className="md:hidden z-50 p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 md:hidden">
            <Link to="/institute-marketing-system" className="text-2xl font-bold tracking-widest text-white/70 hover:text-white">INSTITUTES</Link>
            <Link to="/real-estate-marketing-system" className="text-2xl font-bold tracking-widest text-white/70 hover:text-white">REAL ESTATE</Link>
            <Link to="/blog/" className="text-2xl font-bold tracking-widest text-white/70 hover:text-white">BLOG</Link>
            <a href="https://wa.me/917766828618" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold tracking-widest flex items-center gap-2">
              <MessageCircle size={20} />
              CONTACT US
            </a>
          </div>
        )}
      </nav>

      <NeuralBackground />
      
      <main>
        <Routes>
          <Route path="/" element={<LegacyHomeSections />} />
          <Route path="/institute-marketing-system" element={<InstitutePage />} />
          <Route path="/real-estate-marketing-system" element={<RealEstatePage />} />
          <Route
            path="/coaching-institute-lead-generation"
            element={
              <ServicePage
                title="Coaching Institute Lead Generation"
                description="Coaching institute lead generation system built to increase qualified admission enquiries."
                canonicalPath="/coaching-institute-lead-generation"
                problem="You are generating inquiries but not enough qualified students are converting into admissions."
                solution="We deploy high-intent ad funnels, dedicated landing pages, instant follow-up automation, and counselor workflows that improve conversion speed."
                relatedLinks={[
                  { href: "/institute-marketing-system", label: "Institute Marketing System" },
                  { href: "/crm-for-coaching-institutes", label: "CRM for Coaching Institutes" },
                  { href: "/blog/how-coaching-institutes-can-increase-admissions", label: "How Coaching Institutes Can Increase Admissions" },
                ]}
              />
            }
          />
          <Route
            path="/beauty-academy-marketing"
            element={
              <ServicePage
                title="Beauty Academy Marketing"
                description="Beauty academy marketing system to drive quality leads and consistent admissions."
                canonicalPath="/beauty-academy-marketing"
                problem="Beauty academies lose hot leads due to delayed response and unstructured nurturing."
                solution="Our system combines ads, WhatsApp nurturing, and CRM pipelines to move leads from enquiry to paid admission faster."
                relatedLinks={[
                  { href: "/institute-marketing-system", label: "Institute Marketing System" },
                  { href: "/coaching-institute-lead-generation", label: "Coaching Institute Lead Generation" },
                  { href: "/blog/why-institutes-lose-leads", label: "Why Institutes Lose Leads" },
                ]}
              />
            }
          />
          <Route
            path="/crm-for-coaching-institutes"
            element={
              <ServicePage
                title="CRM for Coaching Institutes"
                description="CRM for coaching institutes with follow-up alerts, lead stages, and WhatsApp workflows."
                canonicalPath="/crm-for-coaching-institutes"
                problem="Without CRM, leads get missed, follow-ups break, and admission numbers become unpredictable."
                solution="We set up a coaching-first CRM process with lead scoring, counselor accountability, and conversion tracking."
                relatedLinks={[
                  { href: "/institute-marketing-system", label: "Institute Marketing System" },
                  { href: "/coaching-institute-lead-generation", label: "Coaching Institute Lead Generation" },
                  { href: "/blog/why-institutes-lose-leads", label: "Why Institutes Lose Leads" },
                ]}
              />
            }
          />
          <Route
            path="/real-estate-lead-generation"
            element={
              <ServicePage
                title="Real Estate Lead Generation"
                description="Real estate lead generation agency workflow designed for project enquiries that convert."
                canonicalPath="/real-estate-lead-generation"
                problem="Low quality leads and random campaigns increase spend but reduce site visits and bookings."
                solution="We run intent-led ads, project landing pages, and retargeting loops that improve lead quality and conversion."
                relatedLinks={[
                  { href: "/real-estate-marketing-system", label: "Real Estate Marketing System" },
                  { href: "/facebook-ads-for-real-estate", label: "Facebook Ads for Real Estate" },
                  { href: "/blog/how-to-generate-property-leads-using-facebook-ads", label: "Property Leads Using Facebook Ads" },
                ]}
              />
            }
          />
          <Route
            path="/facebook-ads-for-real-estate"
            element={
              <ServicePage
                title="Facebook Ads for Real Estate"
                description="Facebook ads for real estate projects with better targeting, lead quality, and follow-up sync."
                canonicalPath="/facebook-ads-for-real-estate"
                problem="Most real estate ad campaigns optimize for cheap forms, not qualified buyers."
                solution="We structure campaigns by buying intent, project positioning, and conversion workflows tied to CRM."
                relatedLinks={[
                  { href: "/real-estate-marketing-system", label: "Real Estate Marketing System" },
                  { href: "/real-estate-whatsapp-marketing", label: "Real Estate WhatsApp Marketing" },
                  { href: "/blog/how-to-generate-property-leads-using-facebook-ads", label: "Property Leads Using Facebook Ads" },
                ]}
              />
            }
          />
          <Route
            path="/real-estate-whatsapp-marketing"
            element={
              <ServicePage
                title="Real Estate WhatsApp Marketing"
                description="Real estate WhatsApp marketing automation for faster response and better follow-up conversion."
                canonicalPath="/real-estate-whatsapp-marketing"
                problem="Property leads go cold quickly when response and nurturing are inconsistent."
                solution="We automate instant WhatsApp replies, qualification steps, and follow-up sequences integrated with CRM."
                relatedLinks={[
                  { href: "/real-estate-marketing-system", label: "Real Estate Marketing System" },
                  { href: "/real-estate-crm-system", label: "Real Estate CRM System" },
                  { href: "/blog/why-most-real-estate-leads-dont-convert", label: "Why Most Real Estate Leads Don’t Convert" },
                ]}
              />
            }
          />
          <Route
            path="/real-estate-crm-system"
            element={
              <ServicePage
                title="Real Estate CRM System"
                description="Real estate CRM system for lead tracking, sales visibility, and predictable conversion."
                canonicalPath="/real-estate-crm-system"
                problem="No single view of lead stages leads to missed follow-ups and weak sales visibility."
                solution="We build CRM pipelines with stage tracking, alerts, and team accountability across projects."
                relatedLinks={[
                  { href: "/real-estate-marketing-system", label: "Real Estate Marketing System" },
                  { href: "/real-estate-whatsapp-marketing", label: "Real Estate WhatsApp Marketing" },
                  { href: "/blog/why-most-real-estate-leads-dont-convert", label: "Why Most Real Estate Leads Don’t Convert" },
                ]}
              />
            }
          />
          <Route path="/blog/" element={<BlogIndexPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </main>

      <WhatsAppButton />

      <footer className="relative border-t border-white/10 bg-black/80 px-4 sm:px-6 pt-12 sm:pt-16 pb-24 sm:pb-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-10 sm:gap-12 md:grid-cols-4">
            <div className="md:col-span-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
                <img
                  src={LOGO_SRC}
                  alt="Locanova logo"
                  className="w-9 h-9 object-contain drop-shadow-[0_0_8px_rgba(10,61,145,0.45)]"
                />
                <div className="text-2xl font-bold tracking-tighter text-white">
                  LOCANOVA<span className="text-blue-500">.</span>
                </div>
              </div>
              <p className="max-w-md text-white/60 text-sm leading-relaxed">
                One complete admission and growth system for coaching institutes,
                academies, and beauty institutes. We connect lead generation,
                conversion, and branding so your pipeline runs with control.
              </p>
              <a
                href="https://wa.me/917766828618?text=Hello%20Locanova,%20I%20want%20to%20view%20your%20work%20and%20portfolio."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600/90 hover:bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition-colors w-full sm:w-auto justify-center"
              >
                <MessageCircle size={16} />
                Connect on WhatsApp
              </a>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
                Quick Links
              </h4>
              <div className="space-y-3 text-sm">
                <Link to="/institute-marketing-system" className="block text-white/60 hover:text-white transition-colors">Institute System</Link>
                <Link to="/real-estate-marketing-system" className="block text-white/60 hover:text-white transition-colors">Real Estate System</Link>
                <Link to="/blog/" className="block text-white/60 hover:text-white transition-colors">Blog</Link>
              </div>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
                Contact
              </h4>
              <div className="space-y-3 text-sm">
                <a
                  href="mailto:locanova.digital@gmail.com"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                >
                  <Mail size={15} />
                  locanova.digital@gmail.com
                </a>
                <a
                  href="https://wa.me/917766828618"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                >
                  <MessageCircle size={15} />
                  +91 7766828618
                </a>
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href="https://www.instagram.com/locanova.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={17} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/locanova-digital/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={17} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-white/35 uppercase tracking-widest text-center sm:text-left">
              © 2026 Locanova Admission Growth System. All rights reserved.
            </p>
            <p className="text-[11px] text-white/35 uppercase tracking-widest text-center sm:text-right">
              Built for predictable admissions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
