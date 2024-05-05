import  { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../layouts/Button";
import Review from './Review'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Contact from './Contact';
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'


const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  } 
  return (

    <div className=" fixed w-full z-10">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className=" flex flex-row items-center cursor-pointer">
          <Link
          to="/"> 
            <h1 className=" text-4xl  text-yellow-500 hover:text-yellow-700 font-semibold">Affogato</h1>
            </Link>
          </div>

          
{user && <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="/"
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Home
            </Link>

           <Link
           to="/menu"
           className="hover:text-brightColor transition-all cursor-pointer">
           Menu
           </Link>

           <Link 
            to="/reservation"
            className="hover:text-brightColor transition-all cursor-pointer">
            Reservation
            </Link>

           <Link 
            to="/contact"
            className="hover:text-brightColor transition-all cursor-pointer">
            Contact
            </Link>
           

            <div>
              
              <button onClick={handleClick}><Button title="LogOut"/></button>
            </div>

 
          </nav>}



          {!user && 
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="/"
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Home
            </Link>

           <Link
           to="/menu"
           className="hover:text-brightColor transition-all cursor-pointer">
           Menu
           </Link>

           <Link 
            to="/reservation"
            className="hover:text-brightColor transition-all cursor-pointer">
            Reservation
            </Link>

           <Link 
            to="/contact"
            className="hover:text-brightColor transition-all cursor-pointer">
            Contact
            </Link>
 

            <Link 
            to="/login"
            className="hover:text-brightColor transition-all cursor-pointer">
           <Button title="Login"/>
            </Link>


 
          </nav>}

          
        </div>
        </div>
        </div>
        )}
      
        
     
 
      


export default Navbar;
