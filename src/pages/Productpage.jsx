import GridProductCard from '@/components/GridProductCard';
import React, { useState,useEffect } from 'react';

const products = [
  {
    sku: "sku-123",
    name: "iPhone 16",
    description: "The latest iPhone 16 with advanced features and sleek design.",
    photo: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
    category: "Smartphones",
    prices: [
      { source: "abc.com", price: "130", currency: "$", url: "https://abc.com/sdsdhjs" },
      { source: "xyz.com", price: "100", currency: "$", url: "https://xyz.com/iphone16" }
    ]
  },
  {
    sku: "sku-124",
    name: "Samsung Galaxy S24",
    description: "Experience the new Samsung Galaxy S24 with stunning display and performance.",
    photo: "https://images.unsplash.com/photo-1512499617640-c2f999098c01?auto=format&fit=crop&w=400&q=80",
    category: "Smartphones",
    prices: [
      { source: "abc.com", price: "120", currency: "$", url: "https://abc.com/galaxys24" },
      { source: "xyz.com", price: "110", currency: "$", url: "https://xyz.com/galaxys24" }
    ]
  },
  {
    sku: "sku-125",
    name: "MacBook Pro 2024",
    description: "Apple MacBook Pro 2024 with M3 chip, perfect for professionals.",
    photo: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    category: "Laptops",
    prices: [
      { source: "abc.com", price: "1800", currency: "$", url: "https://abc.com/macbookpro2024" },
      { source: "xyz.com", price: "1750", currency: "$", url: "https://xyz.com/macbookpro2024" }
    ]
  },
  {
    sku: "sku-126",
    name: "iPad Air 2024",
    description: "The new iPad Air 2024, lightweight and powerful for all your needs.",
    photo: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    category: "Tablets",
    prices: [
      { source: "abc.com", price: "600", currency: "$", url: "https://abc.com/ipadair2024" },
      { source: "xyz.com", price: "590", currency: "$", url: "https://xyz.com/ipadair2024" }
    ]
  },
  {
    sku: "sku-127",
    name: "Sony WH-1000XM5",
    description: "Industry leading noise cancelling headphones from Sony.",
    photo: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
    category: "Accessories",
    prices: [
      { source: "abc.com", price: "350", currency: "$", url: "https://abc.com/sonywh1000xm5" },
      { source: "xyz.com", price: "340", currency: "$", url: "https://xyz.com/sonywh1000xm5" }
    ]
  }
];

const categories = [
  { name: "Smartphones", sub: ["iPhone", "Samsung", "OnePlus"] },
  { name: "Laptops", sub: ["MacBook", "Dell", "HP"] },
  { name: "Tablets", sub: ["iPad", "Samsung Tab"] },
  { name: "Accessories", sub: ["Headphones", "Chargers"] },
  { name: "Top Brands", sub: [] },
];


const Productpage = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('Newest items');
  const [view, setView] = useState('grid');
  const [openCategory, setOpenCategory] = useState(null);
  const [highlightedSub, setHighlightedSub] = useState(null);
  const [breadcrumb, setBreadcrumb] = useState(['Home']);

  useEffect(() => {
    if (!search) return; // Only run on search
    let found = false;
    categories.forEach((cat, idx) => {
      if (cat.name.toLowerCase().includes(search.toLowerCase())) {
        setOpenCategory(idx);
        setHighlightedSub(null);
        setBreadcrumb(['Home', cat.name]);
        found = true;
      }
      if (cat.sub) {
        cat.sub.forEach(sub => {
          if (sub.toLowerCase().includes(search.toLowerCase())) {
            setOpenCategory(idx);
            setHighlightedSub(sub);
            setBreadcrumb(['Home', cat.name, sub]);
            found = true;
          }
        });
      }
    });
    if (!found) setBreadcrumb(['Home', `Search: "${search}"`]);
  }, [search]);

  const handleCategoryClick = (cat, idx) => {
    setOpenCategory(openCategory === idx ? null : idx);
    setHighlightedSub(null);
    setBreadcrumb(['Home', cat.name]);
    setSearch(''); 
  };

  const handleSubClick = (cat, sub) => {
    setHighlightedSub(sub);
    setBreadcrumb(['Home', cat.name, sub]);
    setSearch('');
  };

  let filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "Price: Low to High") {
    filteredProducts = [...filteredProducts].sort((a, b) => {
      const aMin = Math.min(...a.prices.map(p => parseFloat(p.price)));
      const bMin = Math.min(...b.prices.map(p => parseFloat(p.price)));
      return aMin - bMin;
    });
  } else if (sort === "Price: High to Low") {
    filteredProducts = [...filteredProducts].sort((a, b) => {
      const aMin = Math.min(...a.prices.map(p => parseFloat(p.price)));
      const bMin = Math.min(...b.prices.map(p => parseFloat(p.price)));
      return bMin - aMin;
    });
  }

  return (
    <div className="max-w-screen-2xl pt-5 w-full mx-auto relative px-2 sm:px-4 lg:px-8 overflow-hidden">
      {/* Header Section */}
      <section className="w-full min-h-[300px] bg-gray-50 flex flex-col items-center justify-center relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
          alt="Product Grid"
          className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
        />
        <div className="relative z-10 flex flex-col items-center py-16">
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-2 text-center">
            PRODUCT GRID VIEW
          </h1>
          <div className="flex gap-2 text-xs sm:text-sm text-gray-200 mt-2">
            <span className="font-semibold text-gray-300">_HOME</span>
            <span>/</span>
            <span className="font-semibold text-orange-300">PRODUCT GRID VIEW</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6 py-10">
        {/* Sidebar */}
        <aside className="w-full max-h-[max-content] md:w-72 rounded-lg px-4  md:pt-6.5 mb-4 md:mb-0">
          {/* Search above category */}
          <div className="mb-6">
            <div className="flex items-center border border-gray-200 rounded md:px-2 md:py-[10px] bg-gray-50">
              <input
                type="text"
                placeholder="Search here..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="bg-transparent pl-2  outline-none flex-1 text-sm text-gray-700"
              />
              <button className="ml-1 p-1" tabIndex={-1}>
                <svg width="18" height="18" fill="none" stroke="#aaa" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </div>
          </div>
          <div className='border border-white rounded-lg md:mt-10 p-4 bg-white backdrop-blur-md backdrop-saturate-150'>
            <h2 className="text-lg font-bold text-gray-700 mb-4 border-l-4 border-orange-500 pl-2 tracking-wide flex items-center">
            <span className="text-orange-500 mr-2">|</span> CATEGORIES
          </h2>
          <ul className="space-y-2">
            {categories.map((cat, idx) => (
              <li key={cat.name} className="mb-1">
                <button
                  className={`flex items-center w-full justify-between font-light text-gray-700 hover:text-orange-500 cursor-pointer transition-colors text-sm focus:outline-none
                    ${openCategory === idx ? 'font-bold text-orange-500' : ''}
                  `}
                  onClick={() => handleCategoryClick(cat, idx)}
                  aria-expanded={openCategory === idx}
                >
                  <span>{cat.name}</span>
                  {cat.sub && cat.sub.length > 0 && (
                    <svg
                      className={`ml-2 transition-transform duration-200 ${openCategory === idx ? "rotate-90" : ""}`}
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </button>
                {cat.sub && cat.sub.length > 0 && openCategory === idx && (
                  <ul className="ml-4 mt-1">
                    {cat.sub.map(sub => (
                      <li
                        key={sub}
                        className={`text-gray-500 hover:text-orange-500 text-sm cursor-pointer transition-colors pl-2 py-1 rounded
                          ${highlightedSub === sub ? 'bg-orange-100 text-orange-600 font-bold' : ''}
                        `}
                        onClick={() => handleSubClick(cat, sub)}
                        style={{ userSelect: 'none' }}
                      >
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          </div>
        </aside>

        {/* Main Product Controls + Grid/List */}
        <main className="flex-1">
          {/* Breadcrumb on the right */}
          <div className="flex justify-end mb-2">
            <nav className="text-xs text-gray-500 flex items-center space-x-2">
              {breadcrumb.map((crumb, i) => (
                <span key={i} className={i === breadcrumb.length - 1 ? "text-orange-500 font-bold" : ""}>
                  {crumb}
                  {i < breadcrumb.length - 1 && <span className="mx-1">/</span>}
                </span>
              ))}
            </nav>
          </div>
          {/* Controls */}
          <div className="flex flex-col  md:flex-row md:items-center justify-between gap-4  border border-white rounded-lg px-4 py-3 mb-8">
            {/* View, Sort, Showing */}
            <div className="flex  flex-wrap items-center gap-3 w-full  justify-between">
              <div className="flex items-center gap-1">
                <button
                  className={`p-1 ${view === 'grid' ? 'text-orange-500' : 'text-gray-400'} cursor-pointer`}
                  onClick={() => setView('grid')}
                  aria-label="Grid view"
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                </button>
                <button
                  className={`p-1 ${view === 'list' ? 'text-orange-500' : 'text-gray-400'} cursor-pointer`}
                  onClick={() => setView('list')}
                  aria-label="List view"
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="4" />
                    <rect x="3" y="10" width="18" height="4" />
                    <rect x="3" y="16" width="18" height="4" />
                  </svg>
                </button>
              </div>
              <div className='flex items-center gap-1'>
                <span className="text-xs text-gray-500 ml-2">Sort by :</span>
                <select
                  className="border border-gray-200 rounded px-2 py-1 text-xs focus:outline-none focus:border-orange-400"
                  value={sort}
                  onChange={e => setSort(e.target.value)}
                >
                  <option>Newest items</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
              <span className="text-xs text-gray-500 ml-2">
                Showing : 01-0{filteredProducts.length} of {products.length}.
              </span>
            </div>
          </div>

          {/* Product Grid/List */}
          <div
            className={
              view === 'grid'
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                : "flex flex-col gap-5"
            }
          >
            {filteredProducts.map((product) => (
             <GridProductCard key={product.sku} product={product} view={view}/>
            ))}
            {filteredProducts.length === 0 && (
              <div className="col-span-full text-center text-gray-400 py-10">
                No products found.
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Productpage;