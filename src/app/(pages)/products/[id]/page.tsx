import Link from 'next/link';
import { CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { getAllProducts } from '@/api/AllProducts.api';
import 'swiper/css';
import LikedProducts from '@/app/_components/LikedProducts/LikedProducts';
import ProductDetailsBut from '@/app/_components/ProductDetailsBut/ProductDetailsBut';
import { Review, SpecificProductType } from '@/types/SpecificProduct.type';
import Image from 'next/image';
import { AllProductsArrayType } from '@/types/AllProducts.type';
import { AllWishlistType, WishlistDataType } from '@/types/WishlistProducts';
import { handleGetUserWishlist } from '@/api/Wishlist.api';
import AddProductToWishlist from '@/app/_components/AddProductToWishlist/AddProductToWishlist';
import AddProductTCartThroughDetails from '@/app/_components/AddProductTCartThroughDetails/AddProductTCartThroughDetails';
import ProductRating from '@/app/_components/ProductRating/ProductRating';




export default async function ProductDetails({ params }: { params: string }) {

    console.log(await params ,"iddddParamss");
    



    let { id } : {id : string}= await params;

    console.log(id , "idd");

    let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`)
    
    

    let { data } : {data : SpecificProductType} = await response.json();


    let allData : AllProductsArrayType = await getAllProducts();

    

     const responseWishlist : AllWishlistType = await handleGetUserWishlist();
     const compareIds = responseWishlist?.data?.some((item : WishlistDataType)=>item._id === id)
     
     

 





    const rateOne = data.reviews.filter((item: Review) => item.rating == 1).length;

    const rateTwo = data.reviews.filter((item: Review) => item.rating == 2).length;

    const rateThree = data.reviews.filter((item: Review) => item.rating == 3).length;

    const rateFour = data.reviews.filter((item: Review) => item.rating == 4).length;

    const rateFive = data.reviews.filter((item: Review) => item.rating == 5).length;

    const percentageOne = Math.floor((rateOne / data.reviews.length) * 100);
    const percentageTwo = Math.floor((rateTwo / data.reviews.length) * 100);
    const percentageThree = Math.floor((rateThree / data.reviews.length) * 100);
    const percentageFour = Math.floor((rateFour / data.reviews.length) * 100);
    const percentageFive = Math.floor((rateFive / data.reviews.length) * 100);







    return (
        <>
            <div className='p-4'>
                <ul className='flex items-center text-sm gap-1 font-medium'>
                    <li className='flex items-center gap-1.5'>
                        <Link href={'/'} className='text-gray-500 hover:text-green-600'><i className="fa-solid fa-house"></i> Home</Link>
                        <i className="fa-solid fa-chevron-right text-xs mx-2 text-gray-500 hover:text-green-600"></i>
                    </li>
                    <li>
                        <Link href={'/'} className='text-gray-500 hover:text-green-600'>{data.category.name}</Link>
                        <i className="fa-solid fa-chevron-right text-xs mx-2 text-gray-500 hover:text-green-600"></i>
                    </li>
                    <li>
                        <Link href={'/'} className='text-gray-500 hover:text-green-600'>{data.subcategory[0].name}</Link>
                        <i className="fa-solid fa-chevron-right text-xs mx-2 text-gray-500 hover:text-green-600"></i>
                    </li>
                    <li>
                        <Link href={'/'} className=' text-gray-900'>{data.title}</Link>
                    </li>
                </ul>
            </div>
            <section className='flex flex-col lg:flex-row py-6 px-4 gap-8'>
                <div className='lg:w-1/4 '>
                    <div className=' bg-white rounded-xl shadow-sm p-4 lg:sticky top-12'>
                        <div className="inner flex items-center justify-center ">
                            <Carousel className="w-full max-w-[12rem] sm:max-w-xs">
                                <CarouselContent>
                                    {data.images.map((imgUrl : string, index : number) => (
                                        <CarouselItem key={index}>
                                            <div className="p-1">
                                                <div className='w-full  overflow-hidden"'>
                                                    <CardContent className="flex aspect-square items-center justify-center">
                                                        <div className='relative w-full aspect-4/5'>
                                                            <Image fill className='object-contain' src={imgUrl} alt={data.title} />
                                                        </div>
                                                    </CardContent>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                        <div className="small-photos flex">
                            {data.images.map((currentImage: string, index: number) => <div key={index} className="photo w-1/4">
                            <div className='relative w-full aspect-4/5'>
                                <Image fill src={currentImage} alt={data.title} />
                            </div>
                            
                            </div>)}
                        </div>

                    </div>
                </div>
                <div className='lg:w-3/4 bg-white rounded-xl shadow-sm p-6'>
                    <div className="inner">
                        <div className='flex flex-wrap gap-2 mb-4'>
                            <Link className='text-xs px-3 py-1.5 bg-green-50 text-green-700 hover:bg-green-100 font-medium rounded-full' href={'/'}>{data.category.name}</Link>
                            <span className='text-xs px-3 py-1.5 bg-gray-100 text-gray-700 font-medium rounded-full'>{data.brand.name}</span>
                        </div>
                        <h1 className='text-gray-900 text-2xl lg:text-3xl font-bold mb-3'>{data.title}</h1>

                        <div className='text-[#FDC700] mb-4'>

                            <ProductRating ratingProduct = {data.ratingsAverage} ratingQuanProduct = {data.ratingsQuantity} />

                        </div>


                        {allData.map((item)=> <div key={item._id}> 
                             {item._id === data._id ? item.priceAfterDiscount ?  
                        <div  className='flex items-center flex-wrap gap-3 mb-6'>
                            <span className='text-3xl font-bold text-gray-900'>{item.priceAfterDiscount}</span>
                            <span className='text-lg text-gray-400 line-through'>{data.price}</span>
                            <span className='bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium'>Save {Math.round(((data.price - item.priceAfterDiscount) / data.price) * 100)}%</span>
                        </div> : <div
                     className='text-gray-800 font-bold text-lg'>
                                <h2 className='text-gray-900 text-3xl font-bold mb-6'>{data.price} EGP</h2>
                            </div> : '' }
                        </div>) 
}
                            

                        <div className='flex items-center mb-6'>
                            <span className='flex items-center gap-1.5 text-sm rounded-full bg-green-50 text-green-700 px-3 py-1.5 font-medium'>
                                <span className='w-2 h-2 rounded-full bg-green-500'></span>
                                In Stock
                            </span>
                        </div>

                        <p className='text-gray-600 border-t border-gray-100 pt-5 mb-6'>Material Polyester Blend Colour Name Multicolour Department Women</p>

                        <label htmlFor='quantity' className='text-sm font-medium text-gray-700'>Quantity</label>
                        <ProductDetailsBut data={data} allData = {allData} />


                        <div className='flex flex-col sm:flex-row gap-3 mb-6'>
                       
                            <AddProductTCartThroughDetails productId={data._id} />
                            <button className='flex items-center justify-center gap-2 w-full bg-gray-900 text-white cursor-pointer
                             py-4 px-6 rounded-xl font-medium hover:bg-gray-800 active:scale-[0.98] transition-all'>
                                <i className="fa-solid fa-bolt"></i>
                                Buy Now
                            </button>
                        </div>

                        <div className='flex gap-3 mb-6'>
                            
                         <AddProductToWishlist productId={data._id} compareIds={compareIds}/> 
                           
                            <button className='border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-xl
                             hover:border-green-300 hover:text-green-600 cursor-pointer'>
                                <i className="fa-solid fa-share-nodes"></i>
                            </button>
                        </div>

                        <div className='flex sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-4 border-t border-gray-100 pt-6'>

                            <div className='flex items-center gap-3 w-full'>
                                <div className='flex items-center justify-center h-10 w-10 bg-green-100 text-green-600 rounded-full'>
                                    <i className="fa-solid fa-truck-fast"></i>
                                </div>
                                <div>
                                    <h5 className='font-medium text-gray-900 text-sm'>Free Delivery</h5>
                                    <p className='text-xs text-gray-500'>Orders over $50</p>
                                </div>

                            </div>

                            <div className='flex items-center gap-3 w-full'>
                                <div className='flex items-center justify-center h-10 w-10 bg-green-100 text-green-600 rounded-full'>
                                    <i className="fa-solid fa-arrow-rotate-left"></i>
                                </div>
                                <div>
                                    <h5 className='font-medium text-gray-900 text-sm'>30 Days Return</h5>
                                    <p className='text-xs text-gray-500'>Money back</p>
                                </div>

                            </div>


                            <div className='flex items-center gap-3 w-full'>
                                <div className='flex items-center justify-center h-10 w-10 bg-green-100 text-green-600 rounded-full'>
                                    <i className="fa-solid fa-shield-halved"></i>
                                </div>
                                <div>
                                    <h5 className='font-medium text-gray-900 text-sm'>Secure Payment</h5>
                                    <p className='text-xs text-gray-500'>100% Protected</p>
                                </div>

                            </div>
                        </div>



                    </div>

                </div>


            </section>

            <section className='p-4'>

                <div className='rounded-lg shadow-sm overflow-hidden'>



                    <Tabs key='products' defaultValue="products" className="w-full">

                        <TabsList variant="line" className="flex overflow-x-auto scrollbar-hide h-auto bg-transparent p-0 justify-start border-b border-gray-200 rounded-none w-full">

                            <TabsTrigger className='flex items-center gap-2 font-medium text-md cursor-pointer 
                            ' value="products"><i className="fa-solid fa-box text-sm"></i> Product Details</TabsTrigger>
                            <TabsTrigger className='flex items-center gap-2 font-medium text-md cursor-pointer
                            ' value="reviews"><i className="fa-solid fa-star text-sm"></i> Reviews ({data.ratingsQuantity})</TabsTrigger>
                            <TabsTrigger className='flex items-center gap-2 font-medium text-md cursor-pointer
                            ' value="shipping"><i className="fa-solid fa-truck text-sm"></i> Shipping & Returns</TabsTrigger>

                        </TabsList>


                        <TabsContent value="products">
                            <div className='p-6'>
                                <CardHeader className='mb-6'>
                                    <CardTitle className='text-gray-900 font-semibold text-lg mb-3'>About this Product</CardTitle>
                                    <CardDescription className='text-gray-600'>
                                        {data.description}
                                    </CardDescription>
                                </CardHeader>



                                <CardContent className="text-sm text-muted-foreground flex items-center gap-6">


                                    <div className='bg-gray-50 w-full rounded-lg p-4'>
                                        <h4 className='text-gray-900 text-[16px] font-medium mb-3'>Product Information</h4>
                                        <ul>
                                            <li className='flex justify-between text-sm my-2'>
                                                <span className='text-gray-500'>
                                                    Category
                                                </span>
                                                <span className='text-gray-900 font-medium'>
                                                    {data.category.name}
                                                </span>
                                            </li>

                                            <li className='flex justify-between text-sm'>
                                                <span className='text-gray-500'>
                                                    Subcategory
                                                </span>
                                                <span className='text-gray-900 font-medium'>
                                                    {data.subcategory[0].name}
                                                </span>
                                            </li>

                                            <li className='flex justify-between text-sm my-2'>
                                                <span className='text-gray-500'>
                                                    Brand
                                                </span>
                                                <span className='text-gray-900 font-medium'>
                                                    {data.brand.name}
                                                </span>
                                            </li>

                                            <li className='flex justify-between text-sm'>
                                                <span className='text-gray-500'>
                                                    Items Sold
                                                </span>
                                                <span className='text-gray-900 font-medium'>
                                                    {data.sold}+ sold
                                                </span>
                                            </li>
                                        </ul>

                                    </div>

                                    <div className='bg-gray-50 w-full rounded-lg p-4'>
                                        <h4 className='text-gray-900 text-[16px] font-medium mb-3'>Key Features</h4>
                                        <ul>
                                            <li className='flex items-center text-sm text-gray-600 my-2'>
                                                <i className="fa-solid fa-check text-green-600 mr-2 w-4"></i>
                                                Premium Quality Product
                                            </li>

                                            <li className='flex items-center text-sm text-gray-600'>
                                                <i className="fa-solid fa-check text-green-600 mr-2 w-4"></i>
                                                100% Authentic Guarantee
                                            </li>

                                            <li className='flex items-center text-sm text-gray-600 my-2'>
                                                <i className="fa-solid fa-check text-green-600 mr-2 w-4"></i>
                                                Fast & Secure Packaging
                                            </li>

                                            <li className='flex items-center text-sm text-gray-600'>
                                                <i className="fa-solid fa-check text-green-600 mr-2 w-4"></i>
                                                Quality Tested
                                            </li>
                                        </ul>



                                    </div>

                                </CardContent>
                            </div>
                        </TabsContent>




                        <TabsContent value="reviews">
                            <div className=' p-6 font-medium'>

                                <CardHeader className='flex flex-col md:flex-row gap-8 items-start md:items-center mb-6'>


                                    <div className='text-center'>
                                        <CardTitle className='text-gray-900 text-5xl font-bold mb-2'>{data.ratingsAverage}</CardTitle>
                                        <CardDescription>
                                            <div className='text-[#FDC700] mb-4'>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-regular fa-star-half-stroke"></i>
                                                <i className="fa-regular fa-star"></i>

                                            </div>
                                            <p className='text-sm text-gray-500 mt-2'>Based on {data.ratingsQuantity} reviews</p>
                                        </CardDescription>
                                    </div>


                                    <div className="w-full">
                                        <div className='flex items-center gap-3 mb-2'>

                                            <span className='text-sm text-gray-600'>
                                                5
                                                <div>
                                                    star
                                                </div>
                                            </span>

                                            <div className='flex-1 h-2 bg-gray-200 rounded-full overflow-hidden'>
                                                <div style={{ width: `${percentageFive}%` }} className='h-full bg-yellow-400 rounded-full'></div>
                                            </div>

                                            <span className='text-sm text-gray-500 w-10'>
                                                {percentageFive}%

                                            </span>

                                        </div>


                                        <div className='flex items-center gap-3 mb-2'>

                                            <span className='text-sm text-gray-600'>
                                                4
                                                <div>
                                                    star
                                                </div>
                                            </span>

                                            <div className='flex-1 h-2 bg-gray-200 rounded-full overflow-hidden'>
                                                <div style={{ width: `${percentageFour}%` }} className='h-full bg-yellow-400 rounded-full'></div>
                                            </div>

                                            <span className='text-sm text-gray-500 w-10'>
                                                {percentageFour}%

                                            </span>

                                        </div>

                                        <div className='flex items-center gap-3 mb-2'>

                                            <span className='text-sm text-gray-600'>
                                                3
                                                <div>
                                                    star
                                                </div>
                                            </span>

                                            <div className='flex-1 h-2 bg-gray-200 rounded-full overflow-hidden'>
                                                <div style={{ width: `${percentageThree}%` }} className='h-full bg-yellow-400 rounded-full'></div>
                                            </div>

                                            <span className='text-sm text-gray-500 w-10'>
                                                {percentageThree}%

                                            </span>

                                        </div>

                                        <div className='flex items-center gap-3 mb-2'>

                                            <span className='text-sm text-gray-600'>
                                                2
                                                <div>
                                                    star
                                                </div>
                                            </span>

                                            <div className='flex-1 h-2 bg-gray-200 rounded-full overflow-hidden'>
                                                <div style={{ width: `${percentageTwo}%` }} className='h-full bg-yellow-400 rounded-full'></div>
                                            </div>

                                            <span className='text-sm text-gray-500 w-10'>
                                                {percentageTwo}%

                                            </span>

                                        </div>

                                        <div className='flex items-center gap-3 mb-2'>

                                            <span className='text-sm text-gray-600'>
                                                1
                                                <div>
                                                    star
                                                </div>
                                            </span>

                                            <div className='flex-1 h-2 bg-gray-200 rounded-full overflow-hidden'>
                                                <div style={{ width: `${percentageOne}%` }} className='h-full bg-yellow-400 rounded-full'></div>
                                            </div>

                                            <span className='text-sm text-gray-500 w-10'>
                                                {percentageOne}%

                                            </span>

                                        </div>

                                    </div>
                                </CardHeader>

                                <CardContent className='border-t border-gray-200 pt-6'>
                                    <div className='text-center py-8'>
                                        <i className="fa-solid fa-star text-4xl text-gray-300 mb-3"></i>
                                        <p className='text-gray-500 font-normal'>Customer reviews will be displayed here.</p>
                                        <button className='text-[16px] text-green-600 hover:text-green-700 mt-4 cursor-pointer'>Write a Review</button>

                                    </div>

                                </CardContent>
                            </div>
                        </TabsContent>




                        <TabsContent value="shipping">
                            <div className='p-6'>


                                <CardHeader className='flex flex-col md:flex-row gap-6 mb-6'>
                                    <CardTitle className=' w-full bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6'>

                                        <div className='flex items-center gap-3 mb-4'>
                                            <div className='h-12 w-12 bg-green-600 text-white flex items-center justify-center rounded-full'>
                                                <i className="fa-solid fa-truck"></i>
                                            </div>
                                            <h4 className='font-semibold text-gray-900'>Shipping Information</h4>
                                        </div>

                                        <ul>
                                            <li className='flex items-center gap-2 text-sm text-gray-700'>
                                                <i className="fa-solid fa-check text-green-600 mt-0.5"></i>
                                                <div>
                                                    Free shipping on orders over $50
                                                </div>
                                            </li>

                                            <li className='flex items-center gap-2 text-sm text-gray-700 my-3'>
                                                <i className="fa-solid fa-check text-green-600 mt-0.5"></i>
                                                <div>
                                                    Standard delivery: 3-5 business days
                                                </div>
                                            </li>

                                            <li className='flex items-center gap-2 text-sm text-gray-700'>
                                                <i className="fa-solid fa-check text-green-600 mt-0.5"></i>
                                                <div>
                                                    Express delivery available (1-2 business days)
                                                </div>
                                            </li>

                                            <li className='flex items-center gap-2 text-sm text-gray-700 my-3'>
                                                <i className="fa-solid fa-check text-green-600 mt-0.5"></i>
                                                <div>
                                                    Track your order in real-time
                                                </div>
                                            </li>
                                        </ul>


                                    </CardTitle>

                                    <CardDescription className='w-full bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6'>
                                        <div className='flex items-center gap-3 mb-4'>
                                            <div className='h-12 w-12 bg-green-600 text-white flex items-center justify-center rounded-full'>
                                                <i className="fa-solid fa-rotate-left"></i>
                                            </div>
                                            <h4 className='font-semibold text-gray-900'>Returns & Refunds</h4>
                                        </div>

                                        <ul>
                                            <li className='flex items-center gap-2 text-sm text-gray-700'>
                                                <i className="fa-solid fa-check text-green-600 mt-0.5"></i>
                                                <div>
                                                    30-day hassle-free returns
                                                </div>
                                            </li>

                                            <li className='flex items-center gap-2 text-sm text-gray-700 my-3'>
                                                <i className="fa-solid fa-check text-green-600 mt-0.5"></i>
                                                <div>
                                                    Full refund or exchange available
                                                </div>
                                            </li>

                                            <li className='flex items-center gap-2 text-sm text-gray-700'>
                                                <i className="fa-solid fa-check text-green-600 mt-0.5"></i>
                                                <div>
                                                    Free return shipping on defective items
                                                </div>
                                            </li>

                                            <li className='flex items-center gap-2 text-sm text-gray-700 my-3'>
                                                <i className="fa-solid fa-check text-green-600 mt-0.5"></i>
                                                <div>
                                                    Easy online return process
                                                </div>
                                            </li>
                                        </ul>
                                    </CardDescription>
                                </CardHeader>


                                <CardContent className="bg-gray-50 rounded-lg p-6 flex items-center gap-4">
                                    <div className='h-14 w-14 bg-gray-200 text-gray-600 flex items-center justify-center rounded-full'>
                                        <i className="fa-solid fa-shield-halved text-2xl"></i>
                                    </div>
                                    <div>
                                        <h4 className='font-semibold text-gray-900 mb-1'>Buyer Protection Guarantee</h4>
                                        <p className='text-sm text-gray-600'>Get a full refund if your order doesn't arrive or isn't as described. We ensure your shopping experience is safe and secure.</p>
                                    </div>
                                </CardContent>
                            </div>
                        </TabsContent>

                    </Tabs>




                </div>
            </section>

            <LikedProducts allData={allData} data={data} />
        </>
    )
}
