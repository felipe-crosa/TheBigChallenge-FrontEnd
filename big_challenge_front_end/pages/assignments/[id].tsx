import type {NextPage} from 'next'
import {Layout} from "../../components/layout/MainLayout";
import React from "react";
import {Chip, Divider, Grid} from "@mui/material";
import {SubmissionCard} from "../../components/SubmissionCards/SubmissionCard";
import {GetServerSideProps} from "next";
import {getSession} from "next-auth/react";


const AssignmentPage: NextPage = () => {


    return (
        <Layout>
            <div className="bg-slate-100 p-10 flex justify-center flex-col md:flex-row align-middle space-x-6">
                <div className="mx-auto md:mx-0 rounded-2xl w-96 bg-blue-100 h-fit" style={{minHeight: "650px"}}>
                    <div className="rounded-2xl w-11/12 mx-auto my-4 bg-blue-200 h-fit flex flex-col py-4">
                        <div className="overflow-hidden mb-5 mx-auto rounded-full w-20 h-18 bg-white">
                            <img  className="" src="/user.svg"/>
                        </div>
                        <div className="flex justify-around">
                            <div><p className="text-center">Name:</p><p>John Doe</p></div>
                            <div><p className="text-center">Email:</p><p>johndoe@gamil.com</p></div>
                        </div>
                    </div>
                    <Divider><Chip label="Medical Information"/></Divider>
                    <div className="w-11/12 mx-auto my-4 bg-blue-200 rounded-2xl h-fit flex flex-col py-4">
                        <div className="flex justify-around">
                            <div className="flex mb-5 "><p className="text-center">Age:</p><p> 34</p></div>
                            <div className="flex"><p className="text-center">Gender:</p><p>Male</p></div>
                        </div>
                        <div className="flex justify-around">
                            <div className="flex"><p className="text-center">Height: </p><p> 134 cm</p></div>
                            <div className="flex"><p className="text-center">Weigth: </p><p> 94 kg</p></div>
                        </div>
                    </div>

                    <Divider><Chip label="Allergies"/></Divider>
                    <div className="mx-auto text-center px-3 py-1.5 my-3 bg-blue-200 rounded-2xl w-11/12">
                        <p>sfdfgdfg sdfgdfg sfdfgdfg sfdfgdfg v </p>
                    </div>

                    <Divider><Chip label="Medical Conditions"/></Divider>
                    <div className="mx-auto text-center px-3 py-1.5 my-3 bg-blue-200 rounded-2xl w-11/12">
                        <p>sfdfgdfg sdfgsfdfgdfg sfd fgdfg sfdfgd fg s
                            sfdfgdfg sdfgsfdfgdfg sfd fgdfg sfdfgd fg sfdfgdfg vsf dfgdfg s fdfgdfg sfdfgdfg sfdfgdfg
                        </p>
                    </div>


                </div>
                <div className="mt-5 md:mt-0 w-fit mx-auto md:mx-0 md:w-1/2 h-fit bg-blue-100 p-4 pl-8 rounded-2xl">
                    <div className="flex mt-6 mb-7">
                        <p className="font-bold mr-3">Status:</p>
                        <div className="-mt-1 w-20 h-8 bg-yellow-400  rounded-full flex  justify-center">
                            <p className=" text-white font-bold uppercase my-auto">Pending</p>
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
                    <p className="font-bold mt-7">Diagnosis</p>
                    <div className="mb-4 mr-4 rounded-2xl h-24 bg-blue-200 flex">
                        <p className="my-auto ml-10 ">No File Uploaded</p>
                        <div className="ml-auto my-auto mr-4">

                        <button
                            className="ml-5 my-auto w-24 h-10 rounded-xl -50 bg-red-500 text-white disabled:bg-slate-600 disabled:opacity">
                            Delete
                        </button>
                        <button
                            className="ml-5 my-auto w-24 h-10 rounded-xl  bg-blue-500 text-white disabled:bg-slate-600 disabled:opacity">
                            Upload
                        </button>
                        </div>
                    </div>


                </div>
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({req,query}) => {

    return {
        props: {}
    }
}


export default AssignmentPage