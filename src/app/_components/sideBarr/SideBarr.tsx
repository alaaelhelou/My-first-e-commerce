"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import React from 'react'

export default function SideBarr({sideBarr , setSideBarr} : {sideBarr : boolean , setSideBarr : (value: boolean) => void}) {

   
     const { data: session } = useSession();
     function handleLogOut() {
         signOut({ callbackUrl: "/login" })
       }
     
  return (
    <>

    {sideBarr ? <div onClick={()=> setSideBarr(false)} className='fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity duration-300 opacity-100'>
        <div className='fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 overflow-y-auto translate-x-0'>


          <div className='flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50/50'>

            <Link href='/' className='text-2xl font-bold shrink-0'>
              <i className="fa-solid fa-cart-shopping text-green-600 me-2"></i>
              FreshCart
            </Link>

            <button onClick={()=>setSideBarr(false)} className='w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors cursor-pointer'>
              <i className="fa-solid fa-xmark text-gray-600"></i>
            </button>
          </div>

          <div className="p-4 border-b border-gray-100">
            <div className='relative'>
              <input defaultValue="" type="text" placeholder="Search products..." className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 text-sm"/>
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-green-600 text-white flex items-center justify-center cursor-pointer">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>

            </div>

          </div>

          <ul className='p-4'>
            <li>
              <Link className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors" href='/'>Home</Link>
            </li>
            <li>
              <Link className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors" href='/products'>Shop</Link>
            </li>
            <li>
              <Link className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors" href='/categories'>Categories</Link>
            </li>
            <li>
              <Link className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors" href='/brands'>Brands</Link>
            </li>


          </ul>

          <ul className='border-t border-gray-100 p-4'>
            <li>
              <Link className='flex items-center justify-between px-4 py-3 rounded-xl hover:bg-green-50 transition-colors' href='/wishlist'>
                <div className='flex items-center gap-3'>
                  <div className='w-9 h-9 rounded-full bg-red-50 flex items-center justify-center'>

                    <i className="fa-regular fa-heart text-red-500"></i>

                  </div>

                  <span className='font-medium text-gray-700'>Wishlist</span>
                </div>
              </Link>
            </li>

            <li>
              <Link className='flex items-center justify-between px-4 py-3 rounded-xl hover:bg-green-50 transition-colors' href='/cart'>
                <div className='flex items-center gap-3'>
                  <div className='w-9 h-9 rounded-full bg-green-50 flex items-center justify-center'>

                    <i className="fa-solid fa-cart-shopping text-green-600"></i>

                  </div>

                  <span className='font-medium text-gray-700'>Cart</span>
                </div>
              </Link>
            </li>

          </ul>

          <div className='p-4 border-t border-gray-100 flex gap-3'>
            {session ? <Link href={"/profile/address"} className='text-gray-600 hover:text-green-600'>
                <i className="fa-regular fa-user me-2"></i>{session?.user?.name}</Link> : <Link href={"/login"} className='text-gray-600 hover:text-green-600'>
                <i className="fa-regular fa-user me-2"></i>Sign in</Link>}

           {session ? <button onClick={() => handleLogOut()} className='flex items-center gap-1.5 text-gray-600 hover:text-red-500 transition-colors cursor-pointer'>
                <i className="fa-solid fa-right-from-bracket text-xs"></i>
                Sign Out
              </button> :
                <Link href="/register" className='text-gray-600 hover:text-green-600'>
                  <i className="fa-solid fa-user-plus me-2"></i>
                  Sign Up
                </Link>}

          </div>

          <div>
            <Link href='/' className='mx-4 mt-2 p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3 hover:bg-green-50 transition-colors'>
            <div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center'>
              <i className="fa-solid fa-headset text-green-600"></i>
              </div>

              <div>
                <div className="text-sm font-semibold text-gray-700">Need Help?</div>
              <div className="text-sm text-primary-600">Contact Support</div></div>
              </Link>
          </div>






        </div>


      </div> : <div className='fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity duration-300 opacity-0 pointer-events-none'>
        <div className='fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 overflow-y-auto translate-x-full'>


          <div className='flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50/50'>

            <Link href='/' className='text-2xl font-bold shrink-0'>
              <i className="fa-solid fa-cart-shopping text-green-600 me-2"></i>
              FreshCart
            </Link>

            <button className='w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors cursor-pointer'>
              <i className="fa-solid fa-xmark text-gray-600"></i>
            </button>
          </div>

          <div className="p-4 border-b border-gray-100">
            <div className='relative'>
              <input type="text" placeholder="Search products..." className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 text-sm" defaultValue="" />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-green-600 text-white flex items-center justify-center cursor-pointer">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>

            </div>

          </div>

          <ul className='p-4'>
            <li>
              <Link className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors" href='/'>Home</Link>
            </li>
            <li>
              <Link className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors" href='/'>Shop</Link>
            </li>
            <li>
              <Link className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors" href='/'>Categories</Link>
            </li>
            <li>
              <Link className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors" href='/'>Brands</Link>
            </li>


          </ul>

          <ul className='border-t border-gray-100 p-4'>
            <li>
              <Link className='flex items-center justify-between px-4 py-3 rounded-xl hover:bg-green-50 transition-colors' href='/'>
                <div className='flex items-center gap-3'>
                  <div className='w-9 h-9 rounded-full bg-red-50 flex items-center justify-center'>

                    <i className="fa-regular fa-heart text-red-500"></i>

                  </div>

                  <span className='font-medium text-gray-700'>Wishlist</span>
                </div>
              </Link>
            </li>

            <li>
              <Link className='flex items-center justify-between px-4 py-3 rounded-xl hover:bg-green-50 transition-colors' href='/'>
                <div className='flex items-center gap-3'>
                  <div className='w-9 h-9 rounded-full bg-green-50 flex items-center justify-center'>

                    <i className="fa-solid fa-cart-shopping text-green-600"></i>

                  </div>

                  <span className='font-medium text-gray-700'>Cart</span>
                </div>
              </Link>
            </li>

          </ul>

          <div className='p-4 border-t border-gray-100 flex gap-3'>
            <button className='flex pt-2 items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors w-full cursor-pointer'>
              Sign In
            </button>

            <button className='flex pt-2 items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-green-600 text-green-600 font-semibold hover:bg-green-50 transition-colors w-full cursor-pointer'>
              Sign Up
            </button>


          </div>

          <div>
            <Link href='/' className='mx-4 mt-2 p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3 hover:bg-green-50 transition-colors'>
            <div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center'>
              <i className="fa-solid fa-headset text-green-600"></i>
              </div>

              <div>
                <div className="text-sm font-semibold text-gray-700">Need Help?</div>
              <div className="text-sm text-primary-600">Contact Support</div></div>
              </Link>
          </div>






        </div>


      </div>}
      
    </>
  )
}
