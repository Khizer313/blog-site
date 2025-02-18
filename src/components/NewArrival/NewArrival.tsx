import { 
    CameraOutlined, 
    MobileOutlined, 
    LaptopOutlined, 
    ClockCircleOutlined, 
    AudioOutlined, 
    HeartOutlined, 
    GiftOutlined,
    AppstoreOutlined,
    LeftOutlined,
    RightOutlined
  } from '@ant-design/icons';
  import { Button } from 'antd';
  import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
  import { Navigation } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import { useState, useEffect } from 'react';
  
  const categories = [
    { icon: <MobileOutlined />, name: "Phones" },
    { icon: <LaptopOutlined />, name: "Computers" },
    { icon: <ClockCircleOutlined />, name: "SmartWatch" },
    { icon: <CameraOutlined />, name: "Camera" },
    { icon: <AudioOutlined />, name: "HeadPhones" },
    { icon: <AppstoreOutlined />, name: "Jewelry" },
    { icon: <GiftOutlined />, name: "Gaming" },
    { icon: <HeartOutlined />, name: "Fashion" },
  ];
  
  type CarouselControls = {
    onPrevClick: () => void;
    onNextClick: () => void;
  };
  
  const CategoryCarousel = ({ onControlsReady }: { onControlsReady: (controls: CarouselControls) => void }) => {
    const NavigationControls = () => {
      const swiper = useSwiper();
  
      useEffect(() => {
        onControlsReady({
          onPrevClick: () => swiper.slidePrev(),
          onNextClick: () => swiper.slideNext()
        });
      }, [swiper, onControlsReady]);
  
      return null;
    };
  
    return (
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={8}
        navigation
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 8
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 12
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 16
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 16
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 16
          }
        }}
      >
        <NavigationControls />
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center p-6 border border-gray-200 rounded-md hover:border-red-500 hover:bg-red-50 cursor-pointer transition-all">
              <div className="text-3xl mb-2">
                {category.icon}
              </div>
              <span className="text-sm font-medium">{category.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };
  
  export default function BrowseCategories() {
    const [controls, setControls] = useState<CarouselControls>();
  
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold">Categories</h2>
            <p className="text-gray-600">Browse By Category</p>
          </div>
          <div className="flex gap-2">
            <Button 
              icon={<LeftOutlined />} 
              className="border-gray-300"
              shape="circle"
              onClick={() => controls?.onPrevClick()}
            />
            <Button 
              icon={<RightOutlined />} 
              className="border-gray-300"
              shape="circle"
              onClick={() => controls?.onNextClick()}
            />
          </div>
        </div>
  
        <CategoryCarousel onControlsReady={setControls} />
      </div>
    );
  }