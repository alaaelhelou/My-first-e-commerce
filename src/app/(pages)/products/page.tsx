import Link from 'next/link'
import React from 'react'
import { getAllProducts } from '@/api/AllProducts.api'
import SingleCard from '@/app/_components/SingleCard/SingleCard';
import { AllProductsType } from '@/types/AllProducts.type';



export default async function Products() {

    let data = await getAllProducts();

    console.log(data , "All Productss");
    
    


    return (
        <>

            <div className='bg-gradient-to-r from-green-600 via-green-500 to-green-400'>

                <div className=' px-4 py-10 sm:py-10'>


                    <div className="flex items-center gap-2 text-sm mb-6">
                        <Link href='/' className='text-[#BBE8C8] hover:text-white'>Home</Link>
                        <div className='text-[#76D198]'>/</div>
                        <div className='text-white font-medium'>All products</div>
                    </div>

                    <div className='flex gap-5 items-center'>
                        <div className='w-16 h-16 rounded-2xl
             bg-[#4CCA7A] border border-[#61CB89] flex items-center justify-center shadow-xl'>
                            <i className="fa-solid fa-box-open text-white text-3xl"></i>
                        </div>
                        <div>
                            <h1 className='text-3xl sm:text-4xl font-bold text-white'>All Products</h1>
                            <h4 className='text-[#D3F3DE] mt-1'>Explore our complete product collection</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-ful px-4 py-8 bg-[#FBFCFD]'>
                <h3 className='mb-6 ml-2 text-sm text-gray-500 font-medium'>Showing 40 products</h3>

                 <div className='flex flex-wrap '>
                {data.map((currentProduct : AllProductsType) => <div key={currentProduct._id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5'>
 

                    <div className="inner p-2 sm:p-3">
                       <SingleCard currentProduct={currentProduct}/>

                    </div>

                </div>)
                }
            </div>
            

            


            </div>

        </>
    )
}
