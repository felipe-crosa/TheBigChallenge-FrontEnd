import {Popover} from "@mui/material";

import React, {ChangeEvent, useEffect, useRef, useState} from "react";
import {DiscoverPopover} from "./DiscoverPopover";
import {AssignedPopover} from "./AssignedPopover";
import {MySubmissionPopover} from "./MySubmissionPopover";
import FilterListIcon from '@mui/icons-material/FilterList';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import {Obj} from "@popperjs/core";

type Props = {
    typeOfNav: typeFilter
    filterSubmissions: Function
}

type typeFilter = 'discover' | 'assigned' | 'personal'

const INITIAL_PERSONAL_FILTERS = {
    startDate: '',
    endDate: '',
    status: ['pending', 'in-review', 'resolved'],
    medicalAreas: ['pediatrics', 'general', 'plastics', 'trauma', 'sdfgddsfg', 'dsfg', 'sfdg', 'hst', 'sdfgdsfg'],
    search: ''
}

const INITIAL_DISCOVER_FILTERS = {
    startDate: '',
    endDate: '',
    gender: ['male', 'female'],
    dateRange: [0, 100],
    search: ''
}

const INITIAL_ASSIGNED_FILTERS = {
    startDate: '',
    endDate: '',
    gender: ['male', 'female'],
    status: ['in-review', 'resolved'],
    dateRange: [0, 100],
    search: ''
}

export const FilterNavbar = ({typeOfNav}: Props) => {

    const [filtered, setFiltered] = useState<boolean>(false);

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClickPopOver = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosePopOver = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const [filters, setFilters] = useState<Object>({})

    let popover;
    if (typeOfNav == "discover") {
        if(filters.search == undefined){
            setFilters(INITIAL_DISCOVER_FILTERS)
        }
        popover = <DiscoverPopover filters={filters} changeFilters ={setFilters}/>
    }
    if (typeOfNav == "assigned") {
        if(filters.search == undefined){
            setFilters(INITIAL_ASSIGNED_FILTERS)
        }
        popover = <AssignedPopover filters={filters} changeFilters={setFilters}/>

    }
    if (typeOfNav == "personal") {
        if(filters.search == undefined){
            setFilters(INITIAL_PERSONAL_FILTERS)
        }
        popover = <MySubmissionPopover filters={filters} changeFilters ={setFilters}/>

    }

    const filterSubmissions = () => {
        console.log("The submission are been filtered")
        setFiltered(true)
    }

    const resetFilters = () => {
        setFiltered(false)
        setFilters({})
    }

    const handleSearch = (event: ChangeEvent) => {
        setFilters({...filters,search: event.target.value})
    }

    return (
        <div className="w-full h-16 bg-white border-b-2 shadow flex">
            <input value={filters.search} onChange={(event)=>handleSearch(event)} type="text" className="pl-4 ml-8 w-52 h-10 bg-slate-200 rounded-xl my-auto placeholder:"
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
            <button onClick={()=>filterSubmissions()}
                className=" flex ml-5 my-auto w-10 md:w-24 h-10 rounded-xl border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                <p className="hidden md:block my-auto mx-auto">Apply</p>
                <CheckIcon className=" md:hidden my-auto mx-auto"/>
            </button>

            {(filtered) ? <CancelIcon onClick={()=>resetFilters()} className="ml-5 my-auto text-red-600" fontSize={"medium"}/> : ''}

        </div>
    );
}