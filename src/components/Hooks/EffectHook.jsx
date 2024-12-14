import { useEffect, useState } from "react"

export const EffectHook = () =>{

    const [count, setCount] = useState(0);


    useEffect(()=>{
        console.log('useEffect Called');

        return ()=>{
            console.log('component Unmounted...');
        }

    },[count])

    return (
        <>
            <p>UseEffect Hook</p>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>OnClick</button>
        </>
    )
}