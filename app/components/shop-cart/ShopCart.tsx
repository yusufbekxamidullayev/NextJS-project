import Image, { StaticImageData } from 'next/image'
import React from 'react'

const ShopCart = ({ src, star, desc, price, discount, rating, not, dis }: { src: string | StaticImageData, star: string | StaticImageData , desc:string , price:string , discount?:string , rating:string , not?:string , dis?:string}) => {
  return (
      <div><div>
          <div className="bg-[#F0EEED] rounded-[20px] mb-4 aspect-square overflow-hidden">
              <Image src={src} alt='TShirt' />
          </div>
          <h3 className="text-[20px] #000000 font-bold mb-2">{desc}</h3>
          <div className="flex gap-2 mb-2">
              <div className="flex gap-2">
                  <Image src={star} alt='original-star' />
                  <span className="text-[14px]">{rating}</span>
              </div>
              <span className="text-[14px]">{discount}</span>
          </div>
          <div className='flex items-center gap-2'>
              <span className="text-[24px] font-bold">${price}</span>
              <span className="text-[20px] font-bold text-[#00000066] line-through">{not}</span>
              <span className="bg-[#FF33331A] text-[#FF3333] text-[12px] font-medium px-3 py-1 rounded-full">{dis}</span>

          </div>
      </div></div>
  )
}

export default ShopCart