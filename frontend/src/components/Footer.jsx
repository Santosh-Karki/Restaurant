import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-black text-white bottom-0 rounded-t-2xl mt-2 md:mt-0 ">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl mb-4 mt-8">Affogato</h1>
          <p className=" text-sm text-justify">
          Indulge in culinary bliss, where every dish is a masterpiece and every visit a savory adventure. <br></br>
          Taste the difference, dine with us today!
          </p>
<br></br>
<div className="flex flex-row gap-3">
          <Link
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              <BsInstagram/>
            </Link>

            <Link
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              <BsFacebook/>
            </Link>

            <Link
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              <BsTwitter/>
            </Link>
            </div>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Page</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              className=" hover:text-brightColor transition-all cursor-pointer"
              to="/menu"
            >
              Menu
            </Link>
            <Link
              className=" hover:text-brightColor transition-all cursor-pointer"
              to="/reservation"
            >
              Reservation
            </Link>
            <Link
              className=" hover:text-brightColor transition-all cursor-pointer"
              to="/contact"
            >
              Contact
            </Link>
           
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0 ">Information</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              About Us
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Testimonials
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0 ">Get in Touch</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Affogato@gmail.com
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              +61 123 456 789
            </a>
            
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright.
            All rights reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
