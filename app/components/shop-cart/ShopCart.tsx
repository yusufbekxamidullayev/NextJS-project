import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa'

type productType = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

const ShopCart = ({ id , image, title, price }: productType) => {
  return (
      <Link href={`/products/${id}`}>
          <div className="relative w-full aspect-square bg-gray-100 rounded-[20px] overflow-hidden mb-3">
              <Image
                  src={image}
                  alt="shirt"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
              />
          </div>
          <h3 className="text-[#000000] text-[16px] font-bold mb-2 line-clamp-1 sm:text-[20px]">{title}</h3>
          <div className="flex gap-2 mb-2">
              <div className="flex gap-1">
                  <p className='text-[18px] text-[#FFC633]'><FaStar /></p>
                  <p className='text-[18px] text-[#FFC633]'><FaStar /></p>
                  <p className='text-[18px] text-[#FFC633]'><FaStar /></p>
                  <p className='text-[18px] text-[#FFC633]'><FaStarHalf /></p>
              </div>
          </div>
          <div className='flex items-center gap-2'>
              <span className="text-[20px] font-bold sm:text-[24px]">${price}</span>
          </div>
      </Link>
  )
}

export default ShopCart