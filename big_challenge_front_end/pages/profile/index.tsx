import {Layout} from "../../components/layout/MainLayout";
import React, {useContext} from "react";
import {Chip} from "@mui/material";
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import {PatientProfile} from "../../components/profile/PatientProfile";
import {DoctorProfile} from "../../components/profile/DoctorProfile";
import Link from "next/link";
import {UserContext} from "../../context/UserContext";


const ProfilePage = () => {

    return (
        <Layout>
            <div className="bg-slate-100 p-10 flex justify-center allign-middle">

                {(true)?
                    <PatientProfile/>:
                    <DoctorProfile/>
                }

                <Link href="/profile/update">
                    <Fab size="large" color="primary" className="fixed bottom-5 right-5 mt-auto bg-blue-500 ml-auto "
                         aria-label="edit">
                        <EditIcon/>
                    </Fab>
                </Link>
            </div>

        </Layout>
    );
}

export default ProfilePage