import React from "react";
import { Helmet } from "react-helmet";

export default function EcommerceShopify() {
  return (
    <div className="service-page">
      {/* SEO Metadata */}
      <Helmet>
        <title>Best Ecommerce & Shopify Development in Bihar | Patna, Gaya, Bhagalpur</title>
        <meta 
          name="description" 
          content="Launch and scale your online store with the best ecommerce and Shopify development company in Bihar, Patna, Gaya, and Bhagalpur. Secure, scalable, and high-converting Shopify stores." 
        />
        <meta 
          name="keywords" 
          content="ecommerce development Bihar, Shopify agency Patna, Shopify experts Gaya, online store Bhagalpur, best ecommerce company Bihar" 
        />
      </Helmet>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Ecommerce & Shopify Development in Bihar, Patna, Gaya & Bhagalpur</h1>
          <p>
            Build and grow your online business with powerful, secure, and 
            scalable Shopify & ecommerce solutions tailored for your brand. 
            From store setup to optimization, we help you start selling online successfully.
          </p>
          <a href="/contact" className="cta-btn">Get Free Consultation</a>
        </div>
      </header>

      {/* Why Choose Us */}
      <section className="section">
        <h2>Why Choose Our Ecommerce & Shopify Development Services?</h2>
        <p>
          Whether you’re a startup or an established business in Bihar, 
          we provide end-to-end Shopify development and custom ecommerce solutions. 
          Our goal is to create high-converting online stores that deliver seamless 
          shopping experiences and sustainable growth.
        </p>
      </section>

      {/* Services */}
      <section className="services">
        <div className="service-card">
          <h3>🛒 Shopify Store Setup</h3>
          <p>
            Launch your Shopify store with professional setup, themes, and 
            product management optimized for conversions.
          </p>
        </div>
        <div className="service-card">
          <h3>⚡ Custom Ecommerce Development</h3>
          <p>
            We build tailored ecommerce platforms with unique features, 
            integrations, and designs to fit your business model.
          </p>
        </div>
        <div className="service-card">
          <h3>💳 Payment Gateway Integration</h3>
          <p>
            Secure and smooth payment integration for local and international 
            customers to build trust and increase sales.
          </p>
        </div>
        <div className="service-card">
          <h3>📦 Product & Order Management</h3>
          <p>
            Manage your products, inventory, and orders effortlessly 
            with scalable systems that support your growth.
          </p>
        </div>
      </section>

      {/* Expertise */}
      <section className="section">
        <h2>Ecommerce Solutions Across Bihar</h2>
        <p>
          As a trusted <strong>Shopify development agency in Bihar</strong>, 
          we serve businesses in <strong>Patna, Gaya, Bhagalpur, Muzaffarpur</strong>, 
          and beyond. From fashion to electronics, we’ve helped brands build 
          profitable ecommerce stores that stand out in the competitive market.
        </p>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to Start Selling Online?</h2>
        <p>
          Let’s build your ecommerce or Shopify store today. 
          Get in touch with our experts for a free consultation 
          and start your online journey.
        </p>
        <a href="/contact" className="cta-btn">Contact Us Today</a>
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
          background: linear-gradient(135deg, #6a11cb, #2575fc);
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
          color: #2575fc;
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
