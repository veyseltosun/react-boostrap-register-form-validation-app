import React, {  useState } from 'react'
import {registerValidation} from "../utils/registerValidation"
import {ParStyled, InputStyled, ButtonStyled } from "./formStyle"

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
                <InputStyled
                    type="text"
                    name="firstName"
                    placeholder='First Name'
                    onChange={(e) => setValues({ ...values, firstName: e.target.value })}
                    value={values.firstName}
                />
                <ParStyled>{errorText?.firstName}</ParStyled>
                <InputStyled
                    type="text"
                    name="lastName"
                    placeholder='Last Name'

                    onChange={(e) => setValues({ ...values, lastName: e.target.value })}
                    value={values.lastName}
                />
                <ParStyled>{errorText?.lastName}</ParStyled>
                <InputStyled
                    type="email"
                    name="email"
                    placeholder='Email'

                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                    value={values.email}
                />
                <ParStyled>{errorText?.email}</ParStyled>
                <InputStyled
                    type="password"
                    name="password"
                    placeholder='Password'
                    onChange={(e) => setValues({ ...values, password: e.target.value })}
                    value={values.password}
                />
                <ParStyled>{errorText?.password}</ParStyled>
                <InputStyled
                    type="password"
                    name="confirmPassword"
                    placeholder='Password Confirm'
                    onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })}
                    value={values.confirmPassword}
                />
                <ParStyled>{errorText?.confirmPassword}</ParStyled>
                <div className='checkbox'>

                <input
                    type="checkbox"
                    name="policy"
                    value={values.policy}
                 
                    onChange={(e) => setValues({ ...values, policy: e.target.checked })}
                />
                <ParStyled>{errorText?.firstName}</ParStyled>
                <span style={{fontSize:"1.2rem", paddingLeft:"0.5rem"}}>
                    I accept the{" "} <a href='/' style={{color:"white"}}>Privacy Policy</a>.
                </span>
                </div>
                <ParStyled>{errorText.policy}</ParStyled>
                <ButtonStyled type='submit' value="Register">Register</ButtonStyled>
                <p style={{fontSize:"1rem"}}>Already have an account?
                  <a href='/' style={{color:"white"}}>Login</a>   
                </p>

            </form>
        </div>
    )
}

export default Form