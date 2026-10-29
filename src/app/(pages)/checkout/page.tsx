'use client';
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { addAddressInCheckoutSchema, addAddressInCheckoutSchemaType } from '@/schemas/auth.schema';
import { handleGetUserCart } from '@/api/Cart';
import { handleCreateCashOrderFromCart } from '@/api/Orders';
import { handleGetLoggedUserAddresses } from '@/api/Address.api';
import { LoggedCartType, ProductCart } from '@/types/CartProducts.type';
import { AddressResponse, AddressType } from '@/types/UserAddresses.type'; 
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { CashResponse } from '@/types/Orders.type';
import Image from 'next/image';



export default function Checkout() {
    const router = useRouter();
    const [cart, setCart] = useState<LoggedCartType>({} as LoggedCartType);
    const [addresses, setAddresses] = useState<AddressType[]>([]);
    const [selectedAddressId, setSelectedAddressId] = useState<string>('');
    const [paymentMethod, setPaymentMethod] = useState('cash');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [chekoutResponse, setCheckoutResponse] = useState<CashResponse>({} as CashResponse)






    const form = useForm<addAddressInCheckoutSchemaType>({
        resolver: zodResolver(addAddressInCheckoutSchema),
        defaultValues: {
            city: '',
            details: '',
            phone: '',
            postalCode: '',
        },
    });



    async function getUserCart() {
        try {
            const cart: LoggedCartType = await handleGetUserCart();
            if (cart.status === "success") {
                setCart(cart)
            }
        } catch (error) {
            console.log(error);
        }
    }



    async function getAddresses() {
        try {
            const addressResponse: AddressResponse = await handleGetLoggedUserAddresses();
            if (addressResponse?.status === 'success') {
                setAddresses(addressResponse.data);
            }
        } catch (error) {
            console.log(error);
        }
    }


    const handleSelectAddress = (address: AddressType) => {
        setSelectedAddressId(address._id);
        form.setValue('city', address.city || '');
        form.setValue('details', address.details || '');
        form.setValue('phone', address.phone || '');
    };


async function handleOrder(values: addAddressInCheckoutSchemaType) { 
    if (!cart?.cartId) { toast.error('Cart ID not found');

     }


if (!selectedAddressId) {
    toast.error('Please select an address or add a new one');
    return;
}

setIsLoading(true);
try {
    const response =  await handleCreateCashOrderFromCart(cart.cartId , values )

   
    console.log(response, 'Cash Order Response');

    if (response?.status === 'success') {
        toast.success('Order created successfully!');
        setCheckoutResponse(response);
        router.push('/allOrders');
    } else {
        toast.error(response?.message || 'Failed to create order');
    }

} catch (error) {
    console.log(error);
    toast.error('Something went wrong');
} finally {
    setIsLoading(false);
}
}

    useEffect(() => {
        getUserCart();
        getAddresses();
    }, []);




    return (
        <>
            <div className='bg-gradient-to-b from-gray-50 to-white min-h-screen py-8'>
                <div className='px-4'>
                    <div className='mb-8'>


                        <div className='flex items-center gap-2 text-sm text-gray-500 mb-6'>
                            <Link className='hover:text-green-600 transition' href={"/"}>Home</Link>
                            <span className='text-gray-300'>/</span>
                            <Link href={"/cart"} className='hover:text-green-600 transition'>cart</Link>
                            <span className='text-gray-300'>/</span>
                            <span className='text-gray-900 font-medium'>Checkout</span>



                        </div>

                        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
                            <div>
                                <h1 className='text-3xl font-bold text-gray-900 flex items-center gap-3'>
                                    <span className='bg-gradient-to-br from-green-600 to-green-700 text-white w-12 h-12 rounded-xl
                             flex items-center justify-center shadow-lg shadow-green-600/20'>
                                        <i className='fa-solid fa-receipt'></i>
                                    </span>
                                    Complete Your Order
                                </h1>
                                <p className='text-gray-500 mt-2'>Review your items and complete your purchase</p>
                            </div>
                            <Link href={"/cart"} className='text-green-600 hover:text-green-700 font-medium
                     flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-50 transition-all'>
                                <i className='fa-solid fa-arrow-left'></i>
                                Back to Cart
                            </Link>

                        </div>

                    </div>

                    <form onSubmit={form.handleSubmit(handleOrder)}>
                        <div className='lg:flex lg:gap-8'>


                            <div className='w-full lg:w-2/3'>


                                <div className='bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm mb-6'>


                                    <div className='bg-gradient-to-r from-green-600 to-green-700 px-6 py-4'>
                                        <h2 className='text-lg font-bold text-white flex items-center gap-2'>
                                            <i className='fa-solid fa-house'></i>
                                            Shipping Address
                                        </h2>
                                        <p className='text-green-100 text-sm mt-1'>Where should we deliver your order?</p>

                                    </div>

                                    <div className='p-6'>


                                        <div className='pb-5 border-b border-gray-100'>
                                            <div className='flex items-center gap-2 mb-3'>
                                                <i className='fa-solid fa-bookmark text-green-500 text-sm'></i>
                                                <span className='font-semibold text-gray-800'>Saved Addresses</span>
                                            </div>
                                            <p className='text-sm font-medium text-gray-600 mb-3'></p>


                                            {addresses.map((item) => (
                                                <button
                                                    type='button'
                                                    key={item._id}
                                                    onClick={() => handleSelectAddress(item)}
                                                    className={`w-full p-4 rounded-xl text-left mb-3 border-2 transition-all
                                                         duration-200 cursor-pointer ${selectedAddressId === item._id ?
                                                        'border-green-500 bg-green-50 shadow-sm'
                                                        :
                                                        'border-gray-200 bg-white hover:border-green-400'
                                                        }`}
                                                >
                                                    <div className='flex items-start justify-between gap-4'>


                                                        <div className='flex items-start gap-4 flex-1'>
                                                            <div className={`w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center shrink-0
                                                        ${selectedAddressId === item._id ? `bg-green-500 text-white` : `bg-gray-100 text-gray-500`}
                                                          transition-colors`}>
                                                                <i className={`fa-solid ${selectedAddressId === item._id ? `fa-check text-green-100` : `fa-location-dot text-green-600`} text-lg`}></i>
                                                            </div>
                                                            <div className='flex-1 min-w-0'>
                                                                <h3 className={`font-bold ${selectedAddressId === item._id ? `text-green-700` : `text-gray-900 `} mb-1`}>{item.name}</h3>
                                                                <p className='text-sm text-gray-600 mb-3 line-clamp-2'>{item.details}</p>
                                                                <div className='flex flex-wrap items-center gap-4 text-sm text-gray-500'>
                                                                    <span className='flex items-center gap-1.5'>
                                                                        <i className='fa-solid fa-phone text-xs'></i>
                                                                        {item.phone}
                                                                    </span>
                                                                    <span className='flex items-center gap-1.5'>
                                                                        <i className='fa-solid fa-city text-xs'></i>
                                                                        {item.city}
                                                                    </span>

                                                                </div>



                                                            </div>



                                                        </div>

                                                    </div>


                                                </button>
                                            ))}



                                            <button
                                               type='button'
                                                onClick={() => {
                                                    form.reset({ city: '', details: '', phone: '' , postalCode : ""});
                                                    setSelectedAddressId('new');
                                                    
                                                }}
                                                className={`w-full p-4 rounded-xl border-2 border-dashed text-left transition-all duration-200 mb-3 ${selectedAddressId === 'new'
                                                    ? 'border border-green-500 bg-green-50'
                                                    : 'border-gray-300 hover:border-green-300 hover:bg-gray-50'
                                                    }`
                                                }
                                            >
                                                <div className='flex items-center gap-3'>
                                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${selectedAddressId === 'new' ? `bg-green-500 text-white` : `bg-gray-100 text-gray-500`}`}>
                                                        <i className='fa-solid fa-plus'></i>
                                                    </div>
                                                    <div>
                                                        <p className={`font-semibold ${selectedAddressId === 'new' ? `text-green-700` : ` text-gray-700`}`}>Use a different address</p>
                                                        <p className='text-xs text-gray-500 mt-0.5'>Enter a new shipping address manually</p>
                                                    </div>

                                                </div>
                                            </button>


                                        </div>

                                        <div className='flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100 mb-3'>
                                            <div className='w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0'>
                                                <i className='fa-solid fa-circle-info text-blue-600 text-sm'></i>
                                            </div>
                                            <div>
                                                <p className='text-sm text-blue-800 font-medium'>
                                                    Delivery Information
                                                </p>
                                                <p className='text-xs text-blue-600 mt-0.5'>
                                                    {selectedAddressId === "new" ? "Please ensure your address is accurate for smooth delivery" :
                                                        "Using your saved address. You can edit the details below if needed."}

                                                </p>
                                            </div>





                                        </div>




                                        <div>
                                            <Controller
                                                name="city"
                                                control={form.control}
                                                render={({ field, fieldState }) => (
                                                    <Field data-invalid={fieldState.invalid}>
                                                        <FieldLabel className="block text-sm font-medium text-gray-700 mb-2" htmlFor={field.name}>
                                                            City
                                                        </FieldLabel>
                                                        <Input
                                                            {...field}
                                                            id={field.name}
                                                            aria-invalid={fieldState.invalid}
                                                            type='text'
                                                            placeholder="Ciro"
                                                            autoComplete="off"
                                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                                        />
                                                        {fieldState.invalid && (
                                                            <FieldError className="text-red-500 mt-0.5 text-xs">
                                                                {fieldState.error?.message}
                                                            </FieldError>
                                                        )}
                                                    </Field>
                                                )}
                                            />

                                            <Controller
                                                name="details"
                                                control={form.control}
                                                render={({ field, fieldState }) => (
                                                    <Field data-invalid={fieldState.invalid}>
                                                        <FieldLabel className="block text-sm font-medium text-gray-700 mb-2 mt-5" htmlFor={field.name}>
                                                            Full Address
                                                        </FieldLabel>
                                                        <textarea
                                                            {...field}
                                                            id={field.name}
                                                            aria-invalid={fieldState.invalid}
                                                            rows={3}
                                                            placeholder="Street, building, apartment..."
                                                            autoComplete="off"
                                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                                                        />
                                                        {fieldState.invalid && (
                                                            <FieldError className="text-red-500 mt-0.5 text-xs">
                                                                {fieldState.error?.message}
                                                            </FieldError>
                                                        )}
                                                    </Field>
                                                )}
                                            />

                                            <Controller
                                                name="phone"
                                                control={form.control}
                                                render={({ field, fieldState }) => (
                                                    <Field data-invalid={fieldState.invalid}>
                                                        <FieldLabel className="block text-sm font-medium text-gray-700 mb-2" htmlFor={field.name}>
                                                            Phone Number
                                                        </FieldLabel>
                                                        <Input
                                                            {...field}
                                                            id={field.name}
                                                            aria-invalid={fieldState.invalid}
                                                            type='tel'
                                                            placeholder="01xxxxxxxxx"
                                                            autoComplete="off"
                                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                                        />
                                                        {fieldState.invalid && (
                                                            <FieldError className="text-red-500 mt-0.5 text-xs">
                                                                {fieldState.error?.message}
                                                            </FieldError>
                                                        )}
                                                    </Field>
                                                )}
                                            />
                                        </div>

                                    </div>

                                </div>

                                <div className='bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm'>


                                    <div className='bg-gradient-to-r from-green-600 to-green-700 px-6 py-4'>
                                        <h2 className='text-lg font-bold text-white flex items-center gap-2'>
                                            <i className='fa-solid fa-wallet'></i>
                                            Payment Method
                                        </h2>
                                        <p className='text-green-100 text-sm mt-1'>Choose how you'd like to pay</p>
                                    </div>

                                    <div className='p-6'>

                                        <button type='button'
                                            onClick={() => setPaymentMethod("cash")}
                                            className='w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4 
                                  border-green-500 bg-green-50 shadow-sm'>

                                            <div className='w-14 h-14 rounded-xl flex items-center justify-center transition-all bg-green-500 
                                    text-white shadow-lg shadow-green-500/30'>
                                                <i className='fa-solid fa-money-bill text-xl'></i>
                                            </div>

                                            <div className='flex-1 text-left'>
                                                <h3 className='font-bold text-green-700'>
                                                    Cash on Delivery
                                                </h3>
                                                <p className='text-sm text-gray-500 mt-0.5'>
                                                    Pay when your order arrives at your doorstep
                                                </p>
                                            </div>

                                            <div className='w-7 h-7 rounded-full flex items-center justify-center 
                                     bg-green-600 text-white'>
                                                <i className='fa-solid fa-check text-xs'></i>
                                            </div>



                                        </button>

                                        <div className='flex items-center gap-3 p-4 bg-gradient-to-r
                                 from-green-50 to-green-50 rounded-xl border border-green-100 mt-4'>
                                            <div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0'>
                                                <i className='fa-solid fa-shield-halved text-green-600'></i>
                                            </div>
                                            <div>
                                                <p className='text-sm font-medium text-green-800'>Secure & Encrypted</p>
                                                <p className='text-xs text-green-600 mt-0.5'>Your payment info is protected with 256-bit SSL encryption</p>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className='w-ful lg:w-1/3'>
                                <div className='bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm sticky top-4'>
                                    <div className='bg-gradient-to-r from-green-600 to-green-700 px-6 py-4'>
                                        <h2 className='text-lg font-bold text-white flex items-center gap-2'>
                                            <i className='fa-solid fa-bag-shopping'></i>
                                            Order Summary
                                        </h2>
                                        <p className='text-green-100 text-sm mt-1'>{cart?.numOfCartItems} items</p>

                                    </div>
                                    <div className='p-5'>


                                        <div className='max-h-56 overflow-y-auto mb-5 pr-1'>

                                            {cart?.data?.products?.map((product: ProductCart) => <div key={product._id} className='flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors mb-3'>
                                                <div className='w-14 h-14 rounded-lg bg-white p-1 border border-gray-100 shrink-0'>
                                                    <div className='relative aspect-square'>
                                                        <Image fill className='object-contain' alt={product?.product?.title} src={product?.product?.imageCover} />
                                                    </div>
                                                </div>
                                                <div className='flex-1 min-w-0'>
                                                    <div className='text-sm font-medium text-gray-900 truncate'>
                                                        <p className='text-sm font-medium text-gray-900 truncate'>{product?.product?.title}</p>
                                                        <p className='text-xs text-gray-500 mt-0.5'>{product?.count} x {product?.price} EGP</p>
                                                    </div>



                                                </div>

                                                <p className='text-sm font-bold text-gray-900 shrink-0'>{product?.price * product?.count} EGP</p>

                                            </div>)}


                                        </div>

                                        <hr className='border-gray-100 my-4' />

                                        <div>
                                            <div className='flex justify-between text-gray-600 mb-3'>
                                                <span>Subtotal</span>
                                                <span className='font-medium'>{cart?.data?.totalCartPrice}</span>
                                            </div>
                                            <div className='flex justify-between text-gray-600'>
                                                <span className='flex items-center gap-2'>
                                                    <i className='fa-solid fa-truck text-gray-400'></i>
                                                    Shipping
                                                </span>
                                                <span className='text-green-600 font-semibold'>{cart?.data?.totalCartPrice > 500 ? 'FREE' : "100 EGP"}</span>
                                            </div>
                                            <hr className='border-gray-100 my-4' />

                                            <div className='flex justify-between items-center'>
                                                <span className='text-lg font-bold text-gray-900'>Total</span>
                                                <div className='text-right'>
                                                    <span className='text-2xl font-bold text-green-600'>{cart?.data?.totalCartPrice > 500 ? `${cart?.data?.totalCartPrice}` : `${cart?.data?.totalCartPrice + 100}`}</span>
                                                    <span className='text-sm text-gray-500 ml-1'> EGP</span>

                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"

                                            disabled={isLoading}
                                            className="w-full mt-6 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-bold hover:from-green-700 hover:to-green-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed 
                                       flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 active:scale-[0.98] cursor-pointer"
                                        >
                                            {isLoading ? 'Processing...' : 'Place Order'}
                                        </button>

                                        <div className='flex items-center justify-center gap-4 mt-4 py-3 border-t border-gray-100'>
                                            <div className='flex items-center gap-1.5 text-xs text-gray-500'>
                                                <i className='fa-solid fa-shield-halved text-green-500'></i>
                                                <span>Secure</span>
                                            </div>
                                            <div className='w-px h-4 bg-gray-200'></div>
                                            <div className='flex items-center gap-1.5 text-xs text-gray-500'>
                                                <i className='fa-solid fa-truck text-blue-500'></i>
                                                <span>Fast Delivery</span>
                                            </div>
                                            <div className='w-px h-4 bg-gray-200'></div>
                                            <div className='flex items-center gap-1.5 text-xs text-gray-500'>
                                                <i className='fa-solid fa-box text-orange-500'></i>
                                                <span>Easy Returns</span>
                                            </div>
                                        </div>
                                    </div>



                                </div>


                            </div>


                        </div>




                    </form>



                </div>

            </div>
        </>
    )
}