import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Contact = () => {
  return (
    <>
    <Navbar/>
    

<div className="min-h-screen items-center justify-center flex flex-col gap-10">
<h1 className="font-bold text-3xl"> Contact Us</h1>
<p className="font-semibold text-gray-500"> We love hearing from our customers. Feel free to share your experience or ask any questions you may haves</p>



    <div className="items-center justify-center gap-20 flex flex-row w-full h-full">
      <div className="w-1/4 h-96">
      <iframe className=" w-full h-full rounded-lg"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.1523801831772!2d144.9599508766598!3d-37.809899633818425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642cb1fb82ba1%3A0xd009c8b5a5a8f8d0!2sMelbourne%20Central!5e0!3m2!1sen!2sau!4v1713153197172!5m2!1sen!2sau" 
     ></iframe>      
      </div>


      <div className="w-1/3 h-full pt-10">
      <form className=" ">
    <input  className="form-control mb-8 border-3"  placeholder="First Name"/>
    <input  className="form-control mb-8 border-3"  placeholder="Last Name"/>
    <input  className="form-control mb-8 border-3"  placeholder="Email Address"/>
    <textarea id="comment" rows="4" className="form-control mb-8 border-3 resize-none" placeholder="Message here..." required />
 
  <button type="submit" className="btn btn-primary form-control h-12 transition ease-in-out ">Submit</button>
</form>
      </div>
    </div>

    </div>
<Footer/>
   
    </>
  );
};

export default Contact;
