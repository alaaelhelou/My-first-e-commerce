"use client"
import React from 'react'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Controller, useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { loggedUserDataSchema, loggedUserDataSchemaType } from '@/schemas/auth.schema'
import { handleUpdateUserData } from '@/api/LoggedUserData.type'
import { toast } from 'sonner'
import { Spinner } from '@/components/ui/spinner'

export default function UpdatingUserData() {
    const form = useForm({
        resolver: zodResolver(loggedUserDataSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        }
    });

    async function updateUserData(data: loggedUserDataSchemaType) {

        try {
            const response = await handleUpdateUserData(data);

            if (response.message === "success") {
                toast.success("Profile Updated successfully", {
                    duration: 2000,
                })
            } else {
                toast.error("Failed to update profile", {
                    duration: 2000,
                })
            }
        } catch (error) {
            toast.error("Failed to update profile", {
                duration: 2000,
            })
        }


    }
    return (
        <>
            <form onSubmit={form.handleSubmit(updateUserData)}>
                <Controller
                    name="name"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel className='block text-sm font-medium text-gray-700 mb-2' htmlFor={field.name}>Full Name</FieldLabel>
                            <Input
                                {...field}
                                id={field.name}
                                aria-invalid={fieldState.invalid}
                                type='text'
                                placeholder="Enter your name"
                                autoComplete="off"
                                className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all'
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
                            <FieldLabel className='block text-sm font-medium text-gray-700 mb-2 mt-5' htmlFor={field.name}>Email Address</FieldLabel>
                            <Input
                                {...field}
                                id={field.name}
                                aria-invalid={fieldState.invalid}
                                type='email'
                                placeholder="Enter your email"
                                autoComplete="off"
                                className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all'
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
                            <FieldLabel className='block text-sm font-medium text-gray-700 mb-2 mt-5' htmlFor={field.name}>Phone Number</FieldLabel>
                            <Input
                                {...field}
                                id={field.name}
                                aria-invalid={fieldState.invalid}
                                type='tel'
                                placeholder="01xxxxxxxxx"
                                autoComplete="off"
                                className='w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all'
                            />

                            {fieldState.invalid && <FieldError className='text-red-500 -mt-0.5 text-sm' errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

                <div className='pt-4 my-5'>
                    <button 
                    disabled={form.formState.isSubmitting}
                    type='submit' className='inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors cursor-pointer disabled:opacity-50 shadow-lg shadow-green-600/25'>

                        {form.formState.isSubmitting ? (
                            <>

                                <Spinner />

                                <span>Saving Data...</span>
                            </>
                        ) : (
                            <>
                                <i className='fa-solid fa-floppy-disk'></i>
                                Save Changes
                            </>
                        )}

                    </button>

                </div>
            </form>
        </>
    )
}
