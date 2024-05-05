
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext'
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Signup from './Pages/Signup';
import HomePage from './Pages/HomePage'
import Login from './Pages/Login';
import ReservationForm from './components/ReservationForm';
import Reserve from './Pages/Reserve';

const App = () => {
  const { user } = useAuthContext();
  return (
  
    <div>
    <BrowserRouter>
  
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/reservation" element={<ReservationForm/>}/>
        <Route path="/reserve" element={<Reserve/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
        <Route path="/login"  element={!user ? <Login /> : <Navigate to="/" />} />
        
      </Routes>
      </div>
      
    </BrowserRouter>

  </div> 

)
}

   



export default App;
