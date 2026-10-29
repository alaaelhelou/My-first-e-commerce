import Link from 'next/link'
import React from 'react'

export default function Privacy() {
    return (
        <>
            <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>


                <div className='bg-gradient-to-br from-green-600 via-green-500 to-green-400 text-white'>
                    <div className='px-4 py-12 sm:py-16'>


                        <div className='flex items-center gap-2 text-sm text-white/70 mb-8'>
                            <Link href={"/"} className='hover:text-white transition-colors duration-200'>Home</Link>
                            <span className='text-white/40'>/</span>
                            <span className='text-white font-medium'>Privacy Policy</span>
                        </div>

                        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-6'>


                            <div className='w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center
                     justify-center shadow-2xl shadow-green-900/30 ring-1 ring-white/30'>
                                <i className='fa-solid fa-shield-halved text-4xl'></i>
                            </div>


                            <div>
                                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>Privacy Policy</h1>
                                <p className='text-white/80 mt-2 text-lg'>Last updated: February 2026</p>
                            </div>
                        </div>
                    </div>
                </div>

                <main className='px-4 py-12'>


                    <div className='bg-gradient-to-r from-green-50 to-green-100/50 border border-green-200 rounded-3xl p-6 sm:p-8 mb-12 shadow-sm'>
                        <div className='flex items-start gap-4'>
                            <div className='w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/25'>
                                <i className='fa-solid fa-shield-halved text-xl text-white'></i>
                            </div>
                            <div>
                                <h2 className='text-lg font-bold text-green-900 mb-2'>
                                    Your Privacy Matters
                                </h2>
                                <p className='text-green-800'>
                                    This Privacy Policy describes how FreshCart collects, uses, and protects your personal information when you use our services. We are committed to ensuring that your privacy is protected.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className='lg:flex lg:flex-wrap'>

                        <div className='w-full lg:w-1/2'>
                            <div className="inner lg:p-8">
                                <div className='bg-white rounded-3xl border border-gray-100 p-6 sm:p-8
                 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group'>
                                    <div className='flex items-start gap-4 mb-5'>


                                        <div className='w-12 h-12 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center
                         group-hover:from-green-500 group-hover:to-green-400 transition-all duration-300'>
                                            <i className='fa-solid fa-database text-xl text-green-600 group-hover:text-white transition-colors duration-300'></i>
                                        </div>
                                        <div>
                                            <span className='text-xs font-bold text-green-600 uppercase'>Article 1</span>
                                            <h2 className='text-xl font-bold text-gray-900'>Information We Collect</h2>
                                        </div>

                                    </div>

                                    <div className='mb-3'>
                                        <div className='flex items-start gap-3 text-gray-600'>
                                            <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5'>1.1</span>
                                            <p className='text-sm'>
                                                <span className='text-gray-800 font-bold'>Personal Data: </span>
                                                Name, email address, phone number, and shipping address.
                                            </p>

                                        </div>
                                    </div>

                                    <div className='mb-3'>
                                        <div className='flex items-start gap-3 text-gray-600'>
                                            <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5'>1.2</span>
                                            <p className='text-sm'>
                                                <span className='text-gray-800 font-bold'>Payment Data: </span>
                                                Credit card information processed securely through our payment providers.
                                            </p>

                                        </div>
                                    </div>

                                    <div className='mb-3'>
                                        <div className='flex items-start gap-3 text-gray-600'>
                                            <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5'>1.3</span>
                                            <p className='text-sm'>
                                                <span className='text-gray-800 font-bold'>Technical Data: </span>

                                                IP address, browser type, device information, and access times.
                                            </p>

                                        </div>
                                    </div>

                                    <div className='mb-3'>
                                        <div className='flex items-start gap-3 text-gray-600'>
                                            <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5'>1.4</span>
                                            <p className='text-sm'>
                                                <span className='text-gray-800 font-bold'>Usage Data: </span>
                                                Pages viewed, products browsed, and actions taken within our platform.
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='w-full lg:w-1/2'>
                            <div className="inner lg:p-8">
                                <div className=' bg-white rounded-3xl border border-gray-100 p-6 sm:p-8
                 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group'>
                                    <div className='flex items-start gap-4 mb-5'>


                                        <div className='w-12 h-12 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center
                         group-hover:from-green-500 group-hover:to-green-400 transition-all duration-300'>
                                            <i className='fa-solid fa-user-shield text-xl text-green-600 group-hover:text-white transition-colors duration-300'></i>
                                        </div>
                                        <div>
                                            <span className='text-xs font-bold text-green-600 uppercase'>Article 2</span>
                                            <h2 className='text-xl font-bold text-gray-900'>How We Use Your Information</h2>
                                        </div>

                                    </div>

                                    <div className='mb-3'>
                                        <div className='flex items-start gap-3 text-gray-600'>
                                            <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5'>2.1</span>
                                            <p className='text-sm'>
                                                To process and fulfill your orders.
                                            </p>

                                        </div>
                                    </div>

                                    <div className='mb-3'>
                                        <div className='flex items-start gap-3 text-gray-600'>
                                            <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5'>2.2</span>
                                            <p className='text-sm'>

                                                To send order confirmations and shipping updates.
                                            </p>

                                        </div>
                                    </div>

                                    <div className='mb-3'>
                                        <div className='flex items-start gap-3 text-gray-600'>
                                            <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5'>2.3</span>
                                            <p className='text-sm'>
                                                To provide customer support and respond to inquiries.
                                            </p>
                                        </div>
                                    </div>

                                    <div className='mb-3'>
                                        <div className='flex items-start gap-3 text-gray-600'>
                                            <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5'>2.4</span>
                                            <p className='text-sm'>
                                                To improve our products, services, and user experience.
                                            </p>

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className='w-full lg:w-1/2'>
                            <div className="inner lg:p-8">
                                <div className='bg-white rounded-3xl border border-gray-100 p-6 sm:p-8
                 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group'>
                                    <div className='flex items-start gap-4 mb-5'>


                                        <div className='w-12 h-12 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center
                         group-hover:from-green-500 group-hover:to-green-400 transition-all duration-300'>
                                            <i className='fa-solid fa-lock text-xl text-green-600 group-hover:text-white transition-colors duration-300'></i>
                                        </div>
                                        <div>
                                            <span className='text-xs font-bold text-green-600 uppercase'>Article 3</span>
                                            <h2 className='text-xl font-bold text-gray-900'>Data Protection</h2>
                                        </div>

                                    </div>

                                    <div className='mb-3'>
                                        <div className='flex items-start gap-3 text-gray-600'>
                                            <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5'>3.1</span>
                                            <p className='text-sm'>
                                                We implement industry-standard encryption (SSL/TLS) for all data transfers.
                                            </p>

                                        </div>
                                    </div>

                                    <div className='mb-3'>
                                        <div className='flex items-start gap-3 text-gray-600'>
                                            <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5'>3.2</span>
                                            <p className='text-sm'>

                                                Payment information is processed by PCI-compliant payment providers.
                                            </p>

                                        </div>
                                    </div>

                                    <div className='mb-3'>
                                        <div className='flex items-start gap-3 text-gray-600'>
                                            <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5'>3.3</span>
                                            <p className='text-sm'>
                                                We conduct regular security audits and vulnerability assessments.
                                            </p>
                                        </div>
                                    </div>

                                   

                                </div>
                            </div>
                        </div>

                        <div className='w-full lg:w-1/2'>
                        <div className="inner lg:p-8">
                             <div className=' bg-white rounded-3xl border border-gray-100 p-6 sm:p-8
                 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group'>
                            <div className='flex items-start gap-4 mb-5'>


                                <div className='w-12 h-12 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center
                         group-hover:from-green-500 group-hover:to-green-400 transition-all duration-300'>
                                    <i className='fa-solid fa-share-nodes text-xl text-green-600 group-hover:text-white transition-colors duration-300'></i>
                                </div>
                                <div>
                                    <span className='text-xs font-bold text-green-600 uppercase'>Article 4</span>
                                    <h2 className='text-xl font-bold text-gray-900'>Information Sharing</h2>
                                </div>

                            </div>

                            <div className='mb-3'>
                                <div className='flex items-start gap-3 text-gray-600'>
                                    <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5'>4.1</span>
                                    <p className='text-sm'>

                                        We do not sell, trade, or rent your personal information to third parties.
                                    </p>

                                </div>
                            </div>

                            <div className='mb-3'>
                                <div className='flex items-start gap-3 text-gray-600'>
                                    <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5'>4.2</span>
                                    <p className='text-sm'>


                                        We may share data with trusted service providers who assist in our operations.
                                    </p>

                                </div>
                            </div>

                           

                            <div className='mb-3'>
                                <div className='flex items-start gap-3 text-gray-600'>
                                    <span className='text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md mt-0.5'>4.3</span>
                                    <p className='text-sm'>
                                        Access to personal data is restricted to authorized personnel only.
                                    </p>

                                </div>
                            </div>

                        </div>
                        </div>

                        </div>
                        <div className='w-full lg:w-1/2'>
                        <div className="inner lg:p-8">
                             <div className=' bg-white rounded-3xl border border-gray-100 p-6 sm:p-8
                 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group'>


                            <div className='flex items-start gap-4 mb-5'>


                                <div className='w-12 h-12 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center
                         group-hover:from-green-500 group-hover:to-green-400 transition-all duration-300'>
                                    <i className='fa-solid fa-clock text-xl text-green-600 group-hover:text-white transition-colors duration-300'></i>
                                </div>
                                <div>
                                    <span className='text-xs font-bold text-green-600 uppercase'>Article 5</span>
                                    <h2 className='text-xl font-bold text-gray-900'>Data Retention</h2>
                                </div>

                            </div>
                            <p className='text-sm text-gray-600'>
                                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy.Account data is deleted within 30 days of account closure upon request.
                            </p>


                        </div>
                        </div>

                        </div>

                        <div className='w-full lg:w-1/2'>
                        <div className="inner lg:p-8">
                             <div className=' bg-white rounded-3xl border border-gray-100 p-6 sm:p-8
                 shadow-sm hover:shadow-lg hover:border-green-100 transition-all duration-300 group'>


                            <div className='flex items-start gap-4 mb-5'>


                                <div className='w-12 h-12 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center
                         group-hover:from-green-500 group-hover:to-green-400 transition-all duration-300'>
                                    <i className='fa-solid fa-envelope text-xl text-green-600 group-hover:text-white transition-colors duration-300'></i>
                                </div>
                                <div>
                                    <span className='text-xs font-bold text-green-600 uppercase'>Article 6</span>
                                    <h2 className='text-xl font-bold text-gray-900'>Contact Us</h2>
                                </div>

                            </div>
                            <p className='text-sm text-gray-600'>
                                For questions about this Privacy Policy or to exercise your rights, contact our Data Protection Officer at       
                                <a href="mailto:privacy@freshcart.com" className='text-green-600 hover:text-green-700 font-semibold hover:underline'>privacy@freshcart.com</a>                
                            </p>


                        </div>
                        </div>

                        </div>

                    </div>

                    <div className='mt-12 pt-8 border-t border-gray-200'>
                        <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
                            <Link href={"/"} className='inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100
                             text-gray-700 hover:bg-gray-200 font-medium transition-all duration-200'>
                                <i className='fa-solid fa-arrow-left text-sm'></i>
                                Back to Home
                             </Link>

                             <Link href={"/terms"} className='inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white hover:bg-green-600 font-medium shadow-lg shadow-green-500/25 transition-all duration-200'>
                             View Terms of Service
                             <span className='text-lg'>
                                →</span></Link>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
