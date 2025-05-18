// src/components/HeroSection.jsx
import React from 'react';
import { ChevronLeft, ChevronRight, Settings } from "lucide-react";

// You should replace this with your actual image URL
const heroImageUrl = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'; // Example image

const Corausal = () => {
  return (
    // <div className="relative w-full bg-gray-100 overflow-hidden">
    //   {/* Main content container */}
    //   <div className="flex flex-col md:flex-row min-h-[450px] sm:min-h-[500px] md:h-[calc(100vh-200px)] md:max-h-[600px] lg:max-h-[700px]">
    //     {/* Image Section (Left) */}
    //     <div
    //       className="w-full md:w-1/2 h-64 sm:h-80 md:h-full bg-cover bg-center"
    //       style={{ backgroundImage: `url(${heroImageUrl})` }}
    //     >
    //       {/* This div is for the background image */}
    //     </div>

    //     {/* Text Content Section (Right) */}
    //     <div className="w-full md:w-1/2 bg-gray-50 flex flex-col justify-center p-6 sm:p-10 lg:p-16">
    //       <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-700 uppercase tracking-wider mb-4 sm:mb-6">
    //         Waterproof Smartphone
    //       </h1>
    //       {/* Paragraph: Hidden on screens smaller than 'md' (i.e., 'sm' and 'xs') */}
    //       <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 hidden md:block">
    //         There are many variations of passages of Lorem Ipsum available, but the majority have
    //         suffered alteration in some form, by injected humour, or randomised words which don't look
    //         even slightly believable. If you are going to use a passage of Lorem Ipsum,
    //       </p>
    //       <button className="bg-gray-700 text-white py-2.5 sm:py-3 px-6 sm:px-8 rounded-sm hover:bg-gray-800 transition duration-300 self-start text-sm sm:text-base font-medium uppercase">
    //         Buy Now
    //       </button>
    //     </div>
    //   </div>

    //   {/* Navigation and Settings Elements - Absolute Positioning */}
    //   {/* Settings Icon - top left */}
    //   <button
    //     aria-label="Settings"
    //     className="absolute top-4 left-4 bg-white p-2.5 rounded-sm shadow-md text-gray-600 hover:text-gray-800 z-10"
    //   >
    //     <Settings size={20} />
    //   </button>

    //   {/* Left Arrow - vertically centered, left side */}
    //   <button
    //     aria-label="Previous slide"
    //     className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 bg-white/80 hover:bg-white p-2 sm:p-3 rounded-sm shadow-md text-gray-600 hover:text-gray-800 z-10"
    //   >
    //     <ChevronLeft size={24} sm={28} />
    //   </button>

    //   {/* Right Arrow - vertically centered, right side */}
    //   <button
    //     aria-label="Next slide"
    //     className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 bg-white/80 hover:bg-white p-2 sm:p-3 rounded-sm shadow-md text-gray-600 hover:text-gray-800 z-10"
    //   >
    //     <ChevronRight size={24} sm={28} />
    //   </button>

    //   {/* Pagination Dots - bottom center */}
    //   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
    //     <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gray-400 rounded-full cursor-pointer hover:bg-gray-500"></span>
    //     <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-orange-500 rounded-full cursor-pointer"></span>
    //     <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gray-400 rounded-full cursor-pointer hover:bg-gray-500"></span>
    //   </div>
    // </div>
    <div className='relative w-full h-full  bg-[#FFFFFF] overflow-hidden'>
        <div className='w-1/2 h-auto aspect-square'>
          <img src={heroImageUrl} alt="Hero" className="w-full h-full object-cover" />
        </div>
        <div className='absolute right-0 w-[60%] top-[50%] -translate-y-1/2 md:py-[50px] px-2 py-3 md:px-[40px]  bg-[#F6F6F6]'>
          <div className='w-full h-full flex flex-col items-start justify-start gap-5'>
            <h1 className='text-md md:text-2xl uppercase tracking-wider text-[#575757]'>Waterproof Smartphone</h1>
            <p className='text-sm text-gray-600 hidden md:block'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem porro eligendi vero, minus aliquam voluptatem corporis vitae totam nostrum dolor.</p>
            <button className="bg-[#4F4F4F] rounded-sm text-white text-sm px-3 py-2  sm:px-6 sm:py-3 w-max  hover:bg-gray-800 cursor-pointer">
            Buy Now
            </button>
          </div>
        </div>
    </div>
  );
};

export default Corausal;



