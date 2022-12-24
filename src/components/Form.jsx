import React, {  useState } from 'react'
import {registerValidation} from "../utils/registerValidation"

const Form = () => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        policy: false,

    });
    const [errorText, setErrorText] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorText(registerValidation(values));
        if(!registerValidation(values)){
            console.log(values)
        }
        
        
    }
    

    return (
        <div>
            <p>{

              errorText ==="" && values.firstName.toUpperCase() + " " + values.lastName.toUpperCase() + " " +"Registered Succesfully!"
                
                
                
                }</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    placeholder='First Name'
                    onChange={(e) => setValues({ ...values, firstName: e.target.value })}
                    value={values.firstName}
                />
                <p>{errorText?.firstName}</p>
                <input
                    type="text"
                    name="lastName"
                    placeholder='Last Name'

                    onChange={(e) => setValues({ ...values, lastName: e.target.value })}
                    value={values.lastName}
                />
                <p>{errorText?.lastName}</p>
                <input
                    type="email"
                    name="email"
                    placeholder='Email'

                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                    value={values.email}
                />
                <p>{errorText?.email}</p>
                <input
                    type="password"
                    name="password"
                    placeholder='Password'
                    onChange={(e) => setValues({ ...values, password: e.target.value })}
                    value={values.password}
                />
                <p>{errorText?.password}</p>
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder='Password Confirm'
                    onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })}
                    value={values.confirmPassword}
                />
                <p>{errorText?.confirmPassword}</p>
                <input
                    type="checkbox"
                    name="policy"
                    value={values.policy}
                 
                    onChange={(e) => setValues({ ...values, policy: e.target.checked })}
                />
                <p>{errorText?.firstName}</p>
                <span style={{fontSize:"1.2rem", paddingLeft:"0.5rem"}}>
                    I accept the{" "} <a href='/' style={{color:"black"}}>Privacy Policy</a>.
                </span>
                <p>{errorText.policy}</p>
                <button type='submit' value="Register">Register</button>
                <p style={{fontSize:"1rem"}}>Already have an account?
                  <a href='/' style={{color:"black"}}>Login</a>   
                </p>

            </form>
        </div>
    )
}

export default Form