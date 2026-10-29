import { getAllSubCategories } from '@/api/AllSubCategory.api'
import { AllSubCategoriesDataType, AllSubCategoryType } from '@/types/AllSubCategories.type';
import Link from 'next/link';
import React from 'react'

export default async function SubCategories({ name }: { name: string }) {

    let  {data} : {data : AllSubCategoriesDataType[]}  = await getAllSubCategories()
    console.log(data , "subCategory");
    

    return (
        <>
            <div className='px-4 py-10'>
                <Link href={'/categories'} className='inline-flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors mb-6'>
                    <i className="fa-solid fa-arrow-left"></i>
                    <span>Back to Categories</span>
                </Link>
                <div className="mb-6">
                    <h2 className='text-lg font-bold text-gray-900'>
                        {data?.length} Subcategories in {name}

                    </h2>
                </div>

                <div className='flex flex-wrap items-center justify-center'>
                    {data?.map((currentSubCategory: AllSubCategoriesDataType) => 
                        <div key={currentSubCategory._id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            <div className="p-4 sm:p-6">

                            <Link href={`/subCategories/${currentSubCategory._id}`}>
                <div className='inner group bg-white rounded-2xl border border-gray-100
            shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1 p-6'>

                
                                <div className='w-14 h-14 flex items-center justify-center rounded-xl bg-green-50 mb-4 group-hover:bg-green-100 transition-colors'>
                                    <i className="fa-solid fa-folder-open text-2xl text-green-600"></i>
                                </div>
                                <h3 className='text-gray-900 text-lg font-bold group-hover:text-green-600 transition-colors mb-2'>{currentSubCategory.name}</h3>
                                <div className='flex items-center gap-2 text-sm text-green-600 opacity-0 group-hover:opacity-100 transition-opacity'>
                                    <span>Browse Products</span>
                                    <i className="fa-solid fa-arrow-right text-sm"></i>


                                </div>
                                </div>
                            </Link>
                            </div>
                       
                    </div>
                    
                 )} 

                </div>

            </div>

        </>
    )
}
