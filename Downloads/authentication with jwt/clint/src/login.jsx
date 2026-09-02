import { useState } from "react"
import axios from "axios"
const Login = () => {
   const [loginData,setLoginData] = useState({
        gmail : "",
        password : ""
    })
    const handleChange =(e)=>{
          setLoginData({
            ...loginData,
            [e.target.name] : e.target.value
          })
    }
    const handleSubmit = async (e)=>{
          e.preventDefault()
          console.log(loginData)
        const res = await  axios.post("http://localhost:3800/userlogin",loginData)
          localStorage.setItem("userToken",res.data.token)

    }
  return (
    <>
    <div className="login-page">

      <div className="login-card">

        <div className="login-heading">

          <h1>Welcome Back</h1>

          <p>Login to your account</p>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <label>Email</label>

            <input

              type="taxt"

              name="gmail"

              placeholder="Enter your email"

              value={loginData.gmail}

              onChange={handleChange}

              required

            />

          </div>

          <div className="input-group">

            <label>Password</label>

            <input

              type="password"

              name="password"

              placeholder="Enter your password"

              value={loginData.password}

              onChange={handleChange}

              required

            />

          </div>

          <div className="forgot-password">

            <span>Forgot Password?</span>

          </div>

          <button type="submit" className="login-btn">

            Login

          </button>

        </form>

        <p className="signup-text">

          Don't have an account? <span>Sign Up</span>

        </p>

      </div>

    </div>
    </>
  )
}

export default Login
