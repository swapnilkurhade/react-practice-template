import React, { createContext } from 'react'
import Child1 from './Child1'

export const UserContext = createContext();

const Parent = () => {

    const userData = {
        name : 'Swapnil', lastName : 'Kurhade'
    }

    return (
        <div>
            <p>hello</p>
            <UserContext value={userData}>
                <Child1/>
            </UserContext>

        </div>
    )
}

export default Parent
