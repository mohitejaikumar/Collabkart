import NextAuth from "next-auth"
import { JWT } from "next-auth/jwt"
import InstagramProvider from "next-auth/providers/instagram"



export const authOptions = {
    // all the providers
    providers: [

        InstagramProvider({
            clientId: process.env.INSTAGRAM_CLIENT_ID!,
            clientSecret: process.env.INSTAGRAM_CLIENT_SECRET!,

        }),


    ],
    secret: process.env.NEXT_AUTH_SECRET,
    strategy: "jwt",
    callbacks: {
        
        async session({ session, token, user }) {
            const sanitizedToken = Object.keys(token).reduce((p, c) => {
                if (c != "email" &&
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
        signIn: '/auth/signin',
    },



}

export default NextAuth(authOptions);
