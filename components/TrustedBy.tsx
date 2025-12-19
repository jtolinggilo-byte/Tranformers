
import React from 'react';

const TrustedBy: React.FC = () => {
  const partners = ["VIRYA ENERGY", "MONT FORT", "CIRCLE", "CALENDLY"];

  return (
    <div className="border-y border-neutral-900 bg-neutral-950/50 backdrop-blur-sm relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale hover:opacity-80 transition-all duration-700">
        <span className="text-[10px] font-bold tracking-[0.3em] text-neutral-600 uppercase w-full md:w-auto text-center md:text-left">
          Framework Inspired By
        </span>
        {partners.map((partner) => (
          <div key={partner} className="text-lg font-bold tracking-tighter text-neutral-400 hover:text-white transition-colors cursor-default">
            {partner}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
