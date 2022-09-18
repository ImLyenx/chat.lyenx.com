import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
    <div className='formContainer'>
        <div className="formWrapper">
            <h1>Lyenx</h1>
            <span>Sign up</span>
            <form>
                <input type="text" placeholder="Display name" />
                <input type="email" placeholder="E-mail adress" />
                <input type="file" id="fileInput" style={{display: "none"}} />
                <label htmlFor="fileInput">Choose a profile picture</label>
                <input type="password" placeholder="Password" />
                <button>Register</button>
            </form>
            <p>Already have an account ? <Link className="link" to="/login">Login</Link></p>
        </div>
    </div>
    </>
  )
}

export default Register