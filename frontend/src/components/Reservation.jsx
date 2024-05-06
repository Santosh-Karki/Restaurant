
import { useReservationContext } from '../hooks/useReservationContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { Navigate } from 'react-router-dom'
import Navbar from './Navbar'
import Button from '../layouts/Button'
import ReservationForm from './ReservationForm'


const Reservation = ({work, modal}) => {

  const { dispatch } = useReservationContext()
  const { user } = useAuthContext()

  const handleClick = async () => {
    if (!user) {
      return
    }
   
    
    const response = await fetch('https://restaurant-o7bo.onrender.com/reservation/' + work._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_RESERVATION', payload: json});
    
     
    }
    modal(false)
  }
 
  

  return (
    
<>

<div className="min-h-screen  py-px">

   
    <div className="flex flex-col gap-4 rounded-md shadow-2xl border-gray-500  w-6/12 mx-auto mt-72 py-8">
    <div className='text-center text-3xl font-extrabold px-auto'>
    <h1> Reservation</h1>
    </div>
   
   <div className='text-left pl-32 p-8 font-semibold bg-lime-100'>
    <h1> Reservation has been Confirmed.</h1>
    <p> The reservation confirmation has been sent to your email. </p>
   </div>
 
   <div className='flex flex-row text-left font-semibold gap-52 pl-32 p-8'>
   <div>
    <h1 className='mb-12 text-3xl'> Reservation Details</h1>
 
      <h4><strong>Name: </strong> {work.name}</h4>
      <p><strong>Email: </strong>{work.email}</p>
      <p><strong>People: </strong>{work.people}</p>
      <p><strong>Date: </strong>{work.date}</p>

      </div>
      <div className='flex flex-col justify-center gap-3 mt-16'>
        <button className='border-slate-400  text-center p-2 w-28 rounded-full text-white bg-sky-400 hover:bg-sky-600'> Modify </button>
  <button onClick={handleClick} className='border-slate-400  text-center p-2 rounded-full text-white bg-rose-400  hover:bg-rose-600'> 
  Cancel</button> 
    
      </div>

</div>
     
      
    
      

      


   

    </div>
    </div>




       

    </>
 
  )
}

export default Reservation;