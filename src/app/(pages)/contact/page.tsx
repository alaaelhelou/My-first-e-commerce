"use client"
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { contactSchema } from '@/schemas/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

export default function Contact() {

    const [isSubmitted, setIsSubmitted] = useState(false)


    const form = useForm({
        resolver : zodResolver(contactSchema),
        defaultValues : {
            fullname : "",
            email : "",
            message : ""
        }
    })

    function handleSubmit(){
        setIsSubmitted(true)

        setTimeout(()=>{
            setIsSubmitted(false)
        }, 5000)

        form.reset()
    }
  


    
  return (
    <>
    <div className='min-h-screen bg-gray-50/50'>


    <div className='bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white'>
        <div className='px-4 py-10 sm:py-14'>


            <div className='flex flex-wrap items-center gap-2 text-sm text-white/70 mb-6'>
            <Link href={"/"} className='hover:text-white transition-colors'>
            Home
            </Link>
            <span className='text-white/40'>/</span>
            <span className='text-white font-medium'>Contact Us</span>

            </div>

            <div className='flex items-center gap-5'>
                <div className='w-16 h-16 flex items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm
                  shadow-xl ring-1 ring-white/30'>
                    <i className='fa-solid fa-headset text-3xl'></i>
                </div>
                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold tracking-tight'>Contact Us</h1>
                    <p className='text-white/80 mt-1'>We'd love to hear from you. Get in touch with our team.</p>
                </div>

            </div>

        </div>

    </div>


    <main className='px-4 py-12'>
        <div className='lg:flex gap-8'>

            <section className='w-full lg:w-1/2'>


            <div className='bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-5'>
                <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0'>
                        <i className='fa-solid fa-phone text-green-600 text-lg'></i>
                    </div>
                    <div>
                        <h3 className='font-semibold text-gray-900 mb-1'>Phone</h3>
                        <p className='text-gray-500 text-sm mb-2'>Mon-Fri from 8am to 6pm</p>
                        <a href="tel:+18001234567">+1 (800) 123-4567</a>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-5'>
                <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0'>
                        <i className='fa-solid fa-envelope text-green-600 text-lg'></i>
                    </div>
                    <div>
                        <h3 className='font-semibold text-gray-900 mb-1'>Email</h3>
                        <p className='text-gray-500 text-sm mb-2'>We'll respond within 24 hours</p>
                        <a href="mailto:support@freshcart.com">support@freshcart.com</a>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-5'>
                <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0'>
                        <i className='fa-solid fa-location-dot text-green-600 text-lg'></i>
                    </div>
                    <div>
                        <h3 className='font-semibold text-gray-900 mb-1'>Office</h3>
                        <p className='text-gray-500 text-sm'>123 Commerce Street <br />New York, NY 10001 <br />United States</p>
                     
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-5'>
                <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0'>
                        <i className='fa-solid fa-clock text-green-600 text-lg'></i>
                    </div>
                    <div>
                        <h3 className='font-semibold text-gray-900 mb-1'>Business Hours</h3>
                        <p className='text-gray-500 text-sm'>Monday - Friday: 8am - 6pm <br />Saturday: 9am - 4pm <br />Sunday: Closed</p>
                     
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-2xl border border-gray-100 p-6 shadow-sm'>
                <h3 className='font-semibold text-gray-900 mb-4'>Follow Us</h3>
                <div className='flex items-center gap-3'>
                    <a href="#" className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-green-600 hover:text-white transition-colors'>
                        <i className='fa-brands fa-facebook-f'></i>
                    </a>

                     <a href="#" className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-green-600 hover:text-white transition-colors'>
                        <i className='fa-brands fa-twitter'></i>
                    </a>

                     <a href="#" className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-green-600 hover:text-white transition-colors'>
                        <i className='fa-brands fa-instagram'></i>
                    </a>

                     <a href="#" className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-green-600 hover:text-white transition-colors'>
                        <i className='fa-brands fa-linkedin-in'></i>
                    </a>
                </div>
            </div>


            </section>

            <section className='w-full'>


            <div className='bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-sm'>


                <div className='flex items-center gap-3 mb-6'>
                    <div className='w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center'>
                        <i className='fa-solid fa-headset text-green-600 text-lg'></i>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold text-gray-900'>Send us a Message</h2>
                        <p className='text-gray-500 text-sm'>Fill out the form and we'll get back to you</p>
                    </div>
                    </div>

                    {isSubmitted &&  <div className='mb-6 p-4 rounded-xl bg-green-50 border border-green-100 flex items-center gap-3'>
                            <div className='w-8 h-8 rounded-full bg-green-100 flex items-center justify-center'>
                                <i className='fa-solid fa-check text-green-600 text-sm'></i>
                            </div>
                            <div>
                                <p className='font-medium text-green-800'>Message sent successfully!</p>
                                <p className='text-green-600 text-sm'>We'll get back to you as soon as possible.</p>
                            </div>
                        </div>}

                    <form onSubmit={form.handleSubmit(handleSubmit)}>
                     
                     

                        <div className='lg:flex gap-5 mb-5'>
                            <div className='lg:w-1/2'>

                            <Controller
                                                            name="fullname"
                                                            control={form.control}
                                                            render={({ field, fieldState }) => (
                                                                <Field data-invalid={fieldState.invalid}>
                                                                    <FieldLabel className='block text-sm font-medium text-gray-700 mb-2' htmlFor={field.name}>Full Name</FieldLabel>
                                                                    <Input
                                                                    required
                                                                        {...field}
                                                                        id={field.name}
                                                                        aria-invalid={fieldState.invalid}
                                                                        type='text'
                                                                        placeholder="John Doe"
                                                                        autoComplete="off"
                                                                        className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all'
                                                                    />
                        
                                                                    {fieldState.invalid && <FieldError className='text-red-500 -mt-0.5 text-sm' errors={[fieldState.error]} />}
                                                                </Field>
                                                            )}
                                                        />
                         
                            </div>
                            <div className='lg:w-1/2'>
                          
                                      <Controller
                                                            name="email"
                                                            control={form.control}
                                                            render={({ field, fieldState }) => (
                                                                <Field data-invalid={fieldState.invalid}>
                                                                    <FieldLabel className='block text-sm font-medium text-gray-700 mb-2' htmlFor={field.name}>Email</FieldLabel>
                                                                    <Input
                                                                    required
                                                                        {...field}
                                                                        id={field.name}
                                                                        aria-invalid={fieldState.invalid}
                                                                        type='email'
                                                                        placeholder="john@example.com"
                                                                        autoComplete="off"
                                                                        className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all'
                                                                    />
                        
                                                                    {fieldState.invalid && <FieldError className='text-red-500 -mt-0.5 text-sm' errors={[fieldState.error]} />}
                                                                </Field>
                                                            )}
                                                        />
                            </div>
                        </div>

                        

                        <div className='mb-5'>
                            <label htmlFor="subject" className='block text-sm font-medium text-gray-700 mb-2'>Subject</label>
                            <select 
                            required
                            name="subject" 
                            id="subject" 
                            className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 
                            focus:ring-green-500/20 focus:border-green-500 transition-all bg-white'>
                                <option>Select a subject</option>
                                <option value="general">General Inquiry</option>
                                <option value="order">Order Support</option>
                                <option value="shipping">Shipping Question</option>
                                <option value="return">Returns & Refunds</option>
                                <option value="product">Product Information</option>
                                <option value="feedback">Feedback & Suggestions</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className='mb-5'>
  

                                 <Controller
                                                            name="message"
                                                            control={form.control}
                                                            render={({ field, fieldState }) => (
                                                                <Field data-invalid={fieldState.invalid}>
                                                                    <FieldLabel className='block text-sm font-medium text-gray-700 mb-2' htmlFor={field.name}>Message</FieldLabel>
                                                                    <textarea
                                                                    required
                                                                        {...field}
                                                                        id={field.name}
                                                                        aria-invalid={fieldState.invalid}
                                                                        rows={5}
                                                                        placeholder="How can we help you?"
                                                                        autoComplete="off"
                                                                        className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none
                               focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all resize-none'
                                                                    />
                        
                                                                    {fieldState.invalid && <FieldError className='text-red-500 -mt-0.5 text-sm' errors={[fieldState.error]} />}
                                                                </Field>
                                                            )}
                                                        />
                        </div>

                        <button 
                        type='submit'
                        className='w-full md:w-auto inline-flex items-center justify-center
                         gap-2 px-8 py-3.5 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors 
                        disabled:opacity-70 disabled:cursor-not-allowed shadow-sm shadow-green-600/20 cursor-pointer'>

                            {form.formState.isSubmitting ? 'Sending ....' : <>
                             <i className='fa-solid fa-paper-plane'></i>
                            Send Message
                            </>}


                           

                        </button>

                      
                    </form>
            
            </div>

            <div className='mt-6 bg-green-50 rounded-2xl p-6 border border-green-100'>
                <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm'>
                        <i className='fa-solid fa-circle-question text-green-600 text-xl'></i>
                    </div>
                    <div>
                        <h3 className='font-semibold text-gray-900 mb-1'>Looking for quick answers?</h3>
                        <p className='text-gray-600 text-sm mb-3'>Check out our Help Center for frequently asked questions about orders, shipping, returns, and more.</p>
                        <Link href={"/help"} className='text-green-600 font-medium text-sm hover:underline inline-flex items-center gap-1'>Visit Help Center →</Link>
                    </div>
                </div>
            </div>
            </section>
        </div>
    </main>

    </div>
      
    </>
  )
}
