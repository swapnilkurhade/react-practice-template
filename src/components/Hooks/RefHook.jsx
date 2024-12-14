import { useEffect, useRef, useState } from "react"

export const RefHook = () =>{
    // Persists values between render... ===============

    // const [inputValue, setInputValue] = useState('');
    // const renderCount = useRef(0)
    // const handleInput = (e) =>{ setInputValue(e.target.value) }

    // useEffect(()=>{
    //     renderCount.current = renderCount.current + 1;
    // })

    // =============== Access DOM

    const ele = useRef()

    const handleClick = () =>{
        // ele.current.focus()
        // ele.current.style.padding = '20px'
        // ele.current.style.fontSize = '50px'
    }


    return (
        <>
            <p>useRef Hook</p>
            {/* -------------------------------------- */}
            {/* <input name="name" placeholder="Eneter Anything" value={inputValue} onChange={handleInput}></input>
            <h5>Total Renders of page : {renderCount.current}</h5> */}

            {/* ---------------------------------- */}

            {/* Accessing DOM Element */}
            {/* <input name="name" placeholder="Enter Anything" ref={ele}></input> */}
            <p ref={ele}>Hello</p>
            <button onClick={handleClick}>Click</button>

        </>
    )
}