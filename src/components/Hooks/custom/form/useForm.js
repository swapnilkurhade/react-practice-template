import { useEffect, useState } from "react"

export const useForm = (initialValue) =>{

    const [value, setValue] = useState();

    useEffect(()=>{
        setValue(initialValue)
    },[])

   
    const handleChange = (e) =>{
        setValue({...value,[e.target.name]:e.target.value})
    }

    const resetForm = () =>{
        setValue(initialValue)
    }

    return {value, handleChange, resetForm}

}