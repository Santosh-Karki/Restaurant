import React from "react";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";
import img6 from "../assets/img/img6.png";
import DishesCard from "../layouts/DishesCard";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Menu = () => {
  return (
    <>
    
    <div className="  pb-10 mx-10 flex flex-wrap flex-col 
    justify-center items-center lg:px-35 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
      Our Popular Menu
      </h1>

      <div className=" flex flex-wrap gap-12 justify-center">
        <DishesCard img={img1} title="Traditional Pizza" price="$20.99" />
        <DishesCard img={img2} title="Tuscan Salmon" price="$24.99" />
        <DishesCard img={img3} title="Chicken Sandwitch" price="$17.99" />
        <DishesCard img={img4} title="Chicken Burger " price="$19.99" />
        <DishesCard img={img5} title="Italian Style Spaghetti" price="$24.99" />
        <DishesCard img={img6} title="SeaFood Pasta" price="$27.99" />
      </div>
    </div>
   
    </>
  );
};

export default Menu;
