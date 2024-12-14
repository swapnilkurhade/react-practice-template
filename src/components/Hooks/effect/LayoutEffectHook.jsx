import { useEffect, useLayoutEffect, useRef, useState } from "react"

export const LayoutEffectHook = () =>{

    const sizeRef = useRef();
    const [height, setHeight] = useState(0)

    // useEffect(()=>{
    //     console.log(sizeRef.current.offsetHeight);
    //     setHeight(sizeRef.current.offsetHeight)
    // },[])

    useLayoutEffect(()=>{
        setHeight(sizeRef.current.offsetHeight)
    },[])

    return (
        <> 
            <h4>useLayoutEffect Hook</h4>
            <div>
                <div ref={sizeRef} style={{height:'100px', backgroundColor: "lightblue"}}></div>
                <p>Height : {height}</p>
            </div>
        </>
    )
}