import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Corausal from '@/components/Corausal';

const Homepage = () => {
  return (
    <div className='w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
       <div className='w-full py-4 h-96'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,   // Keep autoplay even after user interaction
            pauseOnMouseEnter: true,       // Optional: pause on hover for better UX
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-full"
        >
           <SwiperSlide>
            <Corausal/>
          </SwiperSlide>
           <SwiperSlide>
            <Corausal/>
          </SwiperSlide>
           <SwiperSlide>
            <Corausal/>
          </SwiperSlide>

          {/* <SwiperSlide>
            <img
              src="/slide2.jpg"
              alt="Slide 2"
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/slide2.jpg"
              alt="Slide 2"
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/slide3.jpg"
              alt="Slide 3"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </SwiperSlide> */}
        </Swiper>

       </div>
    </div>
  )
}

export default Homepage