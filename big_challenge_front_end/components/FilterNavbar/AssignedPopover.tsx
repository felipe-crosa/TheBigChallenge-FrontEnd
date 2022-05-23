import {DiscoverPopover} from "./DiscoverPopover";
import {Chip, Divider, ToggleButton, ToggleButtonGroup} from "@mui/material";
import React from "react";


export const AssignedPopover = () =>{

    const [status, setStatus] = React.useState(['in-review', 'resolved']);
    const handleStatus = (
        event: React.MouseEvent<HTMLElement>,
        newStatus: string[],
    ) => {
        if (newStatus.length) {
            setStatus(newStatus);
        }
    };


    return (
        <DiscoverPopover>
            <Divider><Chip label="Status"/></Divider>

            <ToggleButtonGroup
                value={status}

                onChange={handleStatus}
                aria-label="Gender filter"
                className="mt-3 mb-5 mx-auto"
            >
                <ToggleButton className="normal-case rounded-2xl h-10 my-auto" value="resolved" aria-label="female">
                    Resolved
                </ToggleButton>
                <ToggleButton className="normal-case rounded-2xl h-10 my-auto" value="in-review" aria-label="male">
                    Pending
                </ToggleButton>
            </ToggleButtonGroup>
        </DiscoverPopover>
    )
}