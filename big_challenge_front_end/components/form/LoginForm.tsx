import {NextPage} from "next";
import {TextInput} from "./textInput";
import {Switch} from "@mui/material";
import UseSwitchesCustom from "./SwitchRole";
import {ChangeEvent, useContext, useEffect, useRef, useState} from "react";
import Link from "next/link";

import {Loading} from "@nextui-org/react";
import {signIn} from "next-auth/react";
import {useRouter} from "next/router";


const LoginForm: NextPage = () => {
    const router = useRouter();

    const [error, setError] = useState(false)

    const [loading, setLoading] = useState(false)

    const [email, setEmail] = useState('');

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value)
    }
    useEffect(() => {
        setError(router.asPath.includes('error'))
    }, [])

    const [password, setPassword] = useState('');

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value)
    }

    const handleClick = async () => {
        setLoading(true)
        await signIn('credentials', {email, password})
    }

    return (
        <div className="bg-white w-screen h-screen" style={{
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "10px",
            maxHeight: "375px",

        }}>
            <h3 className="my-5 font-bold text-xl">Enter your Account</h3>
            <p hidden={!error} className="text-xs text-red-600">*Invalid Credentials</p>
            <TextInput error={error} value={email} changeEvent={handleEmailChange} type="text" placeholder={"Enter Email"}/>
            <TextInput error={error} value={password} changeEvent={handlePasswordChange} type="password"
                       placeholder={"Enter Password"}/>
            <button disabled={loading} onClick={handleClick} className="disabled:bg-white border-x border-y border-blue-500 mt-5 h-10 w-2/6 rounded-xl text-blue-600
                               hover:bg-blue-500 hover:text-white ">
                <p hidden={loading}>Login</p>
                <Loading type={"points"} size={"sm"} hidden={!loading}/>
            </button>
            <p className="mt-5 text-gray-500">Don't have an account yet? <Link href="/register" passHref><a
                className="hover:text-blue-400">Sign Up</a></Link></p>


        </div>
    )
}


export default LoginForm