import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {


const {pathname} = request.nextUrl
console.log(pathname);

const isAuthPages = ['/login' , '/register'].includes(pathname)



const token = await getToken({
  req: request,
  secret: process.env.NEXTAUTH_SECRET,
})

if(token && isAuthPages){
 return NextResponse.redirect(new URL('/', request.url))
}
if (!token && !isAuthPages){
    return NextResponse.redirect(new URL('/login', request.url))
}
}
 
export const config = {
  matcher:['/' , '/products' , '/categories' ,'/brands' , '/cart' , '/wishlist' , '/login' , '/register'  , '/checkout' , '/allOrders' , '/profile/address' ,'/profile/settings' ,'/subCategories'],
}