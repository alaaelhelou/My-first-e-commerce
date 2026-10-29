'use client';
import React, {useRef } from 'react'
import SingleCard from '@/app/_components/SingleCard/SingleCard';
import { AllProductsArrayType, AllProductsType } from '@/types/AllProducts.type';
import { SpecificProductType } from '@/types/SpecificProduct.type';


export default function LikedProducts({allData , data } : {allData:AllProductsArrayType , data:SpecificProductType }) {

    const slider= useRef(null);

    
    const likedProducts =allData.filter((productItem : AllProductsType)=>productItem.category.name === data.category.name)
    .filter((productItem)=>productItem._id !== data.id).slice(0,9);
     
    
   
    


       const scroll = (direction) => {
    if (slider.current) {

      const firstCard = slider.current.firstElementChild;
      if (firstCard) {
        const cardWidth = firstCard.clientWidth; 
    
        slider.current.scrollBy({
          left: direction === 'left' ? -cardWidth : cardWidth,
          behavior: 'smooth',
        });
      }
    }
  };

 


  return (
    <>
     <section className='py-10'>
                    <div className='px-4'>
                        <div className='flex justify-between items-center mb-6'>
                            <div className='flex items-center gap-3'>
                                <div className='h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full'></div>
                                <h2 className='text-2xl font-bold text-gray-800'>
                                    You May Also <span className='text-emerald-600'>Like</span>
                                </h2>
    
                            </div>
                            <div className='flex'>
                            <button onClick={()=>scroll('left')} className='h-10 w-10 flex items-center justify-center rounded-full
                             bg-gray-100  text-gray-600 hover:bg-green-100 hover:text-green-600'>
                                <i className="fa-solid fa-chevron-left"></i>
    
                            </button>
                            <button onClick={()=>scroll('right')} className='h-10 w-10 flex items-center justify-center rounded-full
                             bg-gray-100  text-gray-600 hover:bg-green-100 hover:text-green-600'>
                                <i className="fa-solid fa-chevron-right"></i>
    
                            </button>
    
    
                            </div>
                        </div>
    
                        <div ref={slider} className='flex overflow-x-hidden'>
    
                            {likedProducts.map((currentProduct : AllProductsType) => <div key={currentProduct._id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5 shrink-0'>
                             
                            
                                                <div className="inner p-2 sm:p-3">
                                                   <SingleCard currentProduct={currentProduct}/>
                            
                                                </div>
                            
                                            </div>)
                                            }
    
                        </div>
                    </div>
    
                </section>
      
    </>
  )
}
