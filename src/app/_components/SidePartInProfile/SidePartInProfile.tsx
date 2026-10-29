"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function SidePartInProfile() {
    const path = usePathname()
  return (
    <>
    <div className='bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden'>
                            <div className='p-4 border-b border-gray-100'>
                                <h2 className='font-bold text-gray-900'>My Account</h2>

                            </div>
                            <ul className='p-2'>


                                <li>
                                    <Link href={"/profile/address"} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${path === '/profile/address' ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'} `}>
                                        <div className='w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-green-500 text-white'>
                                            <i className='fa-solid fa-location-dot text-sm'></i>
                                        </div>
                                        <span className='font-medium flex-1'>
                                            My Addresses
                                        </span>
                                        <i className='fa-solid fa-chevron-right text-xs text-green-500'></i>
                                    </Link>
                                </li>

                                <li>
                                    <Link href={"/profile/settings"} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${path === '/profile/settings' ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
                                    <div className='w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-gray-100 text-gray-500 group-hover:bg-gray-200'>
                                        <i className='fa-solid fa-gear text-sm'></i>
                                   </div>
                                   <span className='font-medium flex-1'>Settings</span>
                                   <i className='fa-solid fa-chevron-right text-xs transition-transform text-gray-400'></i>

                                    </Link>
                                </li>

                            </ul>

                        </div>
      
    </>
  )
}
