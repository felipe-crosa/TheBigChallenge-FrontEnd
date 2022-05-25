import type {GetServerSideProps, NextPage} from 'next'
import {Layout} from "../../components/layout/MainLayout";
import React, {useEffect, useState} from "react";
import {FilterNavbar} from "../../components/FilterNavbar/FilterNavbar";
import {CardGrid} from "../../components/CardGrid";
import {Grid} from "@mui/material";
import {Submission, SubmissionCard} from "../../components/SubmissionCards/SubmissionCard";
import {useModal} from "@nextui-org/react";
import {CreateModal} from "../../components/CreateModal";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";
import AddIcon from '@mui/icons-material/Add';
import {Context} from "vm";
import laravelApi from "../../api/SubmissionApi";
import {getSession, useSession} from "next-auth/react";


const SubmissionPage: NextPage = () => {
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const {setVisible, bindings} = useModal();
    const session = useSession();
    useEffect(() => {
        console.log(session)
        // laravelApi().get('/submissions').then(
        //     (response) => setSubmissions(response.data.data)
        // ).catch(
        //     (error) => console.log(error)
        // )
    }, [])

    const showModal = () => {
        setVisible(true);
    }


    return (
        <Layout>

            <FilterNavbar typeOfNav="personal"/>

            <div className="bg-slate-100 p-10">

                <CardGrid>
                    {submissions.map((submission) => (
                        <Grid key={submission.id} item xs={12} xl={2} sm={6} md={4} lg={3}>
                            <SubmissionCard submission={submission}/>
                        </Grid>
                        ))}
                </CardGrid>

                <Fab onClick={showModal} size="large" color="primary"
                     className="fixed bottom-5 right-5 mt-auto bg-blue-500 ml-auto " aria-label="edit">
                    < AddIcon/>
                </Fab>
            </div>
            <CreateModal setVisible={setVisible} bindings={bindings}/>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({req}) => {
    const session = await getSession({ req });

    return {
        props: {}
    }
}


export default SubmissionPage