import ForgotPassController from '@/app/_components/ForgotPassController/ForgotPassController';
import ResetPassLeftSide from '@/app/_components/ResetPassLeftSide/ResetPassLeftSide';
import React from 'react'

export default async function ForgetPassword() {



     
    return (
        <>

            <main className='w-[90%] mx-auto py-16 px-4'>
                <div className='flex items-center gap-12'>


                    <section className='w-full lg:w-1/2 max-w-7xl mx-auto hidden lg:block'>
                       <ResetPassLeftSide/>
                    </section>


                    <section className='w-full lg:w-1/2'>
                        <div className='bg-white rounded-2xl shadow-xl p-8 lg:p-12'>
                       

                            

                            <ForgotPassController/>

                            

                        </div>

                    </section>

                </div>

            </main>

        </>
    )
}
