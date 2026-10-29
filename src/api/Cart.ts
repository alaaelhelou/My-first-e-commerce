import { getUserToken } from "@/lib/auth"

export async function handleAddToCart({productId} : {productId : string}){
    try{
        const token =await getUserToken();
        console.log(token , "Yokennnnnn111");
        
    const response = fetch (`https://ecommerce.routemisr.com/api/v2/cart` ,{
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

export async function handleGetUserCart(){
try{
    
        const token =await getUserToken();
      
        
    const response  = fetch (`https://ecommerce.routemisr.com/api/v2/cart` ,{
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

export async function handleUpdateCart(productId : string , count : number){
try{
    
        const token =await getUserToken();
      
        
    const response  = fetch (`https://ecommerce.routemisr.com/api/v2/cart/${productId}` ,{
        method : "PUT" , 
        body : JSON.stringify({count : count}),
           headers : {
            "Content-Type" : "application/json",
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

export async function handleDeleteFromCart(productId : string){
try{
    
        const token =await getUserToken();
      
        
    const response  = fetch (`https://ecommerce.routemisr.com/api/v2/cart/${productId}` ,{
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

export async function handleClearCart(){
try{
    
        const token =await getUserToken();
      
        
    const response  = fetch (`https://ecommerce.routemisr.com/api/v2/cart` ,{
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