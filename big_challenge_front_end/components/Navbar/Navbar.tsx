import {GuestNavbar} from "./GuestNavbar";
import {PatientProfile} from "../profile/PatientProfile";
import {PatientNavbar} from "./PatientNavbar";
import {DoctorNavbar} from "./DoctorNavbar";
import {useContext, useEffect, useState} from "react";
import {getRole} from "../../utils/LocalUserStorage";
import {AuthContext} from "../../context/AuthContext";


export const Navbar = () => {

    const context = useContext(AuthContext);
    let type = context.role
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
