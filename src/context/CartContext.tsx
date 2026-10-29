"use client"
import { createContext, useState } from "react";


export const CartContext = createContext()


export default function CartContextProvider({children} : {children:React.ReactNode}){


    const [cartCount, setCartCount] = useState(null)

    return <CartContext.Provider value={{cartCount , setCartCount}}>

        {children}

    </CartContext.Provider>
}
