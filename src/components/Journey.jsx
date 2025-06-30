// components/StatsSection.js
import React from "react";

const StatsSection = () => {
  const stats = [
    { value: "97%", label: "Client Satisfaction Rate" },
    { value: "0", label: "Detractors" },
    { value: "85", label: "Net Promoter Score" },
    { value: "Avg. 3 Years", label: "Client Relationship" }
  ];

  return (
    <section className="relative py-4 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Content container */}
      <div className="max-w-7xl mx-auto relative">
        {/* Main heading with higher z-index */}
        <div className="max-w-5xl mx-auto px-6 shadow-lg py-4 bg-gradient-to-r from-[#60eaf1] to-[#1385a5] rounded-t-[70px] rounded-b-lg relative z-20 mb-[-28px]">
          <h2 className="text-xl md:text-2xl lg:text-2xl font-bold text-center text-white py-2 px-24">
            "A Journey Of 5 Years With 235+ Projects And Long-Term Collaboration With 50+ Clients"
          </h2>
        </div>

       {/* Stats grid with lower z-index */}
<div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white gap-0  bg-gradient-to-r from-[#1AA7AD] to-[#0A85A7] shadow-lg rounded-[70px] p-1 pt-12 pb-8">
  {stats.map((stat, index) => (
    <div 
      key={index} 
      className={`
        text-center p-4
        ${index !== 0 ? 'border-l border-white border-opacity-30' : ''}
        ${index < 2 ? 'md:border-white md:border-opacity-30' : ''}
        ${index === 1 ? 'lg:border-b-0' : ''}
      `}
    >
      <p className="text-4xl font-bold mb-2">{stat.value}</p>
      <p className="text-lg">{stat.label}</p>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default StatsSection;