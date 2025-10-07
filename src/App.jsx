import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import Hero from './components/hero.jsx'
import Services from './components/Services.jsx'
import Capabilities from './components/Capabilities.jsx'
import ValueProposition from './components/ValueProposition.jsx'
import Clients from './components/Clients.jsx'
import Team from './components/Team.jsx'
import Blog from './pages/Blog.jsx'
import Pricing from './components/Pricing.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import SeoServices from './pages/SeoServices.jsx'
import SocialMediaMarketing from './pages/SocialMediaMarketing.jsx'
import PpcLeadGeneration from './pages/PpcLeadGeneration.jsx'
import GmbSetupManagement from './pages/GmbSetupManagement.jsx'
import EcommerceShopify from './pages/EcommerceShopify.jsx'
import RealEstateMarketing from './pages/RealEstateMarketing.jsx'
import InfluencerMarketing from './pages/InfluencerMarketing.jsx'
import GrowthConsulting from './pages/GrowthConsulting.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'   // ✅ import
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* ✅ Smooth scroll to top on route change */}
      <ScrollToTop />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <Capabilities />
            <Pricing />
            <ValueProposition />
            <Clients />
            <Team />
          </>
        } />

        {/* Other Pages */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />

        {/* Service Detail Pages */}
        <Route path="/services" element={<Services />} />
        <Route path="/seo-services" element={<SeoServices />} />
        <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
        <Route path="/ppc-lead-generation" element={<PpcLeadGeneration />} />
        <Route path="/gmb-setup-management" element={<GmbSetupManagement />} />
        <Route path="/ecommerce-shopify" element={<EcommerceShopify />} />
        <Route path="/real-estate-marketing" element={<RealEstateMarketing />} />
        <Route path="/influencer-marketing" element={<InfluencerMarketing />} />
        <Route path="/growth-consulting" element={<GrowthConsulting />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
