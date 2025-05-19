import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowRight,ArrowLeft } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";

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


const FeaturedCorausal = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  // Delay rendering swiper until refs are ready
  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div className="relative px-4 py-8">
      {/* Custom Navigation Buttons */}
    <div
  ref={prevRef}
  className="absolute z-10 left-2 top-1/2 -translate-y-1/2 w-10 h-10 border border-gray-300 flex items-center justify-center rounded-sm bg-white text-gray-500 hover:text-secondary hover:border-secondary cursor-pointer transition"
>
  <ArrowLeft className="w-5 h-5" />
</div>


<div
  ref={nextRef}
  className="absolute z-10 right-2 top-1/2 -translate-y-1/2 w-10 h-10 border border-gray-300 flex items-center justify-center rounded-sm bg-white text-gray-500 hover:text-secondary hover:border-secondary cursor-pointer transition"
>
  <ArrowRight className="w-5 h-5" />
</div>


      {swiperReady && (
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            // Link navigation manually on init
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} className="py-2">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default FeaturedCorausal;
