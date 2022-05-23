import {AppBar, Divider, IconButton, Toolbar, Typography} from "@mui/material";
import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";

export const DoctorNavbar = () => {
    return (

        <div className="w-full h-18 bg-blue-500 flex align-middle  justify-between">
            <div className="flex space-x-2 md:space-x-6 align-middle justify-center my-auto">
                <img className=" ml-8 my-3 h-12 w-12 rounded-3xl" src="/doctor-icon.svg"/>
                <Link href="/"><h1
                    className="w-0 text-blue-500 md:w-fit md:text-white font-bold text-2xl my-auto text-white">Health-IT</h1>
                </Link>
                <div className="bg-auto border-r border-blue rounded-r-3xl h-18 w-3 "/>
                <div className="flex">
                    <Link href="/discover">
                        <h1 className="mr-6 md:mr-12 md:font-bold md:text-xl my-auto text-white">Discover</h1>

                    </Link>
                    <Link href="/assignments">
                        <h1 className="md:mx-18 md:font-bold md:text-xl my-auto text-white">Assignments</h1>
                    </Link>
                </div>
            </div>


            <div className="flex align-middle justify-center my-auto mr-2 md:mr-10">
                <Link href="/profile">
                    <div className="bg-white rounded-full p-1">
                    <img width={35} className="rounded-full" src="/user.svg"/>
                    </div>

                    {/*<a className="text-white font-semibold text-sm">Profile</a>*/}
                </Link>
            </div>

        </div>


    );
}

