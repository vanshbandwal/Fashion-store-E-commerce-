import React, { useState } from 'react'
import './css/LoginSignUp.css'

const LoginSignUp = () => {
  const [state, setState] = useState("Login")
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })
  const login = async () => {
    console.log('login function exected', formData)
    let responseData;
    await fetch('https://fashion-store-e-commerce-one.vercel.app/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json()).then((data) => responseData = data)

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/')
    }
    else {
      alert(responseData.error)
    }

  }

  const sign_up = async () => {
    console.log('signup function exected', formData)
    let responseData;
    await fetch('https://fashion-store-e-commerce-one.vercel.app/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json()).then((data) => responseData = data)

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/')
    }
    else {
      alert(responseData.error)
    }

  }
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>{state}</h1>
        <div className='loginsignup-field'>
          {state === "Sign up" ? <input type="text" placeholder='Your Name' name='username' value={formData.username} onChange={changeHandler} /> : <></>}
          <input type="email" placeholder='Your email' name='email' value={formData.email} onChange={changeHandler} />
          <input type="password" placeholder='Password' name='password' value={formData.password} onChange={changeHandler} />
        </div>
        <button onClick={() => { state === 'Login' ? login() : sign_up() }}>Continue</button>
        {state === "Sign up" ? <p className='loginsignup-login'>Already have a account ? <span onClick={() => { setState('Login') }}>Login here</span></p> : <p className='loginsignup-login'>Create a account ? <span onClick={() => { setState('Sign up') }}>Click here</span></p>}

        <div className='loginsignup-agree'>
          <input type="checkbox" name='' id='' />
          <p>By continuing ,i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
