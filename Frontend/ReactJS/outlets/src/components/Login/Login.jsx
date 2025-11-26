import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/admin/users')
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" ref={email} />
            <input type="password" placeholder="Password" ref={password} />
            <button type="submit">Login</button>
        </form>
    </>
  )
}

export default Login