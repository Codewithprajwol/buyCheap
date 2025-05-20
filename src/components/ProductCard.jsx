import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className="rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-4 group bg-white relative">
      
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={product.Photo}
          alt={product.Title}
          className="w-full h-[200px] object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Optional Label Badge */}
        {product.Label && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
            {product.Label}
          </span>
        )}
      </div>

      {/* Product Info */}
      <h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">{product.Title}</h3>
      <p className="text-xs text-gray-500 mb-2">
        {product.Category} • {product.Source}
      </p>

      {/* Price & Rating */}
      <div className="flex justify-between items-center mt-3">
        <span className="text-lg font-bold text-green-600">{product.Price}</span>
        <div className="text-yellow-400 text-sm">★★★★☆</div>
      </div>
    </div>
  )
}

export default ProductCard
