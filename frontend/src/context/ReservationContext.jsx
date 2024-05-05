import { createContext, useReducer } from 'react'

export const ReservationContext = createContext()

export const reserveReducer = (state, action) => {
  switch (action.type) {
    case 'SET_RESERVATION':
      return { 
        model: action.payload 
      }
    case 'CREATE_RESERVATION':
      return { 
        model: [action.payload, ...state.model] 
      }
      case 'DELETE_RESERVATION':
        return { 
          model: state.model.filter(w => w._id !== action.payload._id) 
        }
    default:
      return state
  }
}

export const ReservationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reserveReducer, { 
    model: null
  })
  
  return (
    <ReservationContext.Provider value={{ ...state, dispatch }}>
      { children }
    </ReservationContext.Provider>
  )
}