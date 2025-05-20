// src/components/LogoScroller.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Your existing logosData
const logosData = [
    { id: 1, src: '/brandImg/brand_1.png', alt: 'Dell' },
    { id: 2, src: '/brandImg/brand_2.png', alt: 'Asus' },
    { id: 3, src: '/brandImg/brand_3.png', alt: 'JBL' },
    { id: 4, src: '/brandImg/brand_4.png', alt: 'Apple' },
    { id: 5, src: '/brandImg/brand_5.png', alt: 'Samsung' },
    { id: 6, src: '/brandImg/brand_6.png', alt: 'LG' },
    { id: 7, src: '/brandImg/brand_1.png', alt: 'Dell (copy 1)' },
    { id: 8, src: '/brandImg/brand_2.png', alt: 'Asus (copy 1)' },
    { id: 9, src: '/brandImg/brand_3.png', alt: 'JBL (copy 1)' },
    { id: 10, src: '/brandImg/brand_4.png', alt: 'Apple (copy 1)' },
    { id: 11, src: '/brandImg/brand_5.png', alt: 'Samsung (copy 1)' },
    { id: 12, src: '/brandImg/brand_6.png', alt: 'LG (copy 1)' },
];

const repeatedLogos = [...logosData, ...logosData, ...logosData];

const LogoScroller = () => {
  return (
    <div className="bg-transparent py-4 sm:py-12 overflow-hidden"> {/* Added overflow-hidden to container */}
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          loopedSlides={repeatedLogos.length} // Ensures smooth looping
          slidesPerView={'auto'} // Important for continuous scroll with varying item widths
          spaceBetween={5}      // Adjust space between logos
          speed={8000}           // Very long speed for the entire set to pass slowly
                                 // Adjust this value: higher = slower, lower = faster
          autoplay={{
            delay: 1,          // Almost no delay, effectively continuous
            disableOnInteraction: false, // Autoplay continues even if user interacts
            pauseOnMouseEnter: false,    // Optional: Pauses when mouse is over slider
          }}
          grabCursor={false} // Usually false for a ticker
          allowTouchMove={false} // Disable manual touch swiping for pure ticker
          className="myTickerSwiper" // Custom class for CSS targeting
        >
          {repeatedLogos.map((logo, index) => (
            <SwiperSlide
              key={`${logo.id}-${index}`}
              // For 'auto' slidesPerView, slides should have their width determined by content or set explicitly.
              // Using '!w-auto' to let Tailwind allow content to define width.
              // You might want to add some padding directly to the slide.
              className="!w-auto flex items-center justify-center"
            >
              <div className="flex items-center justify-center h-16 px-4 sm:px-6"> {/* Added horizontal padding for spacing */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-10 sm:max-h-13 md:max-h-16 object-cover" // Slightly adjusted max height for ticker
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LogoScroller;