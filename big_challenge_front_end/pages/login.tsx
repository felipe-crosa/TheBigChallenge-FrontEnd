import {GetServerSideProps, NextPage} from "next";
import styles from "../styles/Home.module.css";
import {NextUIProvider, Text} from "@nextui-org/react";
import {TextInput} from "../components/form/textInput";
import {Switch} from "@mui/material";
import LoginForm from "../components/form/LoginForm";
import {Layout} from "../components/layout/MainLayout";
import {getSession} from "next-auth/react";


const LoginPage: NextPage = () => {
    return (
    <NextUIProvider>
        <Layout>
            <div  style={{
                height:"90vh",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
            }}>
               <LoginForm/>
            </div>
        </Layout>
    </NextUIProvider>

    );
}
export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {

    const session = await getSession({ req });

    let { p = '/' } = query;

    if ( session ) {
        (session.user.role == 'patient') ? p='/submissions' : p='/discover'
        return {
            redirect: {
                destination: p.toString(),
                permanent: false
            }
        }
    }

    return {
        props: { }
    }
}

export default LoginPage