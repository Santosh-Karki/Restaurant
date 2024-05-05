import { useAuthContext } from '../hooks/useAuthContext'
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Enter from '../components/Enter';
import Review from "../components/Review";


const HomePage = () => {
  const { user } = useAuthContext()
  return (
    <div >
  <Navbar/>
      <main>
        <div>
          <Home />
        </div>

        <div >
          <Menu />
        </div>

        <div className='my-16'>
          <Enter/>
        </div>

        <div className='mb-8'>
          <Review />
        </div>

      </main>
      <Footer/>

     
    </div>
 )
}

export default HomePage;
