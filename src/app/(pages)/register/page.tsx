'use client'
import React from 'react'
import img1 from '../../../../public/review-author.png'
import Image from 'next/image'
import { Controller, useForm } from 'react-hook-form'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterSchema, RegisterSchemaType } from '@/schemas/auth.schema'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { Spinner } from "@/components/ui/spinner"

export default function Register() {

    const router = useRouter()

    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            rePassword: "",
            phone: "",
            terms: false
        }
    });

    console.log(form);

    async function handleRegister(data: RegisterSchemaType) {
        console.log('data', data);

       

        try{
        const response = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "content-type": "application/json" }
        })
        const finalResponse = await response.json();
        console.log(finalResponse);

        if(finalResponse.message==="success"){
             await new Promise((resolve) => setTimeout(resolve, 2000));
        toast.success("Account created successfully" , {
            duration : 4000
        })

        router.push("/login")
        }else{
            toast.error(finalResponse.message , {
            duration : 4000
        })
        }
    }catch(error){
        console.log(error);
        
    }

        
       


    }


    const getScore = (p: string) => {
        if (!p) return 0;

        const hasUpper = /[A-Z]/.test(p);
        const hasLower = /[a-z]/.test(p);
        const hasNumber = /[0-9]/.test(p);
        const hasSpecial = /[^a-zA-Z0-9]/.test(p);
        const isAllTypes = hasUpper && hasLower && hasNumber && hasSpecial;

        if (p.length >= 8 && isAllTypes) {
            return 5;
        }

        if (p.length > 8 && (hasNumber || hasSpecial || hasLower || hasUpper)) {
            return 4;
        }

        if (p.length >= 6 || (p.length >= 3 && (hasNumber || hasSpecial)) || p.length >= 8) {
            return 3;
        }

        if (p.length >= 6) {
            return 2;
        }
        return 1;
    };

    const getStrengthData = (score: number) => {
        switch (score) {
            case 0:
                return { label: 'Weak' }
            case 1:
                return { label: "Weak", color: "bg-red-500", text: "text-red-500", width: "w-1/6" };
            case 2:
                return { label: "Weak", color: "bg-red-500", text: "text-red-500", width: "w-2/6" };
            case 3:
                return { label: "Fair", color: "bg-orange-500", text: "text-orange-500", width: "w-3/6" };
            case 4:
                return { label: "Good", color: "bg-blue-600", text: "text-blue-600", width: "w-5/6" };
            case 5:
                return { label: "Strong", color: "bg-green-600", text: "text-green-600", width: "w-full" };
            default:
                return { label: "", color: "bg-gray-200", text: "text-gray-400", width: "w-0" };
        }
    };

    return (
        <>
            <main className='py-10'>


                <div className='flex flex-col lg:flex-row gap-12 p-4'>

                    <div className='w-full lg:w-1/2'>
                        <h1 className='text-4xl font-bold'>Welcome to <span className='text-green-600'>FreshCart</span></h1>
                        <p className='text-xl mt-2 mb-4'>Join thousands of happy customers who enjoy fresh groceries delivered right to their doorstep.</p>
                        <ul>
                            <li className='flex items-center gap-4 my-8'>
                                <div className='flex justify-center size-12 items-center text-lg bg-green-200 text-green-600 rounded-full'>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <div>
                                    <h2 className='text-lg font-semibold'>Premium Quality</h2>
                                    <p className='text-gray-600'>Premium quality products sourced from trusted suppliers.</p>
                                </div>

                            </li>
                            <li className='flex items-center gap-4 my-8'>
                                <div className='flex justify-center size-12 items-center text-lg bg-green-200 text-green-600 rounded-full'>
                                    <i className="fa-solid fa-truck-fast"></i>
                                </div>
                                <div>
                                    <h2 className='text-lg font-semibold'>Fast Delivery</h2>
                                    <p className='text-gray-600'>Same-day delivery available in most areas</p>
                                </div>

                            </li>
                            <li className='flex items-center gap-4 my-8'>
                                <div className='flex justify-center size-12 items-center text-lg bg-green-200 text-green-600 rounded-full'>
                                    <i className="fa-solid fa-shield-halved"></i>
                                </div>
                                <div>
                                    <h2 className='text-lg font-semibold'>Secure Shopping</h2>
                                    <p className='text-gray-600'>Your data and payments are completely secure</p>
                                </div>

                            </li>

                        </ul>

                        <div className='bg-white shadow-sm rounded-md p-4'>
                            <div className='flex items-center gap-4 mb-4'>

                                <Image height='512' width='512' className='size-12 rounded-full' src={img1} alt='auther' />
                                <div>
                                    <h3>
                                        Sarah Johnson
                                    </h3>
                                    <div>
                                        <i className="fa-solid fa-star text-yellow-300"></i>
                                        <i className="fa-solid fa-star text-yellow-300"></i>
                                        <i className="fa-solid fa-star text-yellow-300"></i>
                                        <i className="fa-solid fa-star text-yellow-300"></i>
                                        <i className="fa-solid fa-star text-yellow-300"></i>
                                    </div>
                                </div>
                            </div>
                            <p className='italic text-gray-600'>
                                "FreshCart has transformed my shopping experience. The quality of the products is outstanding, and the delivery is always on time. Highly recommend!"
                            </p>
                        </div>
                    </div>

                    <section className='w-full lg:w-1/2'>
                        <div className="bg-white px-6 py-10 rounded-2xl shadow-lg">
                            <form onSubmit={form.handleSubmit(handleRegister)}>


                                <h2 className='text-3xl text-center font-semibold mb-2'> Create Your Account</h2>
                                <p className='text-center'>Start your fresh journey with us today</p>

                                <div className='flex gap-2 my-10'>

                                    <Button className='w-1/2 bg-transparent hover:bg-gray-100 flex justify-center items-center border border-gray-300 rounded-md disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed' variant="outline">
                                        <i className="fa-brands fa-google me-2 text-red-600"></i>
                                        <span>Google</span>
                                    </Button>
                                    <Button className='w-1/2 bg-transparent hover:bg-gray-100 flex justify-center items-center border border-gray-300 rounded-md disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed' variant='outline'>
                                        <i className="fa-brands fa-facebook me-2 text-blue-600"></i>
                                        <span>Facebook</span>
                                    </Button>
                                </div>
                                <div className='flex items-center justify-center'>

                                    <div className='w-full h-0.5 bg-gray-300/30 my-4'></div>
                                    <div className='m-4'>or</div>
                                    <div className='w-full h-0.5 bg-gray-300/30 my-4'></div>
                                </div>



                                <Controller
                                    name="name"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel className='font-normal' htmlFor={field.name}>Name*</FieldLabel>
                                            <Input
                                                {...field}
                                                id={field.name}
                                                aria-invalid={fieldState.invalid}
                                                type='text'
                                                placeholder="Ali"
                                                autoComplete="off"
                                                className='border border-gray-300 px-3 py-2 focus-visible:border-green-600 focus-visible:ring-0 aria-invalid:ring-0'
                                            />

                                            {fieldState.invalid && <FieldError className='text-red-500 -mt-0.5 text-sm' errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />

                                <Controller

                                    name="email"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel className='font-normal mt-7' htmlFor={field.name}>Email*</FieldLabel>
                                            <Input
                                                {...field}
                                                id={field.name}
                                                aria-invalid={fieldState.invalid}
                                                placeholder="ali@example.com"
                                                type='email'
                                                autoComplete="off"
                                                className='border border-gray-300 px-3 py-2 focus-visible:border-green-600 focus-visible:ring-0 aria-invalid:ring-0'
                                            />

                                            {fieldState.invalid && <FieldError className='text-red-500 -mt-0.5 text-sm' errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />

                                <Controller

                                    name="password"
                                    control={form.control}
                                    render={({ field, fieldState }) => {
                                        const val = field.value;
                                        const score = getScore(val);
                                        const strength = getStrengthData(score);
                                        return (

                                            <Field data-invalid={fieldState.invalid}>
                                                <FieldLabel className='font-normal mt-7' htmlFor={field.name}>Password*</FieldLabel>
                                                <Input
                                                    {...field}
                                                    id={field.name}
                                                    aria-invalid={fieldState.invalid}
                                                    placeholder="create a strong password"
                                                    type='password'
                                                    autoComplete="off"
                                                    className='border border-gray-300 px-3 py-2 focus-visible:border-green-600 focus-visible:ring-0 aria-invalid:ring-0'


                                                />

                                                <div className="mt-2">
                                                    <div className="flex justify-between items-center">

                                                        <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden mr-3">
                                                            <div className={`h-full transition-all duration-300 ${strength.color} ${strength.width}`} />
                                                        </div>

                                                        <span className={`text-md`}>
                                                            {strength.label}
                                                        </span>
                                                    </div>

                                                    <p className="text-xs text-gray-500">
                                                        Must be at least 8 characters with numbers and symbols
                                                    </p>
                                                </div>








                                                {fieldState.invalid && <FieldError className='text-red-500 -mt-0.5 text-sm' errors={[fieldState.error]} />}
                                            </Field>
                                        );
                                    }} />

                                <Controller

                                    name="rePassword"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel className='font-normal mt-7' htmlFor={field.name}>Confirm Password*</FieldLabel>
                                            <Input
                                                {...field}
                                                id={field.name}
                                                aria-invalid={fieldState.invalid}
                                                placeholder="confirm your password"
                                                type='password'
                                                autoComplete="off"
                                                className='border border-gray-300 px-3 py-2 focus-visible:border-green-600 focus-visible:ring-0 aria-invalid:ring-0'
                                            />

                                            {fieldState.invalid && <FieldError className='text-red-500 -mt-0.5 text-sm' errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />

                                <Controller

                                    name="phone"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel className='font-normal mt-7' htmlFor={field.name}>Phone Number*</FieldLabel>
                                            <Input
                                                {...field}
                                                id={field.name}
                                                aria-invalid={fieldState.invalid}
                                                placeholder="+1 234 567 8900"
                                                type='tel'
                                                autoComplete="off"
                                                className='border border-gray-300 px-3 py-2 focus-visible:border-green-600 focus-visible:ring-0 aria-invalid:ring-0'
                                            />

                                            {fieldState.invalid && <FieldError className='text-red-500 -mt-0.5 text-sm' errors={[fieldState.error]} />}
                                        </Field>
                                    )}
                                />




                                <Controller

                                    name="terms"
                                    control={form.control}
                                    defaultValue={false}
                                    render={({ field, fieldState }) => (
                                        <div className="my-7"> <div className="flex items-center gap-2">
                                            <Checkbox
                                                id="terms"
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                className="border border-gray-400 bg-white data-[checked]:bg-green-600 data-[checked]:border-green-600 hover:data-[checked]:bg-green-700 hover:data-[checked]:border-green-700 text-white"
                                            />
                                            <label htmlFor="terms" className="text-sm cursor-pointer ms-2 select-none"> I agree to the <Link className='text-green-600 hover:underline' href={"/termsOf"}>Terms of Service</Link>  and<Link className='text-green-600 hover:underline' href={"/privacy"}> Privacy Policy *</Link> </label> </div>


                                            {fieldState.error && (
                                                <p className="text-red-600 text-xs font-medium mt-1">
                                                    {fieldState.error.message}
                                                </p>
                                            )}

                                        </div>

                                    )} />


                                <Button type='submit'
                                    disabled={form.formState.isSubmitting}

                                    className='w-full text-md text-white bg-green-600 hover:bg-green-700 py-2 font-semibold
                                    flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors'>
                                    {form.formState.isSubmitting ? (
                                        <>
                                          
                                            <Spinner />
                                            
                                            <span>Creating Account...</span>
                                        </>
                                    ) : (
                                        <>
                                            <i className="fa-solid fa-user-plus"></i>
                                            <span>Create My Account</span>
                                        </>
                                    )}

                                </Button>
                            </form>

                            <p className='text-center border-t pt-10 border-gray-300/30 my-4'>
                                Already have an account? <Link className='text-green-600 hover:underline font-medium' href={'/login'}>Sign In</Link></p>
                        </div>


                    </section>


                </div>




            </main>
        </>
    )
}
