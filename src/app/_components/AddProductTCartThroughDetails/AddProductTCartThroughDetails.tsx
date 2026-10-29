"use client"
import { handleAddToCart } from '@/api/Cart';
import { CartContext } from '@/context/CartContext';
import React, { useContext, useState } from 'react'
import { toast } from 'sonner';

export default function AddProductTCartThroughDetails({productId} : {productId : string}) {
    const [isLoading, setIsLoading] = useState(false)
    const [cartProducts, setCartProducts] = useState([])
    const { setCartCount } = useContext(CartContext) as {setCartCount : (val: number)=>void}



    async function addToCart(productId: string) {
        


        try {
            setIsLoading(true)
            const response = await handleAddToCart({ productId });

            setCartProducts(response.data.products)

            if (response.status === "success") {
                toast.success(response.message, {
                    duration: 2000
                })
            
                setCartCount(response?.numOfCartItems)
              
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
        {isLoading ? <button className='text-white w-full cursor-pointer
                            flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-medium hover:bg-green-700 active:scale-[0.98] shadow-lg shadow-green-600/25 bg-green-600'>
                <i className="fa-solid fa-spinner fa-spin"></i>
                Adding to Cart...
            </button> : <button
            onClick={()=>addToCart(productId)} className='text-white w-full cursor-pointer
                            flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-medium hover:bg-green-700 active:scale-[0.98] shadow-lg shadow-green-600/25 bg-green-600'>
                <i className="fa-solid fa-cart-shopping"></i>
                Add to cart
            </button> }
            
        </>
    )
}
