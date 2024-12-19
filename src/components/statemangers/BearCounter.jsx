import React from 'react'
import useStore from '../../app/zstore'


const BearCounter = () => {

    const bears = useStore((state) => state.bears)
    const increment = useStore((state=>state.increasePopulation))
    return (
        <div>
            <h1>Total Bears : {bears}</h1>
            <button onClick={increment}>Increase Numbers of Bears</button>
        </div>
    )
}

export default BearCounter
