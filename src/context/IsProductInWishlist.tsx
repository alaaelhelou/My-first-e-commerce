"use client"
import { WishlistDataType } from "@/types/WishlistProducts";
import { createContext, useState } from "react";



interface IsProductInWishlistContextType {
    
  isProductInWishlistCo: WishlistDataType[];
  setIsProductInWishlistCo: (val: WishlistDataType[]) => void;
}

export const IsProductInWishlistContext = createContext<IsProductInWishlistContextType | null>(null);



export default function IsProductInWishlistContextContextProvider({children} : {children:React.ReactNode}){


    const [isProductInWishlistCo, setIsProductInWishlistCo] = useState<WishlistDataType[]>([])

    return <IsProductInWishlistContext.Provider value={{isProductInWishlistCo , setIsProductInWishlistCo}}>

        {children}

    </IsProductInWishlistContext.Provider>
}
