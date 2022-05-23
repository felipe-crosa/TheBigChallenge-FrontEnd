import {Chip} from "@mui/material";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";

export const PatientProfile = () => {
    return (
        <div className=" h-fit bg-blue-100 p-4 pl-8 rounded-2xl mx-auto " style={{width:"800px"}}>
            <div className="mt-3 overflow-hidden mb-2 mx-auto rounded-full w-20 h-18 bg-white">
                <img className="" src="/user.svg"/>
            </div>
            <div className="text-center"><p>Felipe Crosa</p></div>
            <div className="text-center "><p className="text-sm">felicrosa@gmail.com</p></div>

            <div className="rounded-3xl p-4 bg-blue-200 mt-8 text-center">

                <Chip className="mb-3 -mt-12 bg-slate-100" label="General Information"/>
                <div className="-mt-3 md:flex ">
                   <div className="flex justify-around w-full"> <p>Gender: Male</p>
                    <p>Age: 12</p></div>
                    <div className="flex justify-around w-full"><p>Height: 124</p>
                    <p>Weight: 43</p></div>
                </div>

            </div>

            <div className="rounded-3xl p-4 bg-blue-200 mt-12 text-center">

                <Chip className="mb-3 -mt-12 bg-slate-100" label="Previous Medical Condtitions"/>
                <div className="-mt-3 text-center">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ullamcorper metus.
                        Etiam ex purus, luctus eu pharetra nec, aliquam vitae sapien. Curabitur venenatis
                        scelerisque odio, aliquam interdum mauris malesuada sed. Maecenas commodo turpis elit,
                        pellentesque cursus justo gravida et. Curabitur vitae luctus enim.</p>
                </div>

            </div>


            <div className="rounded-3xl p-4 bg-blue-200 mt-12 text-center">

                <Chip className="mb-3 -mt-12 bg-slate-100" label="Allergies"/>
                <div className="-mt-3 text-center">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ullamcorper metus.
                        Etiam ex purus, luctus eu pharetra nec, aliquam vitae sapien. Curabitur venenatis
                        scelerisque odio, aliquam interdum mauris malesuada sed. Maecenas commodo turpis elit,
                        pellentesque cursus justo gravida et. Curabitur virem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ullamcorper metus.
                        Etiam ex purus, luctus eu pharetra nec, aliquam vitaerem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ullamcorper metus.
                        Etiam ex purus, luctus eu pharetra nec, aliquam vitae sapien. Curabitur venenatis
                        scelerisque odio, aliquam interdum mauris malesuada sed. Maecenas commodo turpis elit,
                        pellentesque cursus justo gravida et. Curabitur vrem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ullamcorper metus.
                        Etiam ex purus, luctus eu pharetra nec, aliquam vitae sapien. Curabitur venenatis
                        scelerisque odio, aliquam interdum mauris malesuada sed. Maecenas commodo turpis elit,
                        pellentesque cursus justo gravida et. Curabitur v sapien. Curabitur venenatis
                        scelerisque odio, aliquam interdum mauris malesuada sed. Maecenas commodo turpis elit,
                        pellentesque cursus justo gravida et. Curabitur vtae luctus enim.</p>
                </div>

            </div>






        </div>
    );
}