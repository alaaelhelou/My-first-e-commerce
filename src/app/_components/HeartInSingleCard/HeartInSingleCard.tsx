"use client"
import { IsProductInWishlistContext } from '@/context/IsProductInWishlist';
import { WishlistDataType } from '@/types/WishlistProducts';
import React, { useContext } from 'react'



export default function HeartInSingleCard({ productId }: { productId: string }) {

    console.log(productId , "The original");

    const {isProductInWishlistCo} = useContext(IsProductInWishlistContext) as {isProductInWishlistCo : WishlistDataType[]}
    
   console.log(isProductInWishlistCo ,"tayeeb");

   const compareIdsAfterAdding = isProductInWishlistCo?.some((item)=>item._id === productId)
                

   
   






    return (
        <>
            {  compareIdsAfterAdding ? <button className='bg-white h-8 w-8 rounded-full text-red-500 flex items-center justify-center transition shadow-sm cursor-pointer'>
                    <i className="fa-solid fa-heart"></i>
                </button> : <button className='bg-white h-8 w-8 rounded-full text-gray-600 hover:text-red-500 flex items-center justify-center transition shadow-sm cursor-pointer' title="Add to wishlist">
                    <i className="fa-regular fa-heart"></i>
                </button>}
        </>
    )
}
