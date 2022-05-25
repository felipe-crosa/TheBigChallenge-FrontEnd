import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {NextUIProvider} from "@nextui-org/react";
import {SessionProvider} from "next-auth/react";
import {AuthProvider} from "../context/AuthProvider";

function MyApp({Component, pageProps}: AppProps) {

    return (
        <SessionProvider>
            <NextUIProvider>
                <AuthProvider>
                    <Component {...pageProps} />
                </AuthProvider>
            </NextUIProvider>
        </SessionProvider>
    )
}

export default MyApp
