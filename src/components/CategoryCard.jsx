import { MoveRightIcon } from 'lucide-react'
import React from 'react'

const CategoryCard = ({bg,title,subTitle,price}) => {
  return (
    <div className={`p-2 sm:p-4 flex items-center justify-between ${bg} gap-3 `}>
        <div className='flex flex-col gap-1 items-start justify-center whitespace-nowrap'>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <p>starting {price}</p>
            <div className='rounded-full h-7 w-7 bg-secondary flex items-center justify-center cursor-pointer '><MoveRightIcon size={15}/></div>
        </div>
        <div className='w-full h-32'>
            <img src="https://via.placeholder.com/150" alt="" className='w-full h-full object-cover' />
        </div>
    </div>
  )
}

export default CategoryCard