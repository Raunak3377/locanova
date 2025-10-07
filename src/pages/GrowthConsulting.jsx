import React from "react";
import { Helmet } from "react-helmet";

export default function GrowthConsulting() {
  return (
    <div className="service-page">
      {/* SEO Optimized Metadata */}
      <Helmet>
        <title>Best Growth Consulting Agency in Bihar | Business Strategy & Digital Transformation</title>
        <meta 
          name="description" 
          content="Looking for the best growth consulting agency in Bihar, Gaya, Bhagalpur, and Patna? We help businesses scale with proven strategies in business planning, digital transformation, and revenue growth." 
        />
        <meta 
          name="keywords" 
          content="growth consulting Bihar, business strategy Patna, consulting agency Gaya, digital transformation Bhagalpur, revenue growth Bihar, best consulting firm in Bihar" 
        />
      </Helmet>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Growth Consulting Agency in Bihar, Gaya, Bhagalpur & Patna</h1>
          <p>
            Unlock your business potential with tailored growth strategies, 
            digital transformation, and proven revenue acceleration models 
            designed for Bihar’s evolving market.
          </p>
          <a href="/contact" className="cta-btn">Get Free Consultation</a>
        </div>
      </header>

      {/* Why Choose Us */}
      <section className="section">
        <h2>Why Choose Our Growth Consulting Services?</h2>
        <p>
          In today’s competitive landscape, businesses in Bihar—including Patna, 
          Gaya, and Bhagalpur—face challenges in scaling operations, reaching 
          new markets, and adapting to digital technologies. Our consulting 
          agency provides a clear roadmap for sustainable growth, blending 
          local insights with global best practices.
        </p>
      </section>

      {/* Services Grid */}
      <section className="services">
        <div className="service-card">
          <h3>📊 Business Strategy & Planning</h3>
          <p>
            Actionable strategies for startups, SMEs, and enterprises focusing 
            on scalability, market positioning, and profitability.
          </p>
        </div>
        <div className="service-card">
          <h3>💻 Digital Transformation</h3>
          <p>
            From workflow automation to AI adoption, we guide your digital 
            journey for better efficiency and customer engagement.
          </p>
        </div>
        <div className="service-card">
          <h3>🔍 Market Research & Analysis</h3>
          <p>
            In-depth insights on customer behavior, industry trends, and 
            competitors in Bihar’s key cities.
          </p>
        </div>
        <div className="service-card">
          <h3>🚀 Revenue Growth Solutions</h3>
          <p>
            Sales optimization, digital marketing, and product strategies 
            designed to boost your revenue.
          </p>
        </div>
      </section>

      {/* Expertise */}
      <section className="section">
        <h2>Our Expertise Across Bihar</h2>
        <p>
          As a leading <strong>growth consulting agency in Bihar</strong>, 
          we serve clients in <strong>Patna, Gaya, Bhagalpur, Muzaffarpur</strong>, 
          and other business hubs. Our solutions empower local businesses 
          to compete with national and global brands.
        </p>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to Transform Your Business?</h2>
        <p>
          Let’s collaborate to design strategies that deliver measurable growth. 
          Partner with the best consulting agency in Bihar today.
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
          background: linear-gradient(135deg, #0077ff, #00c6ff);
          color: white;
          padding: 80px 20px;
          text-align: center;
        }
        .hero h1 {
          font-size: 2.2rem;
          margin-bottom: 15px;
        }
        .hero p {
          max-width: 700px;
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
          color: #0077ff;
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
