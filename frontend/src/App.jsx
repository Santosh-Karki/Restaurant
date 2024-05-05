
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext'
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Signup from './Pages/Signup';
import HomePage from './Pages/HomePage'
import Login from './Pages/Login';
import Reservation from './components/Reservation';
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


   
    {/* <BrowserRouter>
      <Nav />
      <div className="pages">
        <Routes>
          <Route 
            path="/"
            element={user ? <Reserve /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/login" 
            element={!user ? <Login /> : <Navigate to="/" />} 
          />
          <Route 
            path="/signup" 
            element={!user ? <Signup /> : <Navigate to="/" />} 
          />
        </Routes>
      </div>
    </BrowserRouter> */}




export default App;
