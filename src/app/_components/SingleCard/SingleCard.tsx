"use client"
import React from "react";
import {
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import { AllProductsType } from '@/types/AllProducts.type'
import Image from 'next/image'
 import AddProductToCartBut from '../AddProductToCartBut/AddProductToCartBut'
import HeartInSingleCard from "../HeartInSingleCard/HeartInSingleCard"
import ProductRating from "../ProductRating/ProductRating"





export default  function SingleCard({ currentProduct  }: { currentProduct: AllProductsType  }) {


     
    return (
        <>

            <div className='card bg-white border border-gray-200 rounded-lg overflow-hidden 
                        transition-all duration-300 hover:-translate-y-2 hover:shadow-lg'>
                <div className='header p-0 relative'>
                    <CardTitle >
                        <div className='relative w-full aspect-4/5'>
                            <Image fill className='bg-white object-contain' src={currentProduct.imageCover} alt={currentProduct.category.name} />
                        </div>
                    </CardTitle>

                    {currentProduct.priceAfterDiscount && <div className='absolute top-3 left-3'>
                        <span className='bg-red-500 text-xs text-white rounded px-2 py-1 '>
                            -{Math.round(((currentProduct.price - currentProduct.priceAfterDiscount) / currentProduct.price) * 100)}%
                        </span>

                    </div>
                    }

                    <div className='absolute top-3 right-3 flex flex-col'>
                        <HeartInSingleCard productId={currentProduct._id}/> 

                        <button className='bg-white h-8 w-8 my-2 rounded-full text-gray-600 hover:text-green-600 flex items-center justify-center transition shadow-sm cursor-pointer'>
                            <i className="fa-solid fa-arrows-rotate"></i>
                        </button>
                        <button className='bg-white h-8 w-8 rounded-full text-gray-600 hover:text-green-600 flex items-center justify-center transition shadow-sm cursor-pointer'>
                            <Link href='/'>
                                <i className="fa-regular fa-eye"></i>
                            </Link>
                        </button>
                    </div>


                </div>

                <div className='content p-4'>


                    <div>
                        <Link href={`/products/${currentProduct.id}`}>
                            <h4 className='text-xs text-gray-500 mb-1'>{currentProduct.category.name}</h4>
                            <h5 className='line-clamp-2 min-h-[40px] font-medium mb-1 cursor-pointer '>
                                {currentProduct.title}
                            </h5>
                        </Link>
                    </div>

                    <div className='text-[#FDC700] mb-2'>
                       
                     

                        <ProductRating ratingProduct = {currentProduct.ratingsAverage} ratingQuanProduct = {currentProduct.ratingsQuantity} />

                    </div>
                    <div className='flex justify-between items-center'>
                        <h5>{currentProduct.priceAfterDiscount ? <div className='flex*'>
                            <span className='text-green-600 font-bold text-lg mr-2'>{currentProduct.priceAfterDiscount}</span>
                            <span className='text-sm text-gray-500 font-medium line-through'>{currentProduct.price}</span>
                        </div> :
                            <div className='text-gray-800 font-bold text-lg'>
                                <p>{currentProduct.price} EGP</p>
                            </div>}</h5>


                        <AddProductToCartBut productId={currentProduct._id} />

                    </div>


                </div>



            </div>


        </>
    )
}
