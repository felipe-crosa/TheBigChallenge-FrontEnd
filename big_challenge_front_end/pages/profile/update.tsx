import {Layout} from "../../components/layout/MainLayout";
import React, {useContext} from "react";
import {Chip} from "@mui/material";
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import {PatientProfile} from "../../components/profile/PatientProfile";
import {DoctorProfile} from "../../components/profile/DoctorProfile";
import {SetupDoctorProfile} from "../../components/profile/SetupDoctorProfile";
import {EditDoctorProfile} from "../../components/profile/EditDoctorProfile";
import {EditPatientProfile} from "../../components/profile/EditPatientProfile";
import {SetupPatientProfile} from "../../components/profile/SetupPatientProfile";


const SetupPage = () => {

    return (
        <Layout>
            <div className="bg-slate-100 p-10 flex justify-center allign-middle">
                {(true)?
                    <EditPatientProfile/>:
                    <EditDoctorProfile/>
                }


            </div>

        </Layout>
    );
}

export default SetupPage