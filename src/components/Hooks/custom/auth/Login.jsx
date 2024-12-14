import React, { useState } from 'react'
import useAuth from './useAuth'

const Login = () => {

    const {isAuth, user, loginFn, logoutFn} = useAuth();

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmmit = (e) => {
        e.preventDefault();
        console.log('Submitted', userData);
        loginFn(userData)

    }

    return (
        <div>
            <h1>Enter Form credential to Login</h1>
            <div className='form-container'>
                <form onSubmit={handleSubmmit}>
                    <div className='input-box'>
                        <label for='username'>UserName</label>
                        <input type='text' id='username' name='username' placeholder='Enter Name' onChange={handleChange}></input>
                    </div>
                    <div className='input-box'>
                        <label for='password'>Password</label>
                        <input type='text' id='password' name='password' placeholder='Enter Password' onChange={handleChange}></input>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login
