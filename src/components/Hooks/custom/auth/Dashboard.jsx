import React from 'react'
import useAuth from './useAuth';

const Dashboard = () => {

    const {isAuth, user, loginFn, logoutFn} = useAuth();

    return (
        <div>
            <h1>Hello User, {user?.username} </h1>
            <button className='logout-btn' onClick={logoutFn}>Logout</button>
        </div>
    )
}

export default Dashboard
