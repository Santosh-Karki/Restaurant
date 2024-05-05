import enter from "../assets/img/enter.jpg";


const Enter = () => {
    return ( 


<div className=" items-center justify-center flex flex-col gap-10">
    <div className="items-center justify-center gap-28 flex flex-row w-full h-full">

      <div className="w-1/3 h-full mt-10 items-center pt-24 justify-center ">
     <p className="text-3xl"> Join our Monthly Loyalty program to access all the delicious benefits and exclusive deals:</p>
     <ul className="list-disc text-2xl"><br></br>
        <li>Freebies and food offers</li><br></br>
        <li>A free birthday meal</li><br></br>
        <li>Free chips when you sign up</li><br></br>
     </ul>
     
 
  <button type="submit" className= "text-center w-24 my-12 mx-52 font-bold text-white bg-cyan-400 rounded-lg p-2 transition ease-in-out">SIGN UP</button>

      </div>

      <div className="hidden md:flex w-1/4 h-96 ">
          <img className=" rounded-xl aspect-square object-cover " src={enter} alt="img" />
      </div>

    </div>

    </div>


     );
}
 
export default Enter;