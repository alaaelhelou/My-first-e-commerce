import React from 'react'

export default function loading() {
  return (
    <>
 
                <div className='flex flex-col h-screen items-center justify-center'>

                    <div className='w-24 h-24 flex items-center justify-center rounded-2xl bg-green-100 '>
                        <div className="loader text-green-600"></div>
                    </div>

                    <h3 className='text-gray-500 font-medium my-4'>Loading your orders...</h3>
                     <p className='text-gray-400 font-medium'>Please wait</p>
                    
    
                    
             
      
                </div>
                
    
      
    </>  
)
}
