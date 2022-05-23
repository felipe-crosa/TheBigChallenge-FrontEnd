import {Chip, Divider} from "@mui/material";
import {FC, ReactNode} from "react";

type Props = {
    children?: ReactNode
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ullamcorper metus. Etiam ex purus, luctus eu pharetra nec, aliquam vitae sapien. Curabitur venenatis scelerisque odio, aliquam interdum mauris malesuada sed. Maecenas commodo turpis elit, pellentesque cursus justo gravida et. Curabitur vitae luctus enim.
            </p>
            <Divider className="mt-5"><Chip label="OBSERVATIONS"></Chip></Divider>
            <p className="overflow-hidden h-20 break-words"
               style={{
                   WebkitLineClamp:"3",
                   display:"-webkit-box",
                   WebkitBoxOrient:"vertical",
               }}
            >
                dfgklsdfglkjsdfghdsfdfgklsdfglkjsdfghdsfkgljhsdfgkjhdfdfgklsdfglkjsdfghdsfkgljhsdfgkjhdf
                ghjdfkjgldsfjkhgsdljkfghjksdfgkjhsdfgkhsdfgghjdfkjgldsfjkhgsdljkfghjksdfgkjhsdfgkhsdfgkgl
                jhsdfgkjhdfghjdfkjgldsfjkhgsdljkfghjksdfgkjhsdfgkhsdfg
            </p>
            {props.children}
        </div>
    );
}