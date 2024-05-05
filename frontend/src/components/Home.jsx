import Button from "../layouts/Button";
import {Link} from 'react-router-dom';


const Home = () => {


  
  return (
    <>
    <div className=" min-h-screen flex flex-row justify-between items-center sm:bg-fill lg:px-32 px-5 bg-[url('./assets/img/home.jpg')] bg-left-bottom bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-rose-900 font-bold text-6xl">
        Delight in every bite
        </h1>
        <p className="font-semibold text-2xl text-rose-900">
        Where passion meets palate, every dish tells a story.<br></br> Come taste the difference and elevate your dining experience with us!"
        </p>
        <div className=" lg:pl-45">
          <Link to="/reservation">
          <Button  title="Reserve a Table"/>
          </Link>
         
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;



