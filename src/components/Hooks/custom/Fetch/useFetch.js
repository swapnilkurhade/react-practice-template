import { useEffect, useState } from "react"


export const useFetch = (url) =>{

    const [data, setData] = useState()

    const handleFetch = async() =>{
        const result = await fetch(url);
        const final = await result.json();
        console.log(final);
        setData(final)
    }

    useEffect(()=>{
        handleFetch(url)
    },[url])

    return data;
}