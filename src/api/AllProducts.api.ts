



export const getAllProducts = async ()=>{
    
    let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`)
    console.log(response);

    let { data } = await response.json();
     return data
}