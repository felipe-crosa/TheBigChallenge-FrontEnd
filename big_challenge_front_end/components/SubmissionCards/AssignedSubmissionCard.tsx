import {FC} from "react";
import {Chip, Divider} from "@mui/material";
import {CardBody} from "./CardBody";
import FemaleIcon from '@mui/icons-material/Female';

export const AssignedSubmissionCard: FC = () => {
    return (
        <div className="hover:shadow-2xl rounded-xl bg-white w-full " style={{height:"350px"}}>
            <div className="pl-3 h-10 w-full rounded-t-xl bg-yellow-400 flex align-middle justify-between">
                <div className="flex">
                    <FemaleIcon className="text-white my-auto"/>
                    <p className="ml-2 my-auto text-white font-semibold">Elizabeth sdfsdf - 21</p>
                </div>
                <div className="h-6 mr-4 w-fit  rounded-3xl bg-white my-auto px-3 py-0.5">
                    <p className="text-sm text-center my-auto text-slate-500">Pediatrics</p>
                </div>
            </div>
            <CardBody/>

            <div className="mx-auto h-8 w-40 rounded-3xl bg-yellow-400 flex justify-center mt-1 ">
                <p className="text-white font-bold my-auto text-center">PENDING</p>
            </div>

        </div>
    );
}