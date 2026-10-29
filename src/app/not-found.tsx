"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function notFound() {

  const router = useRouter();

  return (
    <>
      <div className='min-h-screen bg-gray-100 px-4 py-16 relative overflow-hidden'>
      

          <div className="w-1/2 mx-auto">

            <div className='text-center p-10'>

              <h1 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-4'>
                Oops! Nothing Here
              </h1>

              <p className='text-gray-500 text-lg leading-relaxed max-w-md mx-auto'>
                Looks like this page went out of stock! Don't worry, there's plenty more fresh content to explore.
              </p>

            </div>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 p-12'>
              <Link href={"/"} className='group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg shadow-green-600/25 hover:shadow-xl hover:shadow-green-600/30 hover:-translate-y-1'>

              <i className='fa-solid fa-house group-hover:scale-110 transition-transform duration-300'></i>
              Go to Homepage

              </Link>

              <button
              onClick={()=> router.back()} className='group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-700 py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200 hover:-translate-y-1'>
                <i className='fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform duration-300'></i>
                Go Back
              </button>
            </div>

           <div className='bg-white rounded-3xl border border-gray-100 shadow-sm p-6'>
              <p className='text-center text-sm font-medium text-gray-400 uppercase mb-4'>Popular Destinations</p>
              <div className='flex flex-wrap items-center justify-center gap-3'>
                <Link
                href={"/products"} className='px-5 py-2.5 rounded-xl bg-green-50 text-green-700 font-semibold text-sm hover:bg-green-100 transition-colors'>
                  All Products
                </Link>
                <Link
                href={"/categories"} className='px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition-colors'>
                  Categories
                </Link>
                <Link
                href={"/deals"} className='px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition-colors'>
                  Today's Deals
                </Link>
                <Link
                href={"/contact"} className='px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition-colors'>
                  Contact Us
                </Link>
                
              </div>
            </div>
</div>
          </div>

        
      
    </>
  )
}