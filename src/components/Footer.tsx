'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Linkedin, X } from 'lucide-react';

const sliderData = [
    { title: "Syngene partners with a client for Global Economy Decarbonization", image: "/Slider01.png" },
    { title: "Enhancing Patient Compliance: Developing an Extended-Release Anti-Epileptic Drug", image: "/Slider02.png" },
    { title: "Syngene Enhances Bispecific Antibody Production", image: "/Slider03.png" },
    { title: "Pharmaceutical Development of Broad-Spectrum Antibiotics", image: "/Slider02.png" },
];

const downloadItems = [
    { title: "Board Report", link: "#" },
    { title: "Standalone Financial Statements", link: "#" },
    { title: "Corporate Governance Report", link: "#" },
    { title: "Consolidated Financial Statements", link: "#" },
    { title: "Business Responsibility and Sustainability Report", link: "#" },
    { title: "Glossary", link: "#" },
    { title: "Management Discussion and Analysis", link: "#" },
    { title: "AGM Notice", link: "#" },
    { title: "Annual Report 2024", link: "#" },
];



const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Use a triple-buffer for seamless looping
const extendedData = [...sliderData, ...sliderData, ...sliderData];

export default function CaseStudiesSlider() {
    // We start at sliderData.length to show the middle set.
    const [currentIndex, setCurrentIndex] = useState(sliderData.length);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const handleTransitionEnd = useCallback(() => {
        if (currentIndex >= sliderData.length * 2) {
            setIsTransitioning(false);
            setCurrentIndex(sliderData.length);
        } else if (currentIndex <= 0) {
            setIsTransitioning(false);
            setCurrentIndex(sliderData.length);
        }
    }, [currentIndex]);

    useEffect(() => {
        if (!isTransitioning) {
            const raf = requestAnimationFrame(() => {
                setIsTransitioning(true);
            });
            return () => cancelAnimationFrame(raf);
        }
    }, [isTransitioning]);

    const nextSlide = () => {
        if (isTransitioning) setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        if (isTransitioning) setCurrentIndex((prev) => prev - 1);
    };

    return (
        <div className="bg-white pt-10 sm:pt-20 font-myriad overflow-hidden">
            <div className="container mx-auto px-4 md:px-[70px] max-w-[1300px]">
                <h2 className="text-center text-[#004172] text-2xl md:text-[35px] font-semibold mb-4 sm:mb-16">
                    Case Studies
                </h2>

                <div className="relative">
                    {/* Navigation Arrows - Perfectly centered vertically */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-[#004172] hover:bg-[#004172] hover:text-white transition-all duration-300"
                    >
                        <span className="text-xl">❮</span>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-[#004172] hover:bg-[#004172] hover:text-white transition-all duration-300"
                    >
                        <span className="text-xl">❯</span>
                    </button>

                    {/* Slider Content Wrapper */}
                    <div className="w-full overflow-hidden">
                        <div
                            className={`flex ${isTransitioning ? 'transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)' : ''}`}
                            onTransitionEnd={handleTransitionEnd}
                            style={{
                                /* Math Fix: 
                                   1. Each card is 33.333% of the container.
                                   2. We multiply the index by this percentage.
                                   3. No complex calc() for gaps here; we use padding on the cards instead.
                                */
                                transform: `translateX(-${currentIndex * 33.3333}%)`
                            }}
                        >
                            {extendedData.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="w-full md:w-[33.3333%] flex-shrink-0 px-3"
                                >
                                    <div className="bg-white border border-gray-100 rounded-[25px] p-3 lg:p-5 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                                        {/* Rounded Image Container - object-contain ensures no cropping */}
                                        <div className="relative w-full h-[200px] md:h-[240px] rounded-[20px] overflow-hidden mb-6 bg-[#f8fbfc]">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="rounded-[20px]"
                                            />
                                        </div>

                                        <div className="px-2 flex-grow">
                                            <h3 className="text-[#333] text-[15px] md:text-[17px] font-semibold leading-[1.4] mb-8 min-h-[50px]">
                                                {item.title}
                                            </h3>

                                            {/* Read More Accent Stick */}
                                            <div className="flex items-center gap-3 group cursor-pointer mt-auto pb-2">
                                                <div className="w-[2px] h-5 bg-[#E38D13]"></div>
                                                <span className="text-[#004A81] font-semibold text-sm uppercase tracking-wider group-hover:text-[#E38D13] transition-colors">
                                                    Read More
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Fraction Indicator */}
                <div className="mt-12 flex justify-center items-baseline gap-1">
                    <span className="text-[#333] text-xl font-semibold">
                        {String((currentIndex % sliderData.length) + 1).padStart(2, '0')}
                    </span>
                    <span className="text-gray-400 text-sm font-medium">
                        /{String(sliderData.length).padStart(2, '0')}
                    </span>
                </div>
            </div>

            {/* 1. Download Center Section */}
            {/* 1. Download Center Section */}
            <div className="container mx-auto px-4 md:px-[70px] pt-10 pb-4 sm:pt-20 sm:pb-8">
                <h2 className="text-[#004172] text-center text-3xl md:text-[35px] font-semibold mb-12">
                    Download Center
                </h2>

                {/* Light blue background container */}
                <div className="bg-[#E1F0FA] rounded-lg shadow-xl hover:shadow-2xl transition-shadow p-8 md:p-16 border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-y-16 gap-x-12">
                        {downloadItems.map((item, idx) => (
                            <div key={idx} className="flex items-stretch gap-4 group">
                                {/* Vertical Accent Stick: Spans both Title and Download */}
                                <div className="w-[3px] bg-[#004172] shrink-0"></div>

                                <div className="flex flex-col justify-between">
                                    <h3 className="text-[#666] text-[15px] md:text-[16px] font-semibold leading-snug mb-2  w-[180px]">
                                        {item.title}
                                    </h3>
                                    <span className="flex items-center gap-2 text-[#004172] font-semibold text-sm tracking-wide cursor-pointer ">
                                        DOWNLOAD
                                        <span className="text-[#F78D2F] font-extrabold text-[20px]">→</span>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Back to Top Button */}
                <div className="flex justify-end mt-8">
                    <button
                        onClick={scrollToTop}
                        className="text-[#004172] font-semibold text-2xl flex items-center gap-2 hover:opacity-70 transition-opacity"
                    >
                        Back to Top
                    </button>
                </div>
            </div>

           {/* 2. Final Social & Copyright Footer Strip */}
      <div className="bg-[#003B6D] text-white py-2 sm:py-4 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-[70px] flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-8 text-[12px] md:text-[13px]">
          
          <p className="font-medium tracking-tight opacity-90 order-2 md:order-1 text-[14px]">
            © 2024 Syngene International. All Rights Reserved
          </p>
          
          {/* Social Icons using Lucide React */}
          <div className="flex items-center gap-2 md:gap-4 order-1 md:order-2">
             <Facebook 
                size={20} 
                className="cursor-pointer hover:text-[#F78D2F] transition-colors stroke-[1.5]" 
             />
             <Instagram 
                size={20} 
                className="cursor-pointer hover:text-[#F78D2F] transition-colors stroke-[1.5]" 
             />
             <Youtube 
                size={20} 
                className="cursor-pointer hover:text-[#F78D2F] transition-colors stroke-[1.5]" 
             />
             <Linkedin 
                size={20} 
                className="cursor-pointer hover:text-[#F78D2F] transition-colors stroke-[1.5]" 
             />
             {/* Custom SVG for the official X logo */}
             <svg 
               viewBox="0 0 24 24" 
               aria-hidden="true" 
               className="w-4 h-4 cursor-pointer hover:fill-[#F78D2F] fill-white transition-colors"
             >
               <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
             </svg>

          </div>

          <p className="font-medium tracking-tight opacity-90 order-3 text-[14px]">
            Design & Developed by RDX Digital
          </p>
          </div>
          </div>

        </div>
    );
}