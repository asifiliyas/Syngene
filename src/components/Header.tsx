
'use client';

import React from 'react';

export default function Header() {
    const handleDownload = () => {
        // Create a dummy blob to simulate a PDF download
        const element = document.createElement("a");
        const file = new Blob(["Dummy PDF Content for Annual Report 2025"], { type: 'application/pdf' });
        element.href = URL.createObjectURL(file);
        element.download = "Annual_Report_2025.pdf";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    return (
        <header className="w-full bg-white py-4 md:py-6 font-['Myriad_Pro',sans-serif]">
            <div className="container px-[30px] md:px-[70px] min-w-full">
                <div className="bg-[#004A81] flex justify-between items-center px-4 md:px-12 py-2.5 md:py-3.5 shadow-lg">
                    {/* Logo */}
                    <div className="flex items-center">
                        <span className="text-white text-3xl md:text-3xl italic font-semibold tracking-tight">
                            Syngene
                        </span>
                    </div>

                    {/* Center Text */}
                    <div className="hidden md:block">
                        <span className="text-white text-[15px] font-light tracking-[0.10em] uppercase opacity-90">
                            ANNUAL REPORT 2025
                        </span>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-1 md:gap-2">
                        {/* Download Button */}
                        <button
                            onClick={handleDownload}
                            className="text-white hover:text-gray-300 transition-colors"
                            aria-label="Download PDF"
                        >
                            {/* Custom Download Icon: Straight arrow with horizontal line */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="17" />
                                <polyline points="7 12 12 17 17 12" />
                                <line x1="5" y1="21" x2="19" y2="21" />
                            </svg>
                        </button>

                        {/* Vertical Separator */}
                        <div className="h-7 w-[1px] bg-white/30 mx-1"></div>

                        {/* Menu Label Style */}
                        <button className="flex flex-col items-center justify-center leading-[1.2] group py-1">
                            <span className="text-white text-[13px] font-medium tracking-[0.05em] group-hover:text-gray-200">ME</span>
                            <span className="text-white text-[13px] font-medium tracking-[0.05em] group-hover:text-gray-200">NU</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
