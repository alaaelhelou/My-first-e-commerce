'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { addAddressSchemaType, addAddressSchema } from '@/schemas/auth.schema';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';
import { addAddress, handleGetLoggedUserAddresses, removeAddress } from '@/api/Address.api';
import { AddressType } from '@/types/UserAddresses.type';
import { Spinner } from '@/components/ui/spinner';



export default function MyAddressesPage() {

    const [addresses, setAddresses] = useState<AddressType[]>([]);
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const form = useForm<addAddressSchemaType>({
        resolver: zodResolver(addAddressSchema),
        defaultValues: {
            name: '',
            details: '',
            phone: '',
            city: '',
        },
    });

  

    async function handleAdd(values: addAddressSchemaType) {

        const res = await addAddress(values);

        if (res.status === 'success') {
            setAddresses(res.data);
            setIsOpened(false);
            form.reset()

        }

    }

      async function getAddresses() {

        const response = await handleGetLoggedUserAddresses();
        if (response.status === 'success') {
            setAddresses(response.data);
            
        }

    }

    async function handleDelete(id: string) {
        const res = await removeAddress(id);
        if (res.status === 'success') {
            setAddresses(res.data);
        }
    }

    useEffect(() => {
        getAddresses();
    }, []);





    return (

       

    
        <div className="p-6 relative">
   
         
                <div className='flex items-center justify-between mb-6'>

                    <div>
                        <h2 className='text-xl font-bold text-gray-900'>
                            My Addresses
                        </h2>
                        <p className='text-gray-500 text-sm mt-1'>
                            Manage your saved delivery addresses
                        </p>
                    </div>

                    <button onClick={() => setIsOpened(true)} className='inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 text-white font-semibold
                         hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25 cursor-pointer'>
                        <i className='fa-solid fa-plus text-sm'></i> Add Address
                    </button>
                </div>

                {addresses.length===0 ? <div className='bg-white rounded-3xl border border-gray-100 p-12 text-center'>
                    <div className='w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5'>
                        <i className='fa-solid fa-location-dot text-3xl text-gray-400'></i>
                    </div>
                    <h3 className='text-lg font-bold text-gray-900 mb-2'>No Addresses Yet</h3>
                    <p className='text-gray-500 mb-6 max-w-sm mx-auto'>Add your first delivery address to make checkout faster and easier.</p>
                    <button onClick={() => setIsOpened(true)} className='inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25 cursor-pointer'>
                        <i className='fa-solid fa-plus'></i> Add Your First Address
                    </button>

                </div> : 
                <div className='flex flex-wrap'>
                    {addresses?.map((item) => (
                    <div key={item._id} className='w-full md:w-1/2'>    
        
                  
                     <div className="inner p-4">
                                 <div className='bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-primary-100 transition-all duration-200 group'>
                                     <div className='flex items-start justify-between gap-4'>


                                         <div className='flex items-start gap-4 flex-1'>
                                             <div className='w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors'>
                                                 <i className='fa-solid fa-location-dot text-lg text-green-600'></i>
                                             </div>
                                             <div className='flex-1 min-w-0'>
                                                 <h3 className='font-bold text-gray-900 mb-1'>{item.name}</h3>
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

                                        <div className='flex items-center gap-2'>
                                            <button className='w-9 h-9 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center transition-colors cursor-not-allowed'>
                                                <i className='fa-solid fa-pen text-sm'></i>
                                            </button>
                                            <button onClick={() => handleDelete(item._id)}className='w-9 h-9 rounded-lg bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600 flex items-center justify-center cursor-pointer transition-colors disabled:opacity-50'>
                                                <i className='fa-solid fa-trash text-sm'></i>
                                            </button>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                ))}
                    </div>}



     
            {isOpened && (
                <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
                         <div className='absolute inset-0 bg-black/50 backdrop-blur-sm'></div>
                         <div className='relative bg-white rounded-3xl shadow-2xl w-full max-w-lg p-6 sm:p-8 animate-in zoom-in-95 duration-200'>


                             <div className='flex items-center justify-between mb-6'>
                                 <h2 className='text-xl font-bold text-gray-900'>Add New Address</h2>
                                 <button onClick={() => setIsOpened(false)} className='w-9 h-9 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center transition-colors cursor-pointer'>
                                     <i className='fa-solid fa-xmark'></i>
                                 </button>

                             </div>

                        <form onSubmit={form.handleSubmit((data) => handleAdd(data))}>

                         

                            <Controller
                                name="name"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel className="block text-sm font-medium text-gray-700 mb-2" htmlFor={field.name}>
                                            Address Name
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id={field.name}
                                            aria-invalid={fieldState.invalid}
                                            type="text"
                                            placeholder="e.g. Home, Office"
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



                            <div className='flex items-center gap-4 mt-5'>


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
                            </div>

                      
                   
                                <div className='flex items-center gap-3 pt-4 mt-5'>
                                    <button 
                                    onClick={() => setIsOpened(false)}
                                     type='button' 
                                     className='flex-1 py-3 px-6 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors cursor-pointer'>
                                        Cancel
                                        </button>
                                    <button 
                                    type='submit'
                                     className='flex-1 py-3 px-6 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 shadow-lg shadow-green-600/25 cursor-pointer'>
                                         {form.formState.isSubmitting ? (
                                        <>
                                          
                                            <Spinner />
                                            
                                            <span>Adding Address...</span>
                                        </>
                                    ) : (
                                        <>
                                            
                                            <span>Add Address</span>
                                        </>
                                    )}
                                        </button>

                                </div>
                               
               
                       
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
