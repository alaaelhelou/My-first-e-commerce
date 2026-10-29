import { getAllBrands } from '@/api/AllBrands.api'
import { AllBrands, AllBrandsData } from '@/types/AllBrands.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function Brands() {

  let data: AllBrands = await getAllBrands()
 



  return (
    <>
      <div className='min-h-screen bg-gray-50/50'>
        <div className='bg-gradient-to-br from-violet-600 via-violet-500 to-purple-400 text-white'>

          <div className=' px-4 py-12 sm:py-16'>


            <div className="flex items-center gap-2 text-sm mb-6">
              <Link href='/' className='text-[#BBE8C8] hover:text-white'>Home</Link>
              <div className='text-[#76D198]'>/</div>
              <div className='text-white font-medium'>Brands</div>
            </div>

            <div className='flex gap-5 items-center'>
              <div className='w-16 h-16 flex items-center 
                        justify-center bg-white/20 backdrop-blur-sm ring-1 ring-white/30 rounded-2xl shadow-xl'>
                <i className="fa-solid fa-tags text-white text-3xl"></i>
              </div>
              <div>
                <h1 className='text-3xl sm:text-4xl font-bold text-white'>Top Brands</h1>
                <h4 className='text-[#D3F3DE] mt-1'>Shop from your favorite brands</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='px-4 py-10'>
          <div className='flex flex-wrap items-center'>


            {data.map((currentBrand: AllBrandsData) => <div key={currentBrand._id} className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6'>
              <div className="inner p-4 sm:p-5">
                <Link href={`/brands/${currentBrand._id}`}>
                <div className='group bg-white rounded-2xl border border-gray-100 hover:border-violet-200 transition-all duration-300 p-4 sm:p-5
                hover:-translate-y-1 shadow-sm hover:shadow-xl'>

                  <div className='relative aspect-square flex items-center justify-center bg-gray-50 mb-3 p-4 rounded-xl overflow-hidden'>
                    <Image fill className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-500' alt={currentBrand.name} src={currentBrand.image} />
                  </div>
                  <h3 className='font-semibold text-gray-900 text-center text-sm group-hover:text-violet-600 transition-colors truncate'>
                    {currentBrand.name}
                  </h3>
                  <div className='flex justify-center mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity'>
                    <span className='text-xs text-violet-600 flex items-center gap-1'>
                      View Products
                      <i className="fa-solid fa-arrow-right text-[10px]"></i>
                    </span>

                  </div>

                </div>
                </Link>
              </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  )
}
