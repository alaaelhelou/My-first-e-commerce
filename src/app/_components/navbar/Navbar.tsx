"use client"
import React, { useContext, useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';

import SideBarr from '../sideBarr/SideBarr'
import img from '../../../../public/freshcart-logo.49f1b44d.svg'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react';
import ProfileDropDown from '../profileDropDown/profileDropDown';
import { getAllSubCategories } from '@/api/AllSubCategory.api';
import { AllSubCategoriesDataType} from '@/types/AllSubCategories.type';
import { CartContext } from '@/context/CartContext';
import { WishlistContext } from '@/context/WishlistItems';









export default function AppNavbar() {


  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [sideBarr, setSideBarr] = useState(false)
  const [subData, setsubData] = useState([])
  const {cartCount} = useContext(CartContext)  as {cartCount : number}
  const {wishlistCount} = useContext(WishlistContext)  as {wishlistCount : number}
 


  const path = usePathname();
 
  async function getSucategory() {
    let response  = await getAllSubCategories()
    
    setsubData(response?.data)
  }

  function handleLogOut() {
    signOut({ callbackUrl: "/login" })
  }



  useEffect(() => {
    getSucategory()


  }, [])




  return (
    <>

      <div className='hidden lg:block'>

        <div className='flex justify-between px-4'>
          <div className='flex items-center gap-6'>
            <div className='text-gray-500 flex items-center gap-2'>
              <i className="fa-solid fa-truck text-green-600"></i>
              <span className='text-sm font-medium'>Free Shipping on Orders 500 EGP</span>
            </div>
            <div className='text-gray-500 flex items-center gap-2'>
              <i className="fa-solid fa-gift text-green-600"></i>
              <span className='text-sm font-medium'>New Arrivals Daily</span>
            </div>
          </div>


          <div className='flex gap-6'>
            <div className='text-gray-500 text-sm font-medium flex items-center gap-6'>
              <a href="tel:+966500000000" className='hover:text-green-600'>

                <i className="fa-solid fa-phone me-2"></i>
                +1 (800) 123-4567
              </a>

              <Link href='mailto:support@freshcart.com' className='hover:text-green-600'>
                <i className="fa-regular fa-envelope me-2"></i>
                support@freshcart.com
              </Link>
            </div>

            <span className='w-px h-4 bg-gray-200'></span>

            <div>

              {session ? <Link href={"/profile/address"} className='text-gray-600 hover:text-green-600'>
                <i className="fa-regular fa-user me-2"></i>{session?.user?.name}</Link> : <Link href={"/login"} className='text-gray-600 hover:text-green-600'>
                <i className="fa-regular fa-user me-2"></i>Sign in</Link>}

            </div>

            <div>
              {session ? <button onClick={() => handleLogOut()} className='flex items-center gap-1.5 text-gray-600 hover:text-red-500 transition-colors cursor-pointer'>
                <i className="fa-solid fa-right-from-bracket text-xs"></i>
                Sign Out
              </button> :
                <Link href="/register" className='text-gray-600 hover:text-green-600'>
                  <i className="fa-solid fa-user-plus me-2"></i>
                  Sign Up
                </Link>}

            </div>
          </div>



        </div>
      </div>


      <header className=" bg-white shadow-sm sticky top-0 w-full z-10">
        <div className="bg-white">
          <div className="px-4">
            <nav className='flex items-center justify-between h-16 lg:h-[72px] gap-4 lg:gap-8'>
              <Link href='/' className='text-3xl font-bold shrink-0'>
                <Image src={img} alt="Fresh Cart Logo" />
              </Link>

              <div className="hidden lg:flex flex-1 max-w-2xl">
                <div className="relative w-full">
                  <input type="text" placeholder="Search for products, brands and more..."
                    className="w-full px-5 py-3 pr-12 rounded-full border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-sm"
                  />
                  <button type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors" >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>

              <ul className='hidden xl:flex items-center gap-6'>
                <li className={`hover:text-green-600 font-medium transition-colors ${path === '/' ? 'active' : 'text-gray-700'} `}>
                  <Link href='/'>Home</Link>
                </li>
                <li className={`text-gray-700 hover:text-green-600 font-medium transition-colors ${path === '/products' ? 'active' : 'text-gray-700'}`}>
                  <Link href='/products'>Shop</Link>
                </li>


                <div
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                  className="relative"
                >
                  <Dropdown

                    isOpen={isOpen}
                    onOpenChange={setIsOpen}
                    placement="bottom-start"
                    className="min-w-[200px] scroll-m-0"
                    shouldBlockScroll={false}
                  >
                    <DropdownTrigger>
                      <Button className={`text-gray-700 hover:text-green-600 font-medium transition-colors ${path === '/categories' ? 'active' : 'text-gray-700'}`}>
                        Categories {isOpen ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                      </Button>
                    </DropdownTrigger>

                    <DropdownMenu
                      aria-label="Categories Menu"
                      className=" bg-white rounded-2xl"
                      disableAnimation={true}
                    >
                      <DropdownItem
                      className='py-2 px-3 rounded-md text-zinc-600 transition-colors data-[hover=true]:text-emerald-600 data-[hover=true]:bg-emerald-50/50' key="all">
                        <Link href={'/categories'}>
                          All Categories
                        </Link>
                      </DropdownItem>

                      {subData.filter((item : AllSubCategoriesDataType)=>["Bags & luggage","Men's Clothing","Women's Clothing"].includes(item.name))
                      .map((item)=> <DropdownItem
                       key={item._id}
                       className='py-2 px-3 rounded-md text-zinc-600 transition-colors data-[hover=true]:text-emerald-600 data-[hover=true]:bg-emerald-50/50'
                       >

                        <Link href={`/subCategories/${item._id}`}>{item.name}</Link>

                      </DropdownItem>)
                      }

                  

                      
                    </DropdownMenu>
                  </Dropdown>

                </div>


                <li className={`text-gray-700 hover:text-green-600 font-medium transition-colors ${path === '/brands' ? 'active' : 'text-gray-700'}`}>
                  <Link href='/brands'>Brands</Link>
                </li>

              </ul>


              <div className='flex items-center gap-1 lg:gap-2'>
                <Link className="hidden lg:flex items-center gap-2 pr-3 mr-2 border-r border-gray-200 hover:opacity-80 transition-opacity" href="/">
                  <div className='w-10 h-10 rounded-full bg-green-50 flex items-center justify-center'>
                    <i className="fa-solid fa-headset text-green-600 hover:text-green-500"></i>
                  </div>
                  <div className="text-xs"><div className="text-gray-400 ">Support</div>
                    <div className="font-semibold text-gray-700">24/7 Help</div></div>
                </Link>

                <Link className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group" title="Wishlist" href="/wishlist">
                  <i className="fa-regular fa-heart text-xl text-gray-500 group-hover:text-green-600 transition-colors"></i>
                 {wishlistCount > 0 && <span className='absolute top-0.5 right-0.5 size-[18px] rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white'>
                    {wishlistCount > 9 ? `+9` : `${wishlistCount}`}
                    
                  </span> } 
                </Link>

                <Link className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group" title="Cart" href="/cart">
                  <i className="fa-solid fa-cart-shopping text-xl text-gray-500 group-hover:text-green-600 transition-colors"></i>
                  {cartCount > 0 && <span className='absolute top-0.5 right-0.5 size-[18px] flex items-center justify-center bg-green-600 text-white text-[10px] font-bold ring-2 rounded-full ring-white'>
                    {cartCount > 9 ? `+9` : `${cartCount}`}
                  </span>}
                </Link>


                <button onClick={() => setSideBarr(true)} className="lg:hidden ml-1 w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition-colors cursor-pointer">
                  <i className="fa-solid fa-bars"></i>
                </button>

                {session ? <ProfileDropDown></ProfileDropDown> :
                  <Link className='hidden lg:flex items-center justify-center gap-2 ml-2 px-5 py-2.5 rounded-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition-colors shadow-sm shadow-primary-600/20' href='/login'>
                    <i className='fa-regular fa-user'></i> Sign In
                  </Link>}


              </div>



            </nav>
          </div>
        </div>
      </header>

      <SideBarr sideBarr={sideBarr} setSideBarr={setSideBarr} />




    </>
  )
}
