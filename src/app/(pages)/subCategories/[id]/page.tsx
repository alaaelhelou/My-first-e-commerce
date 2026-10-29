import { getAllProducts } from '@/api/AllProducts.api';
import { getSpecificSubCategories } from '@/api/AllSubCategory.api';
import SingleCard from '@/app/_components/SingleCard/SingleCard';
import { AllProductsArrayType } from '@/types/AllProducts.type';
import { SpecificSubcategoryDataType } from '@/types/AllSubCategories.type';
import Link from 'next/link';
import React from 'react'

export default async function SpecificSubcategories({ params }: { params: string }) {



    const { id }: { id: string } = await params;
    console.log(id, "subCategoryId");

    const res: SpecificSubcategoryDataType = await getSpecificSubCategories(id);
    console.log(res, "Sub based on Id");

    const products: AllProductsArrayType = await getAllProducts();
    console.log(products);

    const productsWithSameSubcategory = products.filter((item) => {
        return item.subcategory?.some((sub) => sub._id === id);
    });

    console.log(productsWithSameSubcategory);
    





    return (
        <>
            <div className='min-h-screen bg-gray-50/50'>


                <div className='bg-gradient-to-br from-green-600 via-green-500 to-green-400 text-white'>



                    <div className='px-4 py-10 sm:py-14'>


                        <div className='flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap'>
                            <Link href={"/"} className='hover:text-white transition-colors'>Home</Link>
                            <span className='text-white/40'>/</span>
                            <Link href={"/categories"} className='hover:text-white transition-colors'>Categories</Link>
                            <span className='text-white/40'>/</span>
                            <span className='text-white font-medium'>{res.name}</span>

                        </div>

                        <div className='flex items-center gap-5'>
                            <div className='w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30'>
                                <i className='fa-solid fa-folder-open text-3xl'></i>
                            </div>

                            <div>
                                <h1 className='text-3xl sm:text-4xl font-bold tracking-tight'>{res.name}</h1>
                                <p className='text-white/80 mt-1'>Browse {res.name} products</p>
                            </div>

                        </div>

                    </div>

                </div>

                <main className='px-4 py-8'>
                    <div className='mb-6 flex items-center gap-3 flex-wrap'>
                        <span className='flex items-center gap-2 text-sm text-gray-600'>
                            <i className='fa-solid fa-filter'></i>
                            Active Filters:
                        </span>

                        <Link className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-600 text-sm font-medium hover:bg-emerald-200 transition-colors' href={"/products"}>
                            <i className='fa-solid fa-folder-open text-xs'></i>
                            {res.name}
                            <i className='fa-solid fa-xmark text-xs'></i>
                        </Link>

                        <Link className='text-sm text-gray-500 hover:text-gray-700 underline' href={"/products"}>Clear all</Link>


                    </div>

                    <div className='mb-6 text-sm text-gray-500'>
                        Showing {productsWithSameSubcategory.length} products

                        {productsWithSameSubcategory.length===0 ? <div className='text-center py-20'>
                            <div className='w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5'>
                                <i className='fa-solid fa-box-open text-3xl text-gray-400'></i>
                            </div>
                            <h3 className='text-lg font-bold text-gray-900 mb-2'>
                                No Products Found
                            </h3>
                            <p className='text-gray-500 mb-6'>
                                No products match your current filters.
                            </p>
                            <Link href={"/products"} className='inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors'>View All Products</Link>

                        </div> : <div className='flex flex-wrap '>
                            {productsWithSameSubcategory.map((currentProduct) =>
                            <div key={currentProduct._id} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 ">
                            <div className="inner p-4 sm:p-6">
                                <SingleCard currentProduct={currentProduct}/>
                                </div>
                                </div>
                            )}
                            

                        </div>
                        }

                    </div>

                </main>

            </div>

        </>
    )
}
