'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { type Swiper as SwiperTypes } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import Image from 'next/image';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const ProductGallery = ({ image }: { image: string }) => { // string bo'lishi kerak
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperTypes | null>(null);

    const images = [image, image, image]; // 3 marta takrorlaymiz

    return (
        <div className="space-y-4">
            {/* Main Swiper */}
            <div className="bg-neutral-100 rounded-2xl overflow-hidden">
                <Swiper
                    modules={[Navigation, Thumbs]}
                    navigation
                    loop={true}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    className="aspect-square"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            {/* MUHIM: relative wrapper */}
                            <div className="relative w-full h-full">
                                <Image
                                    src={img}
                                    alt={`Product view ${index + 1}`}
                                    fill
                                    className="object-contain p-8" // object-contain + padding
                                    priority={index === 0}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Thumbnails Swiper */}
            <Swiper
                modules={[FreeMode, Thumbs]}
                onSwiper={setThumbsSwiper}
                spaceBetween={16}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                className="thumbnails-swiper"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="aspect-square rounded-xl overflow-hidden border-2 border-transparent hover:border-neutral-300 transition-all cursor-pointer">
                            {/* MUHIM: relative wrapper */}
                            <div className="relative w-full h-full bg-neutral-100">
                                <Image
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    fill
                                    className="object-contain p-2" // object-contain + padding
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx>{`
                .thumbnails-swiper .swiper-slide-thumb-active > div {
                    border-color: #171717 !important;
                    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
                }
            `}</style>
        </div>
    );
};

export default ProductGallery;