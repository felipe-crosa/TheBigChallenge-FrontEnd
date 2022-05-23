import {NextPage} from "next";
import styles from "../styles/Home.module.css";
import {NextUIProvider, Text} from "@nextui-org/react";
import {TextInput} from "../components/form/textInput";
import {Switch} from "@mui/material";
import LoginForm from "../components/form/LoginForm";
import {Layout} from "../components/layout/MainLayout";


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

export default LoginPage