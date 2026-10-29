"use client"
import { handleAddToWishlist } from '@/api/Wishlist.api'
import { WishlistContext } from '@/context/WishlistItems'
import { AddToWishlistType } from '@/types/WishlistProducts'
import React, {useContext, useState } from 'react'
import { toast } from 'sonner'

export default function AddProductToWishlist({ productId , compareIds}: { productId: string , compareIds : boolean }) {

    console.log(productId , "The original");
    

    const [isLoading, setIsLoading] = useState(false)

    const [cartProducts, setCartProducts] = useState<string[]>([])

    const [isProductIdInWishlist, setIsProductIdInWishlist] = useState(false)

     const {setWishlistCount}  = useContext(WishlistContext) as {setWishlistCount : (val: number)=>void}
  

    




    

    async function addToWishlist(productId: string) {

        try {
            setIsLoading(true)
            const response : AddToWishlistType = await handleAddToWishlist({ productId });

    
            setCartProducts(response.data)

            if (response.status === "success") {
                toast.success(response.message, {
                    duration: 2000
                })
             setWishlistCount(response?.data?.length)
          
                const compareIdsAfterAdding = response.data.some((item)=>item === productId)
                setIsProductIdInWishlist(compareIdsAfterAdding)
                

            

            } else {
                toast.error(response.message)
            }
        } catch (error) {
            toast.error("No Internet Connection")
        } finally {
            setIsLoading(false)
        }
    }

 

        

       
        


    return (
        <>
            {isLoading ? <button
            
                className='w-full flex items-center justify-center gap-2 border-2 py-3 px-4 rounded-xl
                             font-medium border-gray-200 text-gray-700 hover:border-green-300 hover:text-green-600 cursor-pointer'>
                <i className="fa-solid fa-spinner fa-spin"></i>
                <i className="fa-regular fa-heart"></i>
                Add to whishlist

            </button> :compareIds || isProductIdInWishlist ? <button className='flex-1 border-2 py-3 px-4 rounded-xl font-medium transition
             flex items-center justify-center gap-2 border-red-200 text-red-600 bg-red-50'>
                <i className='fa-solid fa-heart'></i>
                In Wishlist
             </button> : <button
                onClick={() => addToWishlist(productId)}
                className='w-full flex items-center justify-center gap-2 border-2 py-3 px-4 rounded-xl
                             font-medium border-gray-200 text-gray-700 hover:border-green-300 hover:text-green-600 cursor-pointer'>
                <i className="fa-regular fa-heart"></i>
                Add to whishlist

            </button>}



        </>
    )
}
