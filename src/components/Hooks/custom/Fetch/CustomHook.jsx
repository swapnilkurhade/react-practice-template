import { useEffect, useState } from "react"
import { useFetch } from "./useFetch"

export const CustomHook = () => {

    // const [userData, setUserData] = useState()

    // useEffect(()=>{
    //     getData()
    // },[])

    // const getData = async() =>{
    //     const result = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const final = await result.json();
    //     console.log(final); 
    //     setUserData(final)
    // }

    const userData = useFetch('https://jsonplaceholder.typicode.com/users')

    console.log(userData);
    
    return (
        <>
            <h4>Custom Hook Practice</h4>
            <ul>
                {
                    userData?.map((x)=>(
                        <li>{x?.name}</li >
                    ))
                }
            </ul>

        </>
    )
}