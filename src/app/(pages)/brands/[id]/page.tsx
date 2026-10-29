import { getAllProducts } from '@/api/AllProducts.api';
import SingleCard from '@/app/_components/SingleCard/SingleCard';
import { AllProductsArrayType, AllProductsType } from '@/types/AllProducts.type';
import { SpecifiBrandType } from '@/types/SpecificBrand.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function SpecificBrand({params} : {params : Promise<{id : string}>}) {
    let {id} = await params;
    
    let response = await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
    console.log(response);

    let { data } : {data : SpecifiBrandType} = await response.json();

    const allProductsData : AllProductsArrayType  =await getAllProducts()
    console.log(allProductsData);
     
        const brandProducts : AllProductsArrayType = allProductsData.filter((productItem : AllProductsType)=>productItem.brand.name === data.name)
        console.log("BrandProductsssss" , brandProducts);
       


    console.log('SpscifcBrandddd', data);
  return (
    <>

     <div className='bg-gradient-to-r from-green-600 via-green-500 to-green-400'>

                <div className=' px-4 py-12 sm:py-16'>


                    <div className="flex items-center gap-2 text-sm mb-6">
                        <Link href='/' className='text-[#BBE8C8] hover:text-white'>Home</Link>
                        <div className='text-[#76D198]'>/</div>
                        <Link href={"/brands"} className='text-[#BBE8C8] hover:text-white'>Brands</Link>
                        <div className='text-[#76D198]'>/</div>
                        <Link href={"/brands"} className='text-white font-medium'>{data.name}</Link>


                    </div>

                    <div className='flex gap-5 items-center'>
                        <div className='relative aspect-square w-16 h-16 flex items-center justify-center rounded-2xl
             bg-[#4CCA7A] border border-[#61CB89] shadow-xl'>
                           <Image fill className='w-10 h-10 object-contain' alt={data.name} src={data.image}/>
                        </div>
                        <div>
                            <h1 className='text-3xl sm:text-4xl font-bold text-white'>{data.name}</h1>
                            <h4 className='text-[#D3F3DE] mt-1'>Shop {data.name} products</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-4 py-8'>
                <div className='flex items-center gap-3 mb-6'>
                    <span className='flex items-center gap-2 text-sm text-gray-600'>
                        <i className="fa-solid fa-filter"></i> Active Filters:
                    </span>
                    <Link href={"/products"} className='inline-flex items-center gap-2 px-3 py-1.5
                     bg-violet-100 text-violet-700 text-sm font-medium hover:bg-violet-200 transition-colors rounded-full'>
                        <i className="fa-solid fa-tags text-xs"></i>
                        {data.name}
                        <i className="fa-solid fa-xmark text-xs"></i>
                     </Link>

                     <Link href={"/products"} className='text-sm text-gray-500 hover:text-gray-700 underline'>Clear all</Link>

                </div>
                <div className='text-sm text-gray-500 mb-6'>
                    Showing {brandProducts.length} products
                   
                   
                                    <div className='flex flex-wrap '>
                                   {brandProducts.map((currentProduct : AllProductsType) => <div key={currentProduct._id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5'>
                    
                   
                                       <div className="inner p-2 sm:p-3">
                                          <SingleCard currentProduct={currentProduct}/>
                   
                                       </div>
                   
                                   </div>)
                                   }
                               </div>
                   


                    </div>
                </div>

    
      
    </>
  )
}
