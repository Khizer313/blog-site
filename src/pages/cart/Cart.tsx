import TopHeader from "@/components/TopHeader";
import Navbar from "../../components/nav/Navbar";
import Footer from "@/components/Footer/Footer";

import { Breadcrumb, Button } from "antd"; // Importing from Ant Design
import { Link } from "react-router-dom"; // Use Link from react-router-dom for routing

export default function Cart() {
  return (
    <div>
      <TopHeader />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Ant Design Breadcrumb */}
        <Breadcrumb className="mb-6">
          <Breadcrumb.Item>
            <Link to="/">Home</Link> {/* Home Link */}
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/cart">Cart</Link> {/* Cart Link */}
          </Breadcrumb.Item>
        </Breadcrumb>

        <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-4 gap-4 p-4 border-b bg-gray-50">
                <div>Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Subtotal</div>
              </div>

              {/* Cart Items */}
              <div className="p-4">
                <div className="grid grid-cols-4 gap-4 items-center py-4 border-b">
                  <div className="flex items-center gap-4">
                    <button className="text-red-500">&times;</button>
                    <img
                      src="/path-to-image.jpg"
                      alt="Product"
                      className="w-16 h-16 object-cover"
                    />
                    <span>LCD Monitor</span>
                  </div>
                  <div>$650</div>
                  <div>
                    <input
                      type="number"
                      min="1"
                      value="1"
                      className="w-20 p-1 border rounded"
                    />
                  </div>
                  <div>$650</div>
                </div>
              </div>

              {/* Return and Update Cart */}
              <div className="p-4 flex justify-between">
                <Link to="/">
                  <Button className="border-black hover:bg-black hover:text-white">
                    Return To Shop
                  </Button>
                </Link>
                <Button className="border-black hover:bg-black hover:text-white">
                  Update Cart
                </Button>
              </div>

              {/* Coupon and Cart Total Section */}
              <div className="p-4 border-t flex justify-between items-start gap-10">
                <div className="flex gap-4 flex-1 items-start">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="flex-1 p-2 border rounded focus:outline-none focus:border-black"
                  />
                  <Button className="bg-red-500 hover:bg-red-600 text-white py-5">
                    Apply Coupon
                  </Button>
                </div>

                <div className="bg-white rounded-lg shadow p-6 flex flex-1 flex-col">
                  <h2 className="text-xl font-bold mb-4">Cart Total</h2>

                  <div className="space-y-4">
                    <div className="flex justify-between pb-4 border-b">
                      <span>Subtotal:</span>
                      <span>$650</span>
                    </div>
                    <div className="flex justify-between pb-4 border-b">
                      <span>Shipping:</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>Total:</span>
                      <span>$650</span>
                    </div>

                    <Button
                      type="primary"
                      className="flex mt-6 h-12 bg-red-500 mx-auto hover:bg-red-600"
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
