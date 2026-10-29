import { SpecifiCategoryType } from '@/types/AllCategories.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import SubCategories from '../../subCategories/page';

export default async function SpecifiCategory({params} : {params : Promise<{id : string}>}) {

    let { id } = await params;
        console.log(id);
    
        let response = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
        console.log(response);
    
        let { data } : {data : SpecifiCategoryType} = await response.json();
    
        console.log('subCategories', data);

    
  return (
    <>
     <div className='bg-gradient-to-r from-green-600 via-green-500 to-green-400'>

                <div className=' px-4 py-10 sm:py-10'>


                    <div className="flex items-center gap-2 text-sm mb-6">
                        <Link href='/' className='text-[#BBE8C8] hover:text-white'>Home</Link>
                        <div className='text-[#76D198]'>/</div>
                        <Link href={'/categories'} className='text-[#BBE8C8] hover:text-white'>Categories</Link>
                        <div className='text-[#76D198]'>/</div>
                        <Link className='text-[#BBE8C8] hover:text-white' href={"/subCategory"}>{data.name}</Link>
                        <div className='text-[#76D198]'>/</div>
                        <div className='text-white font-medium'>{data.name}</div>

                    </div>

                    <div className='flex gap-5 items-center'>
                        <div className='relative aspect-3/4 w-16 h-16 rounded-2xl ring-1 ring-white/30 backdrop-blur-sm
             bg-[#4CCA7A] border border-[#61CB89] flex items-center justify-center shadow-xl'>
                        
                                <Image fill className='w-12 h-12 object-contain rounded-2xl' alt={data.name} src={data.image}/>
                           
                        </div>
                        <div>
                            <h1 className='text-3xl sm:text-4xl font-bold text-white'>{data.name}</h1>
                            <h4 className='text-[#D3F3DE] mt-1'>Choose a subcategory to browse products</h4>
                        </div>
                    </div>
                </div>
            </div>

            <SubCategories name = {data.name}/>



    
      
    </>
  )
}
