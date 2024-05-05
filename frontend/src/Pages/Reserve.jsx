import { useEffect } from "react"
import { useReservationContext } from '../hooks/useReservationContext'
import { useAuthContext } from "../hooks/useAuthContext"



// components
import Reservation from "../components/Reservation"


const Reserve = ({modal}) => {

  const { model, dispatch } = useReservationContext()
  const {user} = useAuthContext()


  useEffect(() => {
    const fetchReservation = async () => {
      const response = await fetch('https://restaurant-1ek8.onrender.com/reservation/', {
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_RESERVATION', payload: json})
      }
    }

  
    if (user) {
      fetchReservation()
    }
  }, [dispatch, user])


  return (


   

    <div className="home">
      <div className="workouts">
        {model && model.map(work => (
          <Reservation modal={modal} work={work} key={work._id} />
        ))}
      </div>
      
    </div>
  )
}

export default Reserve;