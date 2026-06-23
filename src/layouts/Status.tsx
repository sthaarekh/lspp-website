import React from 'react';
import { statsData } from '../data/stats';

const Status = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
          Spreading Innovation Across Nepal
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {statsData.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-[#111111] border border-zinc-800/50 rounded-3xl p-8 text-left h-[180px] flex flex-col justify-center"
            >
              <span className="text-3xl md:text-4xl font-bold text-[#4fd1c5] block mb-2">
                {stat.value}
              </span>
              <span className="text-zinc-400 text-base font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Status;