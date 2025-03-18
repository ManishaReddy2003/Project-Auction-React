import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () =>{

    const [registerdata ,setRegisterData]= useState({

        registeremail:'',
        registerpassword:'',
        registerconfrompassword:''
    })

    const {registeremail , registerpassword,registerconfrompassword} = registerdata;
    const changeHandler= e =>{
        setRegisterData({...registerdata,[e.target.name]:[e.target.value]})
    }

    const submitChange = e => {
        e.preventDefault()
        console.log(data)
    }
    return(
        <>
        <from onSubmit={submitChange}>
         <div >
          <input   type="text" placeholder="Email" name="email" value={registeremail} onChange={changeHandler}  />
          </div>
          <div className='Pass-Word'>
          <input  type="text"  placeholder="Password"  name="password" value={registerpassword} onChange={changeHandler}  />
          </div>
          <div className='User-Name'>
          <input  type="text" placeholder="Confrom password" name="confrompassword" value={registerconfrompassword}  onChange={changeHandler} />
          </div>
          <div className='Submit'>
           <input  type="submit" name='submit' />
           </div>
           <div >
            <p>Already have an account? <Link to="/login">Login here</Link></p>
          </div>
           </from> 
       
        </>
    )
}

export default Register