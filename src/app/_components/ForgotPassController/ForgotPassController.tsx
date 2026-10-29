"use client"
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Spinner } from '@/components/ui/spinner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { handleForgotPassword, handleRestPass, handleVerifyCode } from '@/api/Password.api'
import { toast } from 'sonner'
import { ForgotPasswordSchema, ForgotPasswordSchemaType, newPasswordSchema, newPasswordSchemaType, VerifyCodeSchema, VerifyCodeSchemaType } from '@/schemas/auth.schema'
import Link from 'next/link'

export default function ForgotPassController() {



    const [savedEmail, setSavedEmail] = useState("");
    const [step, setStep] = useState(1);






    const form = useForm({
        resolver: zodResolver(ForgotPasswordSchema),
        defaultValues: {
            email: "",
        }
    });

    const formVerify = useForm({
        resolver: zodResolver(VerifyCodeSchema),
        defaultValues: {
            resetCode: "",
        }
    });

    const formSettingNew = useForm({
        resolver: zodResolver(newPasswordSchema),
        defaultValues: {
            newPassword: "",
            rePassword: ""
        }
    });

  

    async function handleForget(data: ForgotPasswordSchemaType) {
        console.log('data', data);

        try {
            const response = await handleForgotPassword(data.email)
            console.log(response, "FinallllllResponse");
            if (response.ok) {
                await new Promise((resolve) => setTimeout(resolve, 2000));
                toast.success("Reset code sent to your email", {
                    duration: 2000
                })
                setSavedEmail(data.email)

                setStep(2)
            } else {
                toast.error(`There is no user registed with this email address ${data.email}`, {
                    duration: 2000
                }
                )


            }
        } catch (error) {
            console.log(error);

        }


    }

    async function verifyCode(data: VerifyCodeSchemaType) {
        console.log('data', data);

        try {
            const response = await handleVerifyCode(data.resetCode)
            console.log(response, "FinallllllResponse");
            if (response.ok) {
                await new Promise((resolve) => setTimeout(resolve, 2000));
                toast.success("Code Verified!", {
                    duration: 2000
                })

                setStep(3)
            } else {
                toast.error(`Reset code ia invalid or has expired`, {
                    duration: 2000
                }
                )


            }
        } catch (error) {
            console.log(error);

        }


    }

    async function newPassSitting(data: newPasswordSchemaType) {
        console.log('data', data);

        try {
            const response = await handleRestPass(savedEmail, data.newPassword)
            console.log(response, "FinallllllResponse");
            if (response.ok) {
                await new Promise((resolve) => setTimeout(resolve, 2000));
                toast.success("Password reset successfully", {
                    duration: 2000
                })

                setStep(4)
            } else {
                toast.error(`Something went wrong`, {
                    duration: 2000
                }
                )


            }
        } catch (error) {
            console.log(error);

        }


    }

    async function handleResendCode() {
        try{


        const response = await handleForgotPassword(savedEmail);


        if (response.ok) {
            toast.success("A new code has been sent");
        } else {
            toast.error("Something went wrong");
        }
    } catch (error) { 
        toast.error("Something went wrong");
     }
};






return (
    <>



        {step === 1 && <>
            <div className='text-center mb-8'>
                <div className='flex items-center justify-center mb-4'>
                    <span className='text-3xl font-bold text-green-600'>Fresh</span>
                    <span className='text-3xl font-bold text-gray-800'>Cart</span>
                </div>
                <h1 className='text-2xl font-bold text-gray-800 mb-2'>
                    Forgot Password?
                </h1>
                <p className='text-gray-600'>No worries, we'll send you a reset code</p>
                </div>
                <div className='flex items-center justify-center mb-8'>
                    <div className='flex items-center'>

                        <div className='w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
                                     transition-all duration-300 bg-green-600 text-white ring-4 ring-green-100'>
                            {step === 1 ? <i className="fa-solid fa-envelope text-xs"></i> : <i className="fa-solid fa-check text-xs"></i>}
                        </div>
                        <div className='relative w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200 overflow-hidden'>
                            <div className={`absolute top-0 left-0 h-full bg-green-600 transition-all duration-300 ${step > 1 ? "w-full" : "w-0"}`}></div>
                        </div>


                    </div>


                    <div className='flex items-center'>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm
                                     font-semibold transition-all duration-300 ${step >= 2 ? "bg-green-600 text-white shadow-md shadow-emerald-200 ring-4 ring-emerald-100" : "bg-gray-200 text-gray-500"
                            }`}>
                            {step > 2 ? <i className="fa-solid fa-check text-xs"></i> : <i className="fa-solid fa-key text-xs"></i>}
                        </div>
               
                        <div className='relative w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200 overflow-hidden'>
                            <div className={`absolute top-0 left-0 h-full bg-green-600 transition-all duration-300 ${step > 2 ? "w-full" : "w-0"}`}></div>
                        </div>


                    </div>

                    <div className='flex items-center'>
                        <div className={`w-10 h-10 flex items-center justify-center rounded-full 
                                     text-sm font-semibold transition-all duration-300 ${step >= 3 ? "bg-green-600 text-white shadow-md shadow-emerald-200 ring-4 ring-emerald-100" : "bg-gray-200 text-gray-500"
                            }`}>
                            {step > 3 ? <i className="fa-solid fa-check text-xs"></i> : <i className="fa-solid fa-lock text-xs"></i>}


                        </div>
                    </div>

                </div>

            
            <form onSubmit={form.handleSubmit(handleForget)}>
              
                <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel className="block text-sm font-semibold text-gray-700 mb-2" htmlFor={field.name}>
                                Email Address
                            </FieldLabel>
                            <div className='relative'>
                            <Input
                                {...field}
                                id={field.name}
                                aria-invalid={fieldState.invalid}
                                type="email"
                                placeholder='Enter your email address'
                                autoComplete="off"
                                className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl
                                 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                            />
                            <i className='fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'></i>
                            </div>
                            {fieldState.invalid && (
                                <FieldError className="text-red-500 mt-0.5 text-sm">
                                    {fieldState.error?.message}
                                </FieldError>
                            )}
                        </Field>
                    )}
                />
                <Button type='submit'
                    disabled={form.formState.isSubmitting}

                    className='w-full text-md text-white bg-green-600 hover:bg-green-700 py-2 font-semibold
                                                        flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors my-6'>
                    {form.formState.isSubmitting ? (
                        <>

                            <Spinner />

                            <span>Sending Code...</span>
                        </>
                    ) : (
                        <>
                            <span>Send Reset Code</span>
                        </>
                    )}

                </Button>
                <div className='text-center'>
                    <Link href={"/login"} className='inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 font-medium transition-colors'>
                        <i className='fa-solid fa-arrow-left text-xs'></i>Back to Sign In</Link>

                </div>
            </form>


            <div className='text-center mt-8 pt-6 border-t border-gray-100'>
                <p className='text-gray-600'>Remember your password? <Link href={"/login"} className='text-green-600 hover:text-green-700 font-semibold transition-colors'>
                    Sign In</Link></p>
            </div>
        </>
        }


        {step === 2 && <>
            <div className='text-center mb-8'>
                <div className='flex items-center justify-center mb-4'>
                    <span className='text-3xl font-bold text-green-600'>Fresh</span>

                    <span className='text-3xl font-bold text-gray-800'>Cart</span></div>
                <h1 className='text-2xl font-bold text-gray-800 mb-2'>
                    Check Your Email
                </h1>
                <p className='text-gray-600'>Enter the 6-digit code sent to {form.getValues("email")} </p>

                </div>
                <div className='flex items-center justify-center mb-8'>
                    <div className='flex items-center'>

                        <div className='w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
                                     transition-all duration-300 bg-green-600 text-white ring-4 ring-green-100'>
                            <i className="fa-solid fa-check text-xs"></i>
                        </div>
                        <div className='relative w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200 overflow-hidden'>
                            <div className={`absolute top-0 left-0 h-full bg-green-600 transition-all duration-300 ${step > 1 ? "w-full" : "w-0"}`}></div>
                        </div>


                    </div>


                    <div className='flex items-center'>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm
                                     font-semibold transition-all duration-300 ${step >= 2 ? "bg-green-600 text-white shadow-md shadow-emerald-200 ring-4 ring-emerald-100" : "bg-gray-200 text-gray-500"
                            }`}>
                            {step > 2 ? <i className="fa-solid fa-check text-xs"></i> : <i className="fa-solid fa-key text-xs"></i>}
                        </div>
               
                        <div className='relative w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200 overflow-hidden'>
                            <div className={`absolute top-0 left-0 h-full bg-green-600 transition-all duration-300 ${step > 2 ? "w-full" : "w-0"}`}></div>
                        </div>


                    </div>

                    <div className='flex items-center'>
                        <div className={`w-10 h-10 flex items-center justify-center rounded-full 
                                     text-sm font-semibold transition-all duration-300 ${step >= 3 ? "bg-green-600 text-white shadow-md shadow-emerald-200 ring-4 ring-emerald-100" : "bg-gray-200 text-gray-500"
                            }`}>
                            {step > 3 ? <i className="fa-solid fa-check text-xs"></i> : <i className="fa-solid fa-lock text-xs"></i>}


                        </div>
                    </div>

                </div>

        
            <form onSubmit={formVerify.handleSubmit(verifyCode)}>
              

                <Controller
                    name="resetCode"
                    control={formVerify.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel className="block text-sm font-semibold text-gray-700 mb-2" htmlFor={field.name}>
                                Verification Code
                            </FieldLabel>
                            <div className='relative'>
                            <Input
                                {...field}
                                id={field.name}
                                aria-invalid={fieldState.invalid}
                                type="text"
                                placeholder="••••••"
                                autoComplete="off"
                                maxLength={6}
                                className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all text-center text-2xl"
                            />
                            <i className='fa-solid fa-shield-halved absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'></i>
                            </div>
                            {fieldState.invalid && (
                                <FieldError className="text-red-500 mt-0.5 text-sm">
                                    {fieldState.error?.message}
                                </FieldError>
                            )}
                        </Field>
                    )}
                />
                <div className='text-center my-6'>
                    <p className='text-sm text-gray-500'>Didn't receive the code? <button type="button" onClick={handleResendCode} className='text-green-600 hover:text-green-700 font-semibold transition-colors cursor-pointer'>Resend Code</button></p>

                </div>
                <Button type='submit'
                    disabled={formVerify.formState.isSubmitting}

                    className='w-full text-md text-white bg-green-600 hover:bg-green-700 py-2 font-semibold
                flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors'>
                    {formVerify.formState.isSubmitting ? (
                        <>

                            <Spinner />

                            <span>Verifiying Code...</span>
                        </>
                    ) : (
                        <>
                            <span>Verify Code</span>
                        </>
                    )}

                </Button>
            </form>

            <div className='text-center my-6'>
                 <button type='button' onClick={()=>setStep(1)} className='inline-flex items-center gap-2 text-sm text-gray-500
                  hover:text-green-600 font-medium transition-colors cursor-pointer'>
                        <i className='fa-solid fa-arrow-left text-xs'></i>Change email address

               </button>
            </div>

              

        </>}

        {step === 3 && <>
            <div className='text-center mb-8'>
                <div className='flex items-center justify-center mb-4'>
                    <span className='text-3xl font-bold text-green-600'>Fresh</span>

                    <span className='text-3xl font-bold text-gray-800'>Cart</span></div>
                <h1 className='text-2xl font-bold text-gray-800 mb-2'>
                   Create New Password
                </h1>
                <p className='text-gray-600'>Your new password must be different from previous passwords</p>
</div>
                <div className='flex items-center justify-center mb-8'>
                    <div className='flex items-center'>

                        <div className='w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
                                     transition-all duration-300 bg-green-600 text-white ring-4 ring-green-100'>
                            <i className="fa-solid fa-check text-xs"></i>
                        </div>
                        <div className='relative w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200 overflow-hidden'>
                            <div className={`absolute top-0 left-0 h-full bg-green-600 transition-all duration-300 ${step > 1 ? "w-full" : "w-0"}`}></div>
                        </div>


                    </div>


                    <div className='flex items-center'>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm
                                     font-semibold transition-all duration-300 ${step >= 2 ? "bg-green-600 text-white shadow-md shadow-emerald-200 ring-4 ring-emerald-100" : "bg-gray-200 text-gray-500"
                            }`}>
                            {step > 2 ? <i className="fa-solid fa-check text-xs"></i> : <i className="fa-solid fa-key text-xs"></i>}
                        </div>
             
                        <div className='relative w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200 overflow-hidden'>
                            <div className={`absolute top-0 left-0 h-full bg-green-600 transition-all duration-300 ${step > 2 ? "w-full" : "w-0"}`}></div>
                        </div>


                    </div>

                    <div className='flex items-center'>
                        <div className={`w-10 h-10 flex items-center justify-center rounded-full 
                                     text-sm font-semibold transition-all duration-300 ${step >= 3 ? "bg-green-600 text-white shadow-md shadow-emerald-200 ring-4 ring-emerald-100" : "bg-gray-200 text-gray-500"
                            }`}>
                            {step > 3 ? <i className="fa-solid fa-check text-xs"></i> : <i className="fa-solid fa-lock text-xs"></i>}


                        </div>
                    </div>

                </div>

            <form onSubmit={formSettingNew.handleSubmit(newPassSitting)}>
                
                <Controller

                    name="newPassword"
                    control={formSettingNew.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel className='block text-sm font-semibold text-gray-700 mb-2' htmlFor={field.name}>New Password</FieldLabel>
                            <div className='relative'>
                            <Input
                                {...field}
                                id={field.name}
                                aria-invalid={fieldState.invalid}
                                placeholder="Enter new password"
                                type='password'
                                autoComplete="off"
                                className='w-full px-4 py-3 pl-12 pr-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all'

                            />
                            <i className='fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'></i>
                            </div>

                            {fieldState.invalid && <FieldError className='text-red-500 -mt-0.5 text-sm' errors={[fieldState.error]} />}
                        </Field>
                    )
                    } />

                <Controller

                    name="rePassword"
                    control={formSettingNew.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel className='block text-sm font-semibold text-gray-700 mb-2 mt-6' htmlFor={field.name}>Confirm New Password</FieldLabel>
                            <div className='relative'>
                            <Input
                                {...field}
                                id={field.name}
                                aria-invalid={fieldState.invalid}
                                placeholder="Confirm your new password"
                                type='password'
                                autoComplete="off"
                                className='w-full px-4 py-3 pl-12 pr-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all'
                            />
                            <i className='fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'></i>
                            </div>
                            {fieldState.invalid && <FieldError className='text-red-500 -mt-0.5 text-sm' errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                <Button type='submit'
                    disabled={formSettingNew.formState.isSubmitting}

                    className='w-full bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg
                     shadow-lg hover:shadow-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed my-6'>
                    {formSettingNew.formState.isSubmitting ? (
                        <>
                            <Spinner />
                            <span>Resetting Password...</span>
                        </>
                    ) : (
                        <>                           
                            <span>Reset Password</span>
                        </>
                    )}

                </Button>

            </form>
        </>
        }

        {step === 4 && <div className='bg-white rounded-2xl shadow-xl p-8 lg:p-12'>
            <div className='text-center mb-8'>
                <div className='flex items-center justify-center mb-4'>
                    <span className='text-3xl font-bold text-green-600'>
                        Fresh</span>
                    <span className="text-3xl font-bold  text-gray-800">Cart</span>


                </div>

            </div>
            <div className='text-center'>
                <div className='w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto'>
                    <i className="fa-solid fa-check text-3xl text-green-600"></i>
                </div>
                <div>
                    <h2 className='text-2xl font-bold text-gray-800 mb-2'>Password Reset!</h2>
                    <p className='text-gray-600'>Your password has been successfully reset. You can now sign in with your new password.</p>

                </div>
                <div className='w-full bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl my-6'>
                    <Link href={"/login"}>Back to Sign In</Link></div>
            </div>


        </div>}




    
    </>
)
}
