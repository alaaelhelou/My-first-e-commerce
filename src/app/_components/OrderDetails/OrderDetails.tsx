'use client';
import Image from 'next/image';
import React, { useState } from 'react';;
import { AllOrdersDataType, CartItem } from '@/types/Orders.type';

export default function OrderDetails({ notEmptyProducts }: { notEmptyProducts: AllOrdersDataType[]}) {

   
    const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);
  

   
    const toggleOrderDetails = (orderId: string) => {
        setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
    };


  

    return (
        <>
            <div>
                {notEmptyProducts?.map((order: AllOrdersDataType) => {
                    const isExpanded = expandedOrderId === order._id;

                    return (
                        <div key={order._id} className="bg-white rounded-2xl border transition-all duration-300 overflow-hidden border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 mb-4">
                            <div className='p-5 sm:p-6'>

                                <div className="flex  gap-5">

                                    <div>


                                        {order.cartItems?.slice(0, 1).map((item: CartItem) => (
                                            <div key={item?._id} className="relative">


                                                <div className='relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br
                             from-gray-50 to-white border border-gray-100 p-2.5 overflow-hidden'>
                                                    <Image
                                                        src={item?.product?.imageCover}
                                                        alt={item?.product?.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>

                                                {order.cartItems?.length > 2 && (
                                                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-gray-900 text-white text-xs
                             font-bold rounded-full flex items-center justify-center shadow-lg">
                                                        +{order.cartItems.length - 1}
                                                    </div>
                                                )}
                                            </div>

                                        ))}

                                    </div>

                                    <div className='w-full'>
                                        <div className="flex-1 min-w-0">



                                            <div className='flex items-start justify-between gap-3 mb-3'>


                                                <div>
                                                    <div className='inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-100 rounded-lg mb-2'>
                                                        <i className={`fa-solid ${order.isDelivered ? 'fa-check' : 'fa-clock'} text-xs text-amber-600`}></i>
                                                        <span className='text-xs font-semibold text-amber-600'>{order.isDelivered ? 'Delivered' : 'Processing'}</span>
                                                    </div>
                                                    <h3 className='font-bold text-gray-900 text-lg flex items-center gap-2'>
                                                        <i className='fa-solid fa-hashtag text-xs text-gray-400'></i>
                                                        {order.id || order._id.slice(-4)}
                                                    </h3>
                                                </div>

                                                <div className='shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100'>
                                                    <i className='fa-solid fa-money-bill text-gray-600'></i>

                                                </div>

                                            </div>

                                            <div className='flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4'>

                                                <span className='flex items-center gap-1.5'>
                                                    <i className='fa-solid fa-calendar-days text-xs text-gray-400'></i>
                                                    <span>{new Date(order.createdAt).toLocaleDateString('en-US', {
                                                        month: 'long',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    }
                                                    )
                                                    }</span>
                                                </span>

                                                <span className='w-1 h-1 rounded-full bg-gray-300'></span>
                                                <span className='flex items-center gap-1.5'>
                                                    <i className='fa-solid fa-box text-xs text-gray-400'></i>
                                                    {order?.cartItems?.length} items
                                                </span>
                                                <span className='w-1 h-1 rounded-full bg-gray-300'></span>
                                                <span className='flex items-center gap-1.5'>
                                                    <i className='fa-solid fa-location-dot text-xs text-gray-400'></i>
                                                    {order?.shippingAddress?.city}
                                                </span>




                                            </div>

                                            <div className="flex items-center justify-between gap-4">


                                                <div>
                                                    <span className='text-2xl font-bold text-gray-900'>{order?.totalOrderPrice}</span>
                                                    <span className='text-sm font-medium text-gray-400 ml-1'>EGP</span>
                                                </div>

                                                <button
                                                    onClick={() => toggleOrderDetails(order._id)}
                                                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl border
                           border-gray-200 text-sm font-medium text-gray-700 ${isExpanded ? 'bg-green-600 text-white' : "hover:bg-gray-200"} transition-colors cursor-pointer`}
                                                >
                                                    {isExpanded ? 'Hide' : 'Details'}
                                                    <i className={`fa-solid fa-angle-down ${isExpanded ? 'rotate-180' : ''}`}></i>
                                                </button>



                                            </div>

                                        </div>

                                    </div>


                                </div>



                            </div>

                      
                            {isExpanded && (
                                <div className="border-t border-gray-100 bg-gray-50/50">
                                    <div className='p-5 sm:p-6'>


                                        <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2 mb-4">
                                            <div className='w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center'>
                                                <i className='fa-solid fa-receipt text-xs text-green-600'></i>
                                            </div>
                                            Order Items
                                        </h4>

                                        <div>
                                            {order?.cartItems?.map((item: CartItem) => (
                                                <div key={item?._id} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 mb-3">

                                                    <div className="relative aspect-square w-16 h-16 rounded-xl bg-gray-50 p-2">
                                                        <Image
                                                            fill
                                                            className="object-cover"
                                                            src={item?.product?.imageCover}
                                                            alt={item?.product?.title}

                                                        />
                                                    </div>


                                                    <div className='flex-1 min-w-0'>
                                                        <p className="font-medium text-gray-900">
                                                            {item.product?.title}
                                                        </p>
                                                        <p className="text-sm text-gray-500 mt-1">
                                                            {item.count} x {item.price} EGP
                                                        </p>
                                                    </div>

                                                    <div className='text-right shrink-0'>
                                                        <p className='text-lg font-bold text-gray-900'>{item.count * item.price}</p>
                                                        <p className='text-xs text-gray-400'>EGP</p>
                                                    </div>

                                                   
                                                </div>
                                            ))}
                                        </div>


                                        <div className="pb-5 sm:pb-6 lg:flex gap-4">



                                          <div className='w-full p-4 bg-white rounded-xl border border-gray-100'>
                                            <h4 className='font-semibold text-gray-900 text-sm flex items-center gap-2 mb-3'>
                                                <div className='w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center'>
                                                    <i className='fa-solid fa-location-dot text-xs text-blue-600'></i>
                                                </div>
                                                Delivery Address
                                            </h4>


                                            <div>
                                                <p className='font-medium text-gray-900 mb-2'>{order?.shippingAddress?.city}</p>
                                                <p className='text-sm text-gray-600 leading-relaxed mb-2'>{order?.shippingAddress?.details}</p>
                                                <p className='text-sm text-gray-600 flex items-center gap-2 pt-1 mb-2'>
                                                    <i className='fa-solid fa-phone text-xs text-gray-400'></i>
                                                    {order?.shippingAddress?.phone}
                                                </p>
                                            </div>

                                          </div>

                                          <div className='w-full p-4 rounded-xl bg-amber-100 border border-amber-200'>
                                            <h4 className='font-semibold text-gray-900 text-sm flex items-center gap-2 mb-3'>
                                                <div className='w-6 h-6 rounded-lg bg-amber-500 flex items-center justify-center'>
                                                    <i className='fa-solid fa-clock text-xs text-white'></i>
                                                </div>
                                                Order Summary
                                            </h4>

                                            <div className='text-sm'>

                                                <div className='flex justify-between text-gray-600 mb-2'>
                                                    <span>Subtotal</span>
                                                    <span className='font-medium'>{order?.totalOrderPrice} EGP</span>
                                                </div>

                                                <div className='flex justify-between text-gray-600 mb-2'>
                                                    <span>Shipping</span>
                                                    <span className='font-medium'>{order?.totalOrderPrice > 500 ? 'Free' : '100'}</span>
                                                </div>

                                                <hr className='border-gray-200/50 my-2'/>
                                                <div className='flex justify-between pt-1'>
                                                    <span className='font-semibold text-gray-900'>
                                                        Total
                                                    </span>
                                                    <span className='font-bold text-lg text-gray-900'>
                                                        {order?.totalOrderPrice > 500 ? `${order?.totalOrderPrice}` : `${order.totalOrderPrice + 100}`} EGP
                                                    </span>

                                                </div>
                                            </div>
                                          </div>
                                          
                                        </div>


                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    )
}
