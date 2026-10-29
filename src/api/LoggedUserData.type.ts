import { getUserToken } from "@/lib/auth";
import { loggedUserUpdatePasswordSchemaType } from "@/schemas/auth.schema";

export async function handleUpdateUserData(updateddData : {name : string , email : string , phone : string}){
     const token =await getUserToken();
        console.log(token , "Yokennnnnn111");
    try{
       
        
    const response = fetch (`https://ecommerce.routemisr.com/api/v1/users/updateMe/` ,{
        method : "PUT" , 
        body : JSON.stringify(updateddData),
        headers : {
            token : token as string
        }

        
    })
    const data = (await response).json();

    return data

    }catch(error){
       return error
           }
}

export async function handleUpdateLpggedUserPass(updateddPass : loggedUserUpdatePasswordSchemaType){
     const token =await getUserToken();
        console.log(token , "Yokennnnnn111");
    
       
        
    const response = fetch (`https://ecommerce.routemisr.com/api/v1/users/changeMyPassword` ,{
        method : "PUT" , 
        body : JSON.stringify(updateddPass),
        headers : {
            token : token as string,
            "Content-Type" : "application/json"
        }

        
    })
    const data = (await response).json()

    if(!(await response).ok){
        throw data;
    }

    return data

 
}


