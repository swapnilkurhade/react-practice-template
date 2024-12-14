import React, { useState } from 'react'
import Dashboard from './Dashboard';
import Login from './Login';
import useAuth from './useAuth';

const AuthMain = () => {

    const {isAuth, user, loginFn, logoutFn} = useAuth();

    const HandleAuth = () => {
        return isAuth ? <Dashboard /> : <Login />
    }

    return (
        <div>
            <h1>Hello Custom Hook : useAuth</h1>
            <hr></hr>
            <HandleAuth />
        </div>
    )
}

export default AuthMain
