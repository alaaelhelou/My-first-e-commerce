import { getUserToken } from "@/lib/auth";
import { AddressFormInputs } from '@/types/UserAddresses.type';


export async function addAddress(formData: AddressFormInputs) {
    const token = await getUserToken();
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses`, {
        method: "POST",
        headers: {
            token: token as string,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
    const data =await res.json()
    return data;
}




export async function handleGetLoggedUserAddresses() {
    const token = await getUserToken();
    console.log(token , "token");
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses`, {
        method: "GET",
        headers: {
            token: token as string,
            "Content-Type": "application/json",
        },
  
    });
    const data =await res.json()
    return data;
}





export async function removeAddress(addressId: string) {
    const token = await getUserToken();
    console.log(token);

    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses/${addressId}`, {
        method: "DELETE",
        headers: {
            token: token as string,
            "Content-Type": "application/json",
        },
    });
    const data = await res.json()
    return data;
}

