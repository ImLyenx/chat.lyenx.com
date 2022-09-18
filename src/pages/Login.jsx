import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    <div className="topColor"></div>
    <div className='formContainer'>
        <div className="formWrapper">
            <h1>Lyenx</h1>
            <span>Sign in</span>
            <form>
                <input type="text" placeholder="E-mail adress" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </form>
            <p>Don't have an account ? <Link to="/register">Register</Link></p>
        </div>
    </div>
    </>
  )
}

export default Login