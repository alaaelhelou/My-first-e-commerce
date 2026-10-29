"use client"
import {  handleDeleteFromWishlist, handleGetUserWishlist } from '@/api/Wishlist.api'
import AddProductToCartThroughWishlist from '@/app/_components/AddProductToCartThroughWishlist/AddProductToCartThroughWishlist'
import { IsProductInWishlistContext } from '@/context/IsProductInWishlist'
import { WishlistContext } from '@/context/WishlistItems'
import { AllWishlistType, RemoveProductType, WishlistDataType } from '@/types/WishlistProducts'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'


export default function Wishlist() {

    const [data, setData] = useState<AllWishlistType>({} as AllWishlistType)
    const {setWishlistCount} : {setWishlistCount : string} = useContext(WishlistContext)
    const {setIsProductInWishlistCo}  = useContext(IsProductInWishlistContext)

    



    async function getUserWishlist() {
        try {

            const response: AllWishlistType = await handleGetUserWishlist();
            setData(response)
            console.log(response, "My Wishlistt");
            setWishlistCount(response?.count)
            setIsProductInWishlistCo(response?.data)

        } catch (error) {
            console.log(error);
        }
    }

    async function deleteFromWishlist(productId: string) {
        try {
            const response: RemoveProductType = await handleDeleteFromWishlist(productId)

            console.log(response);

            getUserWishlist()


        } catch (error) {
            console.log(error);

        }

    }
    console.log(data);


    useEffect(() => {
        getUserWishlist()
    }, [])

    if (!data?.data) {
        return (<>
            <div className='flex flex-col h-screen items-center justify-center'>


                <div className="loader"></div>

                <h3 className='text-gray-500 font-medium m-0'>Loading Products...</h3>


            </div>


        </>
        )

    }




    return (
        <>
            <div className='min-h-screen bg-gray-50/50'>

                {data?.data?.length === 0 ? <div className='px-4 py-20'>
                    <div className='max-w-sm mx-auto text-center'>
                        <div className='w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6'>
                            <i className='fa-regular fa-heart text-3xl text-gray-400'></i>
                        </div>
                        <h2 className='text-xl font-bold text-gray-900 mb-2'>Your wishlist is empty</h2>
                        <p className='text-gray-500 text-sm mb-6'>Browse products and save your favorites here.</p>

                        <div>
                            <Link href={"/products"} className='inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                         bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors'>
                                Browse Products
                                <i className='fa-solid fa-arrow-right text-sm'></i>
                            </Link>
                        </div>

                    </div>

                </div> : <>
                    <div className='bg-white border-b border-gray-100'>

                        <div className='px-4 py-8'>

                            <div className='flex items-center gap-2 text-sm text-gray-500 mb-4'>
                                <div className='flex items-center gap-2 text-sm text-gray-500 mb-4'>
                                    <Link href={"/"} className='hover:text-green-600 transition-colors'>
                                        Home
                                    </Link>
                                    <span>/</span>
                                    <span className='text-gray-900 font-medium'>Wishlist</span>

                                </div>

                            </div>

                            <div className="flex items-center justify-between">
                                <div className='flex items-center gap-4'>


                                    <div className='w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center'>
                                        <i className='fa-solid fa-heart text-xl text-red-500'></i>

                                    </div>

                                    <div>
                                        <h1 className='text-2xl font-bold text-gray-900'>
                                            My Wishlist
                                        </h1>
                                        <p className='text-gray-500 text-sm'>{data.count} items saved</p>
                                    </div>



                                </div>

                            </div>

                        </div>

                    </div>

                    <main className='px-4 py-8'>


                        <div className='rounded-2xl border border-gray-100 '>


                            <div className='hidden lg:w-full lg:flex gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-500 text-center' >
                                <div className='w-1/2'>
                                    Product
                                </div>
                                <div className='w-1/6'>
                                    Price
                                </div>
                                <div className='w-1/6'>
                                    Status
                                </div>
                                <div className='w-1/6 text-center'>
                                    Actions
                                </div>

                            </div>

                            <div>

                                {data?.data?.map((item: WishlistDataType) => <div key={item._id}
                                 className='w-full lg:flex items-center gap-4 p-4 lg:px-6 lg:py-5 bg-white hover:bg-gray-100 border-b border-gray-100 transition-colors'>


                                    <div className='lg:w-1/2 flex items-center gap-4'>
                                        <Link href={`/products/${item._id}`} className='w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden shrink-0'>

                                            <div className='relative aspect-square'>
                                                <Image fill className='object-contain p-2' alt={item.description} src={item.imageCover} />
                                            </div>

                                        </Link>
                                        <div className='min-w-0'>
                                            <Link href={`/products/${item._id}`} className='font-medium text-gray-900 hover:text-green-600 transition-colors'>{item.title}</Link>
                                            <p className='text-sm text-gray-400 mt-1'>{item.category.name}</p>

                                        </div>

                                    </div>

                                    <div className='lg:w-1/6 flex lg:justify-center items-center gap-2'>
                                        <span className='lg:hidden text-sm text-gray-500'>
                                            Price:
                                        </span>
                                        <div className='text-right lg:text-center'>
                                            <div className='font-semibold text-gray-900'>
                                                {item.priceAfterDiscount ? `${item.priceAfterDiscount} EGP` : `${item.price} EGP`}
                                            </div>

                                            {item.priceAfterDiscount && <div className='text-sm text-gray-400 line-through'>{item.priceAfterDiscount} EGP</div>}

                                        </div>

                                    </div>

                                    <div className='lg:w-1/6 flex lg:justify-center'>
                                        <span className='lg:hidden text-sm text-gray-500 mr-2'>Status:</span>
                                        <div className='inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-green-50 text-green-700 rounded-full'>
                                            <span className='w-1.5 h-1.5 rounded-full bg-green-500'></span>
                                            In Stock
                                        </div>
                                    </div>

                                    <div className='lg:w-1/6 flex items-center gap-2 lg:justify-center'>
                               
                                                    <AddProductToCartThroughWishlist productId={item._id}/>


                                        <button onClick={() => deleteFromWishlist(item._id)} className='w-10 h-10 flex items-center justify-center text-gray-400
                             hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all rounded-lg border border-gray-200 cursor-pointer disabled:opacity-50'>
                                            <i className='fa-solid fa-trash text-sm'></i>
                                        </button>

                                    </div>

                                </div>)}



                            </div>

                        </div>


                        

                        <div className='mt-8 flex items-center'>
                            <Link href={"/products"} className='text-sm font-medium text-gray-500 hover:text-green-600 transition-colors'>
                                ← Continue Shopping
                            </Link>
                        </div>

                    </main>
                </>}







            </div>
        </>
    )
}
