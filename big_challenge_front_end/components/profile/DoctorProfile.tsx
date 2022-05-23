import {Chip} from "@mui/material";
import React from "react";

export const DoctorProfile = () => {
    return (
        <div className=" h-fit bg-blue-100 p-4 pl-8 rounded-2xl mx-auto " style={{width:"800px"}}>
            <div className="mt-3 overflow-hidden mb-2 mx-auto rounded-full w-20 h-18 bg-white">
                <img className="" src="/user.svg"/>
            </div>
            <div className="text-center"><p>Felipe Crosa</p></div>
            <div className="text-center "><p className="text-sm">felicrosa@gmail.com</p></div>

            <div className="rounded-3xl p-4 bg-blue-200 mt-8 text-center">

                <Chip className="mb-3 -mt-12 bg-slate-100" label="Institution"/>
                <div className="-mt-3 text-center">
                    <p>Gender: Male</p>
                </div>

            </div>

            <div className="rounded-3xl p-4 bg-blue-200 mt-8 text-center">

                <Chip className="mb-3 -mt-12 bg-slate-100" label="Areas of Expertise"/>
                <div className="-mt-3 text-center">
                    <p>Gender: Male</p>
                </div>

            </div>


        </div>
    )
}