import RightPartImAddress from '@/app/_components/RightPartImAddress/RightPartImAddress'
import SidePartInProfile from '@/app/_components/SidePartInProfile/SidePartInProfile'
import React from 'react'

export default function Address() {

 




    return (
        <>
            <main className='px-4 py-8'>
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-8'>


                    <aside className='w-full lg:w-72'>
                  
                        <SidePartInProfile />
                    </aside>

                    <section className='flex-1 min-w-0'>
             
                              <RightPartImAddress/>

                    </section>

                </div>

            </main>

        </>
    )
}
