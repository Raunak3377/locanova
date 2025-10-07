import React from "react";
import { Helmet } from "react-helmet";

export default function InfluencerMarketing() {
  return (
    <div className="service-page influencer-marketing">
      <Helmet>
        <title>
          Best Influencer Marketing Agency in Bihar, Gaya, Bhagalpur & Patna
        </title>
        <meta
          name="description"
          content="Work with the leading influencer marketing agency in Bihar, Gaya, Bhagalpur, and Patna. We connect your brand with trusted influencers to boost awareness, engagement, and sales."
        />
        <meta
          name="keywords"
          content="influencer marketing Bihar, influencer agency Gaya, social media influencer Bhagalpur, influencer Patna, influencer campaigns Bihar, brand promotion Bihar"
        />
      </Helmet>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Influencer Marketing in Bihar, Gaya, Bhagalpur & Patna</h1>
          <h2>Boost Your Brand with Authentic Influencer Campaigns</h2>
          <p>
            We help brands in Bihar, Gaya, Bhagalpur, and Patna build trust and
            visibility by collaborating with top social media influencers. Our
            campaigns focus on genuine connections, strong engagement, and
            measurable growth.
          </p>
          <a href="#services" className="cta-btn">
            Explore Our Services
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="services">
        <h3>Our Influencer Marketing Services</h3>
        <ul>
          <li>
            <strong>Influencer Identification & Outreach</strong> – Find the
            right influencers that align with your brand values.
          </li>
          <li>
            <strong>Campaign Strategy & Management</strong> – End-to-end
            planning, execution, and monitoring of influencer campaigns.
          </li>
          <li>
            <strong>Content Creation & Reporting</strong> – Engaging posts,
            reels, and videos backed by data-driven insights.
          </li>
          <li>
            <strong>Brand Awareness & Engagement</strong> – Increase
            visibility, build trust, and drive customer action.
          </li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h3>Why Choose Our Agency?</h3>
        <p>
          Unlike generic influencer platforms, we focus on{" "}
          <strong>local connections</strong>. Our influencer partnerships in
          Bihar, Gaya, Bhagalpur, and Patna deliver authentic campaigns that
          truly resonate with your target audience.
        </p>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h3>Ready to Take Your Brand to the Next Level?</h3>
        <p>
          Let’s create powerful influencer campaigns that bring real results for
          your business.
        </p>
        <a href="/contact" className="cta-btn">
          Get Started Today
        </a>
      </section>

      {/* CSS Styling */}
      <style>{`
        .service-page {
          font-family: 'Segoe UI', sans-serif;
          line-height: 1.6;
          color: #222;
        }

        /* Hero Section */
        .hero {
          background: linear-gradient(to right, #ff7eb3, #ff758c);
          color: white;
          padding: 60px 20px;
          text-align: center;
        }
        .hero h1 {
          font-size: 2rem;
          margin-bottom: 10px;
        }
        .hero h2 {
          font-size: 1.4rem;
          margin-bottom: 15px;
        }
        .hero p {
          max-width: 700px;
          margin: 0 auto 20px;
        }
        .cta-btn {
          display: inline-block;
          padding: 12px 24px;
          background: white;
          color: #ff4f81;
          border-radius: 25px;
          font-weight: bold;
          text-decoration: none;
          transition: 0.3s;
        }
        .cta-btn:hover {
          background: #ffe5ec;
        }

        /* Services */
        .services {
          padding: 40px 20px;
          background: #f9f9f9;
        }
        .services h3 {
          text-align: center;
          margin-bottom: 20px;
          color: #ff4f81;
        }
        .services ul {
          max-width: 800px;
          margin: 0 auto;
          list-style: none;
          padding: 0;
        }
        .services li {
          background: white;
          padding: 15px;
          margin-bottom: 15px;
          border-radius: 10px;
          box-shadow: 0 3px 8px rgba(0,0,0,0.08);
        }

        /* Why Us */
        .why-us {
          padding: 40px 20px;
          text-align: center;
        }
        .why-us h3 {
          margin-bottom: 15px;
          color: #ff4f81;
        }
        .why-us p {
          max-width: 700px;
          margin: 0 auto;
        }

        /* CTA Section */
        .cta {
          background: linear-gradient(to right, #ff758c, #ff7eb3);
          color: white;
          padding: 50px 20px;
          text-align: center;
        }
        .cta h3 {
          margin-bottom: 15px;
        }
        .cta p {
          margin-bottom: 20px;
        }
        .cta-btn {
          background: white;
          color: #ff4f81;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 1.6rem;
          }
          .hero h2 {
            font-size: 1.2rem;
          }
          .services ul {
            padding: 0 10px;
          }
        }
      `}</style>
    </div>
  );
}
