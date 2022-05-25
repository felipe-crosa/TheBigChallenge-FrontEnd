import {Chip, Divider} from "@mui/material";
import {FC, ReactNode} from "react";

type Props = {
    children?: ReactNode
    symptoms: string
    observations: string
}



export const CardBody:FC<Props> = (props:Props) => {
    return (
        <div className="p-3 px-5">
            <Divider><Chip label="SYMPTOMS"></Chip></Divider>
            <p style={{
                height:"100px",
                overflow:"hidden",
                WebkitLineClamp:"4",
                display:"-webkit-box",
                WebkitBoxOrient:"vertical",
            }}
            >
                {props.symptoms}
            </p>
            <Divider className="mt-5"><Chip label="OBSERVATIONS"></Chip></Divider>
            <p className="overflow-hidden h-20 break-words"
               style={{
                   WebkitLineClamp:"3",
                   display:"-webkit-box",
                   WebkitBoxOrient:"vertical",
               }}
            >
                {(props.observations)? props.observations : 'No observations'}
            </p>
            {props.children}
        </div>
    );
}