import Image from 'next/image';
import React from 'react';

export default function TeamAndInvestSection() {
    return (
        <section className="bg-white mt-10 sm:mt-20">
            {/* Team Images Stack */}
            <div className="w-full relative">
                {/* Placeholder for 3 rows of team photos */}
                <div className="grid">
                    <div className="w-full bg-gray-200 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/20 transition-colors z-10"></div>

                        <Image
                            src="/Team.png"
                            alt="Team 1"
                            width={1366}
                            height={662}
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="w-full relative overflow-hidden group aspect-[1066/662] md:aspect-[1366/662]">

                        {/* Background Image */}
                        <Image
                            src="/Team.png"
                            alt="Team 2"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Blue Hover Overlay */}
                        <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/20 transition-colors z-10"></div>

                        {/* Overlay Box Wrapper */}
                        <div className="absolute sm:inset-0 z-20 flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-4">

                            <div className="
            bg-white/80 
            backdrop-blur-[1.5px] 
            border border-white/20 
            shadow-2xl 
            w-full 
            max-w-[935px] 
            aspect-[735/245] 
            lg:aspect-[935/445] 
            px-3 pt-3 pb-2 md:p-6 sm:p-8 md:p-10 lg:p-12
            flex flex-col justify-center
            transition-all duration-500
            
        ">

                                <p className="text-[#666666] text-[10px] sm:text-sm md:text-base font-bold uppercase tracking-widest leading-tight mb-[2px]">
                                    About Syngene
                                </p>

                                <h2 className="
                text-black 
                text-md sm:text-xl md:text-3xl lg:text-[38px] 
                font-bold 
                leading-5
                md:leading-9 
                mb-1 md:mb-6 
                tracking-tight
            ">
                                    Driving Scientific Innovation
                                    <br className="hidden md:block" />
                                    with Service, Quality and Excellence
                                </h2>

                                <p className="
                text-[#004172] 
                text-xs sm:text-sm md:text-sm 
                leading-tight md:leading-normal 
                mb-1 md:mb-8 
                max-w-[480px]
            ">
                                    We combine cutting-edge science with a deep understanding of customer needs to drive innovation.
                                    Our commitment to service, quality and excellence is embedded in every aspect of our operations,
                                    fostering trust, confidentiality, and seamless collaboration.
                                </p>

                                <div className="flex items-center gap-3 cursor-pointer w-fit">
                                    <div className="w-[3px] h-5 md:h-6 bg-[#E38D13]"></div>
                                    <span className="text-[#004A81] font-bold text-xs sm:text-sm md:text-base">
                                        Read More
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>



                </div>

            </div>

            {/* Invest Section */}
            <div className="container mx-auto px-4 md:px-[70px] py-7 sm:py-14 max-w-[1200px] flex flex-col md:flex-row items-center md:gap-5 lg:gap-0">

                {/* Left Side: Image */}
                <div className="w-full md:w-[45%] flex justify-center md:justify-start">
                    <div className="relative w-[450px] aspect-[1/1] rounded-[10px] overflow-hidden shadow-sm">
                        <Image
                            src="/woman.png"
                            alt="Kiran Mazumdar-Shaw"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Right Side: Content Box */}
                <div className="w-full md:w-[55%] h-[550px] bg-[#004172] min-h-[500px] p-10 sm:px-6 lg:px-16 sm:py-3 lg:py-10 flex flex-col relative">

                    {/* Header */}
                    <h2 className="text-white text-xl sm:text-[24px] lg:text-[30px] font-light mb-2 sm:mb-3 lg:mb-6">
                        Message from our <span className="font-semibold">Chairperson</span>
                    </h2>

                    {/* Decorative Content Box - UPDATED STRUCTURE */}
                    <div className="relative mt-4 ml-5">
                        {/* Icon positioned absolutely to sit on the top-left edge */}
                        <div className="absolute -top-5 -left-5 w-10 h-10 z-10">
                            <Image 
                                src="/Firebox.png" 
                                alt="icon" 
                                fill 
                                className="object-contain"
                            />
                        </div>

                        {/* Main Box: border-t and border-r are on the same container for a perfect corner */}
                        <div className="border-t border-r border-white/40 pt-6 pr-8 pb-6 relative">
                            <p className="text-white text-[14px] md:text-[16px] leading-[1.3] font-normal">
                                At Syngene, our purpose goes beyond science. We are building a resilient, inclusive, and values-driven organization where people thrive and innovation flourishes. FY25 was a year of alignment between vision and action, with investments in wellbeing, equity, and sustainability reinforcing our commitment to long-term value creation for all stakeholders.
                            </p>

                            {/* Bottom line extended leftwards to align under the icon */}
                            <div className="absolute bottom-0 -left-5 w-[calc(100%+20px)] h-[1px] bg-white/40 flex items-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-white ml-[-5px]"></div>
                            </div>
                        </div>
                    </div>

                    {/* Name and Link */}
                    <div className="mt-8">
                        <h4 className="text-[#F78D2F] text-xl font-semibold mb-4">
                            Kiran Mazumdar-Shaw
                        </h4>

                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="w-[2px] h-5 bg-[#E38D13]"></div>
                            <span className="text-white font-medium text-sm uppercase tracking-wider group-hover:text-[#F78D2F] transition-colors">
                                Read More
                            </span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Financial Review Section */}
            <div className="container mx-auto px-4 md:px-[70px] py-7 sm:py-14 max-w-[1200px] flex flex-col md:flex-row items-center md:gap-5 lg:gap-0">

                {/* Left Side: Image */}
                <div className="w-full md:w-[45%] flex justify-center md:justify-start">
                    <div className="relative w-[450px] aspect-[1/1] rounded-[10px] overflow-hidden shadow-sm">
                        <Image
                            src="/man1.png"
                            alt="Peter Bains"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Right Side: Content Box */}
                <div className="w-full md:w-[55%] h-[550px] bg-[#004172] min-h-[500px] p-10 sm:px-6 lg:px-16  sm:py-3 lg:py-10  flex flex-col relative">

                    {/* Header */}
                    <div className="mb-2 sm:mb-3 lg:mb-6">
                        <p className="text-white text-xl md:text-[24px] font-light leading-tight">
                            Message from our
                        </p>
                        <h2 className="text-white text-xl md:text-[30px] font-bold leading-tight">
                            Managing Director & CEO
                        </h2>
                    </div>

                    {/* Decorative Content Box - UPDATED STRUCTURE */}
                    <div className="relative mt-4 ml-5">
                        <div className="absolute -top-5 -left-5 w-10 h-10 z-10">
                            <Image 
                                src="/Firebox.png" 
                                alt="icon" 
                                fill 
                                className="object-contain"
                            />
                        </div>

                        <div className="border-t border-r border-white/40 pt-6 pr-8 pb-6 relative">
                            <p className="text-white text-[14px] md:text-[16px] leading-[1.5] font-normal">
                                Syngene is well positioned for accelerating growth and transformation, with the potential to become a leader in serving the global biopharma and wider life sciences outsourcing market models.
                            </p>

                            <div className="absolute bottom-0 -left-5 w-[calc(100%+20px)] h-[1px] bg-white/40 flex items-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-white ml-[-5px]"></div>
                            </div>
                        </div>
                    </div>

                    {/* Name and Link */}
                    <div className="mt-8">
                        <h4 className="text-[#F78D2F] text-xl font-semibold mb-4">
                            Peter Bains
                        </h4>

                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="w-[2px] h-5 bg-[#E38D13]"></div>
                            <span className="text-white font-medium text-sm uppercase tracking-wider group-hover:text-[#F78D2F] transition-colors">
                                Read More
                            </span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container mx-auto px-4 md:px-[70px] py-7 sm:py-14 max-w-[1200px] flex flex-col md:flex-row items-center md:gap-5 lg:gap-0">

                {/* Left Side: Image */}
                <div className="w-full md:w-[45%] flex justify-center md:justify-start">
                    <div className="relative w-[450px] aspect-[1/1] rounded-[10px] overflow-hidden shadow-sm">
                        <Image
                            src="/man2.png"
                            alt="Deepak Jain"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Right Side: Content Box */}
                <div className="w-full md:w-[55%] h-[550px] bg-[#004172] min-h-[500px] p-10 sm:px-6 lg:px-16 sm:py-3 lg:py-10  flex flex-col relative">

                    {/* Header */}
                    <div className="mb-2 sm:mb-3 lg:mb-6">
                        <p className="text-white text-xl md:text-[24px] font-light leading-tight">
                            Message from our
                        </p>
                        <h2 className="text-white text-xl md:text-[30px] font-bold leading-tight">
                            Chief Financial Officer
                        </h2>
                    </div>

                    {/* Decorative Content Box - UPDATED STRUCTURE */}
                    <div className="relative mt-4 ml-5">
                        <div className="absolute -top-5 -left-5 w-10 h-10 z-10">
                            <Image 
                                src="/Firebox.png" 
                                alt="icon" 
                                fill 
                                className="object-contain"
                            />
                        </div>

                        <div className="border-t border-r border-white/40 pt-6 pr-8 pb-6 relative">
                            <p className="text-white text-[14px] md:text-[16px] leading-[1.5] font-normal">
                                Despite sectoral headwinds, Syngene delivered resilient performance with strong cash generation of Rs 1,168 Cr, fully funding our USD 85 Mn capex including a strategic U.S. biologics facility acquisition, thus positioning us for long-term growth in the high-potential CRDMO market.
                            </p>

                            <div className="absolute bottom-0 -left-5 w-[calc(100%+20px)] h-[1px] bg-white/40 flex items-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-white ml-[-5px]"></div>
                            </div>
                        </div>
                    </div>

                    {/* Name and Link */}
                    <div className="mt-8">
                        <h4 className="text-[#F78D2F] text-xl font-semibold mb-4">
                            Deepak Jain
                        </h4>

                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="w-[2px] h-5 bg-[#E38D13]"></div>
                            <span className="text-white font-medium text-sm uppercase tracking-wider group-hover:text-[#F78D2F] transition-colors">
                                Read More
                            </span>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}