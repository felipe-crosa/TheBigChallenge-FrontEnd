import {Chip, TextField, ToggleButton, ToggleButtonGroup} from "@mui/material";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";

export const SetupPatientProfile = () => {

    const [gender, setGender] = React.useState('male');
    const handleGender = (
        event: React.MouseEvent<HTMLElement>,
        newGender: string,
    ) => {
        setGender(newGender);
    };
    const max= (new Date()).toISOString().split(":")[0].split("T")[0]



    return (
        <div className=" h-fit bg-blue-100 p-4 pl-8 rounded-2xl mx-auto " style={{width:"800px"}}>
            <div className="mt-3 overflow-hidden mb-2 mx-auto rounded-full w-20 h-18 bg-white">
                <img className="" src="/user.svg"/>
            </div>
            <div className="text-center"><p>Felipe Crosa</p></div>
            <div className="text-center "><p className="text-sm">felicrosa@gmail.com</p></div>

            <div className="rounded-3xl p-4 bg-blue-200 mt-8 text-center">

                <Chip className="mb-3 -mt-12 bg-slate-100" label="General Information"/>
                <div className="-mt-3 md:flex md:justify-around">
                    <div className="flex justify-around w-full">
                        <div className="flex ">
                            <p className="my-auto">Gender:</p>

                            <ToggleButtonGroup
                                value={gender}
                                exclusive={true}
                                onChange={handleGender}
                                aria-label="Chose Gender"
                                className="ml-3 my-auto mx-auto"
                            >
                                <ToggleButton sx={{
                                    color: "black"
                                }} className="focus:bg-blue-300 rounded-full h-10 my-auto" value="female"
                                              aria-label="female">
                                    <FemaleIcon/>
                                </ToggleButton>
                                <ToggleButton className="focus:bg-blue-300 rounded-full h-10 my-auto" value="male"
                                              aria-label="male">
                                    <MaleIcon/>
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>

                        <div className="flex">
                            <p className="my-auto mr-3">Date of Birth:</p>
                            <input max={max} placeholder="years" type="date"
                                   className="h-10 text-xs text-center rounded-xl bg-white p-1"/>
                        </div>
                    </div>

                    <div className="flex justify-around w-full mt-3 md:mt-0">

                        <div className="flex">
                            <p className="my-auto mr-3">Weight:</p>
                            <input type="number" min={0} max={500}
                                   className="appearance-none h-10 text-xs text-center rounded-xl bg-white p-1 pl-2"/>
                        </div>

                        <div className="flex">
                            <p className="my-auto mr-3">Height:</p>
                            <input type="number" min={0} max={100}
                                   className="appearance-none h-10 text-xs text-center rounded-xl bg-white p-1 pl-2"/>
                        </div>
                    </div>

                </div>

            </div>

            <div className="rounded-3xl p-4 bg-blue-200 mt-12 text-center">

                <Chip className="mb-3 -mt-12 bg-slate-100" label="Previous Medical Condtitions"/>
                <div className="-mt-3 text-center">
                    <textarea rows={7} className="h-full p-3 rounded-xl w-full bg-white "
                              placeholder="Enter your previous medical conditions which you wish to disclose"/>
                </div>

            </div>


            <div className="rounded-3xl p-4 bg-blue-200 mt-12 text-center">

                <Chip className="mb-3 -mt-12 bg-slate-100" label="Allergies"/>
                <div className="-mt-3 text-center">
                    <textarea rows={2} className="h-full p-3 rounded-xl w-full bg-white "
                              placeholder="Enter your allergies"/>
                </div>

            </div>
            <div className="mt-5 flex flex-row-reverse">


                <button className=" bg-blue-500 h-8 rounded-xl px-5 text-white">
                    Save
                </button>


            </div>


        </div>
    );
}