import React, { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Search, ShoppingCart, PhoneCall, ChevronDown } from "lucide-react";
import SideBar from "./SideBar";
import { useTranslation } from "react-i18next";
import LanguageDropDown from "./LanguageDropDown";

const megaMenuData = [
  {
    title: "Smart Phone",
    items: [
      "All Mobile Phones",
      "Smart Phones",
      "Android Mobiles",
      "Windows Mobiles",
      "Refurbished Mobiles",
      "All Mobile Accessories",
      "Cases & Covers",
    ],
  },
  {
    title: "Note Book",
    items: [
      "All Note Books",
      "Smart Notebooks",
      "Android Note Book",
      "Windows Note Books",
      "Refurbished Note Books",
      "Note Books Accessories",
      "Cases & Covers",
    ],
  },
  {
    title: "Tablets",
    items: [
      "All Tablets",
      "Smart Tablets",
      "Android Tablets",
      "Windows Tablets",
      "Refurbished Tablets",
      "Tablets Accessories",
      "Cases & Covers",
    ],
  },
];

const Header = () => {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const megaTimeout = useRef();
  
  const toggleSearch = () => setMobileSearchOpen(!mobileSearchOpen);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Products", to: "/product/1" },
    { name: "categories", to: "/categories" },
    { name: "About Us", to: "/about" },
  ];

  // Only show mega menu for desktop
  const handleMegaEnter = () => {
    clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };
  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 120);
  };

  return (
    <header className="w-full drop-shadow-md bg-white sticky top-0 left-0 z-50">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 ">
        {/* Hamburger - Mobile only */}
          {/* <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-700 focus:outline-none ml-2 cursor-pointer"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button> */}
          <div className="lg:hidden">
          <SideBar />  
          </div>
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <img src="/logo.svg" alt="Logo" className="h-6 w-auto" /> */}
          <span className="text-xl font-semibold text-gray-700">Buy Cheap</span>
        </div>

        {/* Nav Links - Desktop */}
        <nav className="hidden lg:flex space-x-5 text-gray-700 text-sm relative ">
          {navItems.map((item) =>
            item.name.toLowerCase() === "categories" ? (
              <div
                key={item.name}
                className="relative "
                onMouseEnter={handleMegaEnter}
                onMouseLeave={handleMegaLeave}
              >
                <button
                  className={`flex items-center cursor-pointer gap-1 hover:text-orange-500 transition-colors font-medium ${
                    megaOpen ? "text-orange-500" : ""
                  }`}
                  type="button"
                >
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  <ChevronDown className="w-4 h-4 mt-[1px]" />
                </button>
                {/* Mega Menu */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-10 mx-auto z-40 w-[80vw] max-w-4xl bg-white border border-gray-200 shadow-2xl rounded-xl p-10 flex gap-8 transition-all duration-300
                    ${megaOpen ? "opacity-100 visible translate-y-0 pointer-events-auto" : "opacity-0 invisible -translate-y-2 pointer-events-none"}
                  `}
                  // style={{ minWidth: 600 }}
                >
                  {/* Columns */}
                  <div className="flex flex-1 gap-8">
                    {megaMenuData.map((col) => (
                      <div key={col.title}>
                        <div className="font-semibold text-gray-700 mb-5 text-base">{col.title}</div>
                        <ul className="space-y-4">
                          {col.items.map((itm) => (
                            <li key={itm}>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-orange-500 text-sm transition-colors"
                              >
                                {itm}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  {/* Image */}
                  <div className="hidden md:block flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80"
                      alt="Category"
                      className="w-40 h-40 object-cover rounded-lg shadow"
                    />
                  </div>
                </div>
              </div>
            ) : (
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
            )
          )}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <div className="sm:relative" >
            <input
              type="text"
              placeholder="Search for products, brands and more..."
             className={`pl-10 ${mobileSearchOpen ? "opacity-100 translate-y-0 pointer-events-auto visible" : "opacity-0 -translate-y-2 pointer-events-none invisible"} sm:visible sm:opacity-100 sm:translate-y-0 
             sm:pointer-events-auto absolute sm:static top-[100%] left-0 pr-2 py-2 sm:rounded-full border border-gray-300 placeholder:text-[12px] focus:outline-none focus:border-orange-500 text-sm shadow-sm transition-all duration-200 w-full md:w-64 bg-white/20 backdrop-blur-md backdrop-saturate-150`}
            />
            <Search onClick={toggleSearch} className="w-5 h-5 cursor-pointer text-gray-400 sm:absolute  left-3 top-1/2 transform sm:-translate-y-1/2 sm:pointer-events-none" />
          </div>
          <div className="h-5 border-l border-orange-500"></div>
          <LanguageDropDown />
          
        </div>
      </div>

      
    </header>
  );
};

export default Header;
