import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { jwtDecode } from "jwt-decode";


interface DecodedToken {
  id: string;
}


export const authOptions : NextAuthOptions = {

    pages : {
        signIn : '/login'
    },

    providers: [
        Credentials({
            name: 'Credentials',

            credentials: {
                email: {},
                password: {}

            },
            async authorize(credentials) {
              
                const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const data = await res.json()

                console.log("Logged Data", data);

                if (data.message === "success") {

                  
                   const decoded = jwtDecode<DecodedToken>(data.token);



                    return {
                        id: decoded.id ,
                        user: data.user,
                        token: data.token
                    }
                }else{
                    throw new Error (data.message || "Login Failed")
                }

               
            }
        })
    ],

    callbacks : {
        async jwt({ token, user}) {
            if (user) {
                token.user = user.user;
                token.token = user.token
            }
      return token
    },
        async session({ session , token }) {
            if (token){
                session.user = token.user;
                (session as any).token = token.token
            }
      return session
    }
    }

   
}