"use client"
import { handleClearCart, handleDeleteFromCart, handleGetUserCart, handleUpdateCart } from '@/api/Cart'
import { LoggedCartType, ProductCart } from '@/types/CartProducts.type'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Spinner } from "@/components/ui/spinner"
import { CartContext } from '@/context/CartContext'
import { useSession } from 'next-auth/react'



export default function Cart() {


    const {data : session} = useSession()
    const [data, setData] = useState<LoggedCartType>({} as LoggedCartType)
    const [toFreeShipping, setToFreeShipping] = useState(0)
    const [percenrageToFreeShipping, setPercenrageToFreeShipping] = useState(0)
    const [isLoadingUpadating, setIsLoadingUpadating] = useState(false)
    const {cartCount ,setCartCount} = useContext(CartContext) as {cartCount : number , setCartCount : (val: number)=>void}

    
    async function getUserCart() {
    
        try {
            setIsLoadingUpadating(true)
            const response: LoggedCartType = await handleGetUserCart();
            setData(response)
            setToFreeShipping(500 - response.data.totalCartPrice)
            setPercenrageToFreeShipping((toFreeShipping / 500) * 100)
            setCartCount(response?.numOfCartItems)
          
        } catch (error) {
            console.log(error);
        }finally{
            setIsLoadingUpadating(false)
        }
    }

    


    async function updateCart(productId: string, count: number) {
        try {
            const response: LoggedCartType = await handleUpdateCart(productId, count)

            setData(response)
        } catch (error) {
            console.log(error);

        }

    }



    async function deleteFromCart(productId: string) {
        try {
            const response: LoggedCartType = await handleDeleteFromCart(productId)
            console.log(response);
            setData(response)

        } catch (error) {
            console.log(error);

        }

    }

      async function clearCart() {
        try {
            const response: LoggedCartType = await handleClearCart();
            console.log(response);
            setData(response)

        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {
        getUserCart()
    }, [])






    










    if (!data || !data.data) {
        return <>
            <div className='flex flex-col h-screen items-center justify-center'>


                <div className="loader"></div>

                <h3 className='text-gray-500 font-medium m-0'>Loading Products In Your Cart...</h3>


            </div>


        </>
    }

    return (
        <>

            {data.data.products.length !== 0 ? <main className='bg-gray-50 min-h-screen px-4 py-8'>

                <div className='mb-8'>

                    <div className='flex items-center gap-2 text-sm text-gray-500 mb-4'>

                        <Link href={"/"} className='hover:text-green-600 transition'>Home</Link>
                        <span>/</span>
                        <span className='text-gray-900 font-medium'>Shopping Cart</span>

                    </div>

                    <div className='flex items-center justify-between'>
                        <div>
                            <h1 className='flex items-center gap-3 text-3xl font-bold text-gray-900'>
                                <span className='flex items-center justify-center bg-linear-to-r from-green-600 to-green-700 text-white w-12 h-12 rounded-xl'>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </span>
                                Shopping Cart

                            </h1>
                            <p className='text-gray-500 mt-2'>
                                You have <span className='font-semibold text-green-600'>{cartCount}</span> in your cart
                            </p>
                        </div>

                    </div>

                </div>

                <div className='lg:flex gap-8'>

                    <div className='w-full lg:w-2/3'>

                        {data.data.products.map((item: ProductCart) => <div key={item._id} className="inner">

                            <div className={`relative bg-white rounded-2xl shadow-sm hover:shadow-md 
                            border border-gray-100 transition-all duration-300 mb-5 ${isLoadingUpadating ?`opacity-60 pointer-events-none` : `opacity-100` }`}>
                                {isLoadingUpadating && (<div className='absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-[2px] rounded-2xl z-10'>
                            
                            <span className='flex items-center gap-2 bg-white/90 shadow-md border border-gray-100 px-4 py-2 rounded-2xl'>
                                 <Spinner className="size-4 text-green-500" />
                                 <span className='font-medium text-gray-700'>Updating...</span>
                            </span>
                                    </div>)}
                                <div className='p-4 sm:p-5'>
                                    <div className='flex gap-4 sm:gap-6'>


                                        <Link href={"/"} className='relative shrink-0 group'>
                                            <div className='relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-gradient-to-br from-gray-50 via-white to-gray-100 p-3 border border-gray-100 overflow-hidden'>

                                                <Image fill className='object-contain transition-transform duration-300 group-hover:scale-110' src={item.product.imageCover} alt={item.product.slug} />




                                            </div>
                                            <div className='absolute -bottom-1 -right-1 flex items-center gap-1 bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full'>
                                                <i className="fa-solid fa-check text-[8px]"></i>
                                                In Stock
                                            </div>
                                        </Link>

                                        <div className='w-full flex flex-col'>

                                            <div className='mb-3'>

                                                <Link href={"/"}>
                                                    <h3 className='font-semibold text-gray-900 hover:text-green-600 transition-colors leading-relaxed text-base sm:text-lg'>
                                                        {item.product.title}
                                                    </h3>
                                                </Link>

                                                <div className='flex items-center gap-2 mt-2'>
                                                    <span className='inline-block bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 text-xs px-2.5 py-1  font-medium rounded-full'>
                                                        {item.product.category.name}
                                                    </span>
                                                    <span className='text-xs text-gray-400'>•</span>
                                                    <span className='text-xs text-gray-500'>{item.product._id.slice(-6).toUpperCase()}</span>

                                                </div>

                                            </div>

                                            <div className='mb-4'>
                                                <div className='flex items-baseline gap-2'>
                                                    <span className='text-green-600 font-bold text-lg'>{item.price} EGP</span>
                                                    <span className='text-xs text-gray-400'>per unit</span>
                                                </div>

                                            </div>

                                            <div className='flex flex-wrap items-center justify-between gap-4 mt-auto'>

                                               
                                                <div className='w-full mt-auto flex flex-wrap items-center justify-between'>
                                                    <div className='flex items-center'>

                                                        <div className='flex items-center bg-gray-50 border border-gray-200 rounded-xl p-1'>

                                                            <button onClick={() => updateCart(item.product._id, item.count - 1)} className="h-8 w-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg bg-white shadow-sm cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none transition-all">
                                                                <Minus className='w-4 h-4' />
                                                            </button>
                                                            <span className='w-12 text-gray-900 text-center font-bold'>{item.count}</span>
                                                            <button onClick={() => updateCart(item.product.id, item.count + 1)} className="h-8 w-8  flex items-center justify-center text-white rounded-lg bg-green-600 hover:bg-green-700 shadow-sm shadow-green-600/30 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-all">
                                                                <Plus className='w-4 h-4' />
                                                            </button>

                                                        </div>


                                                    </div>
                                                    <div className='flex items-center gap-4'>
                                                        <div className='text-right'>
                                                            <p className='text-xs text-gray-400 mb-0.5'>Total</p>
                                                            <p className='text-xl font-bold text-gray-900'>
                                                                {item.price * item.count}
                                                                <span className='text-sm font-medium text-gray-400'>  EGP</span>
                                                            </p>
                                                        </div>


                                                        <AlertDialog>
                                                          
                                                            <AlertDialogTrigger
                                                                render={<button className='h-10 w-10 flex items-center justify-center border border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 rounded-xl cursor-pointer disabled:opacity-40 transition-all duration-200'>
                                                                    <i className="fa-solid fa-trash text-sm"></i></button>}
                                                            />

                                                    
                                                            <AlertDialogContent className="rounded-2xl bg-white text-center p-6 m-0 ring-0">
                                                                
                                                                    <div className='text-center py-2'>
                                                                        <div className='w-16 h-16 flex items-center justify-center mx-auto mb-4 rounded-full bg-red-100'>
                                                                            <i className="fa-regular fa-trash-can text-2xl text-red-500"></i>
                                                                        
                                                                        </div>
                                                                         <h3 className="text-xl font-bold text-gray-900 mb-2">Remove Item?</h3>
                                                                            <p className='text-gray-500 text-sm'>
                                                                                Remove <span className='font-semibold text-gray-700'>{item.product.title} </span>
                                                                                 from your cart?
                                                                            </p>

                                                                    </div>
                                                                   
                                                                    
                                                             

                                                                <AlertDialogFooter className='justify-center!'>
                                                           
                                                                    <AlertDialogCancel className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl focus-visible:ring-0! border-0 cursor-pointer transition-all">Cancel</AlertDialogCancel>

                                                                    <AlertDialogAction
                                                                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all cursor-pointer"
                                                                        onClick={() => deleteFromCart(item.product._id)}
                                                                    >
                                                                        Remove
                                                                    </AlertDialogAction>
                                                                </AlertDialogFooter>
                                                            </AlertDialogContent>
                                                        </AlertDialog>


                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>)}

                        <div className='flex items-center justify-between border-t border-gray-200 mt-6 pt-6'>
                            <Link href={"/products"} className='flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm'>
                                <span>←</span>
                                Continue Shopping
                            </Link>

                             <AlertDialog>
                                                          
                                                            <AlertDialogTrigger
                                                                render={<button className='clearr flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50 cursor-pointer'>
                                <i className="fa-solid fa-trash text-xs clearr-hover:scale-110 transition-transform"></i>
                                <span>Clear all items</span>

                            </button>}
                                                            />

                                                    
                                                            <AlertDialogContent className="rounded-2xl bg-white text-center p-6 m-0 ring-0">
                                                                
                                                                    <div className='text-center py-2'>
                                                                        <div className='w-16 h-16 flex items-center justify-center mx-auto mb-4 rounded-full bg-red-100'>
                                                                            <i className="fa-solid fa-cart-shopping text-2xl text-red-500"></i>
                                                                       
                                                                        </div>
                                                                         <h3 className="text-xl font-bold text-gray-900 mb-2">Clear Your Cart?</h3>
                                                                            <p className='text-gray-500 text-sm mx-auto'>
                                                                               All items will be removed from your cart. This action cannot be undone.
                                                                            </p>

                                                                    </div>
                                                                   
                                                                    
                                                             

                                                                <AlertDialogFooter className='justify-center!'>
                                                           
                                                                    <AlertDialogCancel className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl focus-visible:ring-0! border-0 cursor-pointer transition-all">Keep Shopping</AlertDialogCancel>

                                                                    <AlertDialogAction
                                                                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all cursor-pointer"
                                                                        onClick={() => clearCart()}
                                                                    >
                                                                        Yes, Clear All
                                                                    </AlertDialogAction>
                                                                </AlertDialogFooter>
                                                            </AlertDialogContent>
                                                        </AlertDialog>

                            

                        </div>



                    </div>

                    <div className="w-full lg:w-1/3">
                        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden sticky top-24">


                            <div className='bg-gradient-to-r from-green-600 to-green-700 px-6 py-4 mb-5'>
                                <h2 className='flex items-center gap-2 text-white text-lg font-bold'>
                                    <i className="fa-solid fa-bag-shopping"></i>
                                    Order Summary
                                </h2>
                                <p className='text-green-100 text-sm mt-1'>
                                   {cartCount} in your cart
                                </p>

                            </div>

                            <div className='p-6'>

                                {data.data.totalCartPrice >= 500 ? <div className='flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 mb-5'>
                                    <div className='w-10 h-10 bg-green-100 flex items-center justify-center rounded-full'>
                                        <i className="fa-solid fa-truck text-green-600"></i>

                                    </div>
                                    <div>
                                        <p className='font-semibold text-green-700'>Free Shipping!</p>
                                        <p className='text-sm text-green-600'>You qualify for free delivery</p>
                                    </div>
                                </div> :
                                    <div className='bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 mb-5'>
                                        <div className='flex items-center gap-2 mb-2'>
                                            <i className="fa-solid fa-truck text-orange-600"></i>
                                            <span className='text-sm font-medium text-gray-700'>
                                                Add {toFreeShipping}  EGP for free shipping
                                            </span>

                                        </div>
                                        <div className='h-2 bg-orange-100 rounded-full overflow-hidden'>
                                            <div
                                                style={{
                                                    width: `${percenrageToFreeShipping}%`
                                                }}


                                                className='h-full bg-gradient-to-r from-orange-400 to-amber-400 rounded-full transition-all duration-500'></div>

                                        </div>
                                    </div>
                                }





                                <div className='mb-5'>
                                    <div className='flex justify-between text-gray-600'>
                                        <span>Subtotal</span>
                                        <span className='font-medium text-gray-900'>{data.data.totalCartPrice}  EGP</span>

                                    </div>
                                    <div className='flex justify-between text-gray-600 my-3'>
                                        <span>Shipping</span>
                                        {data.data.totalCartPrice >= 500 ? <span className='font-medium text-green-600'>FREE</span> : <span className='font-medium text-gray-900'>50 EGP</span>}

                                    </div>
                                    <div className='border-t border-dashed border-gray-200 pt-3 mt-3 mb-5'>
                                        <div className='flex justify-between items-baseline'>

                                            <span className='text-gray-900 font-semibold'>Total</span>
                                            <div className='text-right'>

                                                <span className='text-2xl text-gray-900 font-bold'>{data.data.totalCartPrice >= 500 ? `${data.data.totalCartPrice}` : `${data.data.totalCartPrice + 50}`}</span>
                                                <span className='text-sm text-gray-500 ml-1'>EGP</span>
                                            </div>


                                        </div>

                                    </div>

                                </div>

                                <button className='w-full flex items-center justify-center gap-2 py-3 mb-5 border 
                            border-dashed border-gray-300 text-gray-600 cursor-pointer
                            hover:border-green-400 hover:text-green-600 hover:bg-green-50/50 rounded-xl transition-all'>

                                    <i className="fa-solid fa-tag"></i>
                                    <span className='text-sm font-medium'>Apply Promo Code</span>

                                </button>
                                {session ? <Link href={"/checkout"} className='w-full flex items-center justify-center gap-3 mb-5 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl font-semibold 
                            hover:from-green-700 hover:to-green-800 transition-all 
                             shadow-lg shadow-green-600/20 active:scale-[0.98]'>
                                    <i className="fa-solid fa-lock"></i>
                                    <span>Secure Checkout</span>
                                </Link> : <Link href={"/login"} className='w-full flex items-center justify-center gap-3 mb-5 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl font-semibold 
                            hover:from-green-700 hover:to-green-800 transition-all 
                             shadow-lg shadow-green-600/20 active:scale-[0.98]'>
                                    <i className="fa-solid fa-lock"></i>
                                    <span>Log in to Checkout</span>
                                </Link>}

                               

                                <div className='flex items-center justify-center gap-4 py-2 mb-5'>
                                    <div className='flex items-center gap-1.5 text-xs text-gray-500'>
                                        <i className="fa-solid fa-shield-halved text-green-500"></i>
                                        <span>Secure Payment</span>

                                    </div>

                                    <div className='w-px h-4 bg-gray-200'></div>
                                    <div className='flex items-center gap-1.5 text-xs text-gray-500'>
                                        <i className="fa-solid fa-truck text-blue-500"></i>
                                        <span>Fast Delivery</span>

                                    </div>

                                </div>

                                <Link href={"/products"} className='block text-center text-green-600 hover:text-green-700 text-sm font-medium py-2'>
                                    ← Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>




                </div>




            </main> : <main className='flex items-center justify-center min-h-[60vh] px-4'>
                <div className='max-w-md text-center'>
                    <div className='relative mb-8'>
                        <div className='w-32 h-32 flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-50 rounded-full mx-auto'>
                            <i className="fa-solid fa-box-open text-5xl text-gray-300"></i>
                        </div>
                        <div className='absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-100 w-24 h-4 rounded-full blur-md'>
                        </div>
                    </div>

                    <h2 className='text-gray-900 text-2xl font-bold mb-3'>
                        Your cart is empty
                    </h2>
                    <p className='text-gray-500 mb-8'>Looks like you haven't added anything to your cart yet. <br /> Start exploring our products!</p>
                    <Link href={"/"} className='inline-flex items-center gap-2 bg-linear-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 transition-all py-3.5 px-8 rounded-xl font-semibold shadow-lg shadow-green-600/20 active:scale-[0.98]'>
                        Start Shopping
                        <i className="fa-solid fa-arrow-right text-sm"></i>
                    </Link>

                    <div className='border-t border-gray-100 mt-12 pt-8'>
                        <p className='text-sm text-gray-400 mb-4'>Popular Categories</p>
                        <div className='flex flex-wrap justify-center gap-2'>
                            <Link href={"/catrgories"} className='bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 text-sm font-medium px-4 py-2 rounded-full transition-colors'>
                                Electronics
                            </Link>
                            <Link href={"/catrgories"} className='bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 text-sm font-medium px-4 py-2 rounded-full transition-colors'>
                                Fashion
                            </Link>
                            <Link href={"/catrgories"} className='bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 text-sm font-medium px-4 py-2 rounded-full transition-colors'>
                                Home
                            </Link>
                            <Link href={"/catrgories"} className='bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 text-sm font-medium px-4 py-2 rounded-full transition-colors'>
                                Beauty
                            </Link>

                        </div>

                    </div>

                </div>

            </main>}




        </>
    )

}
