import { useState } from "react"

export const StateHook = () =>{

    const [count, setCount] = useState(0)

    return (
        <>
            <p>UseState Hooks</p> 
            <h1>{count}</h1>
            {/* <button onClick={()=>{setCount(count + 1)}}>Click Here</button> */}
            <button onClick={()=>{setCount((prev)=>prev+1)}}>Click Here</button>
        </>
    )
}