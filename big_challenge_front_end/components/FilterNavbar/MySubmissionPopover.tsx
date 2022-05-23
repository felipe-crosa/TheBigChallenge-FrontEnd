import type {NextPage} from 'next'
import {Input, NextUIProvider, useModal} from "@nextui-org/react";
import React, {useRef, useState} from "react";
import {Chip, Divider, Slider, ToggleButton, ToggleButtonGroup} from "@mui/material";
import CustomizedHook from "./MedicalTags";

function valuetext(value: number) {
    return `${value} years`;
}


export const MySubmissionPopover = () => {

    const tags = useRef(null);

    const [gender, setGender] = React.useState(['female', 'male']);
    const handleGender = (
        event: React.MouseEvent<HTMLElement>,
        newGender: string[],
    ) => {
        if (newGender.length) {
            setGender(newGender);
        }
    };

    const [status, setStatus] = React.useState(['pending', 'in-review', 'resolved']);
    const handleStatus = (
        event: React.MouseEvent<HTMLElement>,
        newStatus: string[],
    ) => {
        if (newStatus.length) {
            setStatus(newStatus);
        }
    };

    const [value, setValue] = React.useState<number[]>([0, 100]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    const [startDate, setStart] = useState<string>('');

    const [endDate, setEnd] = useState<string>('');

    const baseTagifySettings = {
        blacklist: ["xxx", "yyy", "zzz"],
        maxTags: 6,
        //backspace: "edit",
        placeholder: "type something",
        dropdown: {
            enabled: 0 // a;ways show suggestions dropdown
        }
    }

    return (
        <div className="flex flex-col md:flex-row">
            <div className="pt-2 bg-white my-auto w-80 h-fit flex flex-col">


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
                <Divider><Chip label="Status"/></Divider>

                <ToggleButtonGroup
                    value={status}

                    onChange={handleStatus}
                    aria-label="Gender filter"
                    className="mt-3 mb-5 mx-auto"
                >
                    <ToggleButton className="normal-case rounded-2xl h-10 my-auto" value="pending" aria-label="pending">
                        Pending
                    </ToggleButton>
                    <ToggleButton className="normal-case rounded-2xl h-10 my-auto" value="in-review"
                                  aria-label="in-review">
                        In-Review
                    </ToggleButton>
                    <ToggleButton className="normal-case rounded-2xl h-10 my-auto" value="resolved"
                                  aria-label="resolved">
                        Resolved
                    </ToggleButton>
                </ToggleButtonGroup>


            </div>
            <div className=" bg-white border-l w-80 flex flex-col pb-10">
                <div className="mt-2"><Divider><Chip label="Category"/></Divider></div>
                <CustomizedHook/>
            </div>
        </div>
    )
}