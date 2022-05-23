import {GuestNavbar} from "./GuestNavbar";
import {PatientProfile} from "../profile/PatientProfile";
import {PatientNavbar} from "./PatientNavbar";
import {DoctorNavbar} from "./DoctorNavbar";
import {useContext} from "react";
import {UserContext} from "../../context/UserContext";


export const Navbar = () => {

    let type = "patient"

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
