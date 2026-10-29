import { getUserToken } from "@/lib/auth"

export async function handleAddToWishlist({productId} : {productId : string}){
    try{
        const token =await getUserToken();
        
        
        
    const response = fetch (`https://ecommerce.routemisr.com/api/v1/wishlist` ,{
        method : "POST" , 
        body : JSON.stringify({productId : productId}),
        headers : {
            "Content-Type" : "application/json",
            token : token as string
        }

        
    })
    const data = (await response).json();

    return data

    }catch(error){
       return error
           }
}

export async function handleGetUserWishlist(){
try{
    
        const token =await getUserToken();
    
      
        
    const response  = fetch (`https://ecommerce.routemisr.com/api/v1/wishlist` ,{
        method : "GET" , 
           headers : {
               token : token as string
        }

        
    })
     let data   = (await response).json();
    
    return data
}catch(error){
    console.log(error);
    return null
    
}

    
}



export async function handleDeleteFromWishlist(productId : string){
try{
    
        const token =await getUserToken();
      
        
    const response  = fetch (`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}` ,{
        method : "DELETE" , 
           headers : {
            token : token as string
        }

        
    })
     let data   = (await response).json();
    
    return data
}catch(error){
    console.log(error);
    return null
    
}

    
}

