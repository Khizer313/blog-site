import { Input, Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Exclusive */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Exclusive</h3>
            <p className="mb-4">Subscribe</p>
            <p className="mb-4">Get 10% off your first order</p>
            <div className="flex">
              <Input 
                placeholder="Enter your email" 
                suffix={<SendOutlined />}
                className="bg-transparent border-white"
              />
            </div>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <address className="not-italic">
              111 Bijoy sarani, Dhaka,<br />
              DH 1515, Bangladesh.<br />
              exclusive@gmail.com<br />
              +88015-88888-9999
            </address>
          </div>

          {/* Account */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Account</h3>
            <ul className="space-y-2">
              <li><Link href="/account">My Account</Link></li>
              <li><Link href="/login">Login / Register</Link></li>
              <li><Link href="/cart">Cart</Link></li>
              <li><Link href="/wishlist">Wishlist</Link></li>
              <li><Link href="/shop">Shop</Link></li>
            </ul>
          </div>

          {/* Quick Link */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms Of Use</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Download App */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Download App</h3>
            <p className="text-gray-400 text-sm mb-4">Save $3 with App New User Only</p>
            <div className="flex space-x-4 mb-4">
              <img src="/assets/qr-code.png" alt="QR Code" className="w-24 h-24" />
              <div className="space-y-2">
                <img src="/assets/app-store.png" alt="App Store" className="h-10" />
                <img src="/assets/google-play.png" alt="Google Play" className="h-10" />
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
              <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
              <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
              <a href="#" className="hover:text-gray-300"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </footer>
  );
}
