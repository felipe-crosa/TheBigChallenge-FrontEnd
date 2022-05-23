import {NextPage} from "next";
import {TextInput} from "./textInput";
import {Switch} from "@mui/material";
import UseSwitchesCustom from "./SwitchRole";
import {useContext, useRef, useState} from "react";
import Link from "next/link";


const LoginForm: NextPage = () => {




    return (
        <div className="bg-white w-screen h-screen" style={{
            maxWidth:"500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "10px",
            maxHeight: "375px",

        }}>
            <h3 className="my-5 font-bold text-xl">Enter your Account</h3>
            <TextInput type="text" placeholder={"Enter Email"}/>
            <TextInput type="password" placeholder={"Enter Password"}/>
            <button className="border-x border-y border-blue-500 mt-5 h-10 w-2/6 rounded-xl text-blue-600
                               hover:bg-blue-500 hover:text-white ">
                Login
            </button>
            <p className="mt-5 text-gray-500">Don't have an account yet? <Link href="/register" passHref><a
                className="hover:text-blue-400">Sign Up</a></Link></p>


        </div>
    )
}


export default LoginForm