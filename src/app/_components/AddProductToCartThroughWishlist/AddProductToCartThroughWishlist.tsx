"use client"
import { handleAddToCart, handleGetUserCart } from '@/api/Cart';
import { handleGetUserWishlist } from '@/api/Wishlist.api';
import { CartContext } from '@/context/CartContext';
import { LoggedCartType, ProductCart, ProductSpecificType } from '@/types/CartProducts.type';
import { AllWishlistType } from '@/types/WishlistProducts';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'sonner';

export default function AddProductToCartThroughWishlist({ productId }: { productId: string }) {

    const [isLoading, setIsLoading] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const [cartProducts, setCartProducts] = useState([])
    const [isProductIdInCart, setIsProductIdInCart] = useState(false)
    const {setCartCount} = useContext(CartContext)



    async function addToCart(productId: string) {
        console.log(productId);

        try {
            setIsLoading(true)
            const response = await handleAddToCart({ productId });

        
            setCartProducts(response.data.products)

            if (response.status === "success") {
                toast.success(response.message, {
                    duration: 2000
                })
                setIsChecked(true)
                setCartCount(response?.numOfCartItems)
                setTimeout(() => {
                    setIsChecked(false)
                }, 2000)

                const isProductInCart = response.data.products.some((item: ProductCart) => item.product._id === productId)
            

            setIsProductIdInCart(isProductInCart)

              
            } else {
                toast.error(response.message)
            }
        } catch (error) {
            toast.error("No Internet Connection")
        } finally {
            setIsLoading(false)
        }



    }

    async function getCart() {

        try {


            const response: LoggedCartType = await handleGetUserCart();

            const isProductInCart = response.data.products.some((item: ProductCart) => item.product._id === productId)
            console.log(isProductIdInCart, "checking id in cart");

            setIsProductIdInCart(isProductInCart)



        } catch (error) {
            console.log(error);
        }
    }

   useEffect(() => {
     getCart()
   }, [])
   


   

    return (
        <>
        

            {isProductIdInCart ? <Link href={"/cart"} className='flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg
                                          text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all'>
                <i className='fa-solid fa-check text-xs text-green-600'></i>
                <span className='md:hidden lg:inline'>View Cart</span>
            </Link> : isLoading ?
                <button disabled className='inline-flex items-center justify-center bg-green-600
      gap-2 flex-1 lg:flex-none px-4 py-2.5 rounded-lg text-sm font-medium text-white disabled:opacity-70'>
                    <i className="fa-solid fa-spinner fa-spin"></i>
                    Adding To Cart
                </button> : isChecked ? <button className='inline-flex items-center justify-center
                 gap-2 flex-1 lg:flex-none px-4 py-2.5 rounded-lg text-sm font-medium 
                 transition-all bg-green-600 text-white'>
                    <i className='fa-solid fa-check text-xs text-green-600'></i>
                    <span className='md:hidden lg:inline'>Added</span>
                </button> : <button
                    onClick={() => addToCart(productId)} className='inline-flex items-center justify-center
                                            gap-2 flex-1 lg:flex-none px-4 py-2.5 rounded-lg text-sm font-medium 
                                            transition-all bg-green-600 text-white hover:bg-green-700 cursor-pointer'>
                    <i className='fa-solid fa-cart-shopping text-xs'></i>
                    <span className='md:hidden lg:inline'>Add to Cart</span>

                </button>}





        </>
    )
}
