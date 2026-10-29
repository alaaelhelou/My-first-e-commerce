import { getAllCategories } from '@/api/AllCategories.api';
import { OneCategoryType } from '@/types/AllCategories.type';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export default async function categories() {


 const data = await getAllCategories();


  

  return (
    <>
      <div className='bg-gradient-to-r from-green-600 via-green-500 to-green-400'>

                <div className=' px-4 sm:py-10 md:py-16'>


                    <div className="flex items-center gap-2 text-sm mb-6">
                        <Link href='/' className='text-[#BBE8C8] hover:text-white'>Home</Link>
                        <div className='text-[#76D198]'>/</div>
                        <div className='text-white font-medium'>Categories</div>
                    </div>

                    <div className='flex gap-5 items-center'>
                        <div className='w-16 h-16 rounded-2xl
             bg-[#4CCA7A] border border-[#61CB89] flex items-center justify-center shadow-xl'>
                            <i className="fa-solid fa-layer-group text-white text-3xl"></i>
                        </div>
                        <div>
                            <h1 className='text-3xl sm:text-4xl font-bold text-white'>All Categories</h1>
                            <h4 className='text-[#D3F3DE] mt-1'>Browse our wide range of product categories</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-4 py-10'>
              <div className='flex flex-wrap'>
                {data.map((currentCategory : OneCategoryType)=><div key={currentCategory._id} className="group w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
                <div className="inner p-6">
                  <Link href={`/categories/${currentCategory._id}`}>
                  <div className='bg-white border border-gray-100 p-4 sm:p-6 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1 rounded-2xl'>
                       <div className='bg-gray-50 mb-4 relative aspect-square rounded-xl overflow-hidden'>  
                    <Image fill className='object-cover group-hover:scale-110 transition-transform duration-500' src={currentCategory.image} alt={currentCategory.name}/>
      
                  </div>
                  <h3 className='font-bold text-gray-900 text-center group-hover:text-green-600 transition-colors'>
                    {currentCategory.name}
                  </h3>
                  <div className='flex justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                    <span className='flex items-center text-xs text-green-600 gap-1'>
                     "View Subcategories"
                      <i className="fa-solid fa-arrow-right text-[10px]"></i>

                    </span>

                  </div>
                  <div>

                  </div>
                  </div>
             
                  </Link>
                  </div>
                  </div>)
                  }
              
                
              </div>

            </div>
    </>
  )
}
