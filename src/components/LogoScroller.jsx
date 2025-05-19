// // src/components/LogoScroller.jsx
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';

// const logosData = [
//   { id: 1, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/200px-Dell_Logo.svg.png', alt: 'Dell' },
//   { id: 2, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Asus_logo.svg/200px-Asus_logo.svg.png', alt: 'Asus' },
//   { id: 3, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/JBL_logo.svg/200px-JBL_logo.svg.png', alt: 'JBL' },
//   { id: 4, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/160px-Apple_logo_black.svg.png', alt: 'Apple' },
//   { id: 5, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/200px-Samsung_Logo.svg.png', alt: 'Samsung' },
//   { id: 6, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/LG_logo_%282015%29.svg/150px-LG_logo_%282015%29.svg.png', alt: 'LG' },
//   // Manually duplicated for more items in the scroller, ensure IDs are unique if they represent distinct entities.
//   // For this demo, we'll use index to ensure key uniqueness for identical repeated logos.
//   { id: 7, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/160px-Apple_logo_black.svg.png', alt: 'Apple (copy 1)' },
//   { id: 8, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/200px-Samsung_Logo.svg.png', alt: 'Samsung (copy 1)' },
//   { id: 9, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/LG_logo_%282015%29.svg/150px-LG_logo_%282015%29.svg.png', alt: 'LG (copy 1)' },
//   { id: 10, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/160px-Apple_logo_black.svg.png', alt: 'Apple (copy 2)' },
//   { id: 11, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/200px-Samsung_Logo.svg.png', alt: 'Samsung (copy 2)' },
//   { id: 12, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/LG_logo_%282015%29.svg/150px-LG_logo_%282015%29.svg.png', alt: 'LG (copy 2)' },
// ];


// const LogoScroller = () => {
//   return (
//     <div className="bg-white py-8 sm:py-12">
//       <div className="container mx-auto px-4">
//         <Swiper
//           modules={[Autoplay]}
//           loop={true}
//           autoplay={{
//             delay: 2000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           slidesPerView={2}
//           spaceBetween={30}
//           speed={1000}
//           grabCursor={true}
//           breakpoints={{
//             640: {
//               slidesPerView: 3,
//               spaceBetween: 40,
//             },
//             768: {
//               slidesPerView: 4,
//               spaceBetween: 50,
//             },
//             1024: {
//               slidesPerView: 5,
//               spaceBetween: 60,
//             },
//             1280: {
//               // Corrected logic for slidesPerView at 1280px
//               // If you have 12 logos, and want to show 6, this is fine.
//               // If you want to show *up to* 6, but fewer if there aren't that many unique logos,
//               // Math.min(6, actualUniqueLogoCount) would be better.
//               // For this example, with 12 logos, showing 6 is reasonable.
//               slidesPerView: Math.min(6, logosData.length), // Show up to 6, or fewer if less than 6 logos total
//               spaceBetween: 60,
//             },
//           }}
//           className="myLogoSwiper"
//         >
//           {logosData.map((logo, index) => (
//             // --- KEY CHANGE HERE ---
//             <SwiperSlide key={`${logo.id}-${index}`} className="flex items-center justify-center">
//               <div className="flex items-center justify-center h-16">
//                 <img
//                   src={logo.src}
//                   alt={logo.alt}
//                   className="max-h-10 sm:max-h-12 md:max-h-14 object-contain"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default LogoScroller;

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


const LogoScroller = () => {
  return (
    <div className="bg-white py-8 sm:py-12 overflow-hidden"> {/* Added overflow-hidden to container */}
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView={'auto'} // Important for continuous scroll with varying item widths
          spaceBetween={50}      // Adjust space between logos
          speed={5000}           // Very long speed for the entire set to pass slowly
                                 // Adjust this value: higher = slower, lower = faster
          autoplay={{
            delay: 1,          // Almost no delay, effectively continuous
            disableOnInteraction: true, // Autoplay continues even if user interacts
            pauseOnMouseEnter: true,    // Optional: Pauses when mouse is over slider
          }}
          grabCursor={false} // Usually false for a ticker
          allowTouchMove={false} // Disable manual touch swiping for pure ticker
          className="myTickerSwiper" // Custom class for CSS targeting
        >
          {logosData.map((logo, index) => (
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
                  className="max-h-8 sm:max-h-10 md:max-h-12 object-cover" // Slightly adjusted max height for ticker
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