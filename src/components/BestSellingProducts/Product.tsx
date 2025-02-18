import { HeartOutlined, EyeOutlined } from '@ant-design/icons';
import { Rate, Button } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const products = [
  {
    id: 1,
    name: "The North Face",
    originalPrice: 260,
    discountedPrice: 260,
    rating: 5,
    image: '/assets/jacket.png'
  },
  {
    id: 2,
    name: "Gucci Bag",
    originalPrice: 960,
    discountedPrice: 960,
    rating: 4.5,
    image: '/assets/bag.png'
  },
  {
    id: 3,
    name: "RGB Liquid CPU Cooler",
    originalPrice: 170,
    discountedPrice: 170,
    rating: 5,
    image: '/assets/cooler.png'
  },
  {
    id: 4,
    name: "Small BookShelf",
    originalPrice: 360,
    discountedPrice: 360,
    rating: 4.5,
    image: '/assets/shelf.png'
  }
];

export default function BestSellingProducts() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold">This Month</h2>
          <p className="text-gray-600">Best Selling Products</p>
        </div>
        <Button type="primary" className="bg-red-500 hover:bg-red-600">
          View All
        </Button>
      </div>

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
      >
        {products.map(product => (
          <SwiperSlide key={product.id}>
            <div className="group relative bg-gray-100 p-4 rounded-lg">
              <div className="relative">
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
                  <span className="text-red-500 font-semibold">${product.discountedPrice}</span>
                </div>
                <div className="mt-2">
                  <Rate disabled defaultValue={product.rating} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
