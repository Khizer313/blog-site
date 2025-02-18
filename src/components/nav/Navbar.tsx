import { Button, Drawer } from "antd";
import { HeartOutlined, ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
  { href: "/signup", label: "Sign Up" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <span className="text-xl font-bold cursor-pointer">Exclusive</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                <span className="text-gray-700 hover:text-gray-900 cursor-pointer">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Search and Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <SearchBar />
            <Button type="text" icon={<HeartOutlined />} />
            {/* Update Cart Icon to Link to Cart Page */}
            <Link to="/cart">
              <Button type="text" icon={<ShoppingCartOutlined />} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button type="text" icon={<MenuOutlined />} onClick={() => setIsOpen(true)} />
            <Drawer
              title="Menu"
              placement="right"
              onClose={() => setIsOpen(false)}
              open={isOpen}
            >
              <div className="flex flex-col space-y-4">
                <SearchBar />
                {navLinks.map((link) => (
                  <Link key={link.href} to={link.href}>
                    <span
                      className="text-gray-700 hover:text-gray-900 block py-2 cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </span>
                  </Link>
                ))}
                <div className="flex space-x-4 mt-4">
                  <Button type="text" icon={<HeartOutlined />} />
                  <Link to="/cart">
                    <Button type="text" icon={<ShoppingCartOutlined />} />
                  </Link>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
}
