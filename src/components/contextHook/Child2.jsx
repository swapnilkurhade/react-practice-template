import React, { use, useContext } from 'react'
import { UserContext } from './Parent'

const Child2 = () => {

    const user = use(UserContext)
    // const condition = false;

    // let user;
    // if(condition){
    //     user = useContext(userContext)
    // }else{
    //     user = {
    //         name : 'Swapbhai'
    //     }
    // }


    return (
        <div>
            <p>User is {user.name}</p>
        </div>
    )
}

export default Child2
