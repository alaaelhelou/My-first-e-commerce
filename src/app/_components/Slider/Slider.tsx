'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img1 from '../../../../public/home-slider-1.d79601a8.png'
import Image from 'next/image';
import Link from 'next/link';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation'
import 'swiper/css/pagination'


export default function Slider() {
    
    

    return (
        <>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                
            modules={[Navigation , Pagination]}
            navigation={true}
            pagination={{clickable: true}}
         
            >
                <SwiperSlide className='relative'>
                    <Image className='object-cover w-full h-[400px] flex items-center justify-center' src={img1} alt="" />
                    <div className='absolute top-0 overlay py-20 text-white p-4 w-full h-full bg-linear-to-r from-green-500/90 to-green-400/50 z-30'>
                        <div className='content-center h-full w-[95%] mx-auto animate-fade-in-down'>
                            <h2 className='text-white font-bold text-3xl  mb-4'>
                                 Premium Quality <div>Guaranteed</div>
                            </h2>
                            <p>Fresh from farm to your table</p>
                            <div className='mt-4'>
                                <Link href={'/products'} className='bg-white border-white/50 rounded-md font-semibold text-blue-500 py-2 px-4 border-2 hover:scale-105 transition-transform inline-block hover:scale-105 transition-transform duration-300'>
                                Shop Now</Link>
                                <Link href={'/about'} className='bg-transparent rounded-md font-semibold py-2 px-4  border-2 border-white/50 text-white ml-2 inline-block hover:scale-105 transition-transform duration-300'>
                                Learn More</Link>
                            </div>
                           
                        </div>

                    </div>


                </SwiperSlide>

                <SwiperSlide className='relative'>
                    <Image className='object-cover w-full h-[400px] flex items-center justify-center' src={img1} alt="" />
                    <div className='absolute top-0 overlay py-20 text-white p-4 w-full h-full bg-linear-to-r from-green-500/90 to-green-400/50 z-30'>
                        <div className='content-center h-full w-[95%] mx-auto animate-fade-in-down'>
                            <h2 className='text-white font-bold text-3xl  mb-4'>
                                 Fast & Free Delivery
                            </h2>
                            <p>Same day delivery available</p>
                            <div className='mt-4'>
                                <Link href={'/products'} className='bg-white border-white/50 rounded-md font-semibold text-purple-500 py-2 px-4 border-2 hover:scale-105 transition-transform inline-block hover:scale-105 transition-transform duration-300'>
                                Order Now</Link>
                                <Link href={'/about'} className='bg-transparent rounded-md font-semibold py-2 px-4  border-2 border-white/50 text-white ml-2 inline-block hover:scale-105 transition-transform duration-300'>
                                Delivery Info</Link>
                            </div>
                           
                        </div>

                    </div>


                </SwiperSlide>

                <SwiperSlide className='relative'>
                    <Image className='object-cover w-full h-[400px] flex items-center justify-center' src={img1} alt="" />
                    <div className='absolute top-0 overlay py-20 text-white p-4 w-full h-full bg-linear-to-r from-green-500/90 to-green-400/50 z-30'>
                        <div className='content-center h-full w-[95%] mx-auto animate-fade-in-down'>
                            <h2 className='text-white font-bold text-3xl  mb-4'>
                                 Fresh Products Delivered<div>to your Door</div>
                            </h2>
                            <p>Get 20% off your first order</p>
                            <div className='mt-4'>
                                <Link href={'/products'} className='bg-white border-white/50 rounded-md font-semibold text-green-500 py-2 px-4 border-2 inline-block hover:scale-105 transition-transform duration-300'>
                                Shop Now</Link>
                                <Link href={'/about'} className='bg-transparent rounded-md font-semibold py-2 px-4  border-2 border-white/50 text-white ml-2 inline-block hover:scale-105 transition-transform duration-300'>
                                View Deals</Link>
                            </div>
                           
                        </div>

                    </div>


                </SwiperSlide>



            </Swiper>
            

        </>
    )
}
