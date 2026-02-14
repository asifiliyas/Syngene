'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const tabsData = [
    {
        id: "05",
        title: "Strategic sourcing",
        subtitle: "Essential functions",
        description: "With evolving global dynamics, we continue to deliver faster, strengthen our sourcing ecosystem, diversify supply chain risks, and drive cost competitiveness, all while integrating highest standards of compliance into our procurement framework.",
        color: "bg-[#004172]",
        image: "/Image05.png",
    },
    {
        id: "04",
        title: "Information technology",
        subtitle: "Essential functions",
        description: "In FY25, Syngene focused on enhancing its digital and IT capabilities through strategic initiatives aimed at driving innovation and operational excellence. The IT strategy is closely aligned with organizational priorities, emphasizing investments in automation and digitization to improve scientific and enterprise functions.",
        color: "bg-[#E38D13]",
        image: "/Image04.png",
    },
    {
        id: "03",
        title: "Quality management",
        subtitle: "Essential functions",
        description: "At Syngene, quality drives efficiency, innovation and competitive advantage. Our proactive approach combines robust systems, advanced technology, and a culture of excellence to ensure precision in every process.",
        color: "bg-[#004172]",
        image: "/Image03.png",
    },
    {
        id: "02",
        title: "Environment, Health, Safety and Sustainability",
        subtitle: "Essential functions",
        description: "We take our responsibility to people and the planet seriously. By using resources wisely and raising operational standards, we're building a safer, more sustainable, and efficient future for all.",
        color: "bg-[#E38D13]",
        image: "/Image02.png",
    },
    {
        id: "01",
        title: "Execution Excellence",
        subtitle: "Essential functions",
        description: "At Syngene, excellence is a core value that guides everything we do. Driven by a commitment to continuous improvement, we aim to consistently deliver value and delight our customers through strong project management, service delivery, and operational excellence.",
        color: "bg-[#004172]",
        image: "/Image01.png",
    }
];

export default function TabsSection() {
    const [activeTab, setActiveTab] = useState("01");

    return (
        <section className="w-full bg-white font-myriad overflow-hidden">
            {/* Main container: Fixed height on desktop to keep the horizontal line stable.
          Flex direction swaps for mobile responsiveness.
      */}
            <div className="flex flex-col md:flex-row h-auto md:h-[650px] w-full transition-all duration-700 ease-in-out">
                {tabsData.map((tab) => {
                    const isActive = activeTab === tab.id;

                    return (
                        <div
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                relative transition-all duration-700 ease-in-out cursor-pointer overflow-hidden
                ${isActive ? "flex-[10] md:flex-[12] min-h-[550px] md:min-h-0" : "flex-1 md:flex-[0.8] min-h-[70px] md:min-h-0"}
                ${tab.color} flex flex-col md:flex-row md:border-r border-white/10
              `}
                        >
                            {/* COLLAPSED STRIP */}
                            {!isActive && (
                                <div className="absolute inset-0 flex items-center justify-center md:flex-col md:justify-start md:pt-10 z-20">
                                    {/* Locked Number: Perfectly centered on mobile, top-aligned on desktop */}
                                    <span className="text-white font-semibold text-xl md:text-2xl md:absolute md:top-10">
                                        {tab.id}
                                    </span>

                                    {/* Centered Title: Only for Desktop vertical mode */}
                                    <div className="hidden md:flex h-full items-center justify-center">
                                        <div
                                            className="whitespace-nowrap text-white font-semibold tracking-widest text-[18px]"
                                            style={{
                                                writingMode: 'vertical-rl',
                                                transform: 'rotate(180deg)',
                                            }}
                                        >
                                            {tab.title}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* EXPANDED CONTENT */}
                            {isActive && (
                                <div className="flex flex-col md:flex-row w-full h-full animate-fadeIn">
                                    {/* Text Panel */}
                                    <div className="w-full md:w-1/2 p-8 md:p-10 md:pb-20 flex flex-col justify-start text-white bg-inherit">

                                        {/* Active Number Indicator: Mimics the strip's alignment on mobile */}
                                        <div className="h-[70px] md:h-auto flex items-center justify-center md:items-start md:justify-start md:mb-16">
                                            <span className="text-xl md:text-2xl font-semibold inline-block">
                                                {tab.id}
                                            </span>
                                        </div>

                                        <div className="mt-4 animate-fadeInUp">
                                            <p className="text-white/80 text-xs md:text-[18px] tracking-[0.2em] mb-1">
                                                {tab.subtitle}
                                            </p>
                                            <h2 className="text-3xl md:text-[40px] font-semibold mb-8 leading-10">
                                                {tab.title}
                                            </h2>
                                            <p className="text-white/90 text-[15px] md:text-[17px] leading-[1.4] mb-12 max-w-[480px] font-regular">
                                                {tab.description}
                                            </p>

                                            {/* Read More with Pixel-Perfect Accent Stick */}
                                            <button className="flex items-center gap-4 group">
                                                <div className={`h-8 w-[2.5px] transition-transform group-hover:scale-y-110 ${tab.color === "bg-[#E38D13]" ? "bg-[#004172]" : "bg-[#E38D13]"}`}></div>
                                                <span className="text-white font-semibold text-sm tracking-widest uppercase group-hover:text-[#E38D13] transition-colors">
                                                    Read More
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Image Panel */}
                                    <div className="w-full md:w-1/2 relative min-h-[400px] md:h-full overflow-hidden">
                                        <Image
                                            src={tab.image}
                                            alt={tab.title}
                                            fill
                                            className="object-cover transition-transform duration-[2000ms] hover:scale-105"
                                            priority
                                        />
                                        {/* Darkening overlay to pop the white text */}
                                        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Slide animation styles */}
            <style jsx global>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                }
            `}</style>
        </section>
    );
}