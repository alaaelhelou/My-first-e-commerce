



export const getAllProducts = async ()=>{
    
    let response = await fetch(`https://ecommerce.routemisr.com/api/v1/products`)
    console.log(response);

    let { data } = await response.json();
     return data
}