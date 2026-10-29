import SidePartInProfile from '@/app/_components/SidePartInProfile/SidePartInProfile'
import React from 'react'
import UpdatePassLoggedUser from '@/app/_components/updatePassLoggedUser/updatePassLoggedUser'
import UpdatingUserData from '@/app/_components/UpdatingUserData/UpdatingUserData'


export default function Settings() {
   

    return (
        <>
            <main className='px-4 py-8'>
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-8'>


                    <aside className='w-full lg:w-1/4'>
                        <SidePartInProfile />
                    </aside>




                    <div className='w-full lg:w-3/4'>
                        <section className='mb-6'>
                            <div>


                                <div className='mb-6'>
                                    <h2 className='text-xl font-bold text-gray-900'>Account Settings</h2>
                                    <p className='text-gray-500 text-sm mt-1'>Update your profile information and change your password</p>

                                </div>

                                <div className='w-full bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden'>

                                    <div className='p-6 sm:p-8 border-b border-gray-100'>


                                        <div className='flex items-center gap-4 mb-6'>

                                            <div className='w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center'>
                                                <i className='fa-solid fa-user text-2xl text-green-600'></i>
                                            </div>

                                            <div className='font-bold text-gray-900'>
                                                <h3 className='font-bold text-gray-900'>Profile Information</h3>
                                                <p className='text-sm text-gray-500'>Update your personal details</p>

                                            </div>

                                        </div>

                                        <UpdatingUserData/>



                                    </div>

                                    <div className='p-6 sm:p-8 bg-gray-50'>
                                        <h3 className="font-bold text-gray-900 mb-4">Account Information</h3>
                                        <div className='text-sm'>
                                            <div className='flex items-center justify-between mb-3'>
                                                <span className='text-gray-500'>User ID</span>
                                                <span className='font-mono text-gray-700'>—</span>

                                            </div>
                                            <div className='flex items-center justify-between'>
                                                <span className='text-gray-500'>Role</span>
                                                <span className='px-3 py-1 rounded-lg bg-green-100 text-green-700 font-medium'>User</span>

                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </section>

                        <section>

                            <UpdatePassLoggedUser />

                        </section>

                    </div>

                </div>

            </main>

        </>
    )
}
