import {FC, useReducer, useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import laravelApi from "../api/SubmissionApi";
import axios from 'axios';
import {AuthContext} from './AuthContext'

export interface AuthState {
    isLoggedIn: boolean;
    user?: Object;
    role: string;
}


const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined,
    role: 'guest',
}


export const AuthProvider:FC = ({ children }) => {

    const [state, setState] = useState( AUTH_INITIAL_STATE );
    const { data, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if ( status === 'authenticated' ) {
            setState({
                isLoggedIn: true,
                user: data?.user,
                role: data?.user?.role
            })
        }

    }, [ status, data ])



    const logout = async () => {
        await laravelApi(state.user.token).post('/logout')
        signOut();
    }



    return (
        <AuthContext.Provider value={{
            ...state,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
};