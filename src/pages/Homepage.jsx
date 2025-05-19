import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Corausal from '@/components/Corausal';
import CategoryCard from '@/components/CategoryCard';
import FeaturedCorausal from '@/components/FeaturedCorausal';
import ProductCard from '@/components/ProductCard';
import LogoScroller from '@/components/LogoScroller';

const products = [
  {
    Ref: "PCP.00005",
    Title: "Τροφοδοτικό Υπολογιστή 700W ARMAGGEDDON Voltron Platinum 700 VPL700W",
    Price: "€79.00",
    Photo: "https://www.stephanis.com.cy/media/products/PCP_7F49EE15249E2.jpg?dimensions=250x250",
    Source: "XYZ.com",
    Category: "Power Supply",
    Rating: 4.0,
    Label: "NEW",
  },
  {
    Ref: "PCP.00006",
    Title: "Gaming Mechanical Keyboard RGB Backlit with Blue Switches",
    Price: "€49.00",
    Photo: "https://m.media-amazon.com/images/I/71cngUx0Y0L._AC_SX679_.jpg",
    Source: "XYZ.com",
    Category: "Gaming Accessories",
    Rating: 4.5,
    Label: "HOT",
  },
  {
    Ref: "PCP.00007",
    Title: "27'' LED Monitor Full HD IPS 75Hz Slim Bezel",
    Price: "€159.00",
    Photo: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg",
    Source: "XYZ.com",
    Category: "Monitors",
    Rating: 4.2,
    Label: "Bestseller",
  },
  {
    Ref: "PCP.00008",
    Title: "Wireless Gaming Mouse with 7 Programmable Buttons",
    Price: "€29.00",
    Photo: "https://m.media-amazon.com/images/I/61f0FfJGK1L._AC_SL1500_.jpg",
    Source: "XYZ.com",
    Category: "Gaming Accessories",
    Rating: 4.1,
    Label: "Deal",
  },
  {
    Ref: "PCP.00009",
    Title: "Intel Core i5 12th Gen Processor - 4.4GHz Turbo",
    Price: "€229.00",
    Photo: "https://m.media-amazon.com/images/I/61sPCC8I0xL._AC_SL1500_.jpg",
    Source: "XYZ.com",
    Category: "Processors",
    Rating: 4.7,
    Label: "NEW",
  },
  {
    Ref: "PCP.00010",
    Title: "16GB DDR4 3200MHz Desktop RAM (2x8GB Kit)",
    Price: "€69.00",
    Photo: "https://m.media-amazon.com/images/I/81exP63Kx-L._AC_SL1500_.jpg",
    Source: "XYZ.com",
    Category: "Memory",
    Rating: 4.6,
    Label: "HOT",
  },
  {
    Ref: "PCP.00011",
    Title: "512GB NVMe M.2 SSD Gen3 – Ultra Fast Read/Write",
    Price: "€59.00",
    Photo: "https://m.media-amazon.com/images/I/61h3n7iJQxL._AC_SL1500_.jpg",
    Source: "XYZ.com",
    Category: "Storage",
    Rating: 4.4,
    Label: "Bestseller",
  },
  {
    Ref: "PCP.00012",
    Title: "Gaming Mid-Tower Case with RGB Fans & Glass Panel",
    Price: "€89.00",
    Photo: "https://m.media-amazon.com/images/I/81HjftM7TUL._AC_SL1500_.jpg",
    Source: "XYZ.com",
    Category: "Cases",
    Rating: 4.3,
    Label: "Limited",
  },
];

const Homepage = () => {
  return (
    <div className='w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* corausal part  */}
       <div className='w-full py-4 md:h-96'>
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
        </Swiper>

       </div>

    {/* category part */}
       <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10'>
         <CategoryCard bg="bg-[#FFF2E9]" title="Tablets" subTitle="Starting at $299" price="$299" />
         <CategoryCard bg="bg-[#E8F2F4]" title="Smartphones" subTitle="Starting at $699" price="$699" />
         <CategoryCard bg="bg-[#FDF5FA]" title="Laptops" subTitle="Starting at $999" price="$999" />
       </div>
    {/* featured Product part */}
      <div className='w-full py-10'>
        <h1 className='uppercase text-3xl text-primary font-semibold'>Featured Product</h1>
        <p className='text-sm text-primary pt-2'>There are many variations of passage of brand available</p>
        <FeaturedCorausal/>
      </div>
      {/* Product List page */}
       <div className='w-full py-10 space-y-4'>
        <h1 className='uppercase text-3xl text-primary font-semibold'>Product List</h1>
        <p className='text-sm text-primary '>There are many variations of passage of brand available</p>
         <div className=' pt-4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {products.map((product, index) => (
              <ProductCard product={product} key={index} />
          ))}
         </div>
      </div>
      {/* logo scroller */}
      <LogoScroller/>
    </div>
    
  )
}

export default Homepage