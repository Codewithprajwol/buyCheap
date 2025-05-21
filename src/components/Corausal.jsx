import React from 'react';
import { ChevronLeft, ChevronRight, Settings } from "lucide-react";

// const heroImageUrl = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'; // Example image

const heroImageUrl='https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80'

const Corausal = () => {
  return (
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



