import type {GetServerSideProps, NextPage} from 'next'
import {Layout} from "../../components/layout/MainLayout";
import React, { useState} from "react";
import {FilterNavbar} from "../../components/FilterNavbar/FilterNavbar";
import {CardGrid} from "../../components/CardGrid";
import {Grid} from "@mui/material";
import {Submission, SubmissionCard} from "../../components/SubmissionCards/SubmissionCard";
import {useModal} from "@nextui-org/react";
import {CreateModal} from "../../components/CreateModal";
import Fab from "@mui/material/Fab";
import AddIcon from '@mui/icons-material/Add';
import laravelApi from "../../api/SubmissionApi";
import {getSession} from "next-auth/react";
import {useRouter} from "next/router";


const SubmissionPage: NextPage = ({listSubmissions}) => {
    const [submissions, setSubmissions] = useState<Submission[]>(listSubmissions);
    const {setVisible, bindings} = useModal();
    const router = useRouter()

    const showModal = () => {
        setVisible(true);
    }

    const handleClick = (id: string)=> {
        router.replace('/submissions/'+id)
    }

    const addSubmission = (submission: Submission)=>{
        setSubmissions([submission,...submissions])
    }


    return (
        <Layout>

            <FilterNavbar typeOfNav="personal"/>

            <div className="bg-slate-100 p-10">

                <CardGrid>
                    {submissions.map((submission) => (
                        <Grid onClick={()=>handleClick(submission.id)} key={submission.id} item xs={12} xl={2} sm={6} md={4} lg={3}>
                            <SubmissionCard submission={submission}/>
                        </Grid>
                        ))}
                </CardGrid>

                <Fab onClick={showModal} size="large" color="primary"
                     className="fixed bottom-5 right-5 mt-auto bg-blue-500 ml-auto " aria-label="edit">
                    < AddIcon/>
                </Fab>
            </div>
            <CreateModal addSubmission={addSubmission} setVisible={setVisible} bindings={bindings}/>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({req}) => {
    const session = await getSession({ req });
    let submissions:Object[] = []
    await laravelApi(session.user.token).get('/submissions?status=pending').then(
        (response)=> submissions = response.data.data
    ).catch(
        (error)=> console.log(error)
    )


    return {
        props: {
            listSubmissions: submissions
        }
    }
}


export default SubmissionPage