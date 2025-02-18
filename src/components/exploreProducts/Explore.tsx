import { Button } from 'antd';
import ProductCarousel from './ProductCarousel';

export default function ExploreProducts() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold">Our Products</h2>
          <p className="text-gray-600">Explore Our Products</p>
        </div>
        <Button type="primary" className="bg-red-500 hover:bg-red-600">
          View All
        </Button>
      </div>

      <ProductCarousel />
    </div>
  );
}