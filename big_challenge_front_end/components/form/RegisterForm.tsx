import {NextPage} from "next";
import {TextInput} from "./textInput";
import {Switch} from "@mui/material";
import UseSwitchesCustom from "./SwitchRole";
import {useState} from "react";
import Link from "next/link";


const RegisterForm : NextPage = () => {

    const [role,setRole] = useState<boolean>(true);

    const changed = () =>{
        setRole((preValue) => (!role))
    }

    let doctorClass = "text-gray-200"
    let patientClass = "text-blue-500"

    if(!role){
        patientClass = "text-gray-200"
        doctorClass = "text-blue-500"
    }

    return (
        <form className="bg-white w-screen" style={{
            maxWidth:"500px",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            padding:"20px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "10px",
            height:"600px",
        }}>

            <h3  className="mt-5 mb-8 font-bold text-xl">Create an Account</h3>

            <TextInput type="text" placeholder={"Enter Name"}/>
            <TextInput type="text" placeholder={"Enter Email"}/>
            <TextInput type="password" placeholder={"Enter Password"}/>
            <TextInput type="password" placeholder={"Confirm Password"}/>

            <div style={{
                marginTop:"20px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
            }}>
                <p className={doctorClass}>Doctor</p>
                    <UseSwitchesCustom changeEvent={changed}/>
                <p className={patientClass}>Patient</p>

            </div>
            <button className="border-x border-y border-blue-500 mt-5 h-10 w-2/6 rounded-xl text-blue-600
                               hover:bg-blue-500 hover:text-white ">
                Sign Up
            </button>
            <p className="mt-5 text-gray-500">Already have an account?
                <Link href="/login" passHref><a className="hover:text-blue-400"> Login</a></Link>
            </p>


        </form>
    )
}



export default RegisterForm