import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { HeartOutlined, EyeOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import 'swiper/css';
import 'swiper/css/navigation';

const products = [
  {
    id: 1,
    name: "Small Dog Food",
    price: 25,
    rating: 3,
    image: '/assets/dogfood.png'
  },
  {
    id: 2,
    name: "Canon EOS Camera",
    price: 360,
    rating: 4.5,
    image: '/assets/camera.png'
  },
  {
    id: 3,
    name: "Laptop Sleeve",
    price: 360,
    rating: 5,
    image: '/assets/laptop.png'
  },
  {
    id: 4,
    name: "Curology Product Set",
    price: 360,
    rating: 4,
    image: '/assets/curology.png'
  },
  {
    id: 5,
    name: "Kids Electric Car",
    price: 960,
    rating: 5,
    image: '/assets/car.png',
    isNew: true
  },
  {
    id: 6,
    name: "Jr. Kick Cleats",
    price: 160,
    rating: 5,
    image: '/assets/cleats.png'
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    rating: 4.5,
    image: '/assets/gamepad.png',
    isNew: true
  },
  {
    id: 8,
    name: "Quilted Shoulder Coat",
    price: 660,
    rating: 4.5,
    image: '/assets/coat.png'
  }
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
          spaceBetween: 20
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }}
      className="grid grid-rows-2 gap-y-6"
    >
      {products.map(product => (
        <SwiperSlide key={product.id}>
          <div className="group relative bg-gray-100 p-4 rounded-lg">
            <div className="relative">
              {/* New badge */}
              {product.isNew && (
                <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm">
                  NEW
                </div>
              )}
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
                <span className="text-red-500 font-semibold">${product.price}</span>
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
