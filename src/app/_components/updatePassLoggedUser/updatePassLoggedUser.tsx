"use client"
import { Controller, useForm } from 'react-hook-form'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod';
import { loggedUserUpdatePasswordSchema, loggedUserUpdatePasswordSchemaType } from '@/schemas/auth.schema';
import { handleUpdateLpggedUserPass } from '@/api/LoggedUserData.type'
import { toast } from 'sonner'
import { Spinner } from '@/components/ui/spinner'


export default function UpdatePassLoggedUser() {

    const form = useForm({
        resolver: zodResolver(loggedUserUpdatePasswordSchema),
        defaultValues: {
            currentPassword: "",
            password: "",
            rePassword: "",
        }
    });

    async function updatePassLoggedUser(data: loggedUserUpdatePasswordSchemaType) {


        try {

            const response = await handleUpdateLpggedUserPass(data);

            if (response.message === "success") {
                toast.success("Password updated successfully", {
                    duration: 2000
                })
            } else {
                toast.error(response.message)
            }
        } catch (error) {
            console.log(await error);

        }
    }
    return (
        <>
            <div className='bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden'>
                <div className='p-6 sm:p-8'>
                    <div className='flex items-center gap-4 mb-6'>


                        <div className='w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center'>
                            <i className='fa-solid fa-lock text-2xl text-amber-600'></i>
                        </div>

                        <div>
                            <h3 className='font-bold text-gray-900'>Change Password</h3>
                            <p className='text-sm text-gray-500'>Update your account password</p>
                        </div>

                    </div>

                    <form onSubmit={form.handleSubmit(updatePassLoggedUser)}>
                        <Controller
                            name="currentPassword"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel className='block text-sm font-medium text-gray-700 mb-2' htmlFor={field.name}>Current Password</FieldLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        aria-invalid={fieldState.invalid}
                                        type='password'
                                        placeholder="Enter your current password"
                                        autoComplete="off"
                                        className='w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all'
                                    />

                                    {fieldState.invalid && <FieldError className='text-red-500 -mt-0.5 text-sm' errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />
                        <Controller
                            name="password"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel className='block text-sm font-medium text-gray-700 mb-2 mt-5' htmlFor={field.name}>New Password</FieldLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        aria-invalid={fieldState.invalid}
                                        type='password'
                                        placeholder="Enter your new password"
                                        autoComplete="off"
                                        className='w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all'
                                    />

                                    {fieldState.invalid && <FieldError className='text-red-500 -mt-0.5 text-sm' errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />
                        <p className='text-xs text-gray-500 mt-1'>Must be at least 6 characters</p>
                        <Controller
                            name="rePassword"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel className='block text-sm font-medium text-gray-700 mb-2 mt-5' htmlFor={field.name}>Confirm New Password</FieldLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        aria-invalid={fieldState.invalid}
                                        type='password'
                                        placeholder="Confirm your new password"
                                        autoComplete="off"
                                        className='w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all'
                                    />

                                    {fieldState.invalid && <FieldError className='text-red-500 -mt-0.5 text-sm' errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <div className='pt-4'>
                            <button
                            disabled={form.formState.isSubmitting}
                             type='submit' className='inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-colors disabled:opacity-50 shadow-lg shadow-amber-600/25 cursor-pointer'>
                                {form.formState.isSubmitting ? (
                                    <>

                                        <Spinner />

                                        <span>Updating Password...</span>
                                    </>
                                ) : (
                                    <>
                                        <i className='fa-solid fa-lock'></i>
                                        Change Password
                                    </>
                                )}

                            </button>
                        </div>


                    </form>

                </div>

            </div>
        </>
    )
}
