import {AppBar, Divider, IconButton, Toolbar, Typography} from "@mui/material";
import Link from "next/link";


export const GuestNavbar = () => {
    return (

        <div className="w-full h-18 bg-blue-500 flex align-middle  justify-between">
            <div className="flex space-x-2 md:space-x-6 align-middle justify-center my-auto">
                <img className=" ml-8 my-3 h-12 w-12 rounded-3xl" src="/doctor-icon.svg"/>
                <Link href="/"><h1 className="w-0 text-blue-500 md:w-fit md:text-white font-bold text-2xl my-auto text-white" >Health-IT</h1></Link>
                <div className="bg-auto border-r border-blue rounded-r-3xl h-18 w-3 "/>
            </div>


            <div className="flex space-x-10 align-middle justify-center my-auto">
                <Link href="/login" passHref>
                    <a className="text-white font-semibold text-sm">LOGIN</a>
                </Link>
                <Link href="/register" passHref>
                    <a className="text-white font-semibold pr-10 text-sm">SIGN UP</a>
                </Link>
            </div>

        </div>


    );
}

