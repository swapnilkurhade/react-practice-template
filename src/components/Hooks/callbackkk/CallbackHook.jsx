import { useCallback, useState } from "react"
import  CallBackChild  from "./CallBackChild"

export const CallbackHook = () =>{

    // /This is beacuse of referencial equallity
    // Every time component rerenders , its functions gets recreated, so it actually changes compare to past
    const [count, setCount] = useState(0);
    const [childCount, setChildCount] = useState(0);

    // const handleSum = () =>{
    //     setChildCount(childCount+1)
    // }

    const handleSum = useCallback(()=>{
        setChildCount(childCount+1)
    },[childCount])

    return (
        <>
            <h5>UseCallback Hook</h5>
            
            <h4>Parent Count {count}</h4>
            <button onClick={()=>{setCount(count+1)}}>Click...</button>
            <CallBackChild childCount={childCount} handleSum={handleSum} />
        </>
    )
}