export type AllCategoriesArrayType = OneCategoryType[]

export interface OneCategoryType {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}
export interface SpecifiCategoryType {
  createdAt: string
  image: string
  name: string
  slug: string
  updatedAt: string
  __v: number
  _id: string
}
