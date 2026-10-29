"use client"
import { createContext, useState } from "react";


 interface CartContextType {
  cartCount: number;
  setCartCount: (val: number) => void;
}

export const CartContext = createContext<CartContextType | null>(null);


export default function CartContextProvider({children} : {children:React.ReactNode}){


    const [cartCount, setCartCount] = useState<number>(0)

    return <CartContext.Provider value={{cartCount , setCartCount}}>

        {children}

    </CartContext.Provider>
}
