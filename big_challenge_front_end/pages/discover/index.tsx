import type {NextPage} from 'next'
import {Input, NextUIProvider, useModal} from "@nextui-org/react";
import {Layout} from "../../components/layout/MainLayout";
import {AssignModal} from "../../components/AssignModal";
import React, {useState} from "react";
import {FilterNavbar} from "../../components/FilterNavbar/FilterNavbar";
import {CardGrid} from "../../components/CardGrid";
import {Grid} from "@mui/material";
import {AnonymousCard} from "../../components/SubmissionCards/AnonymousCard";
import {CreateModal} from "../../components/CreateModal";



const DiscoverPage: NextPage = () => {

    const {setVisible, bindings} = useModal();


    const showModal = () => {
        setVisible(true);
    }

    return (
        <NextUIProvider>
            <Layout>

                <FilterNavbar typeOfNav="discover"/>

                <div className="bg-slate-100 p-10">
                    <CardGrid>
                        <Grid onClick={showModal} item xs={12} xl={2} sm={6} md={4} lg={3}>
                            <AnonymousCard/>
                        </Grid>
                        <Grid onClick={showModal} item xs={12} xl={2} sm={6} md={4} lg={3}>
                            <AnonymousCard/>
                        </Grid>
                    </CardGrid>
                    <AssignModal bindings={bindings} setVisible={setVisible}/>
                </div>
            </Layout>
        </NextUIProvider>
    )
}

export default DiscoverPage
