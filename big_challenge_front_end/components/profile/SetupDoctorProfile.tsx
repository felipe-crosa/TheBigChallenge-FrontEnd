import {Autocomplete, Chip, TextField} from "@mui/material";
import React from "react";

export const SetupDoctorProfile = () => {
    return (
        <div className=" h-fit bg-blue-100 p-4 pl-8 rounded-2xl mx-auto " style={{width:"800px"}}>
            <div className="mt-3 overflow-hidden mb-2 mx-auto rounded-full w-20 h-18 bg-white">
                <img className="" src="/user.svg"/>
            </div>
            <div className="text-center"><p>Felipe Crosa</p></div>
            <div className="text-center "><p className="text-sm">felicrosa@gmail.com</p></div>

            <div className="rounded-3xl p-4 bg-blue-200 mt-8 text-center">

                <Chip className="mb-3 -mt-12 bg-slate-100" label="Institution"/>
                <div className="-mt-5">
                    <input required type="text" className="w-full h-10 px-2 bg-white rounded-xl" placeholder="Enter Institution"/>
                </div>

            </div>

            <div className="rounded-3xl p-4 bg-blue-200 mt-8 text-center">

                <Chip className="mb-3 -mt-12 bg-slate-100" label="Areas of Expertise"/>
                <div className="-mt-3 text-center">

                    <Autocomplete
                        id="tags-standard"
                        options={["hola","hsdf","sdfg","sdfgsg"]}
                        getOptionLabel={(option) => option}
                        className="flex bg-white px-2 rounded-xl py-1"
                        renderInput={(params) => (
                            <TextField
                                className="mx-auto"

                                {...params}
                                variant="standard"
                                placeholder="Medical Areas"
                            />
                        )}
                    />
                </div>

            </div>

            <div className="mt-5 flex flex-row-reverse">


                <button className=" bg-blue-500 h-8 rounded-xl px-5 text-white">
                    Save
                </button>

            </div>


        </div>
    )
}