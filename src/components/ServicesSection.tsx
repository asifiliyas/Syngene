'use client';

import React from 'react';
import Image from 'next/image';

const servicesData = [
  {
    title: "Research Services",
    description: "Scientific rigor and cross-functional collaboration propelled the advancement of discovery programs across multiple therapeutic areas.",
    image: "/Ss1.png"
  },
  {
    title: "Dedicated R&D Centres",
    description: "Our long-standing collaborations with pharmaceutical leaders exemplify our commitment to scientific rigor, operational excellence, and shared success.",
    image: "/Ss2.png"
  },
  {
    title: "Development Services",
    description: "We focus on advancing small molecules and next-gen modalities like ADCs, oligonucleotides, and peptides, ensuring efficient, sustainable, and scientifically rigorous transitions from development to GMP-compliant manufacturing.",
    image: "/Ss3.png"
  },
  {
    title: "Contract Development and Manufacturing Services (CDMO)",
    description: "Driven by digital transformation, operational excellence, and the highest quality standards, we set new benchmarks in commercial-scale manufacturing for both small and large molecules.",
    image: "/Ss4.png"
  }
];


const workforceData = {
  title: "Our Workforce",
  description: "At Syngene, we believe that investing in our people is fundamental to achieving scientific excellence. Through comprehensive learning and development programs, we provide opportunities for skill-building, career growth, and leadership development, ensuring our employees are equipped to deliver their best work.",
  image: "/Workforce.png"
};

const csrData = {
  title: "Corporate Social Responsibility",
  description: "At Syngene, we drive meaningful change through CSR initiatives in Healthcare, Science Education, Research and Scholarships, and Environmental Sustainability, thus empowering underserved communities in partnership with the Biocon Foundation and the Biocon Academy.",
  image: "/Corporate.png"
};

export default function ServicesSection() {
  const gradientStyle = {
    background: "linear-gradient(91deg, #F78D2F 0%, #A0609E 52%, #004172 100%)",
  };

  return (
    <section className="bg-white font-myriad">
      {/* Strategic Priorities Banner */}
      <section
        style={gradientStyle}
        className="w-full h-auto min-h-[402px] sm:min-h-[602px] flex flex-col justify-center items-start"
      >
        <div className="container mx-auto px-4 md:px-[140px] max-w-[1366px] py-20">
          <div className="flex flex-col items-start mb-12">
            <span className="bg-white text-[#333] px-6 py-1 text-[18px] font-semibold mb-1">
              Strategic Priorities
            </span>
            <h2 className="text-white text-4xl md:text-[60px] font-semibold leading-tight">
              Research Services
            </h2>
          </div>

          <div className="w-full h-[1px] bg-white/40 mb-12"></div>

          <div className="flex flex-col items-start">
            <span className="bg-white text-[#333] px-6 py-1 text-[18px] font-semibold mb-1">
              Our Value Creation Model
            </span>
            <h2 className="text-white text-4xl md:text-[60px] font-semibold leading-tight">
              Our Business
            </h2>
          </div>
        </div>
      </section>

      {/* Header Section: "Our Services" with Wide Layout */}
      <div className="relative sm:mt-24 sm:mb-24 mt-0 mb-0 h-[250px] sm:h-[300px] flex items-center justify-center overflow-hidden bg-white">
        {/* Repeating Background Text - Larger, Wider Tracking, 4 items */}
        <div className="absolute inset-0 flex justify-center items-center gap-[100px] sm:gap-[175px] pointer-events-none z-0">
          {[1, 2, 3, 4].map((_, i) => (
            <span key={i} className="text-[20px] sm:text-[34px] font-semibold text-black tracking-[2px]  sm:tracking-wider whitespace-nowrap">
              Our Services
            </span>
          ))}
        </div>

        {/* Overlapping Center Image - Widened to cover more of the 2nd/3rd text instances */}
        <div className="relative z-10 bg-white px-2">
          <div className=" sm:w-[400px] sm:h-[260px] w-[250px] h-[180px] rounded-[20px] overflow-hidden border-[6px] border-white shadow-xl">
            <Image 
              src="/Ss1.png" 
              alt="Services Overview" 
              fill
              className="object-cover rounded-[14px]"
            />
          </div>
        </div>
      </div>

      {/* Vertical Image Stack: The 4 Service Blocks */}
      <div className="container mx-auto px-4 md:px-[70px]">
        <div className="flex flex-col">
          {servicesData.map((item, index) => {
            const progressWidth = `${(index + 1) * 25}%`;
            
            return (
              <div 
                key={index}
                className={`
                  group relative w-full h-[400px] sm:h-[602px] overflow-hidden 
                  rounded-[20px]
                `}
              >
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div 
                  className="absolute inset-0 z-10"
                  
                />

                <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-12 md:px-24">
                  <h3 className="text-white text-3xl md:text-[35px] font-semibold mb-2 sm:mb-5 max-w-[700px] leading-7 sm:leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-white text-[15px] md:text-[17px] leading-[1.6] max-w-[480px] mb-2 sm:mb-10 font-normal opacity-95">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center gap-3 group/btn cursor-pointer">
                    <div className="w-[2px] h-6 bg-[#E38D13]"></div>
                    <span className="text-white font-semibold text-sm uppercase tracking-widest group-hover/btn:text-[#F78D2F] transition-colors">
                      Read More
                    </span>
                  </div>

                  {/* Bottom Progress Line - Dynamic 25/50/75/100 */}
                  <div className="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 md:left-24 flex items-center gap-0 w-full max-w-[280px] sm:max-w-[400px]">
                    <div 
                      className="h-[2px] bg-white transition-all duration-700" 
                      style={{ width: progressWidth }}
                    ></div>
                    <div 
                      className="h-[1px] bg-white/30"
                      style={{ width: `${100 - (index + 1) * 25}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 1. Our Workforce Section (Image Left) */}
      <div className="relative flex flex-col md:flex-row items-center min-h-[600px]">
        {/* Left Side: Image with Mask */}
        <div className="w-full md:w-1/2 relative h-[430px] md:h-[600px]">
          <Image 
            src={workforceData.image}
            alt={workforceData.title}
            fill
            className="object-cover"
          />
          {/* Decorative Purple Wave & Spheres
          <div className="absolute inset-0 z-10 pointer-events-none">
             <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-tr from-[#A0609E] to-transparent opacity-60 rounded-tr-full transform scale-x-150 translate-y-10"></div>
             <div className="absolute bottom-20 left-1/4 w-4 h-4 rounded-full bg-cyan-400 blur-[1px]"></div>
          </div> */}
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 sm:p-10 md:p-8 lg:pl-10">
          <h2 className="text-[#333] text-[25px] md:text-[35px] font-semibold mb-4">
            {workforceData.title}
          </h2>
          <p className="text-[#004A81] text-[16px] md:text-[18px] leading-tight mb-10 font-medium lg:w-[501px] sm:w-[400px]">
            {workforceData.description}
          </p>
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-[3px] h-6 bg-[#E38D13]"></div>
            <span className="text-[#004A81] font-semibold text-md  tracking-normal group-hover:text-[#F78D2F] transition-colors">
              Read More
            </span>
          </div>
        </div>
      </div>

      {/* 2. CSR Section (Image Right) */}
      <div className="relative flex flex-col md:flex-row-reverse items-center min-h-[600px]">
        {/* Right Side: Image with Mask */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px]">
          <Image 
            src={csrData.image}
            alt={csrData.title}
            fill
            className="object-cover"
          />
          {/* Decorative Purple/Cyan Wave Overlays
          <div className="absolute inset-0 z-10 pointer-events-none">
             <div className="absolute bottom-0 right-0 w-[120%] h-1/2 bg-[#A0609E] rounded-tl-[500px] transform translate-y-20 translate-x-20"></div>
             <div className="absolute top-20 right-[10%] w-6 h-6 rounded-full bg-purple-400 opacity-60"></div>
          </div> */}
        </div>

        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 p-10 sm:p-8 lg:p-20 lg:pr-10">
          <h2 className="text-[#333] text-[25px] md:text-[35px] font-semibold mb-4">
            {csrData.title}
          </h2>
          <p className="text-[#004A81] text-[16px] md:text-[18px] leading-tight mb-10 font-medium sm:w-[400px] lg:w-[490px]">
            {csrData.description}
          </p>
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-[3px] h-6 bg-[#E38D13]"></div>
            <span className="text-[#004A81] font-semibold text-md  tracking-normal group-hover:text-[#F78D2F] transition-colors">
              Read More
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}