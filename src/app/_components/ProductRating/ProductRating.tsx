
import React from "react";




export default function ProductRating({ ratingProduct, ratingQuanProduct }: { ratingProduct: number; ratingQuanProduct?: number }) {







     return ( <div className="flex items-center gap-1 text-xs"> 
     <div className="flex items-center text-amber-400">
         {[1, 2, 3, 4, 5].map((star) => {
             const isFull = star <= Math.floor(ratingProduct);
              const isHalf = !isFull && star === Math.ceil(ratingProduct) && (ratingProduct % 1) >= 0.3;

      return (
        <i
          key={star}
          className={`${
            isFull
              ? "fa-solid fa-star"
              : isHalf
              ? "fa-solid fa-star-half-stroke"
              : "fa-regular fa-star"
          }`}
        ></i>
      );
    }
    )
    }
  </div>
  
    <span className='text-xs text-gray-500 ml-2'>{ratingProduct}</span>
    <span className='text-xs text-gray-500'> ({ratingQuanProduct})</span> 
</div>
); 
}