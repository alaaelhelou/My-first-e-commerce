import { getOrders} from '@/api/Orders'
import OrderDetails from '@/app/_components/OrderDetails/OrderDetails';
import { getUserEmail } from '@/lib/auth';
import { AllOrdersDataType, ALlOrdersType } from '@/types/Orders.type';
import Link from 'next/link'
import React from 'react'



export default async function allOrders() {

  const email = await getUserEmail()
  console.log(email);
  

 
  const response : ALlOrdersType = await getOrders()
  console.log(response , "Orders Res");

  const notEmptyProducts = response.data.filter((order : AllOrdersDataType)=> order && order?.user?.email===email);
  console.log(notEmptyProducts);
  
  
  

   
    
  


  



  return (
    <>

    {notEmptyProducts?.length === 0 ? <main className='flex items-center justify-center min-h-[60vh] px-4'>
                <div className='max-w-md text-center'>
                    <div className='relative mb-8'>
                        <div className='w-32 h-32 flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-50 rounded-full mx-auto'>
                            <i className="fa-solid fa-box-open text-5xl text-gray-300"></i>
                        </div>
                        <div className='absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-100 w-24 h-4 rounded-full blur-md'>
                        </div>
                    </div>

                    <h2 className='text-gray-900 text-2xl font-bold mb-3'>
                        No Orders yet
                    </h2>
                    <p className='text-gray-500 mb-8'>Looks like you haven't added anything to your cart yet. <br /> Start exploring our products!</p>
                    <Link href={"/"} className='inline-flex items-center gap-2 bg-linear-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 transition-all py-3.5 px-8 rounded-xl font-semibold shadow-lg shadow-green-600/20 active:scale-[0.98]'>
                        Start Shopping
                        <i className="fa-solid fa-arrow-right text-sm"></i>
                    </Link>

                    <div className='border-t border-gray-100 mt-12 pt-8'>
                        <p className='text-sm text-gray-400 mb-4'>Popular Categories</p>
                        <div className='flex flex-wrap justify-center gap-2'>
                            <Link href={"/catrgories"} className='bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 text-sm font-medium px-4 py-2 rounded-full transition-colors'>
                                Electronics
                            </Link>
                            <Link href={"/catrgories"} className='bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 text-sm font-medium px-4 py-2 rounded-full transition-colors'>
                                Fashion
                            </Link>
                            <Link href={"/catrgories"} className='bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 text-sm font-medium px-4 py-2 rounded-full transition-colors'>
                                Home
                            </Link>
                            <Link href={"/catrgories"} className='bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 text-sm font-medium px-4 py-2 rounded-full transition-colors'>
                                Beauty
                            </Link>

                        </div>

                    </div>

                </div>

            </main> :  <div className='px-4 py-8'>


        <div className='mb-8'>
          <div className='flex items-center gap-2 text-sm text-gray-500 mb-6'>
            <Link href={"/"} className='hover:text-green-600 transition'>Home</Link>
            <span className='text-gray-300'>/</span>
            <span className='text-gray-900 font-medium'>My Orders</span>

          </div>

          <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
            <div className='flex items-center gap-4'>
              <div className='w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/25'>
              <i className='fa-solid fa-box text-2xl text-white'></i>
              </div>
              <div>
              <h1 className='text-2xl sm:text-3xl font-bold text-gray-900'>
                My Orders
              </h1>
              <p className='text-gray-500 text-sm mt-0.5'>
                Track and manage your {notEmptyProducts?.length} orders
              </p>
              </div>

            </div>

            <Link href={"/"} className='self-start sm:self-auto text-green-600 hover:text-green-700 font-medium flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-green-50 transition-all text-sm'>
            <i className='fa-solid fa-bag-shopping text-xs'></i>
            Continue Shopping
            </Link>

          </div>

        </div>

        <div>

   <OrderDetails notEmptyProducts={notEmptyProducts}/>
  </div>
</div> }
     

      
    </>
  )
}
