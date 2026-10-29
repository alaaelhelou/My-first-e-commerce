export interface LoggedCartType {
  status: string
  message: string
  numOfCartItems: number
  cartId: string
  data: LoggedDataCartType
}

export interface LoggedDataCartType {
  _id: string
  cartOwner: string
  products: ProductCart[]
  createdAt: string
  updatedAt: string
  __v: number
  totalCartPrice: number
}

export interface ProductCart {
  count: number
  _id: string
  product: ProductSpecificType
  price: number
}

export interface ProductSpecificType {
  subcategory: Subcategory[]
  _id: string
  title: string
  slug: string
  quantity: number
  imageCover: string
  category: Category
  brand: Brand
  ratingsAverage: number
  id: string
}

export interface Subcategory {
  _id: string
  name: string
  slug: string
  category: string
}

export interface Category {
  _id: string
  name: string
  slug: string
  image: string
}

export interface Brand {
  _id: string
  name: string
  slug: string
  image: string
}
