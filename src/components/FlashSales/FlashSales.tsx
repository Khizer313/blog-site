import FlashSalesHeader from "./FlashSalesHeader";
import ProductCarousel from "./ProductCarousel";
import { Button } from "antd";

export default function FlashSales() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <FlashSalesHeader />
      <ProductCarousel />
      <div className="flex justify-center mt-8">
        <Button type="primary" className="bg-red-500 hover:bg-red-600">
          View All Products
        </Button>
      </div>
    </div>
  );
}
