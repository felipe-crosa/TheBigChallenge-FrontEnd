import {FC} from "react";
import {Chip, Divider} from "@mui/material";
import {CardBody} from "./CardBody";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

export const AnonymousCard: FC = () => {
    return (
        <div className="hover:shadow-2xl rounded-xl bg-white w-full " style={{height:"360px"}}>
            <div className="pl-3 h-10 w-full rounded-t-xl bg-blue-500 flex align-middle justify-between">
                <div className="flex">
                    <p className="my-auto text-white">Gender: </p>
                    <MaleIcon className="text-white my-auto"/>
                    <p className="ml-5 my-auto text-white">Age: <b>23</b></p>
                </div>
                <div className="h-6 mr-4 w-fit  rounded-3xl bg-white my-auto px-3 py-0.5">
                    <p className="text-sm text-center my-auto text-blue-700">Pediatrics</p>
                    {/*<Chip size="small" color="primary" variant="outlined" label="Pediatrics"/>*/}
                </div>
            </div>
            <CardBody/>

            <div className="flex flex-row-reverse">
                <p className="text-slate-400 font-light mr-5">11-04-2342</p>
            </div>

        </div>
    );
}


