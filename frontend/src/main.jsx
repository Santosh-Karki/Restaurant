import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './../node_modules/bootstrap/dist/css//bootstrap.min.css'
import './index.css'
import { ReservationContextProvider } from './context/ReservationContext';
import { AuthContextProvider } from './context/AuthContext';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthContextProvider>
      <ReservationContextProvider>
        <App/>
      </ReservationContextProvider>
      </AuthContextProvider>
  </React.StrictMode>,
)
