import {NextPage} from "next";
import {TextInput} from "./textInput";
import UseSwitchesCustom from "./SwitchRole";
import { useState} from "react";
import Link from "next/link";
import laravelApi from "../../api/SubmissionApi";
import {Loading} from "@nextui-org/react";
import {router} from "next/client";
import {useRouter} from "next/router";


const RegisterForm: NextPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false)


    let role = "patient"
    const [isPatient, setRole] = useState<boolean>(true);
    const changed = () => {
        setRole((preValue) => (!isPatient))
        if(role=="patient"){
            role="doctor"
        }else{
            role="patient"
        }
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setConfirm] = useState('');

    const changeName = (event: any) => { setName(event.target.value) }
    const changeEmail = (event: any) => { setEmail(event.target.value) }
    const changePassword = (event: any) => { setPassword(event.target.value) }
    const changeConfirm = (event: any) => { setConfirm(event.target.value) }

    const handleSubmit = (event: any) => {
        setLoading(true)
        event.preventDefault()
        console.log('entro')

        laravelApi().post('/register',{name,email,password,role,password_confirmation}).then(
            (response)=> {
                setLoading(false)
                router.replace('/login')
                //window.location.replace('/login')
            }
        ).catch(
            (error)=> {
                setLoading(false)
                console.log(error)
            }
        )
    }

    let doctorClass = "text-gray-200"
    let patientClass = "text-blue-500"

    if (!isPatient) {
        patientClass = "text-gray-200"
        doctorClass = "text-blue-500"
    }

    return (
        <form className="bg-white w-screen" style={{
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "10px",
            height: "600px",
        }}>

            <h3 className="mt-5 mb-8 font-bold text-xl">Create an Account</h3>

            <TextInput value={name} changeEvent={changeName} type="text" placeholder={"Enter Name"}/>
            <TextInput value={email} changeEvent={changeEmail} type="text" placeholder={"Enter Email"}/>
            <TextInput value={password} changeEvent={changePassword} type="password" placeholder={"Enter Password"}/>
            <TextInput value={password_confirmation} changeEvent={changeConfirm} type="password" placeholder={"Confirm Password"}/>

            <div style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <p className={doctorClass}>Doctor</p>
                <UseSwitchesCustom changeEvent={changed}/>
                <p className={patientClass}>Patient</p>

            </div>
            <button disabled={loading} onClick={(event)=>handleSubmit(event)} className="disabled:bg-white border-x border-y border-blue-500 mt-5 h-10 w-2/6 rounded-xl text-blue-600
                               hover:bg-blue-500 hover:text-white ">
                <p hidden={loading}>Sign Up</p>
                <Loading type={"points"} size={"sm"} hidden={!loading}/>
            </button>
            <p className="mt-5 text-gray-500">Already have an account?
                <Link href="/login" passHref><a className="hover:text-blue-400"> Login</a></Link>
            </p>


        </form>
    )
}


export default RegisterForm