import {FC} from "react";
import {Chip, Divider} from "@mui/material";
import {CardBody} from "./CardBody";

export type Submission = {
    symptoms: string
    observations: string
    diagnosis: string
    speciality: string
    status: string
    doctor ?: Object
    id:string
}

type doctor = {
    name: string
}

type Props = {
    submission: Submission
}

export const SubmissionCard: FC<Props> = ({submission}:Props) => {

    const status: string = submission.status

    let statusColor = "";
    if (status == "pending") {
        statusColor = "bg-red-400"
    }
    if (status == "in-review") {
        statusColor = "bg-yellow-300"
    }
    if (status == "resolved") {
        statusColor = "bg-green-500"
    }

    return (
        <div className="hover:shadow-2xl rounded-xl bg-white w-full " style={{height: "410px"}}>
            <div className={statusColor + " pl-3 h-10 w-full rounded-t-xl flex align-middle justify-between"}>
                <div className="flex">
                    <p className="my-auto text-white font-bold">{status.toUpperCase()} </p>

                </div>
                <div className="h-6 mr-4 w-fit  rounded-3xl bg-white my-auto px-3 py-0.5">
                    <p className="text-sm text-center my-auto text-blue-700">{submission.speciality}</p>
                </div>
            </div>
            <CardBody symptoms={submission.symptoms} observations={submission.observations}>
                <Divider><Chip label="DOCTOR"></Chip></Divider>
                <p className="text-center mt-2">
                    {(submission.doctor)? (submission.doctor as doctor).name : 'Unassigned'}
                </p>

            </CardBody>


            <div className="flex flex-row-reverse">
                <p className="text-slate-400 font-light mr-5 -mt-3">11-04-2342</p>
            </div>
        </div>
    );
}