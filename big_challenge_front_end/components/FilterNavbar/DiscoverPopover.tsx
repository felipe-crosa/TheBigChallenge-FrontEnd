import type {NextPage} from 'next'
import {Input, NextUIProvider, useModal} from "@nextui-org/react";
import React, {ReactNode, useState} from "react";
import {Chip, Divider, Slider, ToggleButton, ToggleButtonGroup} from "@mui/material";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

function valuetext(value: number) {
    return `${value} years`;
}

type Props = {
    children?: ReactNode
    changeFilters: Function
    filters: Object
}


export const DiscoverPopover = (props: Props) => {

    const [gender, setGender] = React.useState(['female', 'male']);
    const handleGender = (
        event: React.MouseEvent<HTMLElement>,
        newGender: string[],
    ) => {
        if (newGender.length) {
            setGender(newGender);
        }
    };


    const [ageRange, setAgeRange] = React.useState<number[]>([0, 100]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setAgeRange(newValue as number[]);
    };

    const [startDate, setStart] = useState<string>('');

    const [endDate, setEnd] = useState<string>('');

    return (
        <div className="pt-2 bg-white my-auto w-80 h-fit flex flex-col">

            <Divider><Chip label="Gender"/></Divider>

            <ToggleButtonGroup
                value={gender}

                onChange={handleGender}
                aria-label="Gender filter"
                className="mt-3 mb-5 mx-auto"
            >
                <ToggleButton sx={{
                    color: "black"
                }} className=" h-10 my-auto" value="female" aria-label="female">
                    <FemaleIcon/>
                </ToggleButton>
                <ToggleButton className="h-10 my-auto" value="male" aria-label="male">
                    <MaleIcon/>
                </ToggleButton>
            </ToggleButtonGroup>

            <Divider><Chip label="Age Range"/></Divider>

            <Slider
                className="mt-2 mb-2 w-52 mx-auto"
                getAriaLabel={() => 'Age range'}
                value={ageRange}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />

            <Divider><Chip label="Date Range"/></Divider>

            <div className="mx-auto mt-4 mb-4 flex flex-col">
                <div className="flex">
                    <p className="mr-3 w-8">From: </p>
                    <input
                        value={startDate}
                        max={endDate}
                        className=" bg-slate-200 h-8 w-36 rounded-2xl px-2"
                        type="date"
                        style={{width: "28"}}
                        onChange={(event) => setStart(event.target.value)}
                    />
                </div>

                <div className="flex mt-4 ">
                    <p className="mr-3 w-8">To: </p>
                    <input
                        value={endDate}
                        min={startDate}
                        className=" bg-slate-200 h-8 w-36 rounded-2xl px-2"
                        type="date"
                        style={{width: "28"}}
                        onChange={(event) => setEnd(event.target.value)}

                    />
                </div>
            </div>
            {props.children}


        </div>
    )
}