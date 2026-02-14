import React from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative w-full min-h-[680px] md:min-h-[700px] flex flex-col justify-center bg-[#ffffff] overflow-hidden font-['Myriad_Pro',sans-serif]">
            <div className="container mx-auto px-4 md:px-[70px] flex flex-col lg:flex-row items-center justify-between z-10 transition-all duration-700">

                {/* Left Content */}
                <div className="lg:w-[23%] flex flex-col items-end lg:mt-[-20px]">
                    <h2 className="text-[#E38D13] text-[48px] md:text-[51px] font-semibold tracking-tight leading-[1.3] mb-[-10px] ml-1">
                        INNOVATING
                    </h2>
                    <h1 className="text-[#004A81] text-[90px] md:text-[96px] font-medium leading-[0.9] tracking-normal mb-1">
                        REACH
                    </h1>

                    <div className="text-[#333333] mb-8 ml-1">
                        <p className="text-[22px] md:text-[20px] font-normal leading-tight text-right">
                            Researching New Paths.
                        </p>
                        <p className="text-[22px] md:text-[20px] font-normal leading-tight">
                            Delivering Breakthroughs.
                        </p>
                    </div>

                    <div className="flex flex-row gap-8 items-center ml-1">

                        {/* Read More Section */}
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <div className="w-[3px] h-8 bg-[#E38D13]"></div>
                            <span className="text-[#004A81] font-semibold text-lg transition-colors group-hover:text-[#E38D13]">
                                Read More
                            </span>
                        </div>

                        {/* Watch the Video Section */}
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <div className="w-[3px] h-8 bg-[#E38D13]"></div>
                            <span className="text-[#004A81] font-semibold text-lg transition-colors group-hover:text-[#E38D13]">
                                Watch the Video
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="w-[80%] lg:w-[55%] mt-8 sm:mt-8 lg:mt-0 relative flex justify-end items-center">

                    <div className="relative w-full max-w-[650px] aspect-[1.1/1] transition-transform hover:scale-[1.02] duration-500">

          

                        {/* Swirl Image */}
                        <Image
                            src="/Swirl.png"
                            alt="Hero Image"
                            fill
                            className="object-contain relative z-10"
                            priority
                        />

                        

                    </div>
                </div>
            </div>

            {/* Bottom Scroll Indicator */}
            <div className="absolute bottom-[0px] md:bottom-[60px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group transition-all">
                <div className="w-12 h-12 rounded-full border-2 border-gray-200 flex flex-col items-center justify-center text-gray-400 group-hover:border-[#E38D13] group-hover:text-[#E38D13] transition-colors">
                   <Image src="/DownArrow.png" alt="Scroll" fill className="object-contai n" />
                </div>
            </div>
        </section>
    );
}
