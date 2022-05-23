import type {NextPage} from 'next'
import {Layout} from "../../components/layout/MainLayout";
import React from "react";
import {FilterNavbar} from "../../components/FilterNavbar/FilterNavbar";
import {CardGrid} from "../../components/CardGrid";
import {Grid} from "@mui/material";
import {SubmissionCard} from "../../components/SubmissionCards/SubmissionCard";
import {useModal} from "@nextui-org/react";
import {CreateModal} from "../../components/CreateModal";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";
import AddIcon from '@mui/icons-material/Add';


const SubmissionPage: NextPage = () => {
    const {setVisible, bindings} = useModal();


    const showModal = () => {
        setVisible(true);
    }


    return (
            <Layout>

                <FilterNavbar typeOfNav="personal"/>

                <div className="bg-slate-100 p-10">
                    <CardGrid>
                        <Grid item xs={12} xl={2} sm={6} md={4} lg={3}>
                            <SubmissionCard/>
                        </Grid>
                        <Grid  item xs={12} xl={2} sm={6} md={4} lg={3}>
                            <SubmissionCard/>
                        </Grid>
                    </CardGrid>

                    <Fab onClick={showModal} size="large" color="primary" className="fixed bottom-5 right-5 mt-auto bg-blue-500 ml-auto " aria-label="edit">
                        < AddIcon/>
                    </Fab>
                </div>
                <CreateModal setVisible={setVisible} bindings={bindings}/>
            </Layout>
    )
}

export default SubmissionPage