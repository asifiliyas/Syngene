
'use client';

import React from 'react';

const statItems = [
    { value: "30+", unit: "Years", description: "of scientific expertise" },
    { value: "400+", description: "Patents held by customers" },
    { value: "4", description: "Campuses" },
    { value: "~400", description: "Active customers" },
    {
        prefix: "Rs",
        value: "3,642",
        unit: "Cr",
        description: "(430 Mn USD) Revenue from operations in FY25",
        prefixColor: "text-[#363636]",
    },
    {
        prefix: "Rs",
        value: "475",
        unit: "Cr",
        description: "Profit After Tax in FY25#",
        prefixColor: "text-[#363636]",
    },
    { value: "2.5+", unit: "Mn sq. ft.", description: "of world-class R&D and manufacturing" },
    { value: "5,641", description: "Scientists" },
    { value: "8,235", description: "Total workforce (as of March 31, 2025)" },
    { value: "95%", description: "Total hazardous and non-hazardous waste recycled" },
    { value: "92%", description: "Power sourced from renewable energy" },
];

export default function Stats() {
    return (
        <section className="bg-white py-2 md:py-4 font-myriad">
            <div className="container mx-auto px-4 md:px-[70px] max-w-[1200px]">
                <h2 className="text-center text-[#333333] text-2xl md:text-[35px] font-semibold mb-10 tracking-tight">
                    Syngene at a Glance
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1200px]">
                    {statItems.map((item, index) => (
                        <div
                            key={index}
                            className={`
                flex flex-col items-start justify-center 
                border-gray-300 border-dashed border-opacity-40
                lg:border-r lg:border-b
                ${(index + 1) % 4 === 0 ? "lg:border-r-0" : ""}
                ${index >= 8 ? "lg:border-b-0" : ""}
                sm:max-lg:border-r sm:max-lg:border-b
                ${(index + 1) % 2 === 0 ? "sm:max-lg:border-r-0" : ""}
                ${index >= 10 ? "sm:max-lg:border-b-0" : ""}
                max-sm:border-b last:max-sm:border-b-0
                ${index % 4 === 0 ? "pl-0" : " md:pl-8"}
                ${index < 4 ? "pt-0 pb-1 min-h-[100px]" : index < 8 ? "py-4 min-h-[120px]" : "pt-4 pb-0 min-h-[100px]"}
              `}
                        >
                            {item.prefix && (
                                <span className={`${item.prefixColor} text-[15px] font-medium mb-0.5`}>
                                    {item.prefix}
                                </span>
                            )}

                            <div className="flex items-baseline flex-wrap">
                                <span
                                    className="text-[36px] font-semibold leading-[1.1]"
                                    style={{
                                        background: "linear-gradient(91deg, #F78D2F 0%, #A0609E 52%, #004172 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}
                                >
                                    {item.value}
                                </span>
                                {item.unit && (
                                    <span className="text-[#004A81] text-[18px] font-semibold ml-1.5">
                                        {item.unit}
                                    </span>
                                )}
                            </div>

                            <p className="mt-1 text-[#363636] text-[16px] md:text-[14px] leading-[1.3] max-w-[180px]">
                                {item.description}
                            </p>
                        </div>
                    ))}

                    <div className=" md:pl-8 mt-3 sm:mt-0 flex flex-col items-start sm:justify-end pb-0 min-h-[100px]">
                        <div className="text-[18px] sm:text-[14px] text-[#363636] opacity-80">
                            <p># Before exceptional items</p>
                            <p>1 USD = Rs 84.65</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex items-center gap-4 group cursor-pointer">
                    <div className="w-[3px] h-8 bg-[#E38D13]"></div>
                    <span className="text-[#004A81] font-bold text-lg group-hover:text-[#E38D13] transition-colors">
                        Read More
                    </span>
                </div>
            </div>
        </section>
    );
}