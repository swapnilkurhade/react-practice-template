import React from 'react'
import { useForm } from './useForm'

const FormIndex = () => {

    const initialFormValue = {
        name:'',
        username:'',
        address:''
    }

    const {value, handleChange, resetForm} = useForm(initialFormValue);

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('final submitted', value);
        resetForm()
    }

  return (
    <div>
      <h4>UseForm Custom Hook</h4>
      <br></br>

      <form onSubmit={handleSubmit}>
        <input type='text' name='name' placeholder='Enter Name' onChange={handleChange} value={value?.name}></input>
        <br/>
        <input type='text' name='username' placeholder='Enter UserName' onChange={handleChange} value={value?.username}></input>
        <br/>
        <input type='text' name='address' placeholder='Enter Address' onChange={handleChange} value={value?.address}></input>
        <br/>
        <button type='submit'>Submit</button>

      </form>


    </div>
  )
}

export default FormIndex
