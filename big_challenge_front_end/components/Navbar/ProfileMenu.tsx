import React, {FC, useContext} from "react"
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import Menu from "@mui/material/Menu";
import Link from "next/link";
import {signOut} from "next-auth/react";
import {AuthContext} from "../../context/AuthContext";

type ComponentProps = {
    anchorEl: HTMLElement | null
    setAnchorEl:  React.Dispatch<React.SetStateAction<HTMLElement | null>>
    handleClick: Function
}
export const ProfileMenu:FC<ComponentProps> = ({anchorEl,setAnchorEl,handleClick}:ComponentProps) => {
    const context = useContext(AuthContext)
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Menu

        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
    >
            <Link href="/profile" passHref>
            <MenuItem>
                    Profile
                    <PersonIcon className="ml-4"/>
            </MenuItem>
            </Link>
        <MenuItem onClick={()=>context.logout()}>Logout <LogoutIcon className="ml-4"/></MenuItem>
    </Menu>
    );
}