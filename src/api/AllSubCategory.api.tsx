import { AllSubCategoryType } from "@/types/AllSubCategories.type";

export const getAllSubCategories = async ()=>{
    
    let response = await fetch(`https://ecommerce.routemisr.com/api/v1/subcategories`)


    let  data : AllSubCategoryType  = await response.json();
     return data
}

export const getSpecificSubCategories = async (id : string)=>{
    
    let response = await fetch(`https://ecommerce.routemisr.com/api/v1/subcategories/${id}`)
    console.log(response);

    let  {data}  = await response.json();
     return data
}