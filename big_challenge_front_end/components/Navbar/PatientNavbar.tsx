import {AppBar, Divider, IconButton, Toolbar, Typography} from "@mui/material";
import Link from "next/link";
import React from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import Profile from "../../pages/profile";
import {ProfileMenu} from "./ProfileMenu";

export const PatientNavbar = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    return (

        <div className="w-full h-18 bg-blue-500 flex align-middle  justify-between">
            <div className="flex space-x-2 md:space-x-6 align-middle justify-center my-auto">
                <img className=" ml-8 my-3 h-12 w-12 rounded-3xl" src="/doctor-icon.svg"/>
                <Link href="/"><h1 className="w-0 text-blue-500 md:w-fit md:text-white font-bold text-2xl my-auto text-white" >Health-IT</h1></Link>
                <div className="bg-auto border-r border-blue rounded-r-3xl h-18 w-3 "/>
                <div className="flex">
                    <Link href="/submissions">
                        <h1 className="md:font-bold md:text-xl mr-12 my-auto text-white">Submissions</h1>
                    </Link>
                </div>
            </div>


            <div className="flex align-middle justify-center my-auto mr-2 md:mr-10">
                <button

                    onClick={handleClick}>
                    <div className="bg-white rounded-full p-1">
                        <img width={35} className="rounded-full" src="/user.svg"/>
                    </div>
                </button>
            </div>

            <ProfileMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} handleClick={handleClick}/>



        </div>


    );
}

