import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials";
import {axiosRequest} from "../../../api/SubmissionApi";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Credentials({
            name: "User Login",
            credentials: {
                email: {type: 'email'},
                password: {type: 'password'},
                // token: {type: "token"},
                // role: {type: "role"}
            },

            async authorize(credentials) {
                let user=null;
                await axiosRequest.post('/login', {
                    email: credentials!.email,
                    password: credentials!.password
                }).then(
                    (response) => {
                        let token =response.data.token
                        token = token.split('|')[1]
                        let {role,...info} = response.data.data
                        role = role[0]
                        user = {role,token,...info}
                    }
                ).catch(
                    (error)=>{
                        console.log(error)
                    }
                )
                return await user;
            }

        })
        // ...add more providers here
    ],
    jwt: {
        secret: process.env.JWT_SECRET_SEED, // deprecated
    },

    pages: {
        signIn: '/login',
        newUser: '/register'
    },

    callbacks: {

        async jwt({ token, account, user }) {
            if ( account ) {
                token.accessToken = account.access_token;
                token.user = user;
            }
            return token;
        },


        async session({ session, token, user }){

            session.accessToken = token.accessToken;
            session.user = token.user as any;
            return session;
        }


    },

    secret: process.env.JWT_SECRET,
})