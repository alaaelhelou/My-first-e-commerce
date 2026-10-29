import NextAuth from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
 
  interface User {
   id : string,
   user : UserType,
   token : string
  }

  
}
export interface UserType {
  name: string
  email: string
  role: string
}



declare module "next-auth/jwt" {
  interface JWT {
    user : UserType
    idToken?: string
  }
}