import React, { useState } from 'react'

const FormValidationTop = ({ render }) => {

    const [value, setValue] = useState({});
    const [error, setError] = useState({});

    const Validite = (name , inputValue) =>{
        let errorObj = {...error}
        if(!inputValue){
            errorObj[name] = `${name} is required...` 
        }else{
            delete errorObj[name]
        }
        setError(errorObj)
    }

    const handleChange = (e) =>{
        setValue({...value, [e.target.name]: e.target.value})
        Validite(e.target.name,e.target.value)
    }


    return render({ error , value , handleChange})
}

const FormValidation = () => {
    return (
        <div>
            <h5> Form Validationn using render props </h5>
            <hr></hr>
            <FormValidationTop
                render={({error , value , handleChange})=>{
                    return (

                        <form>
                            <input name='name' value={value.name} onChange={handleChange}></input>
                            <p>{error.name && 'Name is required'}</p>
                            <br></br>
                            <input name='password' value={value.password} onChange={handleChange}></input>
                            <p>{error.password && 'password is required'}</p>
                            <br></br>
                            <button type='submit' >Login</button>
                        </form>
                    )
                }}
            />
        </div>
    )
}

export default FormValidation
