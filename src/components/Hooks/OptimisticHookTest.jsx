import { useOptimistic, useState } from "react";


export const OptimisticHookTest = () =>{

    const [userName, setUserName] = useState('');
    const [optName, setOptName] = useOptimistic(userName)

    const wait = () =>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve()
            }, 4000)
        })
    }

    const saveName = async(formData) =>{
        const name = formData.get('name');
        console.log('name', name);
        setOptName(name)
        await wait()
        setUserName(name)
    }

    return (
        <>
            <p>Optimistic Hook Test</p>

            <form action={saveName}>
                <input name="name" placeholder="Enter Name"></input><br></br>
                <button type="submit"> Submit </button>
            </form>

            <p>User Name is : {optName}</p>
        </>
    )
} 