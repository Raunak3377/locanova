import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: "RAUNAK KUMAR",
      role: "CEO & Founder",
      linkedin: "https://www.linkedin.com/in/raunak-kumar77",
      image: "👨‍💼",
      description: "3+ years in digital marketing strategy"
    },
    {
      name: "ABHIMANYU SINGH",
      role: "Lead Developer",
      image: "👨‍💻",
      description: "Full-stack developer with AI expertise"
    },
    {
      name: "RAJVEER RAUSHAN",
      role: "FIELD MANAGER",
      image: "👨",
      description: "local advertising expert and ad strategist"
    },
    {
      name: "RAUNAK KARN",
      role: "GRAPHIC DESIGNER",
      image: "👨‍🔬",
      description: "Graphic designer and brand strategist"
    },
    {
      name: "ANJALI KUMARI",
      role: "CONTENT WRITER",
      image: "👩‍💼",
      description: "Creative writer and content strategist",
      linkedin: "https://www.linkedin.com/in/anjali-kumari-224b621b6"
    },
    {
      name: "SHIVAM KUMAR",
      role: "SEO SPECIALIST",
      image: "👨‍🔧",
      description: "SEO expert with 2+ years experience"
    },
  ];

  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-heading">Meet Our Team</h2>
          <p className="section-subtitle">
            Diverse professionals dedicated to your success
          </p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-image">
                <div className="image-placeholder">{member.image}</div>
                <div className="image-overlay"></div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
              </div>
              <div className="member-social">
                <a href={member.linkedin ? member.linkedin : "#"} className="social-link" target='_blank'>LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

