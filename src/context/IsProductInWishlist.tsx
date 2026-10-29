"use client"
import { createContext, useState } from "react";


export const IsProductInWishlistContext = createContext()


export default function IsProductInWishlistContextContextProvider({children} : {children:React.ReactNode}){


    const [isProductInWishlistCo, setIsProductInWishlistCo] = useState([])

    return <IsProductInWishlistContext.Provider value={{isProductInWishlistCo , setIsProductInWishlistCo}}>

        {children}

    </IsProductInWishlistContext.Provider>
}
