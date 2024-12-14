import { useEffect, useState } from "react";

const useAuth = () =>{

    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false)

    useEffect(()=>{
        checkUser()
    },[])

    const checkUser = () =>{
        const isUser = JSON.parse(localStorage.getItem('user-items'))
        console.log(isUser);
        setUser(isUser)
        setIsAuth(isUser ? true : false);
    }

    const loginFn = (data) =>{
        console.log('logged In',data);
        localStorage.setItem('user-items', JSON.stringify(data))
        setUser(data)
    }

    const logoutFn = () =>{
        console.log('Logged Out');
        localStorage.clear();
        setUser(null)
        setIsAuth(false)
    }

    return {
        isAuth,
        user,
        loginFn,
        logoutFn
    }
}

export default useAuth;