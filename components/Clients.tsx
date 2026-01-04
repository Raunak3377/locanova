
import React from 'react';

const clients = [
  "Brave institute, Ara",
  "Excellence study circle, Hazaribagh",
  "Aura national hair and Beauty Academy,Gaya",
  "Rambagh PVT. ITI, Gaya",
  "Shubhash international school, Gaya",
  "And Many More...",
];

const Clients: React.FC = () => {
  return (
    <section className="py-20 bg-[#050811] border-b border-blue-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-12">Trusted by Scaling Academies</p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-x-12 gap-y-10 items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center group opacity-40 hover:opacity-100 transition-opacity">
              <span className="text-xl font-bold text-white tracking-tight">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
