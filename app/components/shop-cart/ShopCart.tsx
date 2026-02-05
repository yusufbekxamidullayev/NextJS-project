import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa'

const ShopCart = ({ src, star, desc, price, discount, rating, not, dis }: { src: string | StaticImageData, star: string | StaticImageData , desc:string , price:string , discount?:string , rating:string , not?:string , dis?:string}) => {
  return (
      <div><div>
          <div className="bg-[#F0EEED] rounded-[20px] mb-4 aspect-square overflow-hidden">
              <Image src={src} alt='TShirt' />
          </div>
          <h3 className="text-[#000000] text-[16px] font-bold mb-2 line-clamp-1 sm:text-[20px]">{desc}</h3>
          <div className="flex gap-2 mb-2">
              <div className="flex gap-1">
                  <p className=' text-[#FFC633]'><FaStar /></p>
                  <p className=' text-[#FFC633]'><FaStar /></p>
                  <p className=' text-[#FFC633]'><FaStar /></p>
                  <p className=' text-[#FFC633]'><FaStarHalf /></p>
                  <span className="text-[14px]">{rating}</span>
              </div>
              <span className="text-[14px]">{discount}</span>
          </div>
          <div className='flex items-center gap-2'>
              <span className="text-[20px] font-bold sm:text-[24px]">${price}</span>
              <span className="font-bold text-[#00000066] line-through text-[18px] sm:text-[20px]">{not}</span>
              <span className="bg-[#FF33331A] text-[#FF3333] text-[12px] font-medium px-3 py-1 rounded-full">{dis}</span>

          </div>
      </div></div>
  )
}

export default ShopCart