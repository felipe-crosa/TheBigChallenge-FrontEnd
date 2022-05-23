
import {FC, ReactNode, ReactPropTypes} from 'react'
import {DoctorNavbar} from "../Navbar/DoctorNavbar";
import {Navbar} from "../Navbar/Navbar";

interface Props {
    children?: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <Navbar/>
            <div className="bg-slate-100 w-full " style={{
                minHeight: "92vh",
                height: "fit-content",
            }}>{children}</div>
        </>
    );
}



