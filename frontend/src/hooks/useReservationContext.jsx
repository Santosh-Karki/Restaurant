import { useContext } from "react"
import { ReservationContext } from '../context/ReservationContext'

 export const useReservationContext = () => {
  const context = useContext(ReservationContext)

  if(!context) {
    throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
  }

  return context
}

