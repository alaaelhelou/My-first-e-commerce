"use client"
import { handleAddToCart } from '@/api/Cart';
import { CartContext } from '@/context/CartContext';
import React, { useContext, useState } from 'react'
import { toast } from 'sonner';

export default function AddProductToCartBut({ productId }: { productId: string }) {

  const [isLoading, setIsLoading] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [cartProducts, setCartProducts] = useState([])
  const {setCartCount} = useContext(CartContext)



  async function addToCart(productId: string) {
  
    

    try {
      setIsLoading(true)
      const response = await handleAddToCart({ productId });
     
      setCartProducts(response.data.products)

       if(response.status === "success"){
                toast.success(response.message , {
                    duration : 2000
                })
         
                setIsChecked(true)
                setCartCount(response?.numOfCartItems)
                setTimeout(()=>{
                    setIsChecked(false)
                },2000)
            }else{
                toast.error(response.message)
            }
    }catch(error){
       toast.error("No Internet Connection")
    }finally{
      setIsLoading(false)
    }
       
        

    }
  return (
    <>

      {isLoading ? <button disabled className='h-10 w-10 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white rounded-full disabled:opacity-70'>
        <i className="fa-solid fa-spinner fa-spin"></i>
      </button> : isChecked ? <button className='h-10 w-10 flex items-center justify-center bg-green-500 text-white rounded-full'>
        <i className="fa-solid fa-check"></i>
      </button> : <button onClick={() => addToCart(productId)} className='h-10 w-10 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white rounded-full cursor-pointer'>
        <i className="fa-solid fa-plus"></i>
      </button>}




    </>
  )
}
