import {NextPage} from "next";
import {TextInput} from "./textInput";
import {Switch} from "@mui/material";
import UseSwitchesCustom from "./SwitchRole";
import {ChangeEvent, useContext, useRef, useState} from "react";
import Link from "next/link";
import laravelApi from "../../api/SubmissionApi";
import {getRole, saveToken, setUser} from "../../utils/LocalUserStorage";
import { Loading } from "@nextui-org/react";



const LoginForm: NextPage = () => {

    const [loading, setLoading] = useState(false)

    const [email , setEmail] = useState('');

    const handleEmailChange = (event:any) => {
        setEmail(event.target.value)
    }

    const [password , setPassword] = useState('');

    const handlePasswordChange = (event:any) => {
        setPassword(event.target.value)
    }

    const handleClick = () => {
        setLoading(true)
         laravelApi().post('/login',{email,password}).then(
             (response)=>{
                 setLoading(false)
                 saveToken(response.data.token.split('|')[1])
                 setUser(response.data.data)
             }
         ).catch(

             (error)=> {
                 setLoading(false)
                 console.log(error)
             }
         )
    }

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
            <TextInput value={email} changeEvent={handleEmailChange} type="text" placeholder={"Enter Email"}/>
            <TextInput value={password} changeEvent={handlePasswordChange} type="password" placeholder={"Enter Password"}/>
            <button disabled={loading} onClick={handleClick} className="disabled:bg-white border-x border-y border-blue-500 mt-5 h-10 w-2/6 rounded-xl text-blue-600
                               hover:bg-blue-500 hover:text-white ">
                <p hidden={loading}>Login</p>
                <Loading size={"sm"} hidden={!loading}/>
            </button>
            <p className="mt-5 text-gray-500">Don't have an account yet? <Link href="/register" passHref><a
                className="hover:text-blue-400">Sign Up</a></Link></p>


        </div>
    )
}


export default LoginForm