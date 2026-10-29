

export const getAllCategories = async ()=>{
    
    let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/categories`)
    console.log(response);

    let { data } = await response.json();
     return data
}