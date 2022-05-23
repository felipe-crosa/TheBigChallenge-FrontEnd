import {NextPage} from "next";
import {Layout} from "../../../components/layout/MainLayout";
import React from "react";
import {Autocomplete, Chip, Divider, Grid, TextField} from "@mui/material";
import {SubmissionCard} from "../../../components/SubmissionCards/SubmissionCard";
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import {ConfirmDeleteDialog} from "../../../components/ConfirmDeleteDialog";

const EditSubmissionPage: NextPage = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <Layout>
            <div className="bg-slate-100 p-10 flex justify-center align-middle space-x-6">
                <div className="lg:w-1/2 h-fit bg-blue-100 p-4 pl-8 rounded-2xl">
                    <p className="mb-4 text-xl mt-2 text-center">Edit Submission</p>
                    <Divider><Chip label="Medical Area"/></Divider>
                    <div className="flex place-content-around my-4">
                        <Autocomplete
                            className="bg-white  border-0"
                            disablePortal
                            options={['sdfsdf','sdfs']}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="Select Area"/>}
                        />
                    </div>

                    <Divider><Chip label="Symptoms"/></Divider>
                    <div className="h-fit my-4">
                        <textarea rows={7} className="h-full p-3 rounded-xl w-full bg-white "
                                  placeholder="Enter your symptoms"/>
                    </div>


                    <Divider className="mt-2"><Chip label="Observations"/></Divider>

                    <div className="h-fit my-4">
                        <textarea rows={4} className="h-full p-3 rounded-xl w-full bg-white "
                                  placeholder="Enter any observations"/>
                    </div>

                    <div className="mt-5 flex flex-row-reverse">
                        <button className=" bg-blue-500 h-8 rounded-xl px-5 text-white">
                            Apply
                        </button>

                        <button className=" mr-4 bg-red-500 h-8 rounded-xl px-5 text-white">
                            Discard
                        </button>
                    </div>



                </div>
            </div>

        </Layout>


    )
}
export default EditSubmissionPage