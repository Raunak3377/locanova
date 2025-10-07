import React from "react";
import { Helmet } from "react-helmet";

export default function GmbSetupManagement() {
  return (
    <div className="service-page">
      {/* SEO Metadata */}
      <Helmet>
        <title>Best Google My Business (GMB) Setup & Management in Bihar | Patna, Gaya, Bhagalpur</title>
        <meta 
          name="description" 
          content="Boost your local presence with expert Google My Business (GMB) setup & management services in Bihar, Patna, Gaya, and Bhagalpur. Get found on Google Maps & local search." 
        />
        <meta 
          name="keywords" 
          content="GMB setup Bihar, Google My Business Patna, GMB management Gaya, local SEO Bhagalpur, best GMB agency Bihar" 
        />
      </Helmet>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Google My Business (GMB) Setup & Management in Bihar, Patna, Gaya & Bhagalpur</h1>
          <p>
            Appear on Google Maps and dominate local search with our GMB setup 
            and management services. We help businesses in Bihar boost their 
            visibility and attract more local customers.
          </p>
          <a href="/contact" className="cta-btn">Boost My Local SEO</a>
        </div>
      </header>

      {/* Why Choose Us */}
      <section className="section">
        <h2>Why Choose Our GMB Setup & Management Services?</h2>
        <p>
          A well-optimized Google My Business profile can drive real foot traffic, 
          phone calls, and leads. Our team ensures your business stands out 
          in local searches across Bihar, including Patna, Gaya, and Bhagalpur.
        </p>
      </section>

      {/* Services Grid */}
      <section className="services">
        <div className="service-card">
          <h3>📍 GMB Profile Creation & Verification</h3>
          <p>
            We create and verify your Google My Business profile so your 
            business gets discovered instantly on Google Maps.
          </p>
        </div>
        <div className="service-card">
          <h3>🔎 Local SEO Optimization</h3>
          <p>
            Optimize your GMB listing with the right keywords, categories, 
            and descriptions to rank higher in local searches.
          </p>
        </div>
        <div className="service-card">
          <h3>⭐ Review Management</h3>
          <p>
            Build trust by managing customer reviews, improving ratings, 
            and responding to feedback professionally.
          </p>
        </div>
        <div className="service-card">
          <h3>📊 Regular Updates & Insights</h3>
          <p>
            Keep your GMB profile fresh with regular updates, 
            photos, offers, and performance insights.
          </p>
        </div>
      </section>

      {/* Expertise */}
      <section className="section">
        <h2>Local SEO & GMB Experts in Bihar</h2>
        <p>
          As a leading <strong>GMB management agency in Bihar</strong>, 
          we serve businesses in <strong>Patna, Gaya, Bhagalpur, Muzaffarpur</strong>, 
          and beyond. With our local SEO strategies, we ensure your business 
          dominates search results and captures local customers.
        </p>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Get Found on Google Maps Today</h2>
        <p>
          Don’t let competitors outrank you. Let’s optimize your Google My Business profile 
          and start attracting more local customers now.
        </p>
        <a href="/contact" className="cta-btn">Contact Us Now</a>
      </section>

      {/* Inline CSS */}
      <style>{`
        .service-page {
          font-family: 'Segoe UI', Roboto, sans-serif;
          color: #333;
          line-height: 1.6;
        }

        /* Hero */
        .hero {
          background: linear-gradient(135deg, #34a853, #0f9d58);
          color: white;
          padding: 80px 20px;
          text-align: center;
        }
        .hero h1 {
          font-size: 2.2rem;
          margin-bottom: 15px;
        }
        .hero p {
          max-width: 750px;
          margin: 0 auto 20px;
          font-size: 1.1rem;
        }
        .cta-btn {
          display: inline-block;
          background: #ff6600;
          color: white;
          padding: 12px 28px;
          border-radius: 30px;
          font-weight: bold;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .cta-btn:hover {
          background: #e05500;
          transform: scale(1.05);
        }

        /* Sections */
        .section {
          padding: 50px 20px;
          text-align: center;
          max-width: 1000px;
          margin: 0 auto;
        }
        .section h2 {
          font-size: 1.8rem;
          margin-bottom: 15px;
          color: #222;
        }

        /* Services Grid */
        .services {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
          padding: 50px 20px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .service-card {
          background: white;
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        .service-card h3 {
          font-size: 1.3rem;
          margin-bottom: 10px;
          color: #0f9d58;
        }

        /* CTA Section */
        .cta-section {
          text-align: center;
          padding: 60px 20px;
          background: #f9fafc;
        }
        .cta-section h2 {
          font-size: 2rem;
          margin-bottom: 15px;
          color: #222;
        }
        .cta-section p {
          max-width: 700px;
          margin: 0 auto 25px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero {
            padding: 60px 15px;
          }
          .hero h1 {
            font-size: 1.8rem;
          }
          .services {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
