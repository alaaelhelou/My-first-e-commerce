'use client'
import React from 'react'
import Image from 'next/image'
import { Controller, useForm } from 'react-hook-form'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema, LoginSchemaType } from '@/schemas/auth.schema'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import img1 from "../../../../public/2e5810ff3e-e750761ebcd4ae5907db.png"
import { Spinner } from '@/components/ui/spinner'
import {signIn} from "next-auth/react"



export default function Login() {

  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  console.log(form);

  async function handleLogin(data: LoginSchemaType) {
    console.log('data', data);



    const response = await signIn("credentials" , {
      email : data.email,
      password : data.password,
      redirect : false , 
  
    }
  )

  if(response?.ok){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast.success("Log in successful" , {
      duration : 2000
    }
    )
    router.replace("/")
  }else{
    toast.error(response?.error || "Login failed")

  }
}
  return (
    <>
      <main className='xl:w-[90%] mx-auto py-16 px-4'>


        <div className='flex flex-col lg:flex-row gap-12 p-4'>

          <div className='lg:w-1/2 flex flex-col justify-center text-center'>
            <div className='relative mb-6'>
              <Image className='w-full h-96 object-cover rounded-2xl shadow-lg' src={img1} alt='veg photo' />
            </div>

            <div>
              <h2 className='text-gray-800 text-3xl font-bold'>FreshCart - Your One-Stop Shop for Fresh Products</h2>
              <p className='text-gray-600 text-lg my-4'>Join thousands of happy customers who trust FreshCart for their daily grocery needs</p>

              <div className='flex items-center justify-center gap-8 text-gray-500 text-sm'>

                <div className='flex items-center'>
                  <i className="fa-solid fa-truck text-green-600 mr-2"></i>
                  Free Delivery
                </div>

                <div className='flex items-center'>
                  <i className="fa-solid fa-shield-halved text-green-600 mr-2"></i>
                  Secure Payment
                </div>

                <div className='flex items-center'>
                  <i className="fa-solid fa-clock text-green-600 mr-2"></i>
                  24/7 Support
                </div>

              </div>
            </div>



          </div>

          <section className='w-full lg:w-1/2'>

            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg">
              <form onSubmit={form.handleSubmit(handleLogin)}>

                <div className='text-center mb-8'>
                  <div className='flex items-center justify-center mb-4'>
                    <span className='text-green-600 text-3xl font-bold'>Fresh<span className='text-gray-800'>Cart</span></span>
                  </div>
                  <h1 className='text-gray-800 text-2xl font-bold mb-2'>Welcome Back!</h1>
                  <p className='text-gray-600'>Sign in to continue your fresh shopping experience</p>



                </div>


                <div className='flex flex-wrap gap-3 mb-6'>

                  <Button className='w-full bg-transparent hover:bg-gray-100 flex justify-center items-center border border-gray-300 rounded-md disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed' variant="outline">
                    <i className="fa-brands fa-google me-2 text-red-600"></i>
                    <span>Google</span>
                  </Button>
                  <Button className='w-full bg-transparent hover:bg-gray-100 flex justify-center items-center border border-gray-300 rounded-md disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed' variant='outline'>
                    <i className="fa-brands fa-facebook me-2 text-blue-600"></i>
                    <span>Facebook</span>
                  </Button>
                </div>


                <div className='flex items-center justify-center my-6'>

                  <div className='flex-1 h-0.5  bg-gray-200'></div>
                  <span className='text-gray-500 px-4 font-medium text-sm'>OR CONTINUE WITH EMAIL</span>
                  <div className='flex-1 h-0.5 bg-gray-200'></div>

                </div>





                <Controller

                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel className='text-gray-700 text-sm font-semibold mb-2' htmlFor={field.name}>Email Address</FieldLabel>
                      <div className='relative'>
                        <Input
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="ُEnter your Email"
                          type='email'
                          autoComplete="off"
                          className='border-2 border-gray-200 px-4 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-green-100 focus:border-green-500 focus-visible:border-green-600 transition-all'
                        />
                        <i className="fa-solid fa-envelope text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"></i>

                      </div>

                      {fieldState.invalid && <FieldError className='text-red-500 -mt-0.5 text-sm' errors={[fieldState.error]} />}
                    </Field>
                  )}
                />

                <Controller

                  name="password"
                  control={form.control}
                  render={({ field, fieldState }) => (

                    <Field data-invalid={fieldState.invalid}>

                      <div className='flex items-center justify-between mb-2 mt-6'>
                        <FieldLabel className='text-gray-700 text-sm font-semibold' htmlFor={field.name}>Password*</FieldLabel>
                        <Link className='text-green-600 hover:text-green-700 font-medium text-sm cursor-pointer' href={'/forget-password'}>Forgot Password?</Link>
                      </div>

                      <div className='relative'>
                        <Input
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Enter your password"
                          type='password'
                          autoComplete="off"
                          className='border-2 border-gray-200 px-4 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-green-100 focus:border-green-500 focus-visible:border-green-600 transition-all'


                        />
                        <i className="fa-solid fa-lock text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"></i>

                      </div>


                      {fieldState.invalid && <FieldError className='text-red-500 -mt-0.5 text-sm' errors={[fieldState.error]} />}
                    </Field>
                  )
                  } />


                <div className='flex items-center gap-2 my-6'>
                  <Checkbox
                    id="terms"
                    className="border border-gray-400 bg-white data-[checked]:bg-green-600 data-[checked]:border-green-600 hover:data-[checked]:bg-green-700 hover:data-[checked]:border-green-700 text-white"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer select-none">Keep me sign in</label></div>






                <Button type='submit' 
                disabled={form.formState.isSubmitting}
                className='w-full text-md text-white bg-green-600 hover:bg-green-700 font-semibold
                                flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors'>
                  {form.formState.isSubmitting ? (
                                        <>
                                          
                                            <Spinner />
                                            
                                            <span>Signing in...</span>
                                        </>
                                    ) : (
                                        <>
                                            
                                            <span>Sign in</span>
                                        </>
                                    )}
                </Button>
              </form>

              <p className='text-center border-t pt-6 border-gray-100 my-8'>
                New to FreshCart? <Link className='text-green-600 hover:underline font-medium' href={'/register'}>Create an account</Link></p>

                 <div className='flex items-center justify-center gap-6 text-xs text-gray-500 mt-6'>

              <div className='flex items-center'>
                <i className="fa-solid fa-lock mr-1"></i>
                SSL Secured
              </div>

              <div className='flex items-center'>
                <i className="fa-solid fa-users mr-1"></i>
                50K+ Users
              </div>

              <div className='flex items-center'>
                <i className="fa-solid fa-star mr-1"></i>
                4.9 Rating
              </div>

            </div>

            </div>

           


          </section>


        </div >




      </main >
    </>
  )
}
