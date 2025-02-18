import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { HeartOutlined, EyeOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    originalPrice: 160,
    discountedPrice: 120,
    rating: 5,
    discount: 40,
    image: "/gamepad.png",
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    originalPrice: 1160,
    discountedPrice: 960,
    rating: 4,
    discount: 35,
    image: "/keyboard.png",
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    originalPrice: 400,
    discountedPrice: 370,
    rating: 5,
    discount: 30,
    image: "/monitor.png",
  },
  {
    id: 4,
    name: "S Series Comfort Chair",
    originalPrice: 400,
    discountedPrice: 375,
    rating: 4.5,
    discount: 25,
    image: "/chair.png",
  },
];

export default function ProductCarousel() {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={4}
      navigation
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <div className="group relative bg-gray-100 p-4 rounded-lg">
            <div className="relative">
              {/* Discount badge */}
              <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                -{product.discount}%
              </div>
              {/* Action buttons */}
              <div className="absolute right-2 top-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                  <HeartOutlined className="text-lg" />
                </button>
                <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                  <EyeOutlined className="text-lg" />
                </button>
              </div>
              {/* Product image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain"
              />
            </div>
            {/* Product info */}
            <div className="mt-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <div className="flex gap-2 mt-2">
                <span className="text-red-500 font-semibold">
                  ${product.discountedPrice}
                </span>
                <span className="text-gray-400 line-through">
                  ${product.originalPrice}
                </span>
              </div>
              <div className="mt-2">
                <Rate disabled defaultValue={product.rating} />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
