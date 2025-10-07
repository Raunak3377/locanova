import React from 'react';
import './Services.css';
import { Route, useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const services = [
    { 
      name: "SEO Services", 
      icon: "🔍",
      description: "Boost your search rankings and organic traffic.",
      route: "/seo-services"
    },
    { 
      name: "Social Media Marketing", 
      icon: "📱",
      description: "Grow your brand with expert social media strategies.",
      route: "/social-media-marketing"
    },
    { 
      name: "PPC / Lead Generation", 
      icon: "💸",
      description: "Get instant leads with targeted PPC campaigns.",
      route: "/ppc-lead-generation"
    },
    { 
      name: "GMB Setup & Management", 
      icon: "📍",
      description: "Optimize your Google My Business for local search.",
      route: "/gmb-setup-management"
    },
    { 
      name: "Ecommerce / Shopify", 
      icon: "🛒",
      description: "Launch and grow your online store with ease.",
      route: "/ecommerce-shopify"
    },
    { 
      name: "Real Estate Marketing", 
      icon: "🏠",
      description: "Sell properties faster with digital marketing.",
      route: "/real-estate-marketing"
    },
    { 
      name: "Influencer Marketing", 
      icon: "🤝",
      description: "Partner with influencers to expand your reach.",
      route: "/influencer-marketing"
    },
    { 
      name: "Growth Consulting Agency", 
      icon: "🚀",
      description: "Accelerate your business with expert consulting.",
      route: "/growth-consulting"
    },
    {
      name: "Website and SAAS",
      icon: "📱",
      description: "we made your modern UI website and softwere custom for you",
      route: "/website-devlopment"
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-heading">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive digital solutions to accelerate your business growth
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate(service.route)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.name}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
