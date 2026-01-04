
import React from 'react';
import { TeamMember } from '../types';

const team: TeamMember[] = [
  { name: "Raunak kumar", role: "Founder & Strategy Architect" },
  { name: "Ananya Rao", role: "Automation Lead" },
  { name: "Prince kumar", role: "UGC Ads Specialist" },
  { name: "Tosif Arman", role: "Growth Consultant" },
  { name: "Raunak karn", role: "Graphic Designer" },
  { name: "Abhimanyu singh", role: "Operations Specialist" },
  { name: "Rajveer raushan", role: "Marketing Specialist" },
  { name: "Raunak kumar", role: "HR & System Consultation" },
];

const OurTeam: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-[#050811]" aria-label="Our Team Section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Experienced operators focused on building scalable systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {team.map((member, index) => (
            <div key={index} className="team-item text-center">
              <div className="h-0.5 bg-blue-600/30 w-12 mx-auto mb-6"></div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-blue-500 text-sm font-medium uppercase tracking-wider">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
