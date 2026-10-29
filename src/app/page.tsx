import React from 'react'
import Slider from './_components/Slider/Slider'
import Link from 'next/link'
import { getAllProducts } from '@/api/AllProducts.api';
import SingleCard from './_components/SingleCard/SingleCard';
import SubscribtionButton from './_components/SubscribtionButton/SubscribtionButton';
import CategorySlider from './_components/CategorySlider/CategorySlider';
import { AllProductsType } from '@/types/AllProducts.type';



export default async function page() {

  let data = await getAllProducts();







  return (
    <>

      <Slider></Slider>


      <section className='bg-gray-50 py-8'>
        <div className='w-[95%] mx-auto flex flex-wrap animate-fade-in-down'>

          <div className='w-full md:w-1/2 lg:w-1/4 p-4 pl-0'>
            <div className="inner flex items-center gap-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-4 rounded-xl">

              <div className='flex items-center justify-center bg-blue-50 text-blue-500 w-12 h-12 rounded-full'>
                <i className="fa-solid fa-truck text-xl"></i>
              </div>

              <div>
                <h3 className='text-gray-800 font-semibold text-sm'>Free Shipping</h3>
                <p className='text-gray-500 text-xs'>On orders over 500 EGP</p>
              </div>
            </div>

          </div>

          <div className='w-full md:w-1/2 lg:w-1/4 p-4 px-0'>
            <div className="inner flex items-center gap-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-4 rounded-xl">

              <div className='flex items-center justify-center bg-emerald-50 text-emerald-500 w-12 h-12 rounded-full'>
                <i className="fa-solid fa-shield-halved text-xl"></i>
              </div>

              <div>
                <h3 className='text-gray-800 font-semibold text-sm'>Secure Payment</h3>
                <p className='text-gray-500 text-xs'>100% secure transactions</p>
              </div>
            </div>

          </div>

          <div className='w-full md:w-1/2 lg:w-1/4 p-4 pr-0'>
            <div className="inner flex items-center gap-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-4 rounded-xl">

              <div className='flex items-center justify-center bg-orange-50 text-orange-500 w-12 h-12 rounded-full'>
                <i className="fa-solid fa-arrow-rotate-left text-xl"></i>
              </div>

              <div>
                <h3 className='text-gray-800 font-semibold text-sm'>Easy Returns</h3>
                <p className='text-gray-500 text-xs'>14-day return policy</p>
              </div>

            </div>
          </div>

          <div className='w-full md:w-1/2 lg:w-1/4 p-4 pr-0'>
            <div className="inner flex items-center gap-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-4 rounded-xl">

              <div className='flex items-center justify-center bg-purple-50 text-purple-500 w-12 h-12 rounded-full'>
                <i className="fa-solid fa-headset text-xl"></i>
              </div>

              <div>
                <h3 className='text-gray-800 font-semibold text-sm'>24/7 Support</h3>
                <p className='text-gray-500 text-xs'>Dedicated support team</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className='px-4'>
        <div className='flex flex-col sm:flex-row justify-between sm:items-center mb-8'>
          <div className='flex  items-center gap-3 my-8'>
            <div className='bg-linear-to-b from-emerald-500 to-emerald-700 h-8 w-1.5  rounded-full'></div>
            <h2 className='text-gray-800 text-2xl md:text-3xl font-bold'>
              Shop By <span className='text-emerald-600'>Category</span>
            </h2>

          </div>
          <Link className='flex items-center self-end sm:self-auto text-green-600 hover:text-green-700 font-medium cursor-pointer' href="/categories">
            View All Categories
            <i className="fa-solid fa-arrow-right ml-2"></i>
          </Link>

        </div>

      </section>

      <section>
        <h1 className='font-bold text-center'>
         <CategorySlider/>
        </h1>
      </section>

      <section className='py-10'>
        <div className='w-[95%] mx-auto'>
          <div className='flex flex-col md:flex-row gap-6'>

            <div className='relative w-full bg-linear-to-br from-emerald-500 to-emerald-700 text-white rounded-2xl p-8 overflow-hidden animate-fade-right-left'>
              <div className='absolute top-0 right-0 bg-white/10 w-40 h-40 -translate-y-1/2 translate-x-1/2 rounded-full'></div>
              <div className='absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2'></div>
              <div>


                <div className='relaive z-4'>
                  <span className='bg-white/20 px-3 py-1 text-sm rounded-full'>
                    <span className='mr-2'>🔥</span>
                    <span>Deal of the Day</span>
                  </span>
                </div>

                <h3 className='text-2xl md:text-3xl font-bold my-2'>Fresh Organic Fruits</h3>
                <p className='text-white/80 mb-4'>Get up to 40% off on selected organic fruits</p>

                <div className='flex items-center gap-4 mb-6'>
                  <div className='text-3xl font-bold'>
                    40% OFF
                  </div>
                  <div className='text-white/70 text-sm'>
                    Use code:
                    <span className='text-white font-bold ml-1'>ORGANIC40</span>
                  </div>
                </div>

                <Link href={'/products'} className='inline-flex items-center bg-white text-emerald-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors'>
                  Shop Now
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </Link>
              </div>

            </div>

            <div className='relative w-full bg-linear-to-br from-orange-400 to-rose-500 text-white rounded-2xl p-8 overflow-hidden animate-fade-left-right'>
              <div className='absolute top-0 right-0 bg-white/10 w-40 h-40 -translate-y-1/2 translate-x-1/2 rounded-full'></div>
              <div className='absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2'></div>
              <div>


                <div className='relaive z-4'>
                  <span className='bg-white/20 px-3 py-1 text-sm rounded-full'>
                    <span className='mr-2'>✨</span>
                    <span>New Arrivals</span>
                  </span>
                </div>

                <h3 className='text-2xl md:text-3xl font-bold my-2'>Exotic Vegetables</h3>
                <p className='text-white/80 mb-4'>Discover our latest collection of premium vegetables</p>

                <div className='flex items-center gap-4 mb-6'>
                  <div className='text-3xl font-bold'>
                    25% OFF
                  </div>
                  <div className='text-white/70 text-sm'>
                    Use code:
                    <span className='text-white font-bold'> FRESH25</span>
                  </div>
                </div>

                <Link href={'/products'} className='inline-flex items-center bg-white text-orange-500 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors'>
                  Explore Now
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </Link>
              </div>

            </div>
          </div>

        </div>

      </section>

      <section className='py-10'>
        <div className='w-[95%] mx-auto'>


          <div className='my-8 flex items-center gap-3'>
            <div className='bg-linear-to-b from-emerald-500 to-emerald-700 h-8 w-1.5  rounded-full'></div>
            <h2 className='text-gray-800 text-3xl font-bold'>
              Featured
              <span className='text-emerald-600'>Products</span>
            </h2>
          </div>

          <div className='flex flex-wrap '>
            {data.map((currentProduct: AllProductsType) => <div key={currentProduct.id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5'>


              <div className="inner p-2 sm:p-3">
                <SingleCard currentProduct={currentProduct} />

              </div>

            </div>)
            }
          </div>


        </div>

      </section>

      <section className='bg-linear-to-b from-white to-gray-50 py-16'>
        <div className='w-[95%] mx-auto'>
          <div className="relative">
            <div className='bg-linear-to-br from-emerald-50 via-white to-teal-50 border border-emerald-100/50 shadow-2xl shadow-emerald-500/10 rounded-[2.5rem] overflow-hidden'>

              
              
              <div className='lg:flex gap-8 p-8 lg:p-14'>
                <div className='w-full'>


                  <div className='flex items-center gap-4 mb-6'>
                    <div className='flex items-center justify-center bg-linear-to-br from-emerald-500 to-teal-500 w-14 h-14 rounded-2xl shadow-lg shadow-emerald-500/30'>
                      <i className="fa-solid fa-envelope text-xl"></i>
                    </div>

                    <div>
                      <h3 className='text-emerald-600 text-sm font-semibold uppercase'>Newsletter</h3>
                      <p className='text-gray-500 text-xs'>50,000+ subscribers</p>
                    </div>
                  </div>

                  <div className='mb-6'>
                    <h3 className='text-gray-900 font-bold text-3xl lg:text-4xl'>
                      Get the Freshest Updates
                      <div className='text-emerald-600'>Delivered Free</div>

                    </h3>
                    <p className='text-gray-500 text-lg mt-3'>Weekly recipes, seasonal offers & exclusive member perks.</p>
                  </div>

                  <div className='flex flex-wrap gap-3'>
                    <div className='flex items-center gap-2.5 bg-white/80 border border-emerald-100 px-4 py-2.5 shadow-sm rounded-full'>
                      <div className='flex items-center justify-center bg-emerald-100 w-7 h-7 rounded-full'>
                        <i className="fa-solid fa-leaf text-emerald-600 text-xs"></i>
                      </div>
                      <div className='text-gray-700 text-sm font-medium'>
                        Fresh Picks Weekly
                      </div>
                    </div>

                    <div className='flex items-center gap-2.5 bg-white/80 border border-emerald-100 px-4 py-2.5 shadow-sm rounded-full'>
                      <div className='flex items-center justify-center bg-emerald-100 w-7 h-7 rounded-full'>
                        <i className="fa-solid fa-truck text-emerald-600 text-xs"></i>
                      </div>
                      <div className='text-gray-700 text-sm font-medium'>
                        Free Delivery Codes
                      </div>
                    </div>

                    <div className='flex items-center gap-2.5 bg-white/80 border border-emerald-100 px-4 py-2.5 shadow-sm rounded-full'>
                      <div className='flex items-center justify-center bg-emerald-100 w-7 h-7 rounded-full'>
                        <i className="fa-solid fa-tag text-emerald-600 text-xs"></i>
                      </div>
                      <div className='text-gray-700 text-sm font-medium'>
                        Members-Only Deals
                      </div>
                    </div>

                  </div>

                  <div className='pt-2'>
                    <SubscribtionButton></SubscribtionButton>



                  </div>

                </div>

                <div className="w-full lg:border-l lg:border-emerald-100 lg:pl-8">
                  <div className="relative bg-linear-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-8 overflow-hidden">

                    <div>
                      <div className="inline-block mb-5 bg-emerald-500/20 text-emerald-400 text-xs border border-emerald-500/30 font-semibold px-3 py-1.5 rounded-full">
                        📱 MOBILE APP
                      </div>
                      <h3 className="text-2xl font-bold mb-5">Shop Faster on Our App</h3>
                      <p className="text-gray-400 text-sm mb-5">Get app-exclusive deals & 15% off your first order.</p>
                      <div className="mb-5 pt-2">
                        <div className="flex flex-col gap-3 pt-2">
                          <Link href='/' className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-3 rounded-xl transition-all hover:scale-[1.02]">
                            <i className="fa-brands fa-apple text-xl"></i>
                            <div>
                              <div className="text-[10px] text-gray-400 uppercase">Download on</div>
                              <div className="text-sm font-semibold -mt-0.5">App Store</div>
                            </div>
                          </Link>

                        </div>
                        <div className="flex flex-col gap-3 pt-2">
                          <Link href='/' className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-3 rounded-xl transition-all hover:scale-[1.02]">
                            <i className="fa-brands fa-google-play text-xl"></i>

                            <div>
                              <div className="text-[10px] text-gray-400 uppercase">Get it on</div>
                              <div className="text-sm font-semibold -mt-0.5">Google Play</div>
                            </div>
                          </Link>

                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm pt-2">
                        <span className="text-yellow-400">★★★★★</span>
                        <span className="text-gray-400">4.9 • 100K+ downloads</span>

                      </div>
                    </div>

                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-2xl rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500/20 blur-2xl rounded-full"></div>
                  </div>

                </div>

              </div>

               <div className='absolute top-0 right-0 w-80 h-80 bg-linear-to-br from-emerald-200/40 to-transparent blur-3xl -translate-y-1/2 translate-x-1/4 rounded-full'></div>
              <div className='absolute bottom-0 left-0 w-64 h-64 bg-linear-to-tr from-teal-200/30 to-transparent blur-3xl translate-y-1/2 -translate-x-1/4 rounded-full'></div>
            </div>
          </div>

        </div>



      </section>

    </>
  )
}
