import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../../firbase'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"

function Login() {
  const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const signIn = (e)=>{
      e.preventDefault();

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredntial)=>{
        if(userCredntial) navigate('/');
      }).catch(err=>alert(err))
    }

    const register = e=>{
      e.preventDefault();

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredntial)=>{
        if(userCredntial) navigate('/')
      }).catch(err=>alert(err.message))
    }


  return (
    <div className='login'>
        <Link to="/"  ><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' className='login__Logo' alt='amazon logo' /></Link>
        <div className='login__continer'>
            <h1>Sign-in</h1>

            <form className='form__login' action="">
                <label htmlFor="">Email</label>
                <input onChange={e=>setEmail(e.target.value)} type="email" name='email' value={email} />
                <label htmlFor="">Password</label>
                <input onChange={e=>{
                  setPassword(e.target.value)
                }}  type="password" name='password' value={password} />
                <button type='submit' className='login__signbtn' onClick={signIn}>Sign in</button>
            </form>
            <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className='login__registerbtn'>create your Amazon account</button>
        </div>
    </div>
  )
}

export default Login;