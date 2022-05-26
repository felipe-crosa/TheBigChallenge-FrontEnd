import {DiscoverPopover} from "./DiscoverPopover";
import {Chip, Divider, ToggleButton, ToggleButtonGroup} from "@mui/material";
import React, {FC, ReactNode, useEffect} from "react";

type Props = {
    children?: ReactNode
    filters: Object
    changeFilters: Function

}

export const AssignedPopover: FC<Props> = ({changeFilters, filters}:Props) =>{

    const [status, setStatus] = React.useState(filters?.status);

    // useEffect(()=>console.log(status),[])
    const handleStatus = (
        event: React.MouseEvent<HTMLElement>,
        newStatus: string[],
    ) => {
        if (newStatus.length) {
            setStatus(newStatus);
            changeFilters((filters: Object) => {
                return {...filters,status:newStatus}
            })
        }
    };


    return (
        <DiscoverPopover filters={filters} changeFilters={changeFilters}>
            <Divider><Chip label="Status"/></Divider>

            <ToggleButtonGroup
                value={status}

                onChange={handleStatus}
                aria-label="Gender filter"
                className="mt-3 mb-5 mx-auto"
            >
                <ToggleButton className="normal-case rounded-2xl h-10 my-auto" value="in-review" aria-label="female">
                    In-Review
                </ToggleButton>
                <ToggleButton className="normal-case rounded-2xl h-10 my-auto" value="resolved" aria-label="male">
                    Resolved
                </ToggleButton>
            </ToggleButtonGroup>
        </DiscoverPopover>
    )
}