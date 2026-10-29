'use client';
import { AllProductsArrayType, AllProductsType } from '@/types/AllProducts.type';
import React from 'react'
import {useState } from 'react';

export default function ProductDetailsBut({data , allData} : {data : AllProductsType , allData : AllProductsArrayType}) {

    


       const [quantity, setQuantity] = useState(1)



  return (
    <>
      
            
                             <div className='flex items-center gap-4 mt-2'>
                            <div className='border-2 border-gray-200 rounded-lg overflow-hidden'>

                                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="text-gray-600 hover:bg-gray-100 hover:text-green-600 disabled:opacity-50 px-4 py-3">
                                    <i className="fa-solid fa-minus"></i>
                                </button>
                                <input value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className='w-16 text-center
                         focus:ring-0 focus:outline-none text-lg font-medium' id='quantity' type="number" />
                                <button onClick={() => setQuantity(q => q + 1)} className="text-gray-600 hover:bg-gray-100 hover:text-green-600 disabled:opacity-50 px-4 py-3">
                                    <i className="fa-solid fa-plus"></i>
                                </button>

                            </div>
                           
                            <span className='text-sm text-gray-500'>{data.quantity} available</span>
                        </div>


                        <div className='flex justify-between items-center rounded-lg bg-gray-50 p-4 my-6'>
                            <span className='text-gray-600'>Total Price:</span>
                            <span className='text-2xl font-bold text-green-600'>
                                {allData.map((item)=>
                                <div key={item._id}>

                                    { item._id === data._id ? item.priceAfterDiscount ? 
                                    `${quantity * item?.priceAfterDiscount} EGP` :
                                     `${quantity * item.price} EGP` : ""}
                                    </div>
                                    )}
                                </span>

                        </div>


      
    </>
  )
}
