import {GetServerSideProps, NextPage} from "next";
import styles from "../styles/Home.module.css";
import {NextUIProvider, Text} from "@nextui-org/react";
import {TextInput} from "../components/form/textInput";
import {Switch} from "@mui/material";
import LoginForm from "../components/form/LoginForm";
import {Layout} from "../components/layout/MainLayout";
import RegisterForm from "../components/form/RegisterForm";
import {getSession} from "next-auth/react";


const RegisterPage: NextPage = () => {
    return (
        <NextUIProvider>
            <Layout>
                <div className="bg-slate-100" style={{
                    height:"90vh",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center",
                }}>
                    <RegisterForm/>
                </div>
            </Layout>
        </NextUIProvider>

    );
}
export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {

    return {
        props: { }
    }
}

export default RegisterPage