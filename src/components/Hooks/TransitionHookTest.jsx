import { useState, useTransition } from "react"

export const Parent = () =>{

    // const [isPending, setIsPending] = useState(false)

    // const handleClick = async() =>{
    //     setIsPending(true)
    //     const result = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const data = await result.json()
    //     console.log(data);
    //     setIsPending(false)
    // }

    // Using useTransition

    const [isPending, startTransition] = useTransition();

    const handleClick = () =>{
        startTransition(async()=>{
            const result = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await result.json();
            console.log('data', data);
            
        })
    }

    return (
        
        <button onClick={handleClick} disabled={isPending}>On Click</button>

    )
}