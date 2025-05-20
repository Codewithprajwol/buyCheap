import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Search, ShoppingCart } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Products", to: "/product/1" },
    { name: "About Us", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="w-full drop-shadow-md bg-white">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <img src="/logo.svg" alt="Logo" className="h-6 w-auto" /> */}
          <span className="text-xl font-semibold text-gray-700">Buy Cheap</span>
        </div>

        {/* Nav Links - Desktop */}
        <nav className="hidden sm:flex space-x-6 text-gray-700 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500"
                  : "hover:text-orange-500 transition-colors"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 text-gray-700 cursor-pointer" />
          <div className="h-5 border-l border-orange-500"></div>
          <div className="relative">
            <ShoppingCart className="w-5 h-5 text-gray-700 cursor-pointer" />
            <span className="absolute -top-2 -right-2 text-xs text-gray-700 font-semibold">02</span>
          </div>

          {/* Hamburger - Mobile only */}
          <button
            onClick={toggleMenu}
            className="sm:hidden text-gray-700 focus:outline-none ml-2"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-orange-500 font-medium"
                  : "block text-gray-700 font-medium hover:text-orange-500"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
