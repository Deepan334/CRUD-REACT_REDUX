import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import {addUser} from '../Redux/Action'

function Adduser() {

  const [inputs, setInputs] = useState({
      name: "",
    email: "",
    adderss:""
   });

  const dis = useDispatch()
  
  const handleChange = (event) => {
    let{value,name }  = event.target; 
    setInputs(values => ({...values, [name]: value}))
  }
   
  const handleSubmit = (event) => {
    event.preventDefault();
    dis(addUser(inputs))
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="name" 
        value={inputs.name || ""} 
        onChange={handleChange}
      />
      </label> <br />
      <label>email:
        <input 
          type="email" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
        />
      </label> <br />
      <label>adderss:
        <input 
          type="text" 
          name="adderss" 
          value={inputs.adderss || ""} 
          onChange={handleChange}
        />
        </label> <br />
        <input type="submit" />
    </form>
  )
}

export default Adduser;
