import { Heart } from 'lucide-react'
import React from 'react'

const GridProductCard = ({product,view}) => {
  return (
     <div
                key={product.sku}
                className={
                  view === 'grid'
                    ? "bg-white border border-gray-100 rounded-lg flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition"
                    : "bg-white border border-gray-100 rounded-lg flex flex-col md:flex-row overflow-hidden shadow-sm hover:shadow-lg transition"
                }
              >
                {/* Product Image */}
                <div
                  className={
                    view === 'grid'
                      ? "flex items-center justify-center bg-gray-50 aspect-[4/3] w-full"
                      : "flex-shrink-0 flex items-center justify-center p-4 md:p-6 w-full md:w-1/3 bg-gray-50"
                  }
                  style={view === 'grid' ? { minHeight: 180 } : {}}
                >
                  <img
                    src={product.photo}
                    alt={product.name}
                    className={
                      view === 'grid'
                        ? "object-contain w-full h-full max-h-48"
                        : "w-full h-full object-cover rounded-md"
                    }
                  />
                </div>
                {/* Product Info & Price Comparison */}
                <div className="flex-1 p-4 md:p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-gray-700 text-base">{product.name}</h3>
                    <div className="text-xs text-gray-400 mb-2">{product.category}</div>
                    <p className="text-xs text-gray-500 mb-4">{product.description}</p>
                    <div>
                      <span className="font-semibold text-gray-700 text-sm">Compare Prices:</span>
                      <div className="mt-2 flex flex-col gap-2">
                        {product.prices
                          .sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
                          .map((p, idx) => (
                            <a
                              key={p.source}
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center justify-between px-3 py-2 rounded border transition
                                ${idx === 0 ? "border-orange-400 bg-orange-50 font-bold text-orange-600" : "border-gray-200 bg-gray-50 hover:border-orange-300"}
                              `}
                            >
                              <span className="text-sm">{p.source}</span>
                              <span className="text-base">{p.currency}{p.price}</span>
                              <span className="text-xs underline text-blue-500">Go to site</span>
                            </a>
                          ))}
                      </div>
                    </div>
                  </div>
                  {/* Actions */}
                  <div className="mt-4">
                    <button className="p-2 rounded-full cursor-pointer border hover:bg-gray-100 text-gray-500" title="Wishlist">
                          <Heart className="w-5 h-5" />
                    </button>
                    {/* <button className="p-2 rounded-full border hover:bg-gray-100 text-gray-500" title="Compare">
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="6" height="20" rx="2" />
                        <rect x="16" y="2" width="6" height="20" rx="2" />
                      </svg>
                    </button> */}
                  </div>
                </div>
              </div>
  )
}

export default GridProductCard