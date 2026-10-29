"use client"
import { createContext, useState } from "react";


interface WishlistContextType {
  wishlistCount: number;
  setWishlistCount: (val: number) => void;
}

export const WishlistContext = createContext<WishlistContextType | null>(null);


export default function WishlistContextProvider({children} : {children:React.ReactNode}){


    const [wishlistCount, setWishlistCount] = useState<number>(0)

    return <WishlistContext.Provider value={{wishlistCount , setWishlistCount}}>

        {children}

    </WishlistContext.Provider>
}
