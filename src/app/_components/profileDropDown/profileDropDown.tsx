"use client"
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function ProfileDropDown() {
    
    const {data : session } = useSession()

     function handleLogOut(){
        signOut({callbackUrl : "/login"})
      }
    


  return (
    <>
    <DropdownMenu >
                  <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="relative hover:bg-gray-100 transition-colors p-2.5 rounded-full group cursor-pointer">
                    <i className="fa-regular fa-circle-user text-xl text-gray-500 group-hover:text-green-600 transition-colors"></i>
                    </Button>} />
                  <DropdownMenuContent align="end" 
                  className="mt-2 w-64 bg-white rounded-2xl shadow-xl transition-all duration-200 opacity-100 scale-100 visible"
                 >
                    
                      <DropdownMenuItem className={"p-4 border-b border-gray-100"}>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 flex items-center justify-center bg-green-100 rounded-full'>
                                <i className="fa-regular fa-circle-user text-xl text-green-600"></i>
                            </div>
                            <div className='min-w-0'>
                                <p className='text-sm text-gray-800 font-semibold'>

                               {session?.user?.name}

                                </p>
                              

                            </div>
                        </div>
                        
                      </DropdownMenuItem>
                      <DropdownMenuGroup className="py-2">
           
                      <DropdownMenuItem>

                        <Link href={"/profile/address"} className='w-full flex items-center gap-3 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors rounded-xl px-4 py-2.5'>
                        <i className="fa-regular fa-circle-user w-4 text-gray-400"></i>
                        My Profile
                        </Link>
              
                        
                      </DropdownMenuItem>

                      <DropdownMenuItem>

                        <Link href={"/allOrders"} className='w-full flex items-center gap-3 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors rounded-xl px-4 py-2.5'>
                        <i className="fa-solid fa-box-open w-4 text-gray-400"></i>
                        My Orders
                        </Link>
              
                        
                      </DropdownMenuItem>

                      <DropdownMenuItem>

                        <Link href={"/wishlist"} className='w-full flex items-center gap-3 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors rounded-xl px-4 py-2.5'>
                        <i className="fa-regular fa-heart w-4 text-gray-400"></i>
                        My Wishlist
                        </Link>
              
                        
                      </DropdownMenuItem>

                      <DropdownMenuItem>

                        <Link href={"/profile/address"} className='w-full flex items-center gap-3 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors rounded-xl px-4 py-2.5'>
                        <i className="fa-regular fa-address-book w-4 text-gray-400"></i>
                        Addresses
                        </Link>
              
                        
                      </DropdownMenuItem>

                      <DropdownMenuItem>

                        <Link href={"/profile/settings"} className='w-full flex items-center gap-3 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors rounded-xl px-4 py-2.5'>
                        <i className="fa-solid fa-gear w-4 text-gray-400"></i>
                        Settings
                        </Link>
              
                        
                      </DropdownMenuItem>



                    </DropdownMenuGroup>

                    <DropdownMenuItem className={"text-left border-t border-gray-100 py-2"}>
                    <button onClick={()=> handleLogOut()} className={"font-medium w-full flex items-center gap-3 text-sm text-red-500 hover:bg-red-50 transition-colors rounded-xl px-4 py-2.5"}>
                        <i className="fa-solid fa-right-from-bracket w-4"></i>
                        Sign Out
                      </button>
                   
                     
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
      
    </>
  )
}
