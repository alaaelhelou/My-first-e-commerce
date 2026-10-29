'use client'
import { Input } from "@/components/ui/input"
import {
    Field,
    FieldDescription,
   
} from "@/components/ui/field"

import React, { useState } from 'react'


export default function SubscribtionButton() {
    const [subscribed, setSubscribed] = useState(false)

    const [email, setEmail] = useState('')


    const handleSubscribe = (e : React.SubmitEvent<HTMLFormElement>) => {
      
        
        e.preventDefault()
        if (!email) return

        setSubscribed(true)

       
        setTimeout(() => {
            setSubscribed(false)
            setEmail('')
        }, 2000)
    }

    return (
        <>
            <div className="w-full">


                <form onSubmit={handleSubscribe} className="pt-2">
                    <Field className="w-full">

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className='text-gray-800 bg-white border-2 border-gray-200 rounded-2xl
                       focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all placeholder-gray-400 shadow-sm p-6'
                                required
                            />
                            <button
                                type="submit"
                                className={`${subscribed
                                    ? 'group flex items-center justify-center font-semibold bg-emerald-500 text-white gap-3 px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg whitespace-nowrap '
                                    : 'group flex items-center justify-center font-semibold bg-linear-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:scale-[1.02] gap-3 px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg'
                                    }`}
                            >
                                {subscribed ? <>
                                    <i className="fa-solid fa-circle-check"></i>You're In! </> : <>Subscribe <i className="fa-solid fa-arrow-right"></i>
                                </>}
                            </button>
                        </div>
                        <FieldDescription className="text-gray-400 text-xs mt-3 pl-1">
                            ✨ Unsubscribe anytime. No spam, ever.
                        </FieldDescription>
                    </Field>
                </form>


            </div>

        
        </>
    )
}
