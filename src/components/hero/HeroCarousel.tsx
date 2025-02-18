import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: '/assets/iphone.png',
    title: 'iPhone 14 Series',
    description: 'Up to 10% off Voucher',
    buttonText: 'Shop Now',
  },
  // Add more slides here
];

export default function HeroCarousel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-[400px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="bg-black text-white">
            <div className="flex items-center h-full">
              <div className="flex-1 pl-12">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl mb-6">{slide.description}</p>
                <button className="px-6 py-2 bg-white text-black rounded hover:bg-gray-100 transition-colors">
                  {slide.buttonText}
                </button>
              </div>
              <div className="flex-1">
                <img src={slide.image} alt={slide.title} className="w-full h-full object-contain" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}