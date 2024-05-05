import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useSignup } from "../hooks/useSignup"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(email, password)

    
   
  }

  return (
    <div className="min-h-screen py-px">
    <div className=" rounded-md shadow-2xl border-gray-400  w-6/12 mt-52 mx-auto p-24">
    <h1>
    <Link to="/" className="hover:text-brightColor transition-all cursor-pointer">
    <ArrowBackIcon/> Home
    </Link>
   </h1>
    <form onSubmit={handleSubmit}>

      <h3 className="text-center mb-12 font-bold text-3xl">Create an Account</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        className="form-control mb-8 border-3" 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        className="form-control mb-8 border-3" 
        value={password} 
      />

    <button type="submit" 
      className="w-2/12 bg-rose-500 hover:bg-rose-700 text-white font-bold ml-72 rounded-full h-12" 
      disabled={isLoading}>Sign Up</button>


      {error && <div className="error">{error}</div>}
    </form><br></br>

    <h3 className="text-center  font-bold text-1xl">Already have an account!   <Link
              to="/login"
              className="hover:text-brightColor text-indigo-600 transition-all cursor-pointer"
            >
              SIGN-IN
            </Link></h3>
    </div>
    </div>
  )
}


export default Signup