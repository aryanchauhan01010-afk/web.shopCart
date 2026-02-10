import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>Login Here</h1>
      <form>
        <div>
            <label>EMail : </label>
            <input type='email' />
        </div>
        <div>
            <label>Password : </label>
            <input type='password' />
        </div>
      </form>
    </div>
  )
}

export default Login
