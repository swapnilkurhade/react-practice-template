import React, { useState } from 'react'

const AuthCheckChild = ({render}) =>{

    const [user, setUser] = useState(null)

    const login = () =>{
        setUser('Swapnil')
    }

    const logout = () =>{
        setUser(null)
    }

    return render({user , login, logout})
}

const AuthCheck = () => {
    return (
        <div>
            <h6>Auth Check using render props</h6>
            <AuthCheckChild
            
                render={({user , login, logout})=>{
                    return (
                        <>
                            {
                                user ?
                                <div>
                                    <p>Hello, {user}</p>
                                    <button onClick={logout}>Logout</button>
                                </div> 
                                :
                                <div>
                                    
                                    <button onClick={login}>Login</button>
                                </div>
                            }
                        </>
                    )
                }}
            />

    </div>
    )
}

export default AuthCheck
