import { getAllCategories } from '@/api/AllCategories.api'
import { OneCategoryType } from '@/types/AllCategories.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function CategorySlider() {
    const data = await getAllCategories();
    console.log('Categories' , data);
    
  return (
    <>
      <div className='flex flex-wrap'>

{data.map((currentCat : OneCategoryType)=><div key={currentCat._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
<div className="inner p-4">
    <Link  href={'/categories'} className='flex flex-col h-[150px] items-center justify-center bg-white text-center shadow-sm hover:shadow-md transition rounded-lg p-4 cursor-pointer'>
        <div className='bg-primary-100 flex items-center justify-center mx-auto h-20 w-20 overflow-hidden rounded-full mb-3 group-hover:bg-primary-200 transition'>
            <div className='relative w-full aspect-4/5'>
              <Image fill src={currentCat.image} alt={currentCat.name} />
            </div>
        
        </div>
        <h3 className='font-medium'>{currentCat.name}</h3>
        </Link>
        </div>
</div>

    )}

      </div>
    </>
  )
}
