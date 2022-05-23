import {NextPage} from "next";
import {Layout} from "../../../components/layout/MainLayout";
import React from "react";
import {Chip, Divider, Grid} from "@mui/material";
import {SubmissionCard} from "../../../components/SubmissionCards/SubmissionCard";
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import {ConfirmDeleteDialog} from "../../../components/ConfirmDeleteDialog";
import Link from "next/link";

const SumbissionPage: NextPage = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <Layout>
            <div className="bg-slate-100 p-10 flex justify-center align-middle space-x-6">
                <div className="lg:w-1/2 h-fit bg-blue-100 p-4 pl-8 rounded-2xl">
                    <div className="flex mt-6 mb-7">
                        <p className="font-bold mr-5">Status:</p>
                        <div className="-mt-1 w-fit h-fit md:h-8 bg-yellow-400  rounded-full flex  justify-center">
                            <p className=" text-white text-sm md:text-md font-bold uppercase my-auto px-2">IN-REVIEW</p>
                        </div>

                        <p className="font-bold mr-3 ml-7">Medical Area:</p>
                        <div className="-mt-1 px-2 h-8 bg-blue-500  rounded-full flex  justify-center">
                            <p className=" text-white font-bold uppercase my-auto">Pediatrics</p>
                        </div>
                    </div>

                    <p><span className="font-bold">Publish Date:</span> 11-43-6463</p>

                    <p className="font-bold mt-7">Symptoms</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ullamcorper metus. Etiam ex
                        purus, luctus eu pharetra nec, aliquam vitae sapien. Curabitur venenatis scelerisque odio,
                        aliquam interdum mauris malesuada sed. Maecenas commodo turpis elit, pellentesque cursus justo
                        gravida et. Curabitur vitae luctus enim.

                    </p>
                    <p className="font-bold mt-7">Observations</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ullamcorper metus. Etiam ex
                        purus, luctus eu pharetra nec, aliquam vitae sapien. Curabitur venenatis scelerisque odio,
                        aliquam interdum mauris malesuada sed. Maecenas commodo turpis elit, pellentesque cursus justo
                        gravida et. Curabitur vitae luctus enim.
                    </p>
                    <p className="font-bold mt-7">Doctor</p>
                    <p>
                        Unassigned
                    </p>
                    <p className="font-bold mt-7">Diagnosis</p>
                    <div className="mb-4 mr-4 rounded-2xl h-24 bg-blue-200 flex">
                        <p className="my-auto ml-10 ">No File Uploaded</p>
                        <div className="ml-auto my-auto mr-4">

                            <button disabled
                                className=" space-x-3 px-3 flex ml-5 my-auto w-fit h-10 rounded-xl -50 bg-blue-500  disabled:bg-slate-600 disabled:opacity">
                                <p className="my-auto  font-bold text-white">Download</p>
                                <DownloadIcon className="my-auto text-white"/>

                            </button>

                        </div>
                    </div>


                </div>
            </div>
            <Link href="/submissions/1/edit"><Fab  size="large" color="primary" className="fixed bottom-5 right-24 mt-auto bg-blue-500 ml-auto " aria-label="edit">
                <EditIcon/>
            </Fab></Link>
            <Fab onClick={handleClickOpen} size="large" color="primary" className="fixed bottom-5 right-5 mt-auto bg-red-500 ml-auto hover:bg-red-800 " aria-label="edit">
                <DeleteIcon/>
            </Fab>

            <ConfirmDeleteDialog open={open} setOpen={setOpen}/>
        </Layout>


    )
}

export default SumbissionPage