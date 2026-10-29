
import { getUserToken } from "@/lib/auth";

export async function handleCreateCashOrderFromCart(cartId : string ,shippingAddress : {details : string , phone : string , city : string , postalCode : string}){
    const token = await getUserToken()

    try{
    const response = await fetch(`https://ecommerce.routemisr.com/api/v2/orders/${cartId}`,{
        method : "POST",
        headers:{
            "Content-Type" : "application/json",
            token : token as string 
        },
        body : JSON.stringify({shippingAddress})
    }
    )
    const data = response.json();
    return(data);
}catch(error){
    return error;
} 
}


export async function getOrders() {
     try {
         const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/`);
        const data =  await response.json(); 
           return data
        } catch (error) { 
            return error
        }
             }