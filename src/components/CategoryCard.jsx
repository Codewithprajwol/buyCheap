// import { MoveRightIcon } from 'lucide-react'
// import React from 'react'

// const CategoryCard = ({bg,title,subTitle,price,img}) => {
//   return (
//     <div className={`p-2 sm:p-4 flex items-center justify-between ${bg} gap-3 `}>
//         <div className='flex flex-col gap-1 items-start justify-center whitespace-nowrap'>
//             <h1>{title}</h1>
//             <p>{subTitle}</p>
//             <p>starting {price}</p>
//             <div className='rounded-full h-7 w-7 bg-secondary flex items-center justify-center cursor-pointer '><MoveRightIcon size={15}/></div>
//         </div>
//         <div className='w-full h-32'>
//             <img src={img} alt="" className='w-full h-full object-cover' />
//         </div>
//     </div>
//   )
// }

// export default CategoryCard

import { MoveRightIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CategoryCard = ({ bg, title, subTitle, price, img }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${title.toLowerCase()}`);
  };

  return (
    <div
      className={`relative flex flex-col md:flex-row items-center md:items-stretch justify-between rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ${bg} overflow-hidden group border border-orange-100`}
      style={{
        minHeight: '10rem',
      }}
    >
      {/* Decorative gradient blob */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-tr from-orange-200 via-pink-100 to-blue-100 opacity-30 rounded-full blur-2xl pointer-events-none z-0"></div>
      
      {/* Image Section */}
      <div className="w-full  md:w-40 h-40 flex-shrink-0 flex items-center justify-center bg-white/60 z-10">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      {/* Info Section */}
      <div className="flex-1 flex flex-col justify-center px-6 py-4 z-10 text-center md:text-left">
        <h1 className="text-xl font-extrabold text-gray-800 mb-1">{title}</h1>
        <p className="text-base text-gray-500 mb-2">{subTitle}</p>
        <p className="text-sm text-orange-500 font-semibold mb-4">Starting {price}</p>
        <div className="flex justify-center md:justify-start">
          <button
            className="rounded-full h-10 w-10 bg-gradient-to-tr from-orange-200 via-orange-400 to-pink-200 flex items-center justify-center shadow hover:scale-110 hover:bg-orange-300 transition-all duration-200 border-2 border-orange-300"
            onClick={handleNavigate}
            aria-label={`Go to ${title} products`}
          >
            <MoveRightIcon size={22} className="text-orange-600" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard