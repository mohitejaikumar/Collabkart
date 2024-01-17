import NextAuth from "next-auth"
import { JWT } from "next-auth/jwt"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "../../../../lib/primaClient/db"
import { SignInSchema } from "../../../../zod/form"

export const authOptions = {
    // all the providers
    providers: [
        
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            type: "credentials",

            credentials: {
                Email: { label: "email", type: "text", placeholder: "jsmith" },
                Password: { label: "password", type: "password" }
            },
            // @ts-ignore
            async authorize(credentials, req) {

                if(credentials===undefined){
                    return null;
                }
               
                const userEmail = credentials.Email;
                const userPassword = credentials.Password;
                const parseInput = SignInSchema.safeParse({
                    Email: userEmail,
                    Password: userPassword
                })
                if(!parseInput.success){
                    return null;
                }
    
                const dbResponse = await prisma.users.findUnique({
                    where:{
                        email:userEmail,
                    }
                })
                if(dbResponse){
                    
                    return (dbResponse.password === userPassword)? dbResponse : null;
                }
                else{

                   await prisma.users.create({
                     data:{
                        email:userEmail,
                        password:userPassword
                     }
                   })
                    return credentials;
                }
                
             }
            
        })


    ],
    secret: process.env.NEXT_AUTH_SECRET,
    strategy: "jwt",
    callbacks: {

        async session({ session, token, user }) {
            const sanitizedToken = Object.keys(token).reduce((p, c) => {
                if (c !== "name" &&
                    c !== "iat" &&
                    c !== "exp" &&
                    c !== "jti" &&
                    c !== "apiToken"
                ) {
                    return { ...p, [c]: token[c] }
                }
                else {
                    return p
                }
            }, {})
            session.apiToken=null;
            session.user.image=null;
            session.user.name=null;
            
            return { ...session, user: sanitizedToken, apiToken: token.apiToken }
        },
        async jwt({ token, user }) {
            if (typeof user !== "undefined") {
                // user has just signed in so the user object is populated
                return user as JWT
            }
            return token
        }
    },

    pages: {
        signIn: '/auth/credentials-signin',
    },



}


export default NextAuth(authOptions);
