import type {NextPage} from 'next'
import {Grid} from "@mui/material";
import {Layout} from "../../components/layout/MainLayout";
import React from "react";
import {AssignedSubmissionCard} from "../../components/SubmissionCards/AssignedSubmissionCard";
import {FilterNavbar} from "../../components/FilterNavbar/FilterNavbar";
import {CardGrid} from "../../components/CardGrid";
import {GetServerSideProps} from "next";
import {getSession} from "next-auth/react";


function valuetext(value: number) {
    return `${value} years`;
}

const AssignmentsPage: NextPage = () => {

    return (
            <Layout>

                <FilterNavbar typeOfNav="assigned"/>

                <div className="bg-slate-100 p-10">
                   <CardGrid>
                        <Grid item xs={12} xl={2} sm={6} md={4} lg={3}>
                            <AssignedSubmissionCard/>
                        </Grid>

                   </CardGrid>
                </div>
            </Layout>
    )
}

export default AssignmentsPage


export const getServerSideProps: GetServerSideProps = async ({req}) => {
    return {
        props: {}
    }
}
