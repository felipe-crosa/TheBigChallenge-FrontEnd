import {GuestNavbar} from "./GuestNavbar";
import {PatientProfile} from "../profile/PatientProfile";
import {PatientNavbar} from "./PatientNavbar";
import {DoctorNavbar} from "./DoctorNavbar";
import {useEffect, useState} from "react";
import {getRole} from "../../utils/LocalUserStorage";


export const Navbar = () => {
    const [type, setType] = useState('')

    useEffect(()=>setType(getRole()),[])

    let navbar = <GuestNavbar/>
    if(type=="patient"){
        navbar = <PatientNavbar/>
    }
    if(type=="doctor"){
        navbar = <DoctorNavbar/>
    }

    return (
        navbar
    );
}
