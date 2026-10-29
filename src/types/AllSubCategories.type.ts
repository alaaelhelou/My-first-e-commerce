export interface AllSubCategoryType {
  results: number
  metadata: Metadata
  data: AllSubCategoriesDataType[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
  nextPage: number
}
export interface AllSubCategoriesDataType {
  _id: string
  name: string
  slug: string
  category: string
  createdAt: string
  updatedAt: string
}

export interface SpecificSubcategoryDataType {
  _id: string
  name: string
  slug: string
  category: string
  createdAt: string
  updatedAt: string
  __v: number
}