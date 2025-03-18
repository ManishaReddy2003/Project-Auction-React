import React, { useState } from 'react'
import './Loginform.css'
import { Link } from 'react-router-dom'



const Login = () =>{

const [data,setData] = useState({

    loginemail : '',
    loginpassword: '',
 
})

const {loginemail , loginpassword} = data;
const changeHandler = e => {
    setData({...data,[e.target.name]:[e.target.value]})
}
 
const submitHandler = e => {
    e.preventDefault()
    console.log(data)
}

    return(
        <>      
        <center className='Form-Page'>
        <form className='form' onSubmit={submitHandler}>
          <h1>Login</h1>
          <div className='User-Name'>
          <input  className='inputusername' type="text" placeholder="Email" name="loginemail" value={loginemail} onChange={changeHandler}/>
          </div>
          <div className='Pass-Word'>
          <input className='inputpassword' type="password"  placeholder="Password"  name="loginpassword" value={loginpassword} onChange={changeHandler}/>
          </div>
          <div className='Submit'>
           <input className='Submit-Form' type="submit" name='submit' />
           </div>
          <div className='loglink'>
         <a href="#">Forgot Password</a>
         <p>Don't have an account? <Link to="/register">Register here</Link></p>
            </div>
      
          </form>
          </center>
        
        </>
         
    )
}

export default Login

