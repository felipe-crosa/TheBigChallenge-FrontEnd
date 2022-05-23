import {Popover} from "@mui/material";

import React, {useEffect, useRef, useState} from "react";
import {DiscoverPopover} from "./DiscoverPopover";
import {AssignedPopover} from "./AssignedPopover";
import {MySubmissionPopover} from "./MySubmissionPopover";
import FilterListIcon from '@mui/icons-material/FilterList';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';

type Props = {
    typeOfNav: typeFilter
    openCreate?: Function
}

type typeFilter = 'discover' | 'assigned' | 'personal'

export const FilterNavbar = ({typeOfNav, openCreate}: Props) => {

    let filtered = false;

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClickPopOver = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosePopOver = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    let popover;
    if (typeOfNav == "discover") {
        popover = <DiscoverPopover/>
    }
    if (typeOfNav == "assigned") {
        popover = <AssignedPopover/>
    }
    if (typeOfNav == "personal") {
        popover = <MySubmissionPopover/>
    }

    return (
        <div className="w-full h-16 bg-white border-b-2 shadow flex">
            <input type="text" className="pl-4 ml-8 w-52 h-10 bg-slate-200 rounded-xl my-auto placeholder:"
                   placeholder="Search"/>


            <button onClick={handleClickPopOver} className="my-auto ml-4 w-16 h-10 bg-slate-200 rounded-xl">
                <FilterListIcon/>
            </button>


            <Popover
                className="roundedx-3xl"
                open={open}
                anchorEl={anchorEl}
                onClose={handleClosePopOver}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                {popover}
            </Popover>
            <button
                className=" flex ml-5 my-auto w-10 md:w-24 h-10 rounded-xl border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                <p className="hidden md:block my-auto mx-auto">Apply</p>
                <CheckIcon className=" md:hidden my-auto mx-auto"/>
            </button>

            {
                (filtered) ?

                    <CancelIcon className="ml-5 my-auto text-red-600" fontSize={"medium"}/>
                    : ''

            }

        </div>
    );
}