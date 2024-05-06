import React, {useState} from "react";
import booking from "../assets/img/booking.jpg";
import "react-datepicker/dist/react-datepicker.css";
import { useReservationContext } from '../hooks/useReservationContext.jsx'
import { useAuthContext } from '../hooks/useAuthContext.jsx'
import Navbar from "./Navbar.jsx";
import Footer from './Footer.jsx';







const ReservationForm = () => {
  const { dispatch} = useReservationContext()
  const { user } = useAuthContext()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState('')
  const [date, setDate] = useState('')
  const [error, setError] = useState(null)
  const [modal, setModal] = useState(false)


  

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('Please, Log in before making any bookings.')
      
     
    }
    setModal(true)
 



    const model = {name, email, people, date}
    
    const response = await fetch('https://restaurant-o7bo.onrender.com/reservation', {
      method: 'POST',
      body: JSON.stringify(model),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    
    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setName('')
      setEmail('')
      setDate('')
      setPeople('')
      dispatch({type: 'CREATE_RESERVATION', payload: json})
     

    }
   

  }

  return (
   <>

   <Navbar/>

   
      <div className="min-h-screen items-center justify-center flex flex-col gap-10">
            <h1 className="font-bold text-5xl t "> Book a Table</h1>
            <p className="font-semibold text-gray-500"> </p>
      <div className="items-center justify-center gap-28 flex flex-row w-full h-full">
          <div className="w-1/4 h-96">
          <img className=" rounded-xl aspect-square object-cover " src={booking} alt="img" />
      </div>
      
      
        <div className="w-1/3 h-full mt-16">
        <form onSubmit={handleSubmit}>
              <input type="text" 
                     onChange={(e) => setName(e.target.value)} 
                     value={name} 
                     className="form-control mb-8 border-3"  
                     placeholder="Full Name"/>

              <input 
                  onChange={(e) => setEmail(e.target.value)} 
                  value={email}
                  type="email" 
                  className="form-control mb-8 border-3"  
                  placeholder="Email Address"/>


              <input 
              onChange={(e) => setPeople(e.target.value)}
              value={people}
              type="number"
              className="form-control mb-8 border-3"  
              placeholder="Party Size"/>

              <input 
              onChange={(e) => setDate(e.target.value)}
              value={date}
              type="datetime-local"
              className="form-control mb-8 border-3"  
              placeholder="Date"/>

             
              <button type="submit" className=" w-full bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-full h-12">Reserve</button>
            
              {error && <div className="error">{error}</div>}
      </form>
     </div>
   
     </div>
     
    
     </div>
   
   <Footer/>

     </>
         
        );
      };
export default ReservationForm;
