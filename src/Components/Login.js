import React from 'react'
import { useState , useEffect} from 'react'
import './Login.css'
import {useNavigate}from 'react-router-dom'

function Login() {
    const navigate=useNavigate()
    const initialValues={email:'',password:''}
    const [formValues,setformValues]=useState(initialValues)
    const [formErrors,setformErrors]=useState({})
    const [isSubmit,setisSubmit]=useState(false)

    const handleChange=(e)=>{
      const {name,value}=e.target
      setformValues({...formValues,[name]:value})
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      setformErrors(validate(formValues))
      if(formValues.email==='johnabhishek@gmail.com'&&formValues.password==='password@123'){
        setisSubmit(true)
      }else{
        alert('wrong password')
      }
      
    }

    useEffect(()=>{
      console.log(formErrors)
      if(Object.keys(formErrors).length===0&& isSubmit){
        console.log(formValues)
        navigate('/dashboard')
       
      }
    },[formErrors])

    const validate=(values)=>{
      const errors={}
      const regex  = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
      const passwx=/[@#='£$%/)({}+?_<>&!*-;,.:£|)]/
      const passwxx=/[0-9]/
      if(!values.email){
        errors.email='Email is required'
      }
      else if(!regex.test(values.email)){
        errors.email='This is not a valid email format'
      }
      if(!values.password){
        errors.password='Passord is required'
      }
      else if(values.password.length < 6){
        errors.password='Password must be more than 6 Characters'
      }else if(!passwx.test(values.password)){
        errors.password='Need 1 special character'
      }else if(!passwxx.test(values.password)){
        errors.password='Need 1 digital number'
      }
      return errors
    }
  return (
    <div>
        <div className="wrapper fadeInDown">
        <h1>Login</h1>
  <div id="formContent">

    <div class="fadeIn first">
        
    </div>

    <form onSubmit={handleSubmit}>
        <h2>Email</h2>
      <input type="text" id="email" className="fadeIn second" name="email" placeholder="Email" value={formValues.email} onChange={handleChange}/>
      <p style={{color:'red'}}>{formErrors.email}</p>     
      <h2>Password</h2>
      <input type="text" id="password" className="fadeIn third" name="password" placeholder="password" value={formValues.password} onChange={handleChange}/>
      <p style={{color:'red'}}>{formErrors.password}</p>

      <input type="submit" className="fadeIn fourth" value="Log In"/>
    </form>

    <div id="formFooter">
      <a className="underlineHover" href="/login">Forgot Password?</a>
    </div>

  </div>
</div>
    </div>
  )
}

export default Login