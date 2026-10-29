import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img from '../../../../public/freshcart-logo.49f1b44d.svg'

export default function Footer() {
    return (
        <>


            <div className='bg-green-50 border-y border-green-100bg-green-50 border-y border-green-100 mt-4'>
                <div className='p-4'>
                    <div className='flex flex-wrap'>
                        <div className='w-full sm:w-1/2 lg:w-1/4'>
                            <div className="inner p-6">
                                <div className='flex items-center gap-3'>
                                    <div className='w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0'>
                                        <i className='fa-solid fa-truck text-green-600 text-lg'></i>
                                    </div>
                                    <div>
                                        <h4 className='font-semibold text-gray-900 text-sm'>Free Shipping</h4>
                                        <p className='text-gray-500 text-xs'>On orders over 500 EGP</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full sm:w-1/2 lg:w-1/4'>
                            <div className="inner p-6">
                                <div className='flex items-center gap-3'>
                                    <div className='w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0'>
                                        <i className='fa-solid fa-arrow-rotate-left text-green-600 text-lg'></i>
                                    </div>
                                    <div>
                                        <h4 className='font-semibold text-gray-900 text-sm'>Easy Returns</h4>
                                        <p className='text-gray-500 text-xs'>14-day return policy</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full sm:w-1/2 lg:w-1/4'>
                            <div className="inner p-6">
                                <div className='flex items-center gap-3'>
                                    <div className='w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0'>
                                        <i className='fa-solid fa-shield-halved text-green-600 text-lg'></i>
                                    </div>
                                    <div>
                                        <h4 className='font-semibold text-gray-900 text-sm'>Secure Payment</h4>
                                        <p className='text-gray-500 text-xs'>100% secure checkout</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full sm:w-1/2 lg:w-1/4'>
                            <div className="inner p-6">
                                <div className='flex items-center gap-3'>
                                    <div className='w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0'>
                                        <i className='fa-solid fa-headset text-green-600 text-lg'></i>
                                    </div>
                                    <div>
                                        <h4 className='font-semibold text-gray-900 text-sm'>24/7 Support</h4>
                                        <p className='text-gray-500 text-xs'>Contact us anytime</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className='bg-gray-900 text-white'>


                <div className='px-4 py-10'>
                 
                    <div className="flex flex-wrap">


                        <div  className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-2/6'>
              <div className="inner p-4 sm:p-5">
                <div>
      
                 <Link href='/' className='inline-block mb-6 bg-white'>
                                        <Image src={img} alt="Fresh Cart Logo" />
                                    </Link>
                                   <p className='text-gray-400 mb-6 text-sm leading-relaxed'>
                                    FreshCart is your one-stop destination for quality products. From fashion to electronics, we bring you the best brands at competitive prices with a seamless shopping experience.
                                   </p>
                                   <div className='space-y-3 mb-6'>
                                    <a href="tel:+18001234567" className='flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors text-sm'>
                                        <i className='fa-solid fa-phone text-green-500'></i>
                                        <span>+1 (800) 123-4567</span>
                                    </a>
                                    <a href="mailto:support@freshcart.com" className='flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors text-sm'>
                                        <i className='fa-solid fa-envelope text-green-500'></i>
                                        <span>support@freshcart.com</span>
                                    </a>
                                    <div className='flex items-start gap-3 text-gray-400 text-sm'>
                                        <i className='fa-solid fa-location-dot text-green-500 mt-0.5'></i>
                                        <span>123 Commerce Street, New York, NY 10001</span>
                                    </div>
                                   </div>

                                   <div className='flex items-center gap-3'>
                                    <a href="#" className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center
                                     text-gray-400 hover:bg-green-600 hover:text-white transition-colors'>
                                        <i className='fa-brands fa-facebook-f'></i>
                                     </a>

                                     <a href="#" className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center
                                     text-gray-400 hover:bg-green-600 hover:text-white transition-colors'>
                                        <i className='fa-brands fa-twitter'></i>
                                     </a>

                                     <a href="#" className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center
                                     text-gray-400 hover:bg-green-600 hover:text-white transition-colors'>
                                        <i className='fa-brands fa-instagram'></i>
                                     </a>

                                     <a href="#" className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center
                                     text-gray-400 hover:bg-green-600 hover:text-white transition-colors'>
                                        <i className='fa-brands fa-youtube'></i>
                                     </a>

                                   </div>
                </div>
              </div>
              </div>
               <div  className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6'>
              <div className="inner p-4 sm:p-5">
                <div>
            
                <h3 className='font-semibold text-lg mb-5'>Shop</h3>
                        <ul>
                            <li className='mb-3'>
                                <Link href={"/products"} className='text-gray-400 hover:text-green-400 transition-colors text-sm mb-3'>
                                All Products</Link>
                            </li>
                            <li className='mb-3'>
                                <Link href={"/categories"} className='text-gray-400 hover:text-green-400 transition-colors text-sm mb-3'>
                                Categories</Link>
                            </li>
                            <li className='mb-3'>
                                <Link href={"/brands"} className='text-gray-400 hover:text-green-400 transition-colors text-sm mb-3'>
                                Brands</Link>
                            </li>
                            <li className='mb-3'>
                                <Link href={"/categories"} className='text-gray-400 hover:text-green-400 transition-colors text-sm mb-3'>
                                Electronics</Link>
                            </li>
                            <li className='mb-3'>
                                <Link href={"/categories"} className='text-gray-400 hover:text-green-400 transition-colors text-sm mb-3'>
                                Men's Fashion</Link>
                            </li>
                            <li className='mb-3'>
                                <Link href={"/categories"} className='text-gray-400 hover:text-green-400 transition-colors text-sm mb-3'>
                                Women's Fashion</Link>
                            </li>

                        </ul>
                </div>
              </div>
              </div>
               <div  className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6'>
              <div className="inner p-4 sm:p-5">
                <div>
            
                 <h3 className='font-semibold text-lg mb-5'>Account</h3>
                        <ul>
                            <li className='mb-3'>
                                <Link href={"/profile/address"} className='text-gray-400 hover:text-green-400 transition-colors text-sm mb-3'>
                                My Account</Link>
                            </li>
                            <li className='mb-3'>
                                <Link href={"/allOrders"} className='text-gray-400 hover:text-green-400 transition-colors text-sm mb-3'>
                                Order History</Link>
                            </li>
                            <li className='mb-3'>
                                <Link href={"/wishlist"} className='text-gray-400 hover:text-green-400 transition-colors text-sm mb-3'>
                                Wishlist</Link>
                            </li>
                            <li className='mb-3'>
                                <Link href={"/cart"} className='text-gray-400 hover:text-green-400 transition-colors text-sm mb-3'>
                                Shopping Cart</Link>
                            </li>
                            <li className='mb-3'>
                                <Link href={"/login"} className='text-gray-400 hover:text-green-400 transition-colors text-sm mb-3'>
                                Sign In</Link>
                            </li>
                            <li className='mb-3'>
                                <Link href={"/register"} className='text-gray-400 hover:text-green-400 transition-colors text-sm mb-3'>
                                Create Account</Link>
                            </li>

                        </ul>
                 
                </div>
              </div>
              </div>
               <div  className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6'>
              <div className="inner p-4 sm:p-5">
                <div>
           
                 <h3 className='font-semibold text-lg mb-5'>Support</h3>
                        <ul>
                            <li className='mb-3'>
                                <Link href={"/contact"} className='text-gray-400 hover:text-green-400 transition-colors text-sm mb-3'>
                                Contact Us</Link>
                            </li>
                            <li className='mb-3'>
                                <Link href={"/help"} className='text-gray-400 hover:text-green-400 transition-colors text-sm mb-3'>
                                Help Center</Link>
                            </li>
                            <li className='mb-3'>
                                <Link href={"/shipping"} className='text-gray-400 hover:text-green-400 transition-colors text-sm mb-3'>
                                Shipping Info</Link>
                            </li>
                            <li className='mb-3'>
                                <Link href={"/returns"} className='text-gray-400 hover:text-green-400 transition-colors text-sm mb-3'>
                                Returns & Refunds</Link>
                            </li>
                            <li className='mb-3'>
                                <Link href={"/tracck-order"} className='text-gray-400 hover:text-green-400 transition-colors text-sm mb-3'>
                                Track Order</Link>
                            </li>
                          

                        </ul>
                </div>
              </div>
              </div>
               <div  className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6'>
              <div className="inner p-4 sm:p-5">
                <div>
              
                 <h3 className='font-semibold text-lg mb-5'>Legal</h3>
                        <ul>
                            <li className='mb-3'>
                                <Link href={"/privacy"} className='text-gray-400 hover:text-green-400 transition-colors text-sm mb-3'>
                                Privacy Policy</Link>
                            </li>
                            <li className='mb-3'>
                                <Link href={"/terms"} className='text-gray-400 hover:text-green-400 transition-colors text-sm mb-3'>
                                Terms of Service</Link>
                            </li>
                            <li className='mb-3'>
                                <Link href={"/cookies"} className='text-gray-400 hover:text-green-400 transition-colors text-sm mb-3'>
                                Cookie Policy</Link>
                            </li>
                           

                        </ul>
                </div>
              </div>
              </div>
            
              
                    </div>

                </div>

                <div className='border-t border-gray-800'>
                    <div className='px-4 py-6'>

                        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>

                            <p className='text-gray-500 text-sm text-center md:text-left'>© 2026 FreshCart. All rights reserved.</p>

                            <div className='flex items-center gap-4'>
                                <div className='flex items-center gap-2 text-gray-500 text-sm'>
                                    <i className='fa-solid fa-credit-card'></i>
                                    <span>Visa</span>
                                </div>
                                <div className='flex items-center gap-2 text-gray-500 text-sm'>
                                    <i className='fa-solid fa-credit-card'></i>
                                    <span>Mastercard</span>
                                </div>
                                <div className='flex items-center gap-2 text-gray-500 text-sm'>
                                    <i className='fa-solid fa-credit-card'></i>
                                    <span>PayPal</span>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}
