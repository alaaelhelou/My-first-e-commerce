"use client"
import { createContext, useState } from "react";


export const WishlistContext = createContext()


export default function WishlistContextProvider({children} : {children:React.ReactNode}){


    const [wishlistCount, setWishlistCount] = useState(null)

    return <WishlistContext.Provider value={{wishlistCount , setWishlistCount}}>

        {children}

    </WishlistContext.Provider>
}
