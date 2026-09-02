import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Signup = () => {
   const navigate =  useNavigate()
  const [formData,setFormData]=  useState({
        name : "",
        gmail : "",
        password : ""
    })
    const handleChange = (e)=>{
         setFormData({
            ...formData,
            [e.target.name]:e.target.value
         })
    }
    const  handleSubmit = (e)=>{
           e.preventDefault()
           console.log(formData)
           axios.post("http://localhost:3800/usersign",formData)
           .then(()=> alert("data inserted"))
           .catch(err => console.log(err))
           navigate("/login")
    }
  return (
    <>
    <div className="signup-page">

      <div className="signup-card">

        <div className="signup-heading">

          <h1>Create Account</h1>

          <p>Join us and get started today</p>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <label>Name</label>

            <input

              type="text"

              name="name"

              placeholder="Enter your name"

              value={formData.name}

              onChange={handleChange}

              required

            />

          </div>

          <div className="input-group">

            <label>Email</label>

            <input

              type="taxt"

              name="gmail"

              placeholder="Enter your email"

              value={formData.gmail}

              onChange={handleChange}

              required

            />

          </div>

          <div className="input-group">

            <label>Password</label>

            <input

              type="password"

              name="password"

              placeholder="Create a password"

              value={formData.password}

              onChange={handleChange}

              required

            />

          </div>

          <button type="submit" className="signup-btn">

            Create Account

          </button>

        </form>

        <p className="login-text">

          Already have an account? <span>Login</span>

        </p>

      </div>

    </div>
    </>
  )
}

export default Signup
