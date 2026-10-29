

export const getAllCategories = async ()=>{
    
    let response = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`)
    console.log(response);

    let { data } = await response.json();
     return data
}